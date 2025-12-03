export const experimentExamples = [
  {
    id: 1,
    type: "Inference",
    image: "/src/assets/image_1.png", // podmienisz później na obrazek
    statement: "Graph of usage of CSCS supercomputers by research institution in 2011. Statement. Increased usage of CSCS supercomputers by research institutions directly results in higher academic prestige and funding.",
    description: `
        Inference: The narrative presents correlation as causation or ignores confounders.

        The story draws a causal link (“directly results in”) between supercomputer usage and “higher academic prestige and funding,” but the evidence (usage graph) doesn’t justify that strong causal claim.

        The narrative overstates what the chart shows. While the graph might convincingly display how different institutions used CSCS supercomputing resources in 2011, usage doesn’t automatically equate to academic prestige or increased funding. There’s no direct causal path provided (or inherent) in the graph from “hours on a supercomputer” → “prestige/funding gains.”

        The story claims that “increased usage … directly results in higher academic prestige and funding.” That’s a strong causal assertion — but the graph only shows usage by institution, not measures of prestige, grant income, or funding flow. There’s no evidence in the chart (or presumably in its data) that links more supercomputing hours to more funding or reputation.

        Even if we see that prominent institutions used more CSCS resources, that doesn’t prove usage caused their prestige or additional funding. There could be many confounding factors: strong research groups apply for computer time in the first place, so “prestigious institutions” might simply be more likely to win HPC access. Or perhaps their prestige came from earlier research, not from CSCS usage.

        The narrative ignores alternative explanations (nothing in the chart ties usage to peer review, grant success, or funding allocation).

        Even if there were a correlation, the story doesn’t clarify when usage increases and when prestige or funding changes occur. Did institutions use CSCS more because they were already well-funded, or did their funding go up after using CSCS? The direction of causality is not clearly established.
    `,
    caption: "Graph of usage of CSCS supercomputers by research institution in 2011",
    story: "Increased usage of CSCS supercomputers by research institutions directly results in higher academic prestige and funding.",
  },
  {
    id: 2,
    type: "Inference",
    image: "/src/assets/image_2.png",
    statement: "This chart proves that higher testosterone levels are directly connected to being young. Aging is the number one killer of testosterone levels in males.",
    description: `Inference: The narrative presents correlation as causation or ignores confounders.

                The story claims that aging is the number-one killer of testosterone in men and that “higher testosterone levels are directly connected to being young,” which implies a strong causal relationship — but the evidence (a chart of testosterone vs. age) does not support that strong, simplistic causality.

                The narrative overstates what a testosterone-vs-age chart can prove. Yes, testosterone typically changes with age, but attributing low testosterone solely to “getting older” ignores many other factors (health, comorbidities, binding proteins). Also, the real patterns are more nuanced than “young = high T, older = low T,” and in some studies total testosterone doesn’t decline linearly in every man.

                The story says “Aging is the number one killer of testosterone levels” and implies that age directly causes low testosterone. But the chart only shows correlation (T vs. age), not causation. There’s no proof in a static age-curve that aging causes the decline, nor that it's the “number one” factor.

                Testosterone levels are influenced by many factors beyond age: health status, obesity, medications, binding proteins (like SHBG), lifestyle, and disease. If these aren’t controlled for, attributing T decline only to age is misleading.

                The statement “higher testosterone levels are directly connected to being young” ignores the fact that testosterone trajectories vary a lot between individuals. Some models find that after a certain age, mean total testosterone doesn’t decline much for “average” healthy men.

                The story suggests a dramatic “killer” effect — but in reality, the decline is modest. According to sources, testosterone declines around 0.4–2% per year after ~30, depending on health and other factors.
    `,
    caption: "Testosterone chart images for clear ideas",
    story: "This chart proves that higher testosterone levels are directly connected to being young. Aging is the number one killer of testosterone levels in males."
  },
  {
    id: 3,
    type: "Sensationalism",
    image: "/src/assets/image_3.png",
    statement: "This terrifying surge in women arrested for drunkenness reveals a nationwide crisis spiraling out of control.",
    description: `The narrative uses emotionally charged, exaggerated, or fear-inducing language.

                The story uses dramatic, crisis-oriented language that goes far beyond what the chart shows.

                The narrative describes a “terrifying surge” and a “nationwide crisis,” but the chart (female arrests for drunkenness by age in 2014) is simply a single-year age distribution, not a trend and not evidence of a crisis. The story interprets a normal distribution of arrests by age as dramatic national deterioration.

                Words like “terrifying” and “surge” imply a sudden, dangerous escalation, but the chart shows only the number of arrests by age in one year — no indication of change or escalation over time.

                You can’t infer a “surge” or worsening problem from a single-year snapshot. A chart showing arrests by age for 2014 says nothing about whether the numbers rose, fell, or stayed stable.

                Calling it a “nationwide crisis” dramatizes the situation without evidence of national magnitude, comparison to other years, or context (population size, rate per capita, historical norms).

                Arrests for drunkenness are influenced by policing patterns, enforcement priorities, and reporting practices, not only drinking behaviour. Declaring it a “crisis” ignores these confounders.

                Phrases like “spiraling out of control” suggest accelerating growth or instability, none of which can be determined from a static age distribution for 2014.
    `,
    caption: "Arrests in the United States of females for drunkenness in 2014 by age. Data from UCR",
    story: "This terrifying surge in women arrested for drunkenness reveals a nationwide crisis spiraling out of control."
  },
  {
    id: 4,
    type: "Sensationalism",
    image: "/src/assets/image_4.png",
    statement: "Missouri's massive reliance on coal is a ticking time bomb, threatening the health and future of every resident.",
    description: `The narrative uses emotionally charged, exaggerated, or fear-inducing language.

                The chart only shows the proportions of electricity sources in Missouri, with coal as a major share. The story turns this into an imminent, existential threat (“ticking time bomb”), which goes far beyond what the data can legitimately support. No health metrics, trend data, exposure data, or causation pathways are shown, only generation shares.

                Phrases like “ticking time bomb” evoke fear and urgency but are not grounded in the pie chart’s simple distribution of energy sources. The chart gives no indication of imminent danger.

                The story asserts that coal generation is “threatening the health… of every resident,” but the chart shows only energy shares, not pollution levels, health outcomes, or emission data. This is an unsupported causal claim.

                The statement assumes uniform, universal impact across all populations. Actual exposure varies by geography, plant location, emissions controls, and other factors. The pie chart gives no basis for a universal claim.

                A pie chart of electricity sources does not show whether Missouri's coal use is rising, falling, regulated, or being phased out. Calling it a crisis requires trend or comparative data that simply aren’t present.

                The metaphor “ticking time bomb” suggests an impending disaster or sudden collapse. A static pie chart cannot demonstrate time-based risk or suddenness.
    `,
    caption: "Pie chart showing sources of generation for Missouri. Missouri is a heavy user of coal generation.",
	story: "Missouri's massive reliance on coal is a ticking time bomb, threatening the health and future of every resident."
  },
  {
    id: 5,
    type: "Oversimplification",
    image: "/src/assets/image_5.png",
    statement: "Russia's economic issues can be boiled down solely to unemployment caused by post-Soviet transition.",
    description: `
        Oversimplification: The narrative reduces complex phenomena to single-factor explanations, uses sweeping generalizations, stereotypes, or ideological framing.

        The narrative claims that Russia's economic issues can be boiled down solely to post-Soviet transition, which is a classic single-factor explanation that doesn’t match what the chart shows. Unemployment alone cannot explain the breadth of Russia’s post-Soviet economic challenges. The story gives a sweeping conclusion that ignores other major variables, policy shocks, inflation, privatization, oil prices, and geopolitical factors.

        The phrase boiled down solely to asserts a one-cause explanation for a complex, multi-decade economic process. Russia’s post-Soviet economic trajectory involved inflation spikes, capital flight, structural reforms, oil price volatility, and institutional changes; none of which can be inferred from an unemployment chart.

        The narrative implies that post-Soviet transition caused unemployment issues. Even if unemployment is shown rising or fluctuating, the chart alone cannot establish the direction or magnitude of such causality. No confounders or other variables are mentioned.

        A chart of unemployment does not account for inflation, GDP collapse in the 1990s, commodity price swings, political instability, or institutional reforms. Ignoring these factors makes the story misleading, because many Russian economic challenges occurred independently of unemployment patterns.

        The chart shows unemployment since the fall of the USSR, the narrative may be selectively highlighting only one metric that fits a tidy narrative while ignoring other metrics (GDP, wages, poverty, industrial output). This is a hypothesized issue because the narrative doesn’t reference other data.

    `,
    caption: "Russian Unemployment Since the Fall of the Soviet Union",
    story: "Russia's economic issues can be boiled down solely to unemployment caused by post-Soviet transition."
  },
  {
    id: 6,
    type: "Oversimplification",
    image: "/src/assets/image_6.png",
    statement: "The success of desktop computers hinges entirely on the strength of the Windows OS.",
    description: `The narrative reduces complex phenomena to single-factor explanations, uses sweeping generalizations, stereotypes, or ideological framing.

                The story claims that all desktop computer success “hinges entirely” on Windows, which is far broader than what a market-share snapshot can justify.

                The chart shows market-share proportions for desktop operating systems in May 2008, likely with Windows dominating. But the story stretches that into a universal rule that desktop computing success depends entirely on Windows. A single pie chart of market share cannot establish such an absolute, single-factor explanation.

                Saying the entire success of desktop computers relies solely on the strength of the Windows OS ignores hardware design, pricing, distribution, applications, competitor ecosystems (Mac/Linux), and user preferences.

                A pie chart showing share in 2008 cannot prove causation or necessity. Market dominance ≠ sole determinant of industry success.

                Desktop OS market share is shaped by bundling practices, OEM agreements, enterprise lock-in, software ecosystems, and legacy requirements. None of which appear in the chart or narrative.

                Using a single 2008 chart to make a universal claim about “the success of desktop computers” across all time and contexts is not justified. No trend data is shown.

                Even if Windows had a dominant share, it does not follow logically that desktop computing success requires it. Market dominance does not imply essential status.
    `,
    caption: "Desktop OS market share as of May, 2008",
    story: "The success of desktop computers hinges entirely on the strength of the Windows OS."
  }
];
