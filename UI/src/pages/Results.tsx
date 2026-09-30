import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Career = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
};

const careers: Career[] = [
  {
    id: "software_development",
    title: "Software Development",
    description:
      "Designing, developing, testing, and maintaining software applications and systems.",
    icon: "code",
    color: "#c2410c",
  },
  {
    id: "data_analysis",
    title: "Data Analysis",
    description:
      "Working with data, identifying patterns, analysing information, and producing useful insights.",
    icon: "analytics",
    color: "#006a63",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Protecting systems, networks, applications, and information from security threats.",
    icon: "security",
    color: "#814433",
  },
  {
    id: "network_engineering",
    title: "Network Engineering",
    description:
      "Designing, maintaining, and troubleshooting computer networks and communication systems.",
    icon: "hub",
    color: "#006a63",
  },
  {
    id: "ui_ux_design",
    title: "UI/UX Design",
    description:
      "Designing user interfaces and experiences that are useful, accessible, and engaging.",
    icon: "palette",
    color: "#c2410c",
  },
  {
    id: "business_analysis",
    title: "Business Analysis",
    description:
      "Analysing business needs, processes, and information to support organisational decisions.",
    icon: "business_center",
    color: "#814433",
  },
  {
    id: "accounting_finance",
    title: "Accounting & Finance",
    description:
      "Working with financial information, accounting records, analysis, and financial processes.",
    icon: "account_balance",
    color: "#006a63",
  },
  {
    id: "digital_marketing",
    title: "Digital Marketing",
    description:
      "Using digital channels, communication, creativity, and marketing activities to reach audiences.",
    icon: "campaign",
    color: "#c2410c",
  },
];

const skillLabels: Record<string, string> = {
  programming_skill: "Programming",
  mathematics_skill: "Mathematics",
  problem_solving_skill: "Problem Solving",
  analytical_thinking: "Analytical Thinking",
  communication_skill: "Communication",
  creativity_skill: "Creativity",
  logical_thinking: "Logical Thinking",
  attention_to_detail: "Attention to Detail",
  teamwork_skill: "Teamwork",
  technical_skill: "Technical Skills",
};

const interestLabels: Record<string, string> = {
  technology_interest: "Technology",
  data_interest: "Data",
  cybersecurity_interest: "Cybersecurity",
  networking_interest: "Networking",
  design_interest: "Design",
  business_interest: "Business",
  finance_interest: "Finance",
  marketing_interest: "Marketing",
  research_interest: "Research",
  user_experience_interest: "User Experience",
};

const preferenceLabels: Record<string, string> = {
  technical_problem_solving_preference: "Technical Problem Solving",
  data_work_preference: "Working with Data",
  creative_work_preference: "Creative Work",
  people_interaction_preference: "People Interaction",
  computer_work_preference: "Computer-Based Work",
  independent_work_preference: "Independent Work",
  teamwork_preference: "Teamwork",
  information_analysis_preference: "Information Analysis",
  detail_oriented_work_preference: "Detail-Oriented Work",
  communication_work_preference: "Communication-Based Work",
};

