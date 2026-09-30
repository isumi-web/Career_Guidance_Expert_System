import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Interest = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  iconColor: string;
};

const interests: Interest[] = [
  {
    id: "technology_interest",
    title: "Technology",
    category: "Systems & Infrastructure",
    description:
      "Interest in computing systems, software technologies, and technical solutions.",
    icon: "memory",
    iconColor: "text-[#c2410c]",
  },
  {
    id: "data_interest",
    title: "Data",
    category: "Analytics & Modeling",
    description:
      "Interest in data analysis, statistics, information, and working with data.",
    icon: "monitoring",
    iconColor: "text-[#006a63]",
  },
  {
    id: "cybersecurity_interest",
    title: "Cybersecurity",
    category: "Security & Protection",
    description:
      "Interest in protecting systems, identifying security risks, and cybersecurity.",
    icon: "lock",
    iconColor: "text-[#59413a]",
  },
  {
    id: "networking_interest",
    title: "Networking",
    category: "Networks & Systems",
    description:
      "Interest in computer networks, communication systems, and network infrastructure.",
    icon: "hub",
    iconColor: "text-[#59413a]",
  },
  {
    id: "design_interest",
    title: "Design",
    category: "Visual & Creative",
    description:
      "Interest in visual design, creativity, layouts, and creating digital experiences.",
    icon: "palette",
    iconColor: "text-[#59413a]",
  },
  {
    id: "business_interest",
    title: "Business",
    category: "Strategy & Operations",
    description:
      "Interest in business processes, strategy, organizations, and decision-making.",
    icon: "work",
    iconColor: "text-[#59413a]",
  },
  {
    id: "finance_interest",
    title: "Finance",
    category: "Finance & Accounting",
    description:
      "Interest in financial information, accounting, calculations, and financial analysis.",
    icon: "account_balance_wallet",
    iconColor: "text-[#59413a]",
  },
  {
    id: "marketing_interest",
    title: "Marketing",
    category: "Marketing & Communication",
    description:
      "Interest in marketing activities, promotion, communication, and customers.",
    icon: "campaign",
    iconColor: "text-[#59413a]",
  },
  {
    id: "research_interest",
    title: "Research",
    category: "Investigation & Analysis",
    description:
      "Interest in investigation, analysis, research activities, and discovering knowledge.",
    icon: "biotech",
    iconColor: "text-[#c2410c]",
  },
  {
    id: "user_experience_interest",
    title: "User Experience",
    category: "Human-Computer Interaction",
    description:
      "Interest in users, usability, interaction design, and digital experiences.",
    icon: "touch_app",
    iconColor: "text-[#59413a]",
  },
];

function Interests() {
  const navigate = useNavigate();

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  useEffect(() => {
    const savedInterests = localStorage.getItem(
      "career_selected_interests"
    );

    if (savedInterests) {
      try {
        const parsed = JSON.parse(savedInterests);

        if (Array.isArray(parsed)) {
          setSelectedInterests(parsed);
        }
      } catch {
        setSelectedInterests([]);
      }
    }
  }, []);

  const toggleInterest = (interestId: string) => {
    setSelectedInterests((current) => {
      if (current.includes(interestId)) {
        return current.filter((id) => id !== interestId);
      }

      return [...current, interestId];
    });
  };

  const handleBack = () => {
    localStorage.setItem(
      "career_selected_interests",
      JSON.stringify(selectedInterests)
    );

    navigate("/skills");
  };

  const handleNext = () => {
    if (selectedInterests.length < 2) {
      return;
    }

    localStorage.setItem(
      "career_selected_interests",
      JSON.stringify(selectedInterests)
    );

    navigate("/preferences");
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
                02
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c2410c]">
                Career Assessment
              </p>

            </div>

            <p className="mt-1.5 pl-9 text-xs text-[#806a61]">
              Step 2 of 3 · Interest Assessment
            </p>

          </div>

          <div className="text-right">

            <p className="text-xs font-semibold text-[#59413a]">
              66% Complete
            </p>

          </div>

        </div>


        {/* ===================================================== */}
        {/* PROGRESS BAR */}
        {/* ===================================================== */}

        <div className="mb-10 h-1.5 w-full overflow-hidden rounded-full bg-[#eadbd4]">

          <div className="h-full w-2/3 rounded-full bg-[#c2410c]" />

        </div>


        {/* ===================================================== */}
        {/* PAGE INTRODUCTION */}
        {/* ===================================================== */}

        <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div className="max-w-2xl">

            <div className="mb-2 flex items-center gap-2">

              <span className="material-symbols-outlined text-[18px] text-[#c2410c]">
                interests
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#8a5543]">
                Interest Assessment
              </span>

            </div>

            <h1 className="font-display text-3xl font-bold tracking-tight text-[#1c1917] sm:text-4xl">
              What areas are you interested in?
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#6b554d] sm:text-base">
              Select the areas that interest you most.
            </p>

          </div>


          {/* Requirement */}

          <div className="flex shrink-0 items-center gap-2 rounded-lg border border-[#eaded8] bg-white px-3.5 py-2.5 shadow-[0_2px_10px_rgba(61,35,25,0.03)]">

            <span className="material-symbols-outlined text-[17px] text-[#c2410c]">
              info
            </span>

            <span className="text-xs font-semibold text-[#59413a]">
              Select at least 2 interests
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
              Interests selected
            </span>

          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              selectedInterests.length >= 2
                ? "bg-[#e6f4f1] text-[#006a63]"
                : "bg-[#fff1eb] text-[#c2410c]"
            }`}
          >
            {selectedInterests.length} / {interests.length}
          </span>

        </div>


        {/* ===================================================== */}
        {/* INTEREST GRID */}
        {/* ===================================================== */}

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">

          {interests.map((interest) => {

            const isSelected = selectedInterests.includes(
              interest.id
            );

            return (
              <button
                key={interest.id}
                type="button"
                onClick={() => toggleInterest(interest.id)}
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
                        : "bg-[#f7eee9] group-hover:bg-[#f4e4dc]"
                    }`}
                  >

                    <span
                      className={`material-symbols-outlined text-[21px] ${
                        isSelected
                          ? "text-white"
                          : interest.iconColor
                      }`}
                    >
                      {interest.icon}
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
                        {interest.title}
                      </h2>

                      <span
                        className={`rounded-md px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${
                          isSelected
                            ? "bg-[#fbe2d7] text-[#9a3412]"
                            : "bg-[#f7eee9] text-[#765b50]"
                        }`}
                      >
                        {interest.category}
                      </span>

                    </div>


                    <p className="mt-1.5 text-xs leading-5 text-[#725e56]">
                      {interest.description}
                    </p>

                  </div>

                </div>


                {/* Selection indicator line */}

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
                selectedInterests.length >= 2
                  ? "bg-[#006a63]"
                  : "bg-[#c2410c]"
              }`}
            />

            <span className="text-xs font-medium text-[#59413a]">

              {selectedInterests.length >= 2
                ? `${selectedInterests.length} interests selected`
                : `${selectedInterests.length} of 2 required interests selected`}

            </span>

          </div>


          {/* Buttons */}

          <div className="flex w-full items-center justify-end gap-3 sm:w-auto">

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


            <button
              type="button"
              onClick={handleNext}
              disabled={selectedInterests.length < 2}
              className={`group inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                selectedInterests.length >= 2
                  ? "bg-[#c2410c] text-white shadow-sm hover:bg-[#9a3412] hover:shadow-md"
                  : "cursor-not-allowed bg-[#e7d9d3] text-[#9a8a83]"
              }`}
            >

              Next: Preferences

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

export default Interests;