import type { DocumentDefinition } from "@/data/types";

export const ingoudePitchDeckDocument = {
  meta: {
    id: "ingoude-pitch-deck",
    title: "Ingoude Company Pitch Deck",
    description:
      "Twelve-slide pitch deck imported from the white, red, and black minimalist company presentation PDF.",
    updatedAt: "2026-02-21",
    tags: ["pitch-deck", "company", "pdf-import"],
  },
  theme: {
    background: "#f4f2f0",
    surface: "#ffffff",
    ink: "#1f1f1f",
    muted: "#4f4f4f",
    accent: "#b22222",
    line: "#d8d8d8",
    wave: "#9b1c1c",
    blob: "#f0d8d8",
    pillText: "#ffffff",
  },
  slides: [
    {
      id: "cover",
      blocks: [
        {
          type: "heroCover",
          title: "Pitch Deck",
          subtitle: "INGOUDE COMPANY",
          byline: "BY HARPER RUSSO",
          year: "2026",
        },
      ],
    },
    {
      id: "table-of-contents",
      blocks: [
        {
          type: "trackerTable",
          heading: "Table of Contents",
          columns: ["NO", "TOPIC", "DESCRIPTION", "PAGE", "SECTION"],
          rows: [
            ["01", "About Us", "Company snapshot", "3", "Overview"],
            ["02", "The Problem", "Core pain points", "4", "Context"],
            ["03", "Our Solution", "Product direction", "5", "Strategy"],
            ["04", "Market Opportunity", "Demand indicators", "6", "Market"],
            ["05", "Why Now", "Timing rationale", "7", "Market"],
            ["06", "Product Overview", "Value summary", "8", "Product"],
            ["07", "Key Features", "Capability details", "9", "Product"],
            ["08", "Business Model", "Revenue structure", "10", "Financial"],
            ["09", "Roadmap", "Quarterly plan", "11", "Execution"],
          ],
        },
      ],
    },
    {
      id: "about-us",
      blocks: [
        {
          type: "threePillColumns",
          heading: "About Us",
          columns: [
            {
              label: "Established",
              body: "Founded in 2023 with a mission to modernize operational software for industry-specific teams.",
            },
            {
              label: "Clients",
              body: "150 client organizations trust our products to streamline operations and improve outcomes.",
            },
            {
              label: "Members",
              body: "30 team members across product, engineering, and customer operations build and support the platform.",
            },
          ],
        },
      ],
    },
    {
      id: "the-problem",
      blocks: [
        {
          type: "threePillColumns",
          heading: "The Problem",
          columns: [
            {
              label: "Fragmented Tools",
              body: "Teams rely on disconnected applications that force duplicate work and reduce visibility across processes.",
            },
            {
              label: "Outdated Systems",
              body: "Legacy platforms do not fit modern workflows, increasing maintenance burden and slowing decisions.",
            },
            {
              label: "Slow Progress",
              body: "Manual operations create inefficiencies, compliance risk, and missed opportunities to optimize performance.",
            },
          ],
        },
      ],
    },
    {
      id: "our-solution",
      blocks: [
        {
          type: "threePillColumns",
          heading: "Our Solution",
          columns: [
            {
              label: "Operational Fit",
              body: "Industry-focused product design matches real workflows, user behavior, and regulatory constraints.",
            },
            {
              label: "Faster Deployment",
              body: "Purpose-built configuration and templates reduce implementation time and onboarding effort.",
            },
            {
              label: "Higher Retention",
              body: "Teams adopt the platform quickly and sustain usage due to practical daily value.",
            },
          ],
        },
      ],
    },
    {
      id: "market-opportunity",
      blocks: [
        {
          type: "threePillColumns",
          heading: "Market Opportunity",
          columns: [
            {
              label: "Focused Segments",
              body: "Specialized vertical markets with shared operational pain points remain underserved by generic software.",
            },
            {
              label: "Switching Demand",
              body: "Operators are actively looking to replace rigid systems that no longer support current requirements.",
            },
            {
              label: "Low Digital Penetration",
              body: "Large portions of the target market still run on manual or semi-digital processes.",
            },
          ],
        },
      ],
    },
    {
      id: "why-now",
      blocks: [
        {
          type: "threePillColumns",
          heading: "Why Now",
          columns: [
            {
              label: "Cloud Maturity",
              body: "Infrastructure now supports secure, scalable delivery for complex, operations-heavy software products.",
            },
            {
              label: "Mobile Access",
              body: "Field and on-site teams expect mobile-first workflows for real-time updates and decisions.",
            },
            {
              label: "Remote Operations",
              body: "Distributed work has increased demand for centralized systems that eliminate information silos.",
            },
          ],
        },
      ],
    },
    {
      id: "product-overview",
      blocks: [
        {
          type: "numberedTwoColumnList",
          heading: "Product Overview",
          items: [
            "Intuitive user experience with minimal training requirements",
            "Customizable modules aligned to operational workflows",
            "Role-based views for managers, operators, and admins",
            "Fast setup with deployment-ready configuration templates",
            "Daily task support with real-time status visibility",
            "Built-in governance to maintain process consistency",
          ],
        },
      ],
    },
    {
      id: "key-features",
      blocks: [
        {
          type: "numberedTwoColumnList",
          heading: "Key Features",
          items: [
            "Workflow automation",
            "Compliance monitoring",
            "Mobile-friendly interface",
            "Real-time data access",
            "Configurable workflow rules",
            "Team-level permission controls",
          ],
        },
      ],
    },
    {
      id: "business-model",
      blocks: [
        {
          type: "threePillColumns",
          heading: "Business Model",
          columns: [
            {
              label: "Subscription Licensing",
              body: "Recurring pricing tiers based on usage scope, number of users, and optional industry modules.",
            },
            {
              label: "Modular Add-ons",
              body: "Optional feature packages allow clients to expand capability based on specific operational needs.",
            },
            {
              label: "Integration Services",
              body: "Support packages minimize disruption while accelerating return on investment for enterprise customers.",
            },
          ],
        },
      ],
    },
    {
      id: "roadmap",
      blocks: [
        {
          type: "trackerTable",
          heading: "Roadmap",
          columns: ["QUARTER", "FOCUS", "DELIVERABLE", "OUTCOME", "STATUS"],
          rows: [
            [
              "Q1",
              "Platform foundation",
              "Essential feature set and pilot deployment",
              "Early validation with launch customers",
              "Planned",
            ],
            [
              "Q2",
              "Optional add-ons",
              "Performance and scalability improvements",
              "Wider fit across use cases",
              "Planned",
            ],
            [
              "Q3",
              "System integrations",
              "Business system connectors and data sync",
              "Reduced manual handoffs",
              "Planned",
            ],
            [
              "Q4",
              "Workspace collaboration",
              "Sharing controls and enhanced reporting",
              "Better cross-team planning",
              "Planned",
            ],
          ],
        },
      ],
    },
    {
      id: "end",
      blocks: [
        {
          type: "heroCover",
          title: "The End",
          subtitle: "INGOUDE COMPANY",
          byline: "BY HARPER RUSSO",
          year: "Thank You",
        },
      ],
    },
  ],
} satisfies DocumentDefinition;
