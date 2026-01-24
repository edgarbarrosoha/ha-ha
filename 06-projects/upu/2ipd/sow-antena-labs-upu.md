## 2. STATEMENT OF WORK (SOW - Annex 2)

**Annex 2 to the Services Agreement between the Universal Postal Union and Antena Lans SC.

**Statement of Work**

**Aim of the Services**

The Contractor shall provide UI/UX design, frontend development, and deployment services to materialize the user interfaces for the upu's AI Agent suite. In this context, the Contractor shall work under the technical supervision of the Lead Architect (Edgar Barroso) and in coordination with the UDP Project Manager. The key objectives of the Services are:

1. **UI/UX Design:** Create high-fidelity, responsive, and intuitive designs for three distinct AI interaction modes (Text, Voice, and Debate) and a central landing page, aligning with upu branding.
2. **Frontend Implementation:** Develop the frontend applications using modern web technologies to interact seamlessly with the upu's agentic AI backend.
3. **Deployment:** Deploy the functional frontend applications to a production-ready environment (web), ensuring accessibility and performance.
4. **Feature Integration:** Implement specific functionality including local history saving and email sending of (single) agent interactions.

**Description of the Services**

The Contractor shall closely collaborate with UDP Lead Architect (Edgar Barroso), UDP Project Manager (José Anson), and the existing AI development team to support the following activities:

**Title:** Design, Frontend Development & Deployment Partner

**Duration & Effort:** [Start Date: e.g., 17 November 2025] – [End Date: e.g., 17 January 2026]

**Engagement Model:** Milestone-based delivery; coordinated with Lead Architect reviews.

**Key Objectives & Success Indicators**

| Obj.   | Outcome                       | KPI                                                                                                 |
| :----- | :---------------------------- | :-------------------------------------------------------------------------------------------------- |
| **O1** | **Unified Landing Page**      | Functional web portal linking to UDP and 3 agents, including FAQ section.                           |
| **O2** | **Three AI Agent Interfaces** | Deployed Text, Voice, and Debate agent interfaces with sub-second UI latency and responsive design. |
| **O3** | **Export Functionality**      | Users can successfully download (PDF/Text) or email their chat/debate conversation.                 |

**Scope of Work**

| Sprint Window | Antena Labs Activities | Key Outputs |
| :--- | :--- | :--- |
| **S1-S2** | **Design Phase & Landing Page:** UI/UX wireframing and high-fidelity design for all components. Development of the main Landing Page structure, "Three ways to interact" section, and FAQ. | UI Design Kit (Figma); Deployed Landing Page (Beta). |
| **S3-S4** | **Text & Voice Agents:** Development of the Chat Agent interface (input handling, streaming response display) and Voice Agent interface (audio visualization orb, microphone permissions, mute/share controls). | Functional Chat App; Functional Voice App; Integration with backend API. |
| **S5-S6** | **Dual-Agent (Debate) & Export:** Implementation of the multi-agent view (Left/Right agent visualization, distinct personas). Implementation of "Save to Local" and "Email History" features across all apps. | Deployed Dual-Agent App; Verified Export Features. |
| **S7** | **Refinement & Final Deployment:** UI polishing, mobile responsiveness checks, transition animations, and final deployment of all assets to the production URL. | Production Deployment; Source Code Handover. |

**Deliverables & Milestones**

| ID     | Deliverable                      | Description / Format                                                                                                                      | Due       |
| :----- | :------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| **D1** | **upu AI Landing Page**          | Web deployment of the central hub containing links to agents, UDP, and FAQ section (Blue/White theme).                                    | Sprint S2 |
| **D2** | **Text Agent App**               | Design and deployment of the text-based conversational agent interface with prompt suggestions.                                           | Sprint S4 |
| **D3** | **Voice Agent App**              | Design and deployment of the real-time voice interface featuring dynamic audio visualization (Orb) and session controls.                  | Sprint S4 |
| **D4** | **Dual-Agent Dialogue App**      | Design and deployment of the "Debate" interface featuring two distinct visual agents (2IPD vs Congress) and real-time dialogue streaming. | Sprint S6 |
| **D5** | **Interaction History Features** | Implementation of functionality allowing users to save interaction logs locally or send via email.                                        | Sprint S6 |

**Governance & Interfaces**

*   **Technical reporting line:** To UDP Lead Architect (Edgar Barroso) for design approval, API integration validation, and quality assurance.
*   **Operational coordination:** With UDP PM (José Anson) for timeline management and final acceptance.
*   **Implementation authority:** Responsible for all frontend code, CSS/Styling, and hosting configuration (e.g., Vercel/AWS Frontend) under Lead Architect supervision.
*   **Meetings:** Participates in bi-weekly design reviews and sprint planning.