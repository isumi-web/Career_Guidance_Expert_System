import { Link } from "react-router-dom";

const careerAreas = [
  {
    name: "Software Development",
    icon: "code",
  },
  {
    name: "Data Analysis",
    icon: "analytics",
  },
  {
    name: "Cybersecurity",
    icon: "security",
  },
  {
    name: "Network Engineering",
    icon: "hub",
  },
  {
    name: "UI/UX Design",
    icon: "design_services",
  },
  {
    name: "Business Analysis",
    icon: "query_stats",
  },
  {
    name: "Accounting & Finance",
    icon: "account_balance_wallet",
  },
  {
    name: "Digital Marketing",
    icon: "campaign",
  },
];

function About() {
  return (
    <main className="min-h-screen w-full bg-[#fff8f5] pt-16">

      {/* ================= MAIN CONTENT ================= */}

      <div className="mx-auto w-full max-w-6xl px-5 py-9 sm:px-7 lg:px-10">

        {/* ================= PAGE HEADER ================= */}

        <section className="mb-8 text-center">

          <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-[#ead8d1] bg-white px-3.5 py-1.5 shadow-[0_2px_8px_rgba(61,35,25,0.04)]">

            <span className="material-symbols-outlined text-[16px] text-[#c2410c]">
              info
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8a5543]">
              About the System
            </span>

          </div>

          <h1 className="font-display text-3xl font-bold tracking-tight text-[#241c19] sm:text-4xl">
            Career Guidance Expert System
          </h1>

          <div className="mx-auto mt-3 flex items-center justify-center gap-2">

            <span className="h-px w-8 bg-[#dfc8bf]" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#c2410c]" />

            <span className="h-px w-8 bg-[#dfc8bf]" />

          </div>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-[#735f57]">
            Explore the technologies, inference methods, and career areas
            included in the expert system.
          </p>

        </section>

        {/* ================= MAIN CONTENT CARD ================= */}

        <section className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#eaded8] bg-white shadow-[0_5px_22px_rgba(61,35,25,0.05)]">

          <div className="p-5 sm:p-7 lg:p-8">

            {/* ================= TECHNOLOGY ================= */}

            <section className="border-b border-[#eee3de] pb-7">

              <div className="mb-4 flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0e9] text-[#c2410c]">
                    <span className="material-symbols-outlined text-[17px]">
                      terminal
                    </span>
                  </div>

                  <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8a5543]">
                    Technology
                  </h2>

                </div>

                <span className="rounded-full bg-[#f8eee9] px-2.5 py-1 text-[9px] font-bold text-[#765b50]">
                  System Stack
                </span>

              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

                {/* Frontend */}

                <div className="rounded-xl border border-[#eee2dc] bg-[#fdf9f7] p-4 transition-all duration-200 hover:border-[#e3cfc6] hover:shadow-sm">

                  <div className="flex items-center gap-2">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0e9] text-[#c2410c]">
                      <span className="material-symbols-outlined text-[17px]">
                        devices
                      </span>
                    </div>

                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#806b63]">
                      Frontend
                    </span>

                  </div>

                  <p className="mt-3 font-display text-base font-bold text-[#241c19]">
                    React + TypeScript
                  </p>

                </div>

                {/* Expert System */}

                <div className="rounded-xl border border-[#eee2dc] bg-[#fdf9f7] p-4 transition-all duration-200 hover:border-[#e3cfc6] hover:shadow-sm">

                  <div className="flex items-center gap-2">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0e9] text-[#c2410c]">
                      <span className="material-symbols-outlined text-[17px]">
                        psychology
                      </span>
                    </div>

                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#806b63]">
                      Expert System
                    </span>

                  </div>

                  <p className="mt-3 font-display text-base font-bold text-[#241c19]">
                    SWI-Prolog
                  </p>

                </div>

                {/* Inference */}

                <div className="rounded-xl border border-[#eee2dc] bg-[#fdf9f7] p-4 transition-all duration-200 hover:border-[#e3cfc6] hover:shadow-sm">

                  <div className="flex items-center gap-2">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#edf8f6] text-[#006a63]">
                      <span className="material-symbols-outlined text-[17px]">
                        account_tree
                      </span>
                    </div>

                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#806b63]">
                      Inference
                    </span>

                  </div>

                  <p className="mt-3 font-display text-base font-bold text-[#241c19]">
                    Forward &amp; Backward Chaining
                  </p>

                </div>

              </div>

            </section>

            {/* ================= CAREER AREAS ================= */}

            <section className="pt-7">

              <div className="mb-4 flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0e9] text-[#c2410c]">
                    <span className="material-symbols-outlined text-[17px]">
                      work
                    </span>
                  </div>

                  <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8a5543]">
                    Career Areas
                  </h2>

                </div>

                <span className="rounded-full bg-[#f8eee9] px-2.5 py-1 text-[9px] font-bold text-[#765b50]">
                  8 Areas
                </span>

              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">

                {careerAreas.map((career, index) => (

                  <div
                    key={career.name}
                    className="group flex items-center gap-3 rounded-xl border border-[#eee2dc] bg-[#fdf9f7] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#e1c9be] hover:bg-white hover:shadow-sm"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fff0e9] text-[#c2410c] transition-colors group-hover:bg-[#c2410c] group-hover:text-white">

                      <span className="material-symbols-outlined text-[18px]">
                        {career.icon}
                      </span>

                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="flex items-center gap-2">

                        <span className="text-[9px] font-bold text-[#b49b92]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="font-display text-sm font-bold text-[#30241f]">
                          {career.name}
                        </span>

                      </div>

                    </div>

                    <span className="material-symbols-outlined text-[16px] text-[#cdbab2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#c2410c]">
                      arrow_forward
                    </span>

                  </div>

                ))}

              </div>

            </section>

          </div>

        </section>

        {/* ================= BOTTOM ACTIONS ================= */}

        <section className="mx-auto mt-6 flex max-w-5xl flex-col gap-3 border-t border-[#eaded8] pt-5 sm:flex-row sm:items-center sm:justify-between">

          {/* Back to Home */}

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold text-[#66534c] no-underline transition-colors hover:bg-[#f5ebe6]"
          >

            <span className="material-symbols-outlined text-[17px]">
              arrow_back
            </span>

            Back to Home

          </Link>

          {/* Start Assessment */}

          <Link
            to="/skills"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#c2410c] px-5 py-2.5 text-xs font-bold text-white no-underline shadow-sm transition-all hover:bg-[#9a3412] hover:shadow-md"
          >

            Start Career Assessment

            <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-0.5">
              arrow_forward
            </span>

          </Link>

        </section>

      </div>

    </main>
  );
}

export default About;