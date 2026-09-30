const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");
const path = require("path");

const app = express();
const PORT = 5000;

// ============================================================
// MIDDLEWARE
// ============================================================

app.use(cors());
app.use(express.json());

// ============================================================
// PROLOG FILE PATH
// ============================================================

const prologFile = path.join(
  __dirname,
  "..",
  "Prolog",
  "career_expert.pl"
);

// ============================================================
// BASIC TEST ROUTE
// ============================================================

app.get("/", (req, res) => {
  res.json({
    message: "Career Guidance Expert System Backend is running!",
  });
});

// ============================================================
// PROLOG RECOMMENDATION API
// ============================================================

app.post("/api/recommend", (req, res) => {
  const { facts } = req.body;

  // Check whether facts were provided
  if (!Array.isArray(facts)) {
    return res.status(400).json({
      success: false,
      message: "facts must be provided as an array.",
    });
  }

  // ----------------------------------------------------------
  // Validate facts before sending them to Prolog
  // ----------------------------------------------------------

  const validFactPattern = /^[a-z_]+$/;

  for (const fact of facts) {
    if (typeof fact !== "string" || !validFactPattern.test(fact)) {
      return res.status(400).json({
        success: false,
        message: `Invalid fact: ${fact}`,
      });
    }
  }

  // Remove duplicate facts
  const uniqueFacts = [...new Set(facts)];

  // ----------------------------------------------------------
  // Create Prolog goal
  // ----------------------------------------------------------

  const factCommands = uniqueFacts
    .map((fact) => `add_fact(${fact})`)
    .join(", ");

  const prologGoal = `
    consult('${prologFile.replace(/\\/g, "/")}'),
    clear_system,
    ${factCommands ? `${factCommands},` : ""}
    forward_chain,
    findall(Career, derived_career(Career), Careers),
    findall(
      rule(RuleNumber, Career, Conditions, Source),
      (
        career_rule(RuleNumber, Career, Conditions, Source),
        conditions_satisfied_from_user(Conditions)
      ),
      Rules
    ),
    format("CAREERS=~q~n", [Careers]),
    format("RULES=~q~n", [Rules]),
    halt.
  `;

  // ----------------------------------------------------------
  // Start SWI-Prolog
  // ----------------------------------------------------------

  const prolog = spawn("swipl", ["-q", "-g", prologGoal]);

  let output = "";
  let errorOutput = "";

  // ----------------------------------------------------------
  // Receive Prolog output
  // ----------------------------------------------------------

  prolog.stdout.on("data", (data) => {
    output += data.toString();
  });

  prolog.stderr.on("data", (data) => {
    errorOutput += data.toString();
  });

  // ----------------------------------------------------------
  // Prolog process finished
  // ----------------------------------------------------------

  prolog.on("close", (code) => {
    if (code !== 0) {
      console.error("Prolog error:", errorOutput);

      return res.status(500).json({
        success: false,
        message: "Prolog execution failed.",
        error: errorOutput,
      });
    }

    // --------------------------------------------------------
    // Extract career results
    // --------------------------------------------------------

    const careersMatch = output.match(/CAREERS=(.*)/);

    const rulesMatch = output.match(/RULES=(.*)/);

    let careers = [];
    let rules = [];

    if (careersMatch) {
      try {
        careers = parsePrologList(careersMatch[1].trim());
      } catch (error) {
        console.error("Career parsing error:", error);
      }
    }

    if (rulesMatch) {
      try {
        rules = parseRuleList(rulesMatch[1].trim());
      } catch (error) {
        console.error("Rule parsing error:", error);
      }
    }

    return res.json({
      success: true,
      facts: uniqueFacts,
      recommendations: careers,
      rules,
    });
  });
});

// ============================================================
// PROLOG LIST PARSER
// ============================================================

function parsePrologList(value) {
  if (!value || value === "[]") {
    return [];
  }

  const cleaned = value
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .trim();

  if (!cleaned) {
    return [];
  }

  return cleaned
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

// ============================================================
// PROLOG RULE LIST PARSER
// ============================================================

function parseRuleList(value) {
  if (!value || value === "[]") {
    return [];
  }

  const cleaned = value
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .trim();

  if (!cleaned) {
    return [];
  }

  const ruleMatches = cleaned.match(
    /rule\(([^,]+),\s*([^,]+),\s*(\[[^\]]*\]),\s*'([^']*)'\)/g
  );

  if (!ruleMatches) {
    return [];
  }

  return ruleMatches.map((ruleText) => {
    const match = ruleText.match(
      /rule\(([^,]+),\s*([^,]+),\s*(\[[^\]]*\]),\s*'([^']*)'\)/
    );

    if (!match) {
      return null;
    }

    return {
      ruleNumber: match[1].trim(),
      career: match[2].trim(),
      conditions: parsePrologList(match[3]),
      source: match[4].trim(),
    };
  }).filter(Boolean);
}

// ============================================================
// START SERVER
// ============================================================

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});