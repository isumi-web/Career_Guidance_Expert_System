import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Preference = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
};

const preferences: Preference[] = [
  {
    id: "technical_problem_solving_preference",
    title: "Technical Problem Solving",
    category: "Technical & Logic",
    description:
      "Solving technical issues, troubleshooting systems, and finding practical solutions.",
    icon: "build",
  },
  {
    id: "data_work_preference",
    title: "Working with Data",
    category: "Data & Analytics",
    description:
      "Working with datasets, numbers, patterns, and information to identify useful insights.",
    icon: "monitoring",
  },
  {
    id: "creative_work_preference",
    title: "Creative Work",
    category: "Creative & Visual",
    description:
      "Creating new ideas, visual concepts, designs, and innovative solutions.",
    icon: "palette",
  },
  {
    id: "people_interaction_preference",
    title: "People Interaction",
    category: "People & Communication",
    description:
      "Working with people, understanding their needs, and communicating with different groups.",
    icon: "groups",
  },
  {
    id: "computer_work_preference",
    title: "Computer-Based Work",
    category: "Technology",
    description:
      "Spending time working with computers, software applications, and digital systems.",
    icon: "computer",
  },
  {
    id: "independent_work_preference",
    title: "Independent Work",
    category: "Work Style",
    description:
      "Working independently, managing your own tasks, and solving problems with less supervision.",
    icon: "person",
  },
  {
    id: "teamwork_preference",
    title: "Teamwork",
    category: "Collaboration",
    description:
      "Collaborating with others, sharing ideas, and contributing to team-based projects.",
    icon: "diversity_3",
  },
  {
    id: "information_analysis_preference",
    title: "Information Analysis",
    category: "Analysis & Research",
    description:
      "Examining information carefully, identifying patterns, and making sense of complex details.",
    icon: "analytics",
  },
  {
    id: "detail_oriented_work_preference",
    title: "Detail-Oriented Work",
    category: "Accuracy & Quality",
    description:
      "Working carefully with detailed information and maintaining accuracy in your work.",
    icon: "fact_check",
  },
  {
    id: "communication_work_preference",
    title: "Communication-Based Work",
    category: "Communication",
    description:
      "Using written and verbal communication to explain ideas, share information, and influence others.",
    icon: "forum",
  },
];

function Preferences() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(
      "career_selected_preferences"
    );

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setSelected(parsed);
        }
      } catch {
        localStorage.removeItem(
          "career_selected_preferences"
        );
      }
    }
  }, []);

  const togglePreference = (id: string) => {
    setSelected((current) => {
      const updated = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];

      localStorage.setItem(
        "career_selected_preferences",
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  const handleBack = () => {
    navigate("/interests");
  };

  const handleNext = () => {
    if (selected.length < 2) {
      return;
    }

    localStorage.setItem(
      "career_selected_preferences",
      JSON.stringify(selected)
    );

    navigate("/results");
  };

  return (
    <main className="min-h-screen bg-[#fff8f5] pt-20 pb-14">

      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* ===================================================== */}
        {/* TOP PROGRESS HEADER */}
        {/* ===================================================== */}

        <div className="mb-7 flex items-end justify-between">

          <div>

            <div className="flex items-center gap-2">

              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c2410c] text-xs font-bold text-white">
                03
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c2410c]">
                Career Assessment
              </p>

            </div>

            <p className="mt-1.5 pl-9 text-xs text-[#806a61]">
              Step 3 of 3 · Work Preferences
            </p>

          </div>


          <div className="text-right">

            <p className="text-xs font-semibold text-[#59413a]">
              100% Complete
            </p>

          </div>

        </div>


        {/* ===================================================== */}
        {/* PROGRESS BAR */}
        {/* ===================================================== */}

        <div className="mb-10 h-1.5 w-full overflow-hidden rounded-full bg-[#eadbd4]">

          <div className="h-full w-full rounded-full bg-[#c2410c]" />

        </div>


        {/* ===================================================== */}
        {/* PAGE INTRODUCTION */}
        {/* ===================================================== */}

        <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div className="max-w-2xl">

            <div className="mb-2 flex items-center gap-2">

              <span className="material-symbols-outlined text-[18px] text-[#c2410c]">
                tune
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#8a5543]">
                Work Preferences
              </span>

            </div>


            <h1 className="font-display text-3xl font-bold tracking-tight text-[#1c1917] sm:text-4xl">
              How do you prefer to work?
            </h1>


            <p className="mt-3 max-w-xl text-sm leading-6 text-[#6b554d] sm:text-base">
              Select the work styles and activities that match your
              preferences.
            </p>

          </div>


          {/* Requirement */}

          <div className="flex shrink-0 items-center gap-2 rounded-lg border border-[#eaded8] bg-white px-3.5 py-2.5 shadow-[0_2px_10px_rgba(61,35,25,0.03)]">

            <span className="material-symbols-outlined text-[17px] text-[#c2410c]">
              info
            </span>

            <span className="text-xs font-semibold text-[#59413a]">
              Select at least 2 preferences
            </span>

          </div>

        </section>


        {/* ===================================================== */}
        {/* SELECTION SUMMARY */}
        {/* ===================================================== */}

        <div className="mb-5 flex items-center justify-between rounded-xl border border-[#eaded8] bg-white px-4 py-3 shadow-[0_2px_10px_rgba(61,35,25,0.03)]">

          <div className="flex items-center gap-2.5">

            <span className="material-symbols-outlined text-[19px] text-[#c2410c]">
              checklist
            </span>

            <span className="text-sm font-semibold text-[#3f302b]">
              Preferences selected
            </span>

          </div>


          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              selected.length >= 2
                ? "bg-[#e6f4f1] text-[#006a63]"
                : "bg-[#fff1eb] text-[#c2410c]"
            }`}
          >
            {selected.length} / {preferences.length}
          </span>

        </div>


        {/* ===================================================== */}
        {/* PREFERENCE GRID */}
        {/* ===================================================== */}

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">

          {preferences.map((preference) => {

            const isSelected = selected.includes(
              preference.id
            );

            return (
              <button
                key={preference.id}
                type="button"
                onClick={() =>
                  togglePreference(preference.id)
                }
                aria-pressed={isSelected}
                className={`group relative rounded-xl border p-4 text-left transition-all duration-200 ${
                  isSelected
                    ? "border-[#c2410c] bg-[#fff7f3] shadow-[0_5px_18px_rgba(194,65,12,0.08)]"
                    : "border-[#eaded8] bg-white hover:-translate-y-0.5 hover:border-[#d8b9aa] hover:shadow-[0_5px_18px_rgba(61,35,25,0.05)]"
                }`}
              >

                {/* Selected indicator */}

                {isSelected && (
                  <div className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#c2410c] text-white">

                    <span className="material-symbols-outlined text-[14px]">
                      check
                    </span>

                  </div>
                )}


                <div className="flex items-start gap-3.5">

                  {/* Icon */}

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                      isSelected
                        ? "bg-[#c2410c] text-white"
                        : "bg-[#f7eee9] text-[#9a3412] group-hover:bg-[#f4e4dc]"
                    }`}
                  >

                    <span className="material-symbols-outlined text-[21px]">
                      {preference.icon}
                    </span>

                  </div>


                  {/* Content */}

                  <div className="min-w-0 flex-1 pr-6">

                    <div className="flex flex-wrap items-center gap-2">

                      <h2
                        className={`font-display text-[15px] font-bold transition-colors ${
                          isSelected
                            ? "text-[#c2410c]"
                            : "text-[#241c19] group-hover:text-[#c2410c]"
                        }`}
                      >
                        {preference.title}
                      </h2>


                      <span
                        className={`rounded-md px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${
                          isSelected
                            ? "bg-[#fbe2d7] text-[#9a3412]"
                            : "bg-[#f7eee9] text-[#765b50]"
                        }`}
                      >
                        {preference.category}
                      </span>

                    </div>


                    <p className="mt-1.5 text-xs leading-5 text-[#725e56]">
                      {preference.description}
                    </p>

                  </div>

                </div>


                {/* Selection indicator */}

                <div
                  className={`mt-3.5 h-0.5 rounded-full transition-all duration-300 ${
                    isSelected
                      ? "w-10 bg-[#c2410c]"
                      : "w-5 bg-[#eaded8] group-hover:w-8 group-hover:bg-[#d8b9aa]"
                  }`}
                />

              </button>
            );
          })}

        </div>


        {/* ===================================================== */}
        {/* BOTTOM NAVIGATION */}
        {/* ===================================================== */}

        <div className="mt-9 flex flex-col gap-4 border-t border-[#eadbd4] pt-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Selection status */}

          <div className="flex items-center gap-2">

            <span
              className={`h-2.5 w-2.5 rounded-full ${
                selected.length >= 2
                  ? "bg-[#006a63]"
                  : "bg-[#c2410c]"
              }`}
            />

            <span className="text-xs font-medium text-[#59413a]">

              {selected.length >= 2
                ? `${selected.length} preferences selected`
                : `${selected.length} of 2 required preferences selected`}

            </span>

          </div>


          {/* Buttons */}

          <div className="flex w-full items-center justify-end gap-3 sm:w-auto">

            {/* Back */}

            <button
              type="button"
              onClick={handleBack}
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-[#59413a] transition-colors hover:bg-[#f4e8e3]"
            >

              <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:-translate-x-0.5">
                arrow_back
              </span>

              Back

            </button>


            {/* Recommendations */}

            <button
              type="button"
              onClick={handleNext}
              disabled={selected.length < 2}
              className={`group inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                selected.length >= 2
                  ? "bg-[#c2410c] text-white shadow-sm hover:bg-[#9a3412] hover:shadow-md"
                  : "cursor-not-allowed bg-[#e7d9d3] text-[#9a8a83]"
              }`}
            >

              Get My Recommendations

              <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-0.5">
                arrow_forward
              </span>

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Preferences;