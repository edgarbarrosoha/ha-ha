[[06-projects-sic-q]]

Below is a curated set of seminal works on collective intelligence (CI) and on the use of AI to enable CI at very large scale, with emphasis on platforms and deployments that have reached millions of people or have been used nationally or supra‑nationally. An artifact table summarizing titles, contributions, scale, and AI roles is embedded.

Foundational theory and measurement

- Surowiecki, The Wisdom of Crowds. Established conditions for crowd accuracy (diversity, independence, decentralization, aggregation), anchoring much of the modern CI literature (theory). (1.1)
- Hong & Page, Diversity vs. ability. Formalized the epistemic value of cognitive diversity in group problem‑solving (theory). (2.1)
- Woolley et al. and Malone, Collective intelligence factor. Demonstrated a measurable group‑level c‑factor predicting performance across tasks; later meta‑analytic support refined the construct (measurement). (3.1)
- Engelbart, Augmenting the Human Intellect. Early socio‑technical vision for augmenting “collective IQ” with interactive computing; foundational to the design of CI platforms (theory/platform foundations). (4.1)

Platforms and methods that operate at mass scale

- Wikipedia and peer production. A globally scaled, self‑organizing knowledge commons and a canonical CI platform; contemporary overviews report continual high‑velocity activity (e.g., ~1.8 edits/second, multi‑million page creation), illustrating sustained mass participation. (5.1)
- Zooniverse/Galaxy Zoo citizen science. A leading CI ecosystem engaging very large volunteer cohorts; reported to have nearly or over two million users, producing labeled data and discoveries across domains. (5.1)
- Prediction markets (Iowa Electronic Markets, etc.). Markets as CI mechanisms for forecasting; widely studied and deployed for election/economic prediction and decision support. (4.1)
- Participatory budgeting (PB). An institutionalized participatory method that has diffused to roughly 3,000 cities worldwide, demonstrating population‑scale civic input into public finance (method/platform). (4.1)
- Decidim (Barcelona and beyond). Open‑source participatory democracy infrastructure supporting proposals, consultations, and PB; Barcelona’s processes document large municipal participation figures and formalization within city governance. (4.2)

AI‑mediated collective deliberation and policy synthesis

- Pol.is and vTaiwan. Pol.is scales deliberation through statistical summarization and opinion‑space mapping; deployments span municipal and national contexts. vTaiwan, a government‑backed process in Taiwan, used Pol.is to engage over 200,000 citizens in its first five years and inform national laws; typical Pol.is engagements range from hundreds to tens of thousands of participants. (6.1, 7.1)
- Collective Dialogue Systems (CDS) overview. A synthesis of AI‑enabled functions for large‑scale public dialogue: moderation (toxic speech detection), clustering/mapping, summarization, preference aggregation, and facilitation support; reports deployments where thousands of statements and millions of votes have been processed (e.g., Polis). (8.1, 8.2, 8.3)
- Generative AI for pro‑democracy platforms. Documentation of early, practical genAI integrations for deliberation platforms: translation, toxicity flagging, drafting assistants, ML‑based summarization and visualization, and algorithmic ranking to surface consensus‑building content. (6.1, 6.2)
- AI in democratic innovations (mini‑publics and beyond). Analyses cataloguing AI functions—translation, summarization, clustering, generation of questions/counter‑arguments, and facilitation—to scale deliberation while preserving deliberative quality. (9.1)

How these strands relate at the scale of millions of citizens

- Theories of crowd accuracy and cognitive diversity (Surowiecki; Hong & Page; Woolley/Malone) underpin mass platforms such as Wikipedia and Zooniverse, which engage populations at, or easily scaling to, millions and produce data used by AI systems. (1.1, 2.1, 3.1, 5.1)
- Civic platforms and methods—PB, Decidim, and prediction markets—demonstrate institutional uptake and sustained scaling across cities and polities; they constitute building blocks for national or transnational CI. (4.1, 4.2)
- AI‑enabled CDS, notably Pol.is, have demonstrated national‑level policy impact (vTaiwan) and repeated engagements with thousands to tens of thousands of participants, processing millions of votes—suggesting pathways to organize and synthesize input from very large populations. (6.1, 8.1, 7.1)

Embedded reference table

