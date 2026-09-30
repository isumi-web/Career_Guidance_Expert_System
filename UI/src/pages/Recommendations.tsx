import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Career = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  color: "primary" | "secondary" | "tertiary";
};

type RecommendationResponse = {
  success: boolean;
  facts: string[];
  recommendations: string[];
  message?: string;
};

const careers: Career[] = [
  {
    id: "software_development",
    title: "Software Development",
    category: "Technology & Programming",
    description:
      "Suitable for students interested in programming, technology, logical thinking, and solving technical problems.",
    icon: "code",
    color: "primary",
  },
  {
    id: "data_analysis",
    title: "Data Analysis",
    category: "Analytics & Data",
    description:
      "Suitable for students interested in mathematics, analytical thinking, data, and information analysis.",
    icon: "monitoring",
    color: "secondary",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    category: "Security & Technology",
    description:
      "Suitable for students interested in cybersecurity, logical thinking, technical skills, and problem solving.",
    icon: "lock",
    color: "tertiary",
  },
  {
    id: "network_engineering",
    title: "Network Engineering",
    category: "Networking & Infrastructure",
    description:
      "Suitable for students interested in networking, technology, technical systems, and troubleshooting.",
    icon: "hub",
    color: "secondary",
  },
  {
    id: "ui_ux_design",
    title: "UI/UX Design",
    category: "Design & User Experience",
    description:
      "Suitable for students interested in creativity, design, user experience, and creative technology work.",
    icon: "palette",
    color: "primary",
  },
  {
    id: "business_analysis",
    title: "Business Analysis",
    category: "Business & Strategy",
    description:
      "Suitable for students interested in business, analytical thinking, communication, and problem solving.",
    icon: "business_center",
    color: "tertiary",
  },
  {
    id: "accounting_finance",
    title: "Accounting & Finance",
    category: "Finance & Accounting",
    description:
      "Suitable for students interested in finance, mathematics, analytical thinking, and attention to detail.",
    icon: "account_balance",
    color: "secondary",
  },
  {
    id: "digital_marketing",
    title: "Digital Marketing",
    category: "Marketing & Communication",
    description:
      "Suitable for students interested in marketing, creativity, communication, and interacting with people.",
    icon: "campaign",
    color: "primary",
  },
];