function readLocalStorageArray(key: string): string[] {
  try {
    const saved = localStorage.getItem(key);

    if (!saved) {
      return [];
    }

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function Results() {
  const navigate = useNavigate();

  const [skills, setSkills] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [preferences, setPreferences] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    const savedSkills = readLocalStorageArray(
      "career_selected_skills"
    );

    const savedInterests = readLocalStorageArray(
      "career_selected_interests"
    );

    const savedPreferences = readLocalStorageArray(
      "career_selected_preferences"
    );

    setSkills(savedSkills);
    setInterests(savedInterests);
    setPreferences(savedPreferences);

    const allFacts = [
      ...savedSkills,
      ...savedInterests,
      ...savedPreferences,
    ];

    const has = (fact: string) => allFacts.includes(fact);

    const matched: string[] = [];

    // =====================================================
    // SOFTWARE DEVELOPMENT
    // =====================================================

    // R01
    if (
      has("programming_skill") &&
      has("problem_solving_skill") &&
      has("technology_interest")
    ) {
      matched.push("software_development");
    }

    // R02
    if (
      has("programming_skill") &&
      has("logical_thinking") &&
      has("computer_work_preference")
    ) {
      if (!matched.includes("software_development")) {
        matched.push("software_development");
      }
    }

    // R03
    if (
      has("technical_skill") &&
      has("programming_skill") &&
      has("technical_problem_solving_preference")
    ) {
      if (!matched.includes("software_development")) {
        matched.push("software_development");
      }
    }

    // =====================================================
    // DATA ANALYSIS
    // =====================================================

    // R04
    if (
      has("mathematics_skill") &&
      has("analytical_thinking") &&
      has("data_interest")
    ) {
      matched.push("data_analysis");
    }

    // R05
    if (
      has("analytical_thinking") &&
      has("attention_to_detail") &&
      has("data_work_preference")
    ) {
      if (!matched.includes("data_analysis")) {
        matched.push("data_analysis");
      }
    }

    // R06
    if (
      has("mathematics_skill") &&
      has("information_analysis_preference") &&
      has("data_interest")
    ) {
      if (!matched.includes("data_analysis")) {
        matched.push("data_analysis");
      }
    }

    // =====================================================
    // CYBERSECURITY
    // =====================================================

    // R07
    if (
      has("cybersecurity_interest") &&
      has("logical_thinking") &&
      has("problem_solving_skill")
    ) {
      matched.push("cybersecurity");
    }

    // R08
    if (
      has("technology_interest") &&
      has("cybersecurity_interest") &&
      has("technical_skill")
    ) {
      if (!matched.includes("cybersecurity")) {
        matched.push("cybersecurity");
      }
    }

    // R09
    if (
      has("attention_to_detail") &&
      has("cybersecurity_interest") &&
      has("technical_problem_solving_preference")
    ) {
      if (!matched.includes("cybersecurity")) {
        matched.push("cybersecurity");
      }
    }

    // =====================================================
    // NETWORK ENGINEERING
    // =====================================================

    // R10
    if (
      has("networking_interest") &&
      has("technical_skill") &&
      has("problem_solving_skill")
    ) {
      matched.push("network_engineering");
    }

    // R11
    if (
      has("networking_interest") &&
      has("technology_interest") &&
      has("technical_problem_solving_preference")
    ) {
      if (!matched.includes("network_engineering")) {
        matched.push("network_engineering");
      }
    }

    // R12
    if (
      has("technical_skill") &&
      has("computer_work_preference") &&
      has("networking_interest")
    ) {
      if (!matched.includes("network_engineering")) {
        matched.push("network_engineering");
      }
    }

    // =====================================================
    // UI / UX DESIGN
    // =====================================================

    // R13
    if (
      has("creativity_skill") &&
      has("design_interest") &&
      has("creative_work_preference")
    ) {
      matched.push("ui_ux_design");
    }

    // R14
    if (
      has("creativity_skill") &&
      has("user_experience_interest") &&
      has("technology_interest")
    ) {
      if (!matched.includes("ui_ux_design")) {
        matched.push("ui_ux_design");
      }
    }

    // R15
    if (
      has("communication_skill") &&
      has("design_interest") &&
      has("creative_work_preference")
    ) {
      if (!matched.includes("ui_ux_design")) {
        matched.push("ui_ux_design");
      }
    }

    // =====================================================
    // BUSINESS ANALYSIS
    // =====================================================

    // R16
    if (
      has("analytical_thinking") &&
      has("business_interest") &&
      has("problem_solving_skill")
    ) {
      matched.push("business_analysis");
    }

    // R17
    if (
      has("communication_skill") &&
      has("business_interest") &&
      has("information_analysis_preference")
    ) {
      if (!matched.includes("business_analysis")) {
        matched.push("business_analysis");
      }
    }

    // R18
    if (
      has("analytical_thinking") &&
      has("communication_skill") &&
      has("business_interest")
    ) {
      if (!matched.includes("business_analysis")) {
        matched.push("business_analysis");
      }
    }

    // =====================================================
    // ACCOUNTING & FINANCE
    // =====================================================

    // R19
    if (
      has("mathematics_skill") &&
      has("finance_interest") &&
      has("attention_to_detail")
    ) {
      matched.push("accounting_finance");
    }

    // R20
    if (
      has("analytical_thinking") &&
      has("finance_interest") &&
      has("information_analysis_preference")
    ) {
      if (!matched.includes("accounting_finance")) {
        matched.push("accounting_finance");
      }
    }

    // R21
    if (
      has("mathematics_skill") &&
      has("attention_to_detail") &&
      has("finance_interest")
    ) {
      if (!matched.includes("accounting_finance")) {
        matched.push("accounting_finance");
      }
    }

    // =====================================================
    // DIGITAL MARKETING
    // =====================================================

    // R22
    if (
      has("creativity_skill") &&
      has("marketing_interest") &&
      has("communication_work_preference")
    ) {
      matched.push("digital_marketing");
    }

    // R23
    if (
      has("communication_skill") &&
      has("marketing_interest") &&
      has("people_interaction_preference")
    ) {
      if (!matched.includes("digital_marketing")) {
        matched.push("digital_marketing");
      }
    }

    // R24
    if (
      has("creativity_skill") &&
      has("communication_skill") &&
      has("marketing_interest")
    ) {
      if (!matched.includes("digital_marketing")) {
        matched.push("digital_marketing");
      }
    }

    setRecommendations(matched);
  }, []);

  const getCareer = (id: string) =>
    careers.find((career) => career.id === id);

  const handleRetake = () => {
    localStorage.removeItem("career_selected_skills");
    localStorage.removeItem("career_selected_interests");
    localStorage.removeItem("career_selected_preferences");

    navigate("/skills");
  };

  const getEvidence = (careerId: string) => {
    const evidence = {
      skills: [] as string[],
      interests: [] as string[],
      preferences: [] as string[],
    };

    const careerEvidence: Record<
      string,
      {
        skills: string[];
        interests: string[];
        preferences: string[];
      }
    > = {
      software_development: {
        skills: [
          "programming_skill",
          "problem_solving_skill",
          "logical_thinking",
          "technical_skill",
        ],
        interests: ["technology_interest"],
        preferences: [
          "computer_work_preference",
          "technical_problem_solving_preference",
        ],
      },

      data_analysis: {
        skills: [
          "mathematics_skill",
          "analytical_thinking",
          "attention_to_detail",
        ],
        interests: ["data_interest"],
        preferences: [
          "data_work_preference",
          "information_analysis_preference",
        ],
      },

      cybersecurity: {
        skills: [
          "logical_thinking",
          "problem_solving_skill",
          "attention_to_detail",
          "technical_skill",
        ],
        interests: [
          "cybersecurity_interest",
          "technology_interest",
        ],
        preferences: [
          "technical_problem_solving_preference",
        ],
      },

      network_engineering: {
        skills: [
          "technical_skill",
          "problem_solving_skill",
        ],
        interests: [
          "networking_interest",
          "technology_interest",
        ],
        preferences: [
          "technical_problem_solving_preference",
          "computer_work_preference",
        ],
      },

      ui_ux_design: {
        skills: [
          "creativity_skill",
          "communication_skill",
        ],
        interests: [
          "design_interest",
          "user_experience_interest",
        ],
        preferences: [
          "creative_work_preference",
        ],
      },

      business_analysis: {
        skills: [
          "analytical_thinking",
          "problem_solving_skill",
          "communication_skill",
        ],
        interests: ["business_interest"],
        preferences: [
          "information_analysis_preference",
        ],
      },

      accounting_finance: {
        skills: [
          "mathematics_skill",
          "analytical_thinking",
          "attention_to_detail",
        ],
        interests: ["finance_interest"],
        preferences: [
          "information_analysis_preference",
        ],
      },

      digital_marketing: {
        skills: [
          "creativity_skill",
          "communication_skill",
        ],
        interests: ["marketing_interest"],
        preferences: [
          "communication_work_preference",
          "people_interaction_preference",
        ],
      },
    };

    const config = careerEvidence[careerId];

    if (!config) {
      return evidence;
    }

    evidence.skills = config.skills.filter((item) =>
      skills.includes(item)
    );

    evidence.interests = config.interests.filter((item) =>
      interests.includes(item)
    );

    evidence.preferences = config.preferences.filter((item) =>
      preferences.includes(item)
    );

    return evidence;
  };

  return (
    <main className="min-h-screen bg-[#fff8f5] pt-20 pb-14">

      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* ===================================================== */}
        {/* ASSESSMENT HEADER */}
        {/* ===================================================== */}

        <div className="mb-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="flex items-center gap-2">

                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c2410c] text-xs font-bold text-white">
                  ✓
                </span>

                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c2410c]">
                  Career Assessment
                </p>

              </div>

              <p className="mt-1.5 pl-9 text-xs text-[#806a61]">
                Assessment complete · Expert system results
              </p>

            </div>


            <div className="flex items-center gap-2 self-start sm:self-auto">

              <span className="flex items-center gap-1.5 rounded-full bg-[#e6f4f1] px-3 py-1.5 text-xs font-bold text-[#006a63]">

                <span className="material-symbols-outlined text-[15px]">
                  check_circle
                </span>

                Complete

              </span>

              <span className="text-xs font-semibold text-[#806a61]">
                100%
              </span>

            </div>

          </div>


          <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-[#eadbd4]">

            <div className="h-full w-full rounded-full bg-[#c2410c]" />

          </div>

        </div>


        {/* ===================================================== */}
        {/* MAIN INTRO */}
        {/* ===================================================== */}

        <section className="mb-10 text-center">

          <div className="mb-2 flex items-center justify-center gap-2">

            <span className="material-symbols-outlined text-[18px] text-[#c2410c]">
              account_tree
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#8a5543]">
              Expert System Results
            </span>

          </div>


          <h1 className="font-display text-3xl font-bold tracking-tight text-[#1c1917] sm:text-4xl">
            Your Career Recommendations
          </h1>


          <p className="mt-2 text-sm text-[#6b554d]">
            Career areas matched by the current rule set.
          </p>


          {/* CENTERED RESULT BOX */}

          <div className="mx-auto mt-5 flex w-fit items-center gap-3 rounded-xl border border-[#eaded8] bg-white px-6 py-3 shadow-[0_3px_14px_rgba(61,35,25,0.05)]">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff0e9] text-[#c2410c]">

              <span className="material-symbols-outlined text-[20px]">
                auto_awesome
              </span>

            </div>


            <div className="text-left">

              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#806a61]">
                Matches Found
              </p>

              <p className="font-display text-xl font-bold text-[#1c1917]">
                {recommendations.length}
              </p>

            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* RECOMMENDED CAREER AREAS */}
        {/* ===================================================== */}

        {recommendations.length > 0 ? (

          <section>

            {/* SECTION TITLE */}

            <div className="mb-5 flex items-center justify-between">

              <div>

                <h2 className="font-display text-2xl font-bold tracking-tight text-[#241c19]">
                  Recommended Career Areas
                </h2>

              </div>


              <div className="flex w-fit items-center gap-2 rounded-full border border-[#eaded8] bg-white px-3.5 py-2 shadow-[0_2px_10px_rgba(61,35,25,0.04)]">

                <span className="material-symbols-outlined text-[16px] text-[#c2410c]">
                  check_circle
                </span>

                <span className="text-xs font-semibold text-[#59413a]">
                  {recommendations.length}{" "}
                  {recommendations.length === 1
                    ? "result"
                    : "results"}
                </span>

              </div>

            </div>


            {/* CAREER CARDS */}

            <div className="space-y-4">

              {recommendations.map((careerId, index) => {

                const career = getCareer(careerId);

                if (!career) return null;

                const evidence = getEvidence(career.id);

                const totalEvidence =
                  evidence.skills.length +
                  evidence.interests.length +
                  evidence.preferences.length;

                return (

                  <article
                    key={career.id}
                    className="overflow-hidden rounded-2xl border border-[#e7d9d2] bg-white shadow-[0_5px_22px_rgba(61,35,25,0.055)] transition-all duration-200 hover:border-[#d9c0b5] hover:shadow-[0_8px_28px_rgba(61,35,25,0.08)]"
                  >

                    {/* TOP ACCENT */}

                    <div
                      className="h-1"
                      style={{
                        backgroundColor: career.color,
                      }}
                    />


                    <div className="p-5 sm:p-6">

                      {/* CAREER HEADER */}

                      <div className="flex items-start gap-4">

                        {/* ICON */}

                        <div
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                          style={{
                            backgroundColor: `${career.color}12`,
                            color: career.color,
                          }}
                        >

                          <span className="material-symbols-outlined text-[28px]">
                            {career.icon}
                          </span>

                        </div>


                        {/* CAREER DETAILS */}

                        <div className="min-w-0 flex-1">

                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                              <div className="mb-1 flex items-center gap-2">

                                <span
                                  className="text-[10px] font-bold uppercase tracking-[0.13em]"
                                  style={{
                                    color: career.color,
                                  }}
                                >
                                  Match{" "}
                                  {String(index + 1).padStart(
                                    2,
                                    "0"
                                  )}
                                </span>


                                <span className="h-1 w-1 rounded-full bg-[#cfc0ba]" />


                                <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#99857d]">
                                  Career Area
                                </span>

                              </div>


                              <h3 className="font-display text-xl font-bold tracking-tight text-[#241c19] sm:text-2xl">
                                {career.title}
                              </h3>

                            </div>


                            <div
                              className="hidden h-9 w-9 items-center justify-center rounded-lg sm:flex"
                              style={{
                                backgroundColor: `${career.color}10`,
                                color: career.color,
                              }}
                            >

                              <span className="material-symbols-outlined text-[19px]">
                                arrow_outward
                              </span>

                            </div>

                          </div>


                          {/* DESCRIPTION */}

                          <p className="mt-2.5 max-w-3xl text-sm leading-6 text-[#6f5a52]">
                            {career.description}
                          </p>

                        </div>

                      </div>


                      {/* MATCHING EVIDENCE */}

                      <div className="mt-6 border-t border-[#eee3de] pt-5">

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                          <div className="flex items-center gap-2.5">

                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0e9] text-[#c2410c]">

                              <span className="material-symbols-outlined text-[17px]">
                                rule
                              </span>

                            </div>


                            <div>

                              <p className="text-sm font-bold text-[#3f302b]">
                                Matching Evidence
                              </p>

                              <p className="text-[10px] text-[#8b7770]">
                                Facts that satisfied the career rules
                              </p>

                            </div>

                          </div>


                          <span className="w-fit rounded-full bg-[#f7eee9] px-2.5 py-1 text-[10px] font-bold text-[#765b50]">
                            {totalEvidence} matched
                          </span>

                        </div>


                        {/* EVIDENCE GROUPS */}

                        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">

                          {/* SKILLS */}

                          <div className="rounded-xl border border-[#eee3de] bg-[#fdf9f7] p-3.5">

                            <div className="mb-2.5 flex items-center gap-2">

                              <span className="material-symbols-outlined text-[16px] text-[#c2410c]">
                                psychology
                              </span>

                              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#765b50]">
                                Skills
                              </span>

                            </div>


                            <div className="flex flex-wrap gap-1.5">

                              {evidence.skills.length > 0 ? (

                                evidence.skills.map((skill) => (

                                  <span
                                    key={skill}
                                    className="rounded-md border border-[#e7d9d2] bg-white px-2 py-1.5 text-[10px] font-semibold leading-none text-[#59413a]"
                                  >
                                    {skillLabels[skill]}
                                  </span>

                                ))

                              ) : (

                                <span className="text-[10px] text-[#a18e86]">
                                  No direct match
                                </span>

                              )}

                            </div>

                          </div>


                          {/* INTERESTS */}

                          <div className="rounded-xl border border-[#f2d4c7] bg-[#fffaf7] p-3.5">

                            <div className="mb-2.5 flex items-center gap-2">

                              <span className="material-symbols-outlined text-[16px] text-[#c2410c]">
                                favorite
                              </span>

                              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#9a3412]">
                                Interests
                              </span>

                            </div>


                            <div className="flex flex-wrap gap-1.5">

                              {evidence.interests.length > 0 ? (

                                evidence.interests.map((interest) => (

                                  <span
                                    key={interest}
                                    className="rounded-md border border-[#f2d4c7] bg-[#fff0e9] px-2 py-1.5 text-[10px] font-semibold leading-none text-[#9a3412]"
                                  >
                                    {interestLabels[interest]}
                                  </span>

                                ))

                              ) : (

                                <span className="text-[10px] text-[#a18e86]">
                                  No direct match
                                </span>

                              )}

                            </div>

                          </div>


                          {/* WORK PREFERENCES */}

                          <div className="rounded-xl border border-[#d9e9e5] bg-[#f7fbfa] p-3.5">

                            <div className="mb-2.5 flex items-center gap-2">

                              <span className="material-symbols-outlined text-[16px] text-[#006a63]">
                                tune
                              </span>

                              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#006a63]">
                                Work Preferences
                              </span>

                            </div>


                            <div className="flex flex-wrap gap-1.5">

                              {evidence.preferences.length > 0 ? (

                                evidence.preferences.map((preference) => (

                                  <span
                                    key={preference}
                                    className="rounded-md border border-[#d7e7e3] bg-white px-2 py-1.5 text-[10px] font-semibold leading-none text-[#006a63]"
                                  >
                                    {preferenceLabels[preference]}
                                  </span>

                                ))

                              ) : (

                                <span className="text-[10px] text-[#78918d]">
                                  No direct match
                                </span>

                              )}

                            </div>

                          </div>

                        </div>

                      </div>


                      {/* RULE STATUS */}

                      <div className="mt-4 flex items-start gap-2 rounded-lg bg-[#faf6f3] px-3.5 py-2.5">

                        <span className="material-symbols-outlined mt-0.5 text-[16px] text-[#c2410c]">
                          account_tree
                        </span>

                        <p className="text-[10px] leading-4 text-[#765b50]">

                          <span className="font-bold text-[#59413a]">
                            Rule-based match:
                          </span>{" "}

                          This career area was identified because the
                          selected facts satisfy one or more rules in
                          the expert system.

                        </p>

                      </div>

                    </div>

                  </article>

                );
              })}

            </div>

          </section>

        ) : (

          /* ===================================================== */
          /* NO MATCH */
          /* ===================================================== */

          <section className="rounded-2xl border border-[#eaded8] bg-white px-6 py-12 text-center shadow-[0_4px_18px_rgba(61,35,25,0.04)]">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0e9] text-[#c2410c]">

              <span className="material-symbols-outlined text-[27px]">
                search_off
              </span>

            </div>


            <h2 className="mt-4 font-display text-xl font-bold text-[#241c19]">
              No Direct Rule Match Found
            </h2>


            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#725e56]">
              The selected facts did not satisfy any of the current
              career rules. Return to the assessment and choose
              additional skills, interests, or work preferences.
            </p>


            <button
              type="button"
              onClick={handleRetake}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#c2410c] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#9a3412] hover:shadow-md"
            >

              <span className="material-symbols-outlined text-[18px]">
                restart_alt
              </span>

              Retake Assessment

            </button>

          </section>

        )}


        {/* ===================================================== */}
        {/* EXPLANATION CTA */}
        {/* ===================================================== */}

        <section className="mt-8 overflow-hidden rounded-2xl border border-[#eaded8] bg-white shadow-[0_4px_18px_rgba(61,35,25,0.04)]">

          <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

            <div className="flex items-start gap-3.5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0e9] text-[#c2410c]">

                <span className="material-symbols-outlined">
                  account_tree
                </span>

              </div>


              <div>

                <h2 className="font-display text-base font-bold text-[#241c19]">
                  Understand the reasoning
                </h2>

                <p className="mt-1 max-w-xl text-xs leading-5 text-[#725e56]">
                  View the facts, rules, and inference steps used to
                  derive these career recommendations.
                </p>

              </div>

            </div>


            <button
              type="button"
              onClick={() => navigate("/explanation")}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#c2410c] px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#9a3412] hover:shadow-md"
            >

              View Explanation

              <span className="material-symbols-outlined text-[17px]">
                arrow_forward
              </span>

            </button>

          </div>

        </section>


        {/* ===================================================== */}
        {/* BOTTOM ACTIONS */}
        {/* ===================================================== */}

        <div className="mt-6 flex flex-col gap-3 border-t border-[#eadbd4] pt-6 sm:flex-row sm:items-center sm:justify-between">

          <button
            type="button"
            onClick={handleRetake}
            className="group inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-[#59413a] transition-colors hover:bg-[#f4e8e3]"
          >

            <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:-rotate-45">
              restart_alt
            </span>

            Retake Assessment

          </button>


          <button
            type="button"
            onClick={() => navigate("/explanation")}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#c2410c] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#9a3412] hover:shadow-md"
          >

            Continue to Explanation

            <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-0.5">
              arrow_forward
            </span>

          </button>

        </div>

      </div>

    </main>
  );
}

export default Results;