|Category|Work (lead)|Year|Contribution|Evidence of scale|AI role|
|---|---|---|---|---|---|
|Theory|The Wisdom of Crowds — Surowiecki|2004|Identifies conditions (diversity, independence, decentralization, aggregation) under which crowds outperform individuals. (1.1)|n/a|n/a|
|Theory|Diversity vs Ability — Hong & Page|2004|Formal model showing cognitive diversity can outperform groups of highest-ability solvers under specific assumptions. (2.1)|n/a|n/a|
|Theory / Measurement|Collective intelligence factor — Woolley et al.; Malone|2010 (Woolley)|Empirical work identifying a group-level "c-factor" predicting group performance; foundation for measuring CI. (3.1, 4.2)|n/a|n/a|
|Theory / Platform foundation|Augmenting the Human Intellect — Engelbart|1962|Vision and tools to augment collective intellect; early socio-technical foundations for CI platforms. (4.1)|n/a|n/a|
|Platform (peer production)|Wikipedia / peer production (various)|ongoing|Mass peer-produced encyclopedia demonstrating large-scale knowledge aggregation and self-organization. (5.1)|"~1.8 edits/sec; >6M new pages/month" reported in overview. (5.1)|Source of large-scale human-labeled data; platform exemplar for ML training. (5.1)|
|Platform (citizen science)|Zooniverse / Galaxy Zoo (Zooniverse)|ongoing|Volunteer distributed data classification at scale (citizen science / peer production). (5.1)|"Zooniverse: nearly two million users" (5.1)|Enables ML training/augmentation workflows (human+ML). (5.1)|
|Method|Prediction markets / Iowa Electronic Markets|1980s–|Markets as information-aggregation tools for forecasting (used in political/economic prediction). (4.1)|Used in real-world forecasting contexts (historical deployments noted). (4.1)|n/a|
|Method / Practice|Participatory budgeting (global)|modern diffusion|Institutionalized mass-participation budgeting method enabling citizen input in public finance. (4.1)|"Participatory budgeting spread to ~3,000 cities worldwide." (4.1)|n/a|
|Platform (civic platform)|Decidim (Barcelona) — Barandiaran et al.|2016+|Open-source participatory democracy platform used for municipal deliberation and PB. (4.2)|Barcelona participatory budgeting: ~39,500 participants (reported). (4.2)|Platform can integrate analytical tooling; AI role not central in cited excerpt. (4.2)|
|Platform / AI-mediated deliberation|Pol.is & vTaiwan (Pol.is; vTaiwan deployments)|2014+|Statistical summarization and opinion-mapping to reveal clusters and consensus; used in national consults. (6.1, 7.1)|"Pol.is: anywhere from 100 to tens of thousands of participants"; vTaiwan engaged "over 200,000 citizens" and produced legislative outcomes. (6.1, 7.1)|Synthesis/mapping of opinions; tooling for large-scale deliberation (statistical summarization). (6.1, 7.1)|
|AI-mediated systems (survey/overview)|Collective Dialogue Systems (Goldberg et al.)|2024|Synthesizes CDS features: free-text aggregation, opinion-space mapping, moderation, summarization; documents CDS deployments and functions. (8.1, 8.2)|Notes Polis engagements: "tens of thousands"; datasets include thousands of statements and millions of votes in deployments. (8.1)|AI roles: moderation, summarization, mapping, ranking, facilitation support. (8.1)|
|AI / Generative platforms|Generative AI for pro-democracy platforms — Tsai et al.|2024|Documents early generative-AI integrations: NLP summarization, moderation aids, drafting assistants, visualization support for deliberation. (6.1)|n/a (platform-level case deployments discussed; Pol.is/others referenced). (6.1)|Generative assistance (drafting/summarization), toxic-speech flagging, translation, visualization. (6.1)|
|AI roles (design/future)|AI in deliberation functions — Ohren et al.|2026 (analysis)|Catalogues AI functions for deliberative mini-publics: translation, summarization, clustering, question/counterargument generation, facilitation. (9.1)|n/a|Lists concrete AI facilitation/synthesis roles and governance considerations. (9.1)|

Table: A compact reference table linking foundational theory, large-scale platforms/methods, and AI-mediated deliberation work; rows cite only evidence pulled from the gathered sources and report scale figures where those sources provide them.

Notes on evidence coverage and limitations

- Explicit “millions of participants” are best documented for Wikipedia and Zooniverse; CDS reports typically cite thousands to tens of thousands per engagement with repeated use across jurisdictions, rather than single events with millions, but they are integrated in national processes (e.g., vTaiwan). (5.1, 6.1, 8.1, 7.1)
- For AI roles, current evidence supports augmentation—moderation, summarization, mapping, facilitation, translation—rather than fully automated deliberation; governance and legitimacy considerations remain active research topics. (8.1, 8.2, 8.3, 9.1)

Overall, these works collectively establish the intellectual foundation (crowd accuracy, diversity, c‑factor, augmentation), demonstrate platforms and methods that have already reached mass scale (Wikipedia, Zooniverse, PB), and document AI‑enabled deliberation systems (Pol.is and broader CDS) that have operated at municipal to national levels and are designed to scale to very large populations. (1.1, 2.1, 3.1, 4.1, 5.1, 4.2, 6.1, 8.1, 7.1)

## Connections
- [[06-projects-sic-q]]