function Recommendations() {
  const navigate = useNavigate();

  const [recommendationIds, setRecommendationIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getRecommendations = async () => {
      try {
        setLoading(true);
        setError("");

        const skills = JSON.parse(
          localStorage.getItem("career_selected_skills") || "[]"
        );

        const interests = JSON.parse(
          localStorage.getItem("career_selected_interests") || "[]"
        );

        const preferences = JSON.parse(
          localStorage.getItem("career_selected_preferences") || "[]"
        );

        const allFacts = [
          ...(Array.isArray(skills) ? skills : []),
          ...(Array.isArray(interests) ? interests : []),
          ...(Array.isArray(preferences) ? preferences : []),
        ];

        const uniqueFacts = [...new Set(allFacts)];

        const response = await fetch("http://localhost:5000/api/recommend", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            facts: uniqueFacts,
          }),
        });

        if (!response.ok) {
          throw new Error("Backend request failed.");
        }

        const data: RecommendationResponse = await response.json();

        if (!data.success) {
          throw new Error(
            data.message ||
              "The expert system could not process the assessment."
          );
        }

        setRecommendationIds(data.recommendations || []);

        localStorage.setItem(
          "career_recommendations",
          JSON.stringify(data.recommendations || [])
        );
      } catch (err) {
        console.error("Recommendation error:", err);

        setError(
          "Unable to connect to the expert system. Please make sure the backend server is running."
        );
      } finally {
        setLoading(false);
      }
    };

    getRecommendations();
  }, []);

  const recommendations = recommendationIds
    .map((id) => careers.find((career) => career.id === id))
    .filter((career): career is Career => career !== undefined);

  const clearAssessment = () => {
    localStorage.removeItem("career_selected_skills");
    localStorage.removeItem("career_selected_interests");
    localStorage.removeItem("career_selected_preferences");
    localStorage.removeItem("career_recommendations");
    localStorage.removeItem("career_matched_rules");

    navigate("/skills");
  };

  const getColorClasses = (color: Career["color"]) => {
    if (color === "secondary") {
      return {
        icon: "bg-[#edf8f6] text-[#006a63]",
        badge: "bg-[#e4f4f1] text-[#005850]",
        border: "border-[#d5e8e4]",
        accent: "#006a63",
      };
    }

    if (color === "tertiary") {
      return {
        icon: "bg-[#f8efeb] text-[#814433]",
        badge: "bg-[#f6e4de] text-[#703626]",
        border: "border-[#ead8d1]",
        accent: "#814433",
      };
    }

    return {
      icon: "bg-[#fff1eb] text-[#c2410c]",
      badge: "bg-[#fff0e9] text-[#9a3412]",
      border: "border-[#ead8d1]",
      accent: "#c2410c",
    };
  };

  return (
    <main className="min-h-screen w-full bg-[#fff8f5] pt-16">
      <div className="mx-auto w-full max-w-6xl px-5 py-9 sm:px-7 lg:px-10">

        {/* ASSESSMENT HEADER */}
        <section className="rounded-2xl border border-[#eaded8] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(61,35,25,0.045)] sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c2410c] text-white">
                  <span className="material-symbols-outlined text-[16px]">
                    check
                  </span>
                </span>

                <div>
                  <p className="font-display text-sm font-bold text-[#241c19]">
                    Career Assessment
                  </p>

                  <p className="text-[10px] font-medium text-[#8b7770]">
                    Assessment complete
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="flex items-center gap-1.5 rounded-full bg-[#e8f5f2] px-3 py-1.5 text-[10px] font-bold text-[#006a63]">
                <span className="material-symbols-outlined text-[14px]">
                  check_circle
                </span>
                COMPLETE
              </span>

              <span className="text-[10px] font-bold text-[#8b7770]">
                100%
              </span>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-5">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#eee2dc]">
              <div className="h-full w-full rounded-full bg-[#c2410c]" />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="flex items-center gap-1.5 text-[#006a63]">
                <span className="material-symbols-outlined text-[15px]">
                  check_circle
                </span>

                <span className="text-[10px] font-semibold">
                  Skills
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[#006a63]">
                <span className="material-symbols-outlined text-[15px]">
                  check_circle
                </span>

                <span className="text-[10px] font-semibold">
                  Interests
                </span>
              </div>

              <div className="flex items-center justify-end gap-1.5 text-[#c2410c]">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#c2410c] text-[9px] font-bold text-white">
                  3
                </span>

                <span className="text-[10px] font-semibold">
                  Recommendations
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ERROR */}
        {error && !loading && (
          <section className="mx-auto mt-7 max-w-2xl rounded-xl border border-[#efc9bd] bg-white p-5 shadow-[0_4px_18px_rgba(61,35,25,0.04)]">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fff0e9] text-[#c2410c]">
                <span className="material-symbols-outlined text-[19px]">
                  error
                </span>
              </div>

              <div>
                <h3 className="font-display text-sm font-bold text-[#241c19]">
                  Expert System Connection Error
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#735f57]">
                  {error}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* RECOMMENDATIONS */}
        <section className="mt-9">

          {loading ? (
            <div className="mx-auto max-w-xl rounded-2xl border border-[#eaded8] bg-white px-6 py-12 text-center shadow-[0_4px_18px_rgba(61,35,25,0.04)]">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0e9] text-[#c2410c]">
                <span className="material-symbols-outlined animate-spin text-[25px]">
                  progress_activity
                </span>
              </div>

              <h2 className="mt-4 font-display text-base font-bold text-[#241c19]">
                Processing Assessment
              </h2>

              <p className="mx-auto mt-1.5 max-w-sm text-xs leading-5 text-[#735f57]">
                The expert system is evaluating your selected facts against
                the career knowledge base.
              </p>
            </div>
          ) : recommendations.length > 0 ? (
            <div className="flex flex-col items-center">

              {/* CENTERED CAREER CARDS */}
              <div className="flex w-full flex-col items-center gap-5">

                {recommendations.map((career, index) => {
                  const colors = getColorClasses(career.color);

                  return (
                    <article
                      key={career.id}
                      className={`w-full max-w-3xl overflow-hidden rounded-2xl border ${colors.border} bg-white shadow-[0_6px_24px_rgba(61,35,25,0.055)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(61,35,25,0.08)]`}
                    >
                      {/* TOP ACCENT */}
                      <div
                        className="h-1"
                        style={{
                          backgroundColor: colors.accent,
                        }}
                      />

                      <div className="p-5 sm:p-6">

                        {/* CARD HEADER */}
                        <div className="flex items-start gap-4">

                          <div
                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${colors.icon}`}
                          >
                            <span className="material-symbols-outlined text-[27px]">
                              {career.icon}
                            </span>
                          </div>

                          <div className="min-w-0 flex-1">

                            <div className="flex items-start justify-between gap-3">

                              <div>
                                <div className="mb-1.5 flex items-center gap-2">
                                  <span
                                    className="text-[9px] font-bold uppercase tracking-[0.13em]"
                                    style={{
                                      color: colors.accent,
                                    }}
                                  >
                                    MATCH {String(index + 1).padStart(2, "0")}
                                  </span>

                                  <span className="h-1 w-1 rounded-full bg-[#d4c5bf]" />

                                  <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#9a857d]">
                                    Career Area
                                  </span>
                                </div>

                                <h2 className="font-display text-xl font-bold tracking-tight text-[#241c19] sm:text-2xl">
                                  {career.title}
                                </h2>
                              </div>

                              <div
                                className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:flex ${colors.icon}`}
                              >
                                <span className="material-symbols-outlined text-[18px]">
                                  check_circle
                                </span>
                              </div>
                            </div>

                            {/* CATEGORY */}
                            <span
                              className={`mt-2.5 inline-flex rounded-md px-2.5 py-1 text-[9px] font-bold ${colors.badge}`}
                            >
                              {career.category}
                            </span>
                          </div>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="mt-5 rounded-xl bg-[#fcf8f6] px-4 py-3.5">
                          <p className="text-xs leading-5 text-[#66534c]">
                            {career.description}
                          </p>
                        </div>

                        {/* MATCH STATUS */}
                        <div className="mt-5 flex items-center justify-between border-t border-[#eee4df] pt-4">

                          <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fff0e9] text-[#c2410c]">
                              <span className="material-symbols-outlined text-[15px]">
                                verified
                              </span>
                            </span>

                            <div>
                              <p className="text-[10px] font-bold text-[#493832]">
                                Rule Match Confirmed
                              </p>

                              <p className="text-[9px] text-[#9a857d]">
                                Supported by the expert system
                              </p>
                            </div>
                          </div>

                          <span
                            className="flex h-7 w-7 items-center justify-center rounded-full text-white"
                            style={{
                              backgroundColor: colors.accent,
                            }}
                          >
                            <span className="material-symbols-outlined text-[15px]">
                              arrow_forward
                            </span>
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ) : (
            /* NO MATCH */
            <div className="mx-auto max-w-2xl rounded-2xl border border-[#eaded8] bg-white px-6 py-11 text-center shadow-[0_4px_18px_rgba(61,35,25,0.04)]">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0e9] text-[#c2410c]">
                <span className="material-symbols-outlined text-[27px]">
                  search_off
                </span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-[#241c19]">
                No Direct Match Found
              </h2>

              <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-[#735f57]">
                The selected facts did not satisfy any complete career rule.
                You can return to the assessment and select additional
                skills, interests, or preferences.
              </p>

              <button
                type="button"
                onClick={clearAssessment}
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#c2410c] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#9a3412] hover:shadow-md"
              >
                <span className="material-symbols-outlined text-[17px]">
                  restart_alt
                </span>

                UPDATE ASSESSMENT
              </button>
            </div>
          )}
        </section>

        {/* EXPLANATION CTA */}
        {!loading && !error && recommendations.length > 0 && (
          <section className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-[#eaded8] bg-white shadow-[0_4px_18px_rgba(61,35,25,0.045)]">

            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0e9] text-[#c2410c]">
                  <span className="material-symbols-outlined text-[20px]">
                    account_tree
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-sm font-bold text-[#241c19]">
                    View the reasoning
                  </h3>

                  <p className="mt-1 max-w-md text-[10px] leading-4.5 text-[#806b63]">
                    See how the expert system used your selected facts and
                    rules to generate the recommendations.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate("/explanation")}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#c2410c] px-4 py-2.5 text-[10px] font-bold text-white shadow-sm transition-all hover:bg-[#9a3412] hover:shadow-md"
              >
                VIEW EXPLANATION

                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </section>
        )}

        {/* NAVIGATION */}
        <section className="mx-auto mt-6 flex max-w-3xl flex-col gap-3 border-t border-[#eaded8] pt-5 sm:flex-row sm:items-center sm:justify-between">

          <button
            type="button"
            onClick={() => navigate("/preferences")}
            className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold text-[#66534c] transition-colors hover:bg-[#f5ebe6]"
          >
            <span className="material-symbols-outlined text-[17px]">
              arrow_back
            </span>

            BACK
          </button>

          <div className="flex flex-col gap-2 sm:flex-row">

            <button
              type="button"
              onClick={clearAssessment}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e5d8d2] bg-white px-4 py-2.5 text-xs font-semibold text-[#66534c] transition-all hover:bg-[#f8f0ec]"
            >
              <span className="material-symbols-outlined text-[16px]">
                restart_alt
              </span>

              START AGAIN
            </button>

            <button
              type="button"
              onClick={() => navigate("/explanation")}
              disabled={loading || !!error}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c2410c] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#9a3412] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
            >
              VIEW EXPLANATION

              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}

export default Recommendations;