import type { DocumentDefinition } from "@/data/types";

export const marketingProposalDocument = {
  meta: {
    id: "marketing-proposal",
    title: "Marketing Proposal",
    description:
      "Organic style proposal sample that demonstrates reusable print-ready slide layouts.",
    updatedAt: "2026-02-21",
    tags: ["sample", "proposal", "print-ready"],
  },
  theme: {
    background: "#ece7df",
    surface: "#f5f1eb",
    ink: "#3f2a1a",
    muted: "#5c4b3f",
    accent: "#9a785d",
    line: "#cbb9a8",
    wave: "#97775d",
    blob: "#dbcabe",
    pillText: "#f5f1eb",
  },
  slides: [
    {
      id: "cover",
      blocks: [
        {
          type: "heroCover",
          title: "Marketing",
          subtitle: "PROPOSAL",
          byline: "BY OLIVIA WILSON",
          year: "2030",
        },
      ],
    },
    {
      id: "about",
      blocks: [
        {
          type: "aboutOvalProfile",
          heading: "About Me",
          paragraphs: [
            "Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua.",
            "Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua.",
          ],
          image: {
            src: "/images/people/1-v20260222.png",
            alt: "Profile image",
          },
        },
      ],
    },
    {
      id: "team",
      blocks: [
        {
          type: "teamCircleProfiles",
          heading: "Our Team",
          members: [
            {
              name: "Hannah",
              role: "Designer",
              image: {
                src: "/images/people/2-v20260222.png",
                alt: "Team member Hannah",
              },
            },
            {
              name: "Olivia Wilson",
              role: "Creator",
              image: {
                src: "/images/people/3-v20260222.png",
                alt: "Team member Olivia Wilson",
              },
            },
            {
              name: "Kimberly",
              role: "Designer",
              image: {
                src: "/images/people/4-v20260222.png",
                alt: "Team member Kimberly",
              },
            },
            {
              name: "Hannah Morales",
              role: "Creator",
              image: {
                src: "/images/people/5-v20260222.png",
                alt: "Team member Hannah Morales",
              },
            },
          ],
        },
      ],
    },
    {
      id: "portfolio",
      blocks: [
        {
          type: "portfolioImageCollage",
          heading: "Portfolio",
          paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ],
          images: {
            topLeft: {
              src: "/images/products/1.png",
              alt: "Product image 1",
            },
            bottomLeft: {
              src: "/images/products/2.png",
              alt: "Product image 2",
            },
            rightTall: {
              src: "/images/products/3.png",
              alt: "Product image 3",
            },
          },
        },
      ],
    },
    {
      id: "vision-values",
      blocks: [
        {
          type: "threePillColumns",
          heading: "Our Vision & Values",
          columns: [
            {
              label: "Mission",
              body: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua. Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor.",
            },
            {
              label: "Vision",
              body: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua. Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor.",
            },
            {
              label: "Values",
              body: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua. Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor.",
            },
          ],
        },
      ],
    },
    {
      id: "services",
      blocks: [
        {
          type: "numberedTwoColumnList",
          heading: "Our Services",
          items: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
          ],
        },
      ],
    },
    {
      id: "delivery-tracker",
      blocks: [
        {
          type: "trackerTable",
          heading: "Project Delivery Tracker",
          columns: [
            "PHASE",
            "TASK / DELIVERABLE",
            "DESCRIPTION",
            "EXPECTED DELIVERY",
            "ASSIGNED TO",
          ],
          rows: [
            [
              "Phase 01",
              "Research & Planning",
              "Collect references, set goals, and define project scope.",
              "Oct 25, 2035",
              "Team A",
            ],
            [
              "Phase 02",
              "Concept Development",
              "Create initial drafts, color palette, and moodboard.",
              "Oct 26, 2035",
              "Team B",
            ],
            [
              "Phase 03",
              "Design Execution",
              "Develop visuals, structure layouts, and final compositions.",
              "Oct 31, 2035",
              "Team C",
            ],
            [
              "Phase 04",
              "Review & Adjustments",
              "Collect feedback and apply revisions.",
              "Nov 6, 2035",
              "Project Lead",
            ],
          ],
        },
      ],
    },
  ],
} satisfies DocumentDefinition;
