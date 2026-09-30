import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#1c1917]">

      {/* ========================================================= */}
      {/* MAIN */}
      {/* ========================================================= */}

      <main className="w-full pt-20 pb-14">

        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          {/* ===================================================== */}
          {/* HERO SECTION */}
          {/* ===================================================== */}

          <section className="relative flex w-full flex-col items-center py-6">

            {/* Background glow */}
            <div className="pointer-events-none absolute -top-10 left-1/2 h-[340px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#ffdbd0]/40 via-[#f0e6e0]/40 to-transparent blur-3xl" />

            <div className="relative flex w-full max-w-4xl flex-col items-center rounded-2xl border border-[#f3e8e2] bg-white p-7 text-center shadow-[0_8px_30px_rgba(61,35,25,0.05)] sm:p-10">

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f3e8e2] bg-[#f6ece6] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[#c2410c]">

                <span
                  className="material-symbols-outlined text-[15px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  psychology
                </span>

                <span>Rule-Based Expert System</span>

              </div>


              {/* Heading */}
              <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">

                Find a Career That Matches Your{" "}

                <span className="text-[#c2410c]">
                  Skills &amp; Interests
                </span>

              </h1>


              {/* Description */}
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#59413a] sm:text-lg">
                A rule-based expert system that analyzes your skills,
                interests, and work preferences to provide explainable
                career recommendations.
              </p>


              {/* Main button */}
              <div className="mt-7 flex justify-center">

                <Link
                  to="/skills"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#c2410c] px-8 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#9b2f00] hover:shadow-md"
                >

                  <span>START CAREER ASSESSMENT</span>

                  <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1">
                    arrow_forward
                  </span>

                </Link>

              </div>


              {/* Feature badges */}
              <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 border-t border-[#f3e8e2] pt-6 sm:flex-row sm:gap-5">

                <FeatureBadge text="Rule-based reasoning" />

                <FeatureBadge text="Personalized recommendations" />

                <FeatureBadge text="Explanation of recommendations" />

              </div>


              {/* Technical information */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">

                <span className="inline-flex items-center gap-1.5 rounded-md border border-[#f3e8e2] bg-[#f6ece6] px-2.5 py-1.5 text-[#59413a]">

                  <span className="material-symbols-outlined text-[13px] text-[#c2410c]">
                    terminal
                  </span>

                  Powered by Prolog Horn Clause Logic

                </span>


                <span className="text-[#b49a90]">
                  •
                </span>


                <span className="inline-flex items-center gap-1.5 rounded-md border border-[#f3e8e2] bg-[#f6ece6] px-2.5 py-1.5 text-[#59413a]">

                  <span className="material-symbols-outlined text-[13px] text-[#006a63]">
                    verified_user
                  </span>

                  Deterministic &amp; Transparent

                </span>

              </div>

            </div>

          </section>


          {/* ========================================================= */}
          {/* INFERENCE PIPELINE */}
          {/* ========================================================= */}

          <section className="mx-auto w-full max-w-6xl px-2 pb-8 sm:px-0">

            {/* Section heading */}
            <div className="mb-9 text-center">

              {/* Engine badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#eaded8] bg-white px-3 py-1.5 shadow-sm">

                <span className="relative flex h-2 w-2">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c2410c] opacity-60" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c2410c]" />

                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#765b50]">
                  Forward Chaining Engine
                </span>

              </div>


              {/* Heading */}
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-[#1c1917] sm:text-3xl">
                From Your Profile to a Career Recommendation
              </h2>


              {/* Description */}
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#715b52] sm:text-base">
                Your responses move through a structured reasoning pipeline.
                The expert system converts your inputs into facts, applies
                rules, and produces traceable career recommendations.
              </p>

            </div>


            {/* ===================================================== */}
            {/* PIPELINE */}
            {/* ===================================================== */}

            <div className="relative">

              {/* Animated connecting line */}
              <div className="absolute left-[10%] right-[10%] top-[42px] hidden md:block">

                {/* Base line */}
                <div className="h-px w-full bg-[#eaded8]" />

                {/* Moving animation */}
                <div className="absolute inset-y-0 left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#c2410c] to-transparent animate-[pipelineMove_3s_ease-in-out_infinite]" />

              </div>


              {/* Pipeline cards */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-5">

                <PipelineStep
                  number="01"
                  icon="psychology_alt"
                  title="Skills Assessment"
                  description="Identify your technical, analytical, and problem-solving abilities."
                  active
                />

                <PipelineStep
                  number="02"
                  icon="interests"
                  title="Core Interests"
                  description="Map the areas, technologies, and subjects that attract you."
                />

                <PipelineStep
                  number="03"
                  icon="tune"
                  title="Work Preferences"
                  description="Capture how you prefer to work, communicate, and solve problems."
                />

                <PipelineStep
                  number="04"
                  icon="account_tree"
                  title="Deductive Results"
                  description="Apply Prolog rules to generate explainable career recommendations."
                  result
                />

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}


/* ============================================================= */
/* FEATURE BADGE */
/* ============================================================= */

function FeatureBadge({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-[#f3e8e2] bg-[#fcf2eb] px-4 py-2.5">

      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">

        <span className="material-symbols-outlined text-[14px] font-bold text-emerald-700">
          check
        </span>

      </div>

      <span className="text-sm text-[#1c1917]">
        {text}
      </span>

    </div>
  );
}


/* ============================================================= */
/* PIPELINE STEP */
/* ============================================================= */

function PipelineStep({
  number,
  icon,
  title,
  description,
  active = false,
  result = false,
}: {
  number: string;
  icon: string;
  title: string;
  description: string;
  active?: boolean;
  result?: boolean;
}) {
  return (
    <div className="group relative">

      {/* ======================================================= */}
      {/* CIRCLE / STEP INDICATOR */}
      {/* ======================================================= */}

      <div className="relative z-10 mx-auto mb-5 flex h-[84px] w-[84px] items-center justify-center">

        {/* Outer circle */}
        <div
          className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
            result
              ? "border-[#c2410c] bg-[#fff5ef]"
              : active
              ? "border-[#c2410c] bg-[#fff8f5]"
              : "border-[#eaded8] bg-white"
          }`}
        />


        {/* Inner circle */}
        <div
          className={`absolute inset-[7px] rounded-full transition-all duration-500 ${
            result
              ? "bg-[#c2410c]"
              : active
              ? "bg-[#fff1eb]"
              : "bg-[#faf6f3]"
          }`}
        />


        {/* Animated pulse ring */}
        {(active || result) && (
          <div className="absolute inset-0 rounded-full border border-[#c2410c]/30 animate-pulse" />
        )}


        {/* ICON INSIDE THE CIRCLE */}
        <span
          className={`material-symbols-outlined relative z-10 text-[28px] transition-all duration-300 group-hover:scale-110 ${
            result
              ? "text-white"
              : active
              ? "text-[#c2410c]"
              : "text-[#9b7567]"
          }`}
        >
          {icon}
        </span>


        {/* Number badge */}
        <div
          className={`absolute -bottom-1 left-1/2 z-20 flex h-6 min-w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white px-1.5 text-[9px] font-bold shadow-sm ${
            result || active
              ? "bg-[#c2410c] text-white"
              : "bg-[#eaded8] text-[#765b50]"
          }`}
        >
          {number}
        </div>

      </div>


      {/* ======================================================= */}
      {/* CONTENT CARD */}
      {/* ======================================================= */}

      <div
        className={`min-h-[180px] rounded-2xl border p-5 text-center transition-all duration-300 group-hover:-translate-y-1 ${
          result
            ? "border-[#c2410c]/30 bg-[#fff8f4] shadow-[0_10px_30px_rgba(194,65,12,0.08)]"
            : "border-[#eaded8] bg-white shadow-[0_4px_20px_rgba(61,35,25,0.03)] group-hover:border-[#e0c8bc] group-hover:shadow-[0_10px_30px_rgba(61,35,25,0.07)]"
        }`}
      >

        {/* Small label */}
        <div
          className={`text-[9px] font-bold uppercase tracking-[0.18em] ${
            result || active
              ? "text-[#c2410c]"
              : "text-[#a08073]"
          }`}
        >
          {result ? "Inference" : "Assessment"}
        </div>


        {/* Title */}
        <h3 className="mt-2 font-display text-base font-bold leading-snug text-[#1c1917]">
          {title}
        </h3>


        {/* Description */}
        <p className="mt-3 text-xs leading-5 text-[#765f56]">
          {description}
        </p>


        {/* Bottom line */}
        <div className="mx-auto mt-5 h-1 w-8 rounded-full bg-[#eaded8] transition-all duration-300 group-hover:w-12 group-hover:bg-[#c2410c]" />

      </div>

    </div>
  );
}


export default Home;