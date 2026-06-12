/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserProfile, Service, Project, Article, Skill } from './types';

export const INITIAL_PROFILE: UserProfile = {
  name: 'John Carter',
  title: 'Web Designer',
  location: 'New York',
  bio: 'Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices nulla sed doler.',
  avatarMood: 'creative',
  experienceYears: 15,
  completedProjects: 100,
  aboutIntro: 'Who\'s behind all this great work?',
  aboutBody: 'Eu pellentesque arcu ornare velit faucibus egestas gravida sed in purus enim molestie gravida imperdiet integer.',
  email: 'john.carter@example.com',
  githubUrl: 'https://github.com',
  twitterUrl: 'https://twitter.com',
};

export const INITIAL_SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Web design',
    description: 'Lacus adipiscing lectus convallis purus aliquet cursus magnaol dolori montes augue donec cras.',
    type: 'web',
    accentColor: '#3B82F6', // Blue
  },
  {
    id: 's2',
    title: 'UI/UX design',
    description: 'Arcu venenatis sit nullam pellentesq varius urna non sed aliquam colemir imperdiet amet imperdiet.',
    type: 'uiux',
    accentColor: '#FF6B6B', // Coral/Pink-Red
  },
  {
    id: 's3',
    title: 'Product design',
    description: 'Arcu venenatis sit nullam pellentesq varius urna non sed aliquam colemir imperdiet amet imperdiet.',
    type: 'product',
    accentColor: '#4ADE80', // Lime Green
  },
];

export const INITIAL_SKILLS: Skill[] = [
  { name: 'Tailwind CSS', level: 95, category: 'Design & Code' },
  { name: 'React (Vite)', level: 90, category: 'Design & Code' },
  { name: 'UI Wireframing', level: 85, category: 'Design & UX' },
  { name: 'Figma Prototyping', level: 92, category: 'Design & UX' },
  { name: 'Motion Orchestration', level: 80, category: 'Engineering' },
  { name: 'Industrial Layouts', level: 75, category: 'Product' },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Web Design Workspaces',
    description: 'A beautiful cartoon-style browser sandbox where users can orchestrate content layouts interactively.',
    category: 'Web design',
    tags: ['React', 'Tailwind', 'SVG Rendering'],
    featured: true,
    imageColor: '#F3F4F6',
    challenge: 'Recreating interactive responsive browser containers with absolute CSS precision while avoiding rendering bottlenecks.',
    solution: 'Engineered a vector-drawn responsive browser component equipped with mock developer tools and coordinate grids.',
  },
  {
    id: 'p2',
    title: 'Mobile Wallet UI/UX Wireframe',
    description: 'A touch-friendly, high-contrast prototype featuring pixel-perfect hardware alignment and vibrant colors.',
    category: 'UI/UX design',
    tags: ['Mobile UX', 'Vector Art', 'Gestures'],
    featured: true,
    imageColor: '#F3F4F6',
    challenge: 'Balancing full tactile ease on modern round-corner, notch devices while displaying extensive real-time charts.',
    solution: 'Designed an optimal grid pattern combining strict 44px margins and playful floating card notifications overlay.',
  },
  {
    id: 'p3',
    title: 'Chronos Wearable Platform',
    description: 'A smartwatch operating system tailored for responsive alignment guides, featuring built-in micro widgets.',
    category: 'Product design',
    tags: ['Hardware UI', 'Smartwatch', 'Physical Design'],
    featured: true,
    imageColor: '#F3F4F6',
    challenge: 'Formulating fluid rendering parameters that cleanly adjust when the round smartwatch body shifts or rotates.',
    solution: 'Engineered radial alignment libraries alongside tactile bezel scroll interaction simulations.',
  },
  {
    id: 'p4',
    title: 'Sleek E-Commerce Experience',
    description: 'A modern merchant workspace highlighting neo-brutalist shadows, robust item details, and quick interactions.',
    category: 'Web design',
    tags: ['E-Commerce', 'Cart Mock', 'Web Design'],
    featured: false,
    imageColor: '#FFC043',
    challenge: 'Providing instant inventory updates without spoiling the playful comic art-style visual interface.',
    solution: 'Constructed custom shadow animations mapping cart triggers with elastic spring behaviors.',
  },
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'The Rise of Playful Neo-Brutalist Architecture in Digital UI',
    summary: 'Why are modern designers ditching soft shadows and gradient meshes for bold black outlines, vibrant accents, and human-crafted illustration styles?',
    content: `## The Rise of Playful Modern Web Design

For the past decade, digital layout styling has been dominated by extreme minimalism. Soft, borderless card designs, subtle grays, linear gradients, and clean standard system fonts took over every software interface. While highly functional, this created a sea of visual sameness where starting a banking app felt exactly like browsing an e-learning dashboard or scheduling a meeting.

But in recent seasons, a quiet, playful counter-movement has emerged: **Neo-Brutalist Cartoon Styling**. Inspired by classic print design, comic strips, and vintage handbooks, this approach rejects digital pre-render defaults and embraces authentic design choices directly.

### Core Features of this Paradigm
1. **Thick Black Boundaries**: Rather than omitting outlines, structures are proudly framed in solid black (\`border-4 border-black\`). This adds structural clarity and references classic analog cartoons.
2. **Solid Shadows**: Instead of soft, fuzzy dropshadows that attempt to mock real physical lights, brutalism uses solid, fully saturated offsets (such as \`shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]\`). It provides a tactile, pop-art depth.
3. **High-Contrast Typography**: Massive, ultra-bold font styles paired with clean, monospaced letters. Highly legible, and highly intentional.
4. **Vibrantly Saturated Highlights**: Instead of generic primary-corporate blue, interfaces inject pure corals, butter yellows, vibrant lime greens, and neon blues as background highlighters!

### Why It Resonates
In an age of automated layout engines and pre-packaged templates, bold design feels remarkably authentic. It reminds users that behind the screens, a funny, creative human designed this workspace. It brings personality back to software engineering!`,
    date: '2026-06-10',
    readTime: '4 min read',
    likes: 42,
    tags: ['Brutalisim', 'UI/UX Design', 'Trends'],
    comments: [
      {
        id: 'c1',
        author: 'Aris Thorne',
        content: 'This feels incredibly fresh compared to the same old boring SaaS dashboards!',
        date: '2026-06-11 10:15',
      },
      {
        id: 'c2',
        author: 'Sarah Chen',
        content: 'Love the solid shadow trick. Applying this to my side projects immediately.',
        date: '2026-06-11 14:32',
      },
    ],
  },
  {
    id: 'a2',
    title: 'Tailwind CSS Secrets for Absolute Contrast Component Drafting',
    summary: 'A step-by-step masterclass on orchestrating thick borders, customizable offsets, and responsive grid layouts without breaking standard Tailwind styles.',
    content: `## Designing High-Contrast Interfaces and Components

Crafting a robust Neo-brutalist or Comic art styling isn\'t just about slapping black borders on elements. It requires rigorous spacing rules, strict typography sizes, and meticulous alignment consistency.

### 1. Harnessing Tailwind Dynamic Shadow Offsets
Standard dropshadow utilities in frameworks represent soft gradients. To build the solid, tactile "Gumroad-style" offset shadow, utilize Tailwind\'s arbitrary shadow property:
\`\`\`html
<div class="bg-white border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
  <!-- Content -->
</div>
\`\`\`

Notice the smooth transition: as the user hovers, the card shifts slightly upward (\`translate-x-[-2px] translate-y-[-2px]\`) while the shadow depth increases, creating a beautiful lever interaction.

### 2. The Power of Text Highlights
As seen in John Carter\'s hero layout, we can use background highlighters to emphasize specific phrases. Simply wrap the text in a colored container with explicit padding:
\`\`\`html
<span class="bg-[#FF6B6B] text-white px-2 py-0.5 rounded-sm">Web Designer</span>
\`\`\`

### 3. Sizing Guidelines for Accessibility
High contrast demands rich sizing variations to build a clear informational hierarchy. Avoid placing tight text near thick borders. Generous padding (\`p-6\` or \`p-8\`) keeps layouts breathing while preserving that bold, impact-driven cartoon aesthetic!`,
    date: '2026-05-24',
    readTime: '6 min read',
    likes: 31,
    tags: ['Tailwind', 'CSS', 'Tutorial'],
    comments: [
      {
        id: 'c3',
        author: 'Marcus Lin',
        content: 'Simple yet brilliant implementation instructions. The hover scaling transitions look super smooth.',
        date: '2026-05-25 09:20',
      },
    ],
  },
  {
    id: 'a3',
    title: 'Wristware Constraints: Tactile Engineering for Wearable Screens',
    summary: 'A look into how smartwatches and small responsive hardware displays force designers to reconsider padding, boundaries, and scrolling states.',
    content: `## Designing UI Landscapes for Wearable Technology

Smartwatch platforms and small, rounded hardware accessories offer a exciting set of layout constraints. When designing screen mockups, specific spatial physics must be respected.

### The Round-Screen Dilemma
Unlike standard flat rectangular displays, round wearables clip contents approaching the coordinates' edges. This forces several layout principles:
- **Radial Alignment Guide**: Core focal points should sit firmly in the horizontal center.
- **Strict Bezel Margins**: Avoid locking small clickable elements in corners.
- **Dynamic Scale Adjustments**: Text lines nearing boundaries can scale down, or transition from multi-column configurations to stacked single lines.

Integrating a tactile vertical measuring rule (like the ruler component featured in John's Product design preview!) lets users physically measure layouts relative to pixels, helping translate standard concepts into tactile hardware realities natively!`,
    date: '2026-04-15',
    readTime: '5 min read',
    likes: 27,
    tags: ['Product Design', 'Smartwatch', 'Hardware'],
    comments: [],
  },
];
