import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PrologRule {
  ruleNumber: string;
  career: string;
  conditions: string[];
  source: string;
}

const careerNames: Record<string, string> = {
  software_development: "Software Development",
  data_analysis: "Data Analysis",
  cybersecurity: "Cybersecurity",
  network_engineering: "Network Engineering",
  ui_ux_design: "UI/UX Design",
  business_analysis: "Business Analysis",
  accounting_finance: "Accounting & Finance",
  digital_marketing: "Digital Marketing",
};

const sourceCodes: Record<string, string> = {
  "O*NET - Software Developers": "15-1252.00",
  "O*NET - Data Scientists": "15-2051.00",
  "O*NET - Information Security Analysts": "15-1212.00",
  "O*NET - Network and Computer Systems Administrators": "15-1244.00",
  "O*NET - Web and Digital Interface Designers": "15-1255.00",
  "O*NET - Management Analysts": "13-1111.00",
  "O*NET - Accountants and Auditors": "13-2011.00",
  "O*NET - Advertising and Promotions Managers": "11-2011.00",
};

const formatFactName = (fact: string) => {
  return fact
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const formatCareerName = (career: string) => {
  return careerNames[career] || formatFactName(career);
};

function Explanation() {
  const navigate = useNavigate();

  const [facts, setFacts] = useState<string[]>([]);
  const [rules, setRules] = useState<PrologRule[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    const storedFacts = [
      ...(JSON.parse(
        localStorage.getItem("career_selected_skills") || "[]"
      ) as string[]),
      ...(JSON.parse(
        localStorage.getItem("career_selected_interests") || "[]"
      ) as string[]),
      ...(JSON.parse(
        localStorage.getItem("career_selected_preferences") || "[]"
      ) as string[]),
    ];

    const uniqueFacts = [...new Set(storedFacts)];

    const storedRules = JSON.parse(
      localStorage.getItem("career_matched_rules") || "[]"
    ) as PrologRule[];

    const storedRecommendations = JSON.parse(
      localStorage.getItem("career_recommendations") || "[]"
    ) as string[];

    setFacts(uniqueFacts);
    setRules(storedRules);
    setRecommendations(storedRecommendations);
  }, []);

  const groupedRules = useMemo(() => {
    return rules.reduce<Record<string, PrologRule[]>>((groups, rule) => {
      if (!groups[rule.career]) {
        groups[rule.career] = [];
      }

      groups[rule.career].push(rule);
      return groups;
    }, {});
  }, [rules]);

  const uniqueSources = useMemo(() => {
    return [...new Set(rules.map((rule) => rule.source))];
  }, [rules]);

  const handleExport = () => {
    alert("Logic trace export feature is ready for implementation.");
  };

  return (
    <div className="min-h-screen bg-[#fff8f5] px-6 py-8 font-inter text-[#241713]">
      <div className="mx-auto max-w-4xl">

        {/* Top Label */}
        <div className="mb-2 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f6e9e3] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8c3515]">
            <span>⚙</span>
            Explanation Faculty • Deductive Reasoning Trace
            <span className="text-[#d85a27]">/ Rule-Based System</span>
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl font-semibold tracking-tight">
          REASONING
        </h1>

        <p className="mx-auto mt-1 max-w-xl text-center text-xs leading-5 text-[#7a6258]">
          Step-by-step logic deduction demonstrating how the expert system
          evaluated your satisfied facts against domain knowledge base rules.
        </p>

        {/* ===================================================== */}
        {/* STAGE 01 - USER FACTS */}
        {/* ===================================================== */}

        <section className="mt-7 rounded-xl border border-[#eaded8] bg-white p-4 shadow-sm">

          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-widest text-[#c74d1c]">
                ● Stage 01
              </p>

              <h2 className="mt-1 text-sm font-bold uppercase">
                User Facts
              </h2>
            </div>

            <span className="rounded-full bg-[#f7eee9] px-3 py-1 text-[9px] font-medium text-[#7b5c50]">
              {facts.length} facts in working memory
            </span>
          </div>

          <p className="mb-3 text-[10px] leading-4 text-[#806d65]">
            The inference engine queried your assessment inputs and
            successfully grounded the following premises in working memory.
          </p>

          {facts.length > 0 ? (
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
              {facts.map((fact) => (
                <div
                  key={fact}
                  className="flex items-center justify-between rounded-md border border-[#eaded8] bg-[#fffaf7] px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16836d] text-[8px] text-white">
                      ✓
                    </span>

                    <span className="truncate text-[9px] font-semibold text-[#49352d]">
                      {fact}
                    </span>
                  </div>

                  <span className="text-[8px] text-[#a18b81]">T</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-[#8a7065]">
              No assessment facts were found.
            </p>
          )}
        </section>

        {/* Arrow */}
        <div className="flex justify-center py-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3e6df] text-[#d85a27]">
            ↓
          </div>
        </div>

        {/* ===================================================== */}
        {/* STAGE 02 - RULES MATCHED */}
        {/* ===================================================== */}

        <section className="rounded-xl border border-[#eaded8] bg-white p-4 shadow-sm">

          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-widest text-[#c74d1c]">
                ● Stage 02
              </p>

              <h2 className="mt-1 text-sm font-bold uppercase">
                Rules Matched
              </h2>
            </div>

            <span className="rounded-full bg-[#f7eee9] px-3 py-1 text-[9px] font-medium text-[#7b5c50]">
              {rules.length} rules fired
            </span>
          </div>

          <p className="mb-4 text-[10px] leading-4 text-[#806d65]">
            Forward chaining matched the antecedents of the following rules
            against the current knowledge state.
          </p>

          {rules.length > 0 ? (
            <div className="space-y-5">

              {rules.map((rule) => (
                <div
                  key={rule.ruleNumber}
                  className="rounded-lg bg-[#fff5ed] p-4"
                >

                  {/* Rule header */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-[#f9d8c9] px-3 py-1 text-[9px] font-semibold text-[#a33b13]">
                      Rule: {rule.ruleNumber.toUpperCase()}
                    </span>

                    <span className="text-[9px] font-semibold text-[#8a6658]">
                      {formatCareerName(rule.career)}
                    </span>
                  </div>

                  {/* Conditions */}
                  <div className="space-y-2">

                    {rule.conditions.map((condition, index) => (
                      <div key={condition}>

                        <div className="mx-auto max-w-xs rounded-md border border-[#eaded8] bg-white px-4 py-2 text-center text-[9px] font-semibold text-[#49352d]">
                          {condition}
                        </div>

                        {index < rule.conditions.length - 1 && (
                          <div className="py-1 text-center">
                            <span className="rounded bg-[#c94b18] px-2 py-0.5 text-[7px] font-bold text-white">
                              AND
                            </span>
                          </div>
                        )}

                      </div>
                    ))}

                  </div>

                  <div className="mt-3 text-center text-[8px] font-medium text-[#16836d]">
                    ◉ Unification status: Complete (Satisfaction = T)
                  </div>

                </div>
              ))}

            </div>
          ) : (
            <p className="text-xs text-[#8a7065]">
              No matched rules were found.
            </p>
          )}
        </section>

        {/* Arrow */}
        <div className="flex justify-center py-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3e6df] text-[#d85a27]">
            ↓
          </div>
        </div>

        {/* ===================================================== */}
        {/* STAGE 03 - CONCLUSION */}
        {/* ===================================================== */}

        <section className="rounded-xl border border-[#eaded8] bg-white p-4 shadow-sm">

          <div className="mb-3">
            <p className="text-[9px] font-semibold uppercase tracking-widest text-[#c74d1c]">
              ● Stage 03
            </p>

            <h2 className="mt-1 text-sm font-bold uppercase">
              Conclusion
            </h2>
          </div>

          {recommendations.length > 0 ? (
            <div className="space-y-3">

              {recommendations.map((career) => {

                const careerRules = groupedRules[career] || [];

                return (
                  <div
                    key={career}
                    className="rounded-lg border-l-4 border-[#d94d16] bg-[#fff1e9] p-4"
                  >

                    <div className="flex items-start gap-3">

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c84b17] text-white">
                        <span className="text-sm">⌘</span>
                      </div>

                      <div className="flex-1">

                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-bold uppercase text-[#b64213]">
                            {formatCareerName(career)}
                          </h3>

                          <span className="rounded-full bg-[#d7f1e8] px-2 py-1 text-[8px] font-semibold text-[#16836d]">
                            {careerRules.length} matched rule
                            {careerRules.length !== 1 ? "s" : ""}
                          </span>
                        </div>

                        <p className="mt-2 text-[9px] leading-4 text-[#735b51]">
                          The expert system identified{" "}
                          <strong>{formatCareerName(career)}</strong>{" "}
                          because the conditions of the matched rule
                          {careerRules.length !== 1 ? "s were" : " was"}{" "}
                          satisfied by the user's selected facts.
                        </p>

                        {careerRules.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {careerRules.map((rule) => (
                              <span
                                key={rule.ruleNumber}
                                className="rounded bg-white px-2 py-1 text-[8px] font-semibold text-[#8c3515]"
                              >
                                {rule.ruleNumber.toUpperCase()}
                              </span>
                            ))}
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          ) : (
            <p className="text-xs text-[#8a7065]">
              No recommendation was generated.
            </p>
          )}
        </section>

        {/* Arrow */}
        <div className="flex justify-center py-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3e6df] text-[#d85a27]">
            ↓
          </div>
        </div>

        {/* ===================================================== */}
        {/* STAGE 04 - SOURCE */}
        {/* ===================================================== */}

        <section className="rounded-xl border border-[#eaded8] bg-white p-4 shadow-sm">

          <div className="mb-3">
            <p className="text-[9px] font-semibold uppercase tracking-widest text-[#c74d1c]">
              ● Stage 04
            </p>

            <h2 className="mt-1 text-sm font-bold uppercase">
              Source & Ontology Reference
            </h2>
          </div>

          {uniqueSources.length > 0 ? (
            <div className="space-y-2">

              {uniqueSources.map((source) => (
                <div
                  key={source}
                  className="rounded-lg bg-[#fff5ed] p-3"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-2">
                      <span className="text-sm">▣</span>

                      <div>
                        <p className="text-[10px] font-semibold text-[#5c4035]">
                          {source}
                        </p>

                        <p className="mt-1 text-[8px] text-[#806d65]">
                          Validated against occupational classification
                          criteria.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">

                      <span className="rounded bg-white px-2 py-1 text-[8px] text-[#735b51]">
                        O*NET Code:{" "}
                        <strong>
                          {sourceCodes[source] || "Not specified"}
                        </strong>
                      </span>

                      <span className="rounded bg-white px-2 py-1 text-[8px] text-[#735b51]">
                        Taxonomy: SOC 2018
                      </span>

                    </div>

                  </div>
                </div>
              ))}

            </div>
          ) : (
            <p className="text-xs text-[#8a7065]">
              No source information was found.
            </p>
          )}
        </section>

        {/* ===================================================== */}
        {/* BUTTONS */}
        {/* ===================================================== */}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

          <button
            onClick={() => navigate("/recommendations")}
            className="rounded-md bg-[#f3e8e2] px-4 py-2 text-[10px] font-semibold text-[#49352d] transition hover:bg-[#eadbd3]"
          >
            ← Back to Recommendations
          </button>

          <button
            onClick={handleExport}
            className="rounded-md border-2 border-[#241713] bg-white px-4 py-2 text-[10px] font-semibold text-[#241713] transition hover:bg-[#f8f0ec]"
          >
            ▣ Export Logic Trace
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("career_selected_skills");
              localStorage.removeItem("career_selected_interests");
              localStorage.removeItem("career_selected_preferences");
              localStorage.removeItem("career_recommendations");
              localStorage.removeItem("career_matched_rules");

              navigate("/skills");
            }}
            className="rounded-md bg-[#c94b18] px-4 py-2 text-[10px] font-semibold text-white transition hover:bg-[#ad3f12]"
          >
            ↻ Start New Assessment
          </button>

        </div>

      </div>
    </div>
  );
}

export default Explanation;