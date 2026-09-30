import { useState } from "react";
import { useNavigate } from "react-router-dom";

const skills = [
  {
    id: "programming_skill",
    title: "Programming",
    description: "Writing and understanding computer programs.",
    icon: "code",
  },
  {
    id: "mathematics_skill",
    title: "Mathematics",
    description: "Working with numbers, calculations, and mathematical concepts.",
    icon: "calculate",
  },
  {
    id: "problem_solving_skill",
    title: "Problem Solving",
    description: "Finding solutions to problems and challenges.",
    icon: "psychology",
  },
  {
    id: "analytical_thinking",
    title: "Analytical Thinking",
    description: "Analyzing information and identifying patterns or relationships.",
    icon: "analytics",
  },
  {
    id: "communication_skill",
    title: "Communication",
    description: "Expressing ideas clearly and understanding others.",
    icon: "forum",
  },
  {
    id: "creativity_skill",
    title: "Creativity",
    description: "Generating new ideas and creative solutions.",
    icon: "lightbulb",
  },
  {
    id: "logical_thinking",
    title: "Logical Thinking",
    description: "Using logical reasoning to understand and solve problems.",
    icon: "account_tree",
  },
  {
    id: "attention_to_detail",
    title: "Attention to Detail",
    description: "Carefully identifying small details and avoiding errors.",
    icon: "fact_check",
  },
  {
    id: "teamwork_skill",
    title: "Teamwork",
    description: "Working effectively with other people.",
    icon: "groups",
  },
  {
    id: "technical_skill",
    title: "Technical Skills",
    description: "Using technical knowledge and tools to complete tasks.",
    icon: "build",
  },
];

function Skills() {
  const navigate = useNavigate();

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skillId: string) => {
    setSelectedSkills((current) => {
      if (current.includes(skillId)) {
        return current.filter((id) => id !== skillId);
      }

      return [...current, skillId];
    });
  };

  const handleNext = () => {
    localStorage.setItem(
      "career_selected_skills",
      JSON.stringify(selectedSkills)
    );

    navigate("/interests");
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
                01
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c2410c]">
                Career Assessment
              </p>

            </div>

            <p className="mt-1.5 pl-9 text-xs text-[#806a61]">
              Step 1 of 3 · Skills Assessment
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs font-semibold text-[#59413a]">
              33% Complete
            </p>
          </div>

        </div>


        {/* Progress bar */}

        <div className="mb-10 h-1.5 w-full overflow-hidden rounded-full bg-[#eadbd4]">

          <div className="h-full w-1/3 rounded-full bg-[#c2410c]" />

        </div>


        {/* ===================================================== */}
        {/* PAGE INTRODUCTION */}
        {/* ===================================================== */}

        <section className="mb-8">

          <div className="max-w-2xl">

            <h1 className="font-display text-3xl font-bold tracking-tight text-[#1c1917] sm:text-4xl">
              What are your strongest skills?
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#6b554d] sm:text-base">
              Select the skills that best describe you. Your selections will
              be used by the expert system to identify suitable career areas.
            </p>

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
              Skills selected
            </span>

          </div>

          <span className="rounded-full bg-[#fff1eb] px-3 py-1 text-xs font-bold text-[#c2410c]">
            {selectedSkills.length} / {skills.length}
          </span>

        </div>


        {/* ===================================================== */}
        {/* SKILLS GRID */}
        {/* ===================================================== */}

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">

          {skills.map((skill) => {

            const isSelected = selectedSkills.includes(skill.id);

            return (
              <button
                key={skill.id}
                type="button"
                onClick={() => toggleSkill(skill.id)}
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


                <div className="flex items-center gap-3.5">

                  {/* Icon */}

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                      isSelected
                        ? "bg-[#c2410c] text-white"
                        : "bg-[#f7eee9] text-[#9a3412] group-hover:bg-[#f4e4dc]"
                    }`}
                  >

                    <span className="material-symbols-outlined text-[21px]">
                      {skill.icon}
                    </span>

                  </div>


                  {/* Text */}

                  <div className="min-w-0 flex-1 pr-6">

                    <h2 className="font-display text-[15px] font-bold text-[#241c19]">
                      {skill.title}
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-[#725e56]">
                      {skill.description}
                    </p>

                  </div>

                </div>


                {/* Selection line */}

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

        <div className="mt-9 flex items-center justify-between border-t border-[#eadbd4] pt-6">

          {/* Back */}

          <button
            type="button"
            onClick={() => navigate("/")}
            className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[#59413a] transition-colors hover:bg-[#f4e8e3]"
          >

            <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:-translate-x-0.5">
              arrow_back
            </span>

            Back

          </button>


          {/* Next */}

          <button
            type="button"
            onClick={handleNext}
            disabled={selectedSkills.length === 0}
            className={`group inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
              selectedSkills.length > 0
                ? "bg-[#c2410c] text-white shadow-sm hover:bg-[#9a3412] hover:shadow-md"
                : "cursor-not-allowed bg-[#e7d9d3] text-[#9a8a83]"
            }`}
          >

            Next: Interests

            <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-0.5">
              arrow_forward
            </span>

          </button>

        </div>

      </div>
    </main>
  );
}

export default Skills;