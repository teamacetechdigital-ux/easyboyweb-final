export type BlogCategoryKey =
  | "mobile"
  | "website"
  | "software"
  | "ai"
  | "seo";

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; title?: string; items: string[] };

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  imageAlt: string;
  author: string;
  publishedDate: string;
  category: string;
  categoryKey: BlogCategoryKey;
  readingTime: string;
  content: BlogContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "design-secrets-for-catchy-mobile-apps",
    slug: "design-secrets-for-catchy-mobile-apps",
    title: "Design Secrets For Catchy Mobile Apps",
    excerpt:
      "Learn the design choices that make mobile apps feel polished, memorable, and easy to use from the very first tap.",
    featuredImage: "/imgs/mobileapps.jpg",
    imageAlt: "Mobile app interface mockup",
    author: "EasyBoyWeb Team",
    publishedDate: "June 18, 2026",
    category: "Mobile App Design",
    categoryKey: "mobile",
    readingTime: "6 min read",
    content: [
      { type: "paragraph", text: "A memorable mobile app starts long before the launch date. It begins with a design system that understands how people move through a screen, what they expect to see first, and how quickly they can complete a task without friction." },
      { type: "heading", text: "Make the first screen instantly understandable" },
      { type: "paragraph", text: "Most users decide in seconds whether an app feels worth their attention. That means the first screen must do three jobs immediately: orient the user, communicate value, and make the next action obvious. If your interface is cluttered, the app feels harder to trust." },
      { type: "subheading", text: "Design choices that improve clarity" },
      { type: "list", items: ["Use one clear primary action per screen.", "Keep spacing consistent so the eye can scan naturally.", "Use visual hierarchy to guide attention to the most important elements."] },
      { type: "heading", text: "Use consistency to build trust" },
      { type: "paragraph", text: "People learn quickly. Once they understand your icon language, button patterns, and colors, they can move through your app with less effort. Consistency reduces hesitation and makes the product feel more mature." },
      { type: "paragraph", text: "The best apps feel intuitive without feeling generic. They follow a clear rhythm, maintain familiar placement for key actions, and leave enough white space so users never feel crowded by information." },
      { type: "heading", text: "Turn delight into repeat usage" },
      { type: "paragraph", text: "A catchy app is not only attractive; it creates moments of confidence. Micro-interactions, proper feedback, and a clean visual flow help people feel in control. That makes the product easier to return to and easier to recommend." }
    ]
  },
  {
    id: "drive-more-traffic-to-your-website",
    slug: "drive-more-traffic-to-your-website",
    title: "Drive More Traffic To Your Website",
    excerpt:
      "A strong traffic strategy combines clear messaging, better content, and a simple customer journey that keeps people engaged.",
    featuredImage: "/imgs/website-traffic.jpg",
    imageAlt: "Website marketing strategy visual",
    author: "EasyBoyWeb Team",
    publishedDate: "May 14, 2026",
    category: "Web Strategy",
    categoryKey: "website",
    readingTime: "5 min read",
    content: [
      { type: "paragraph", text: "More website traffic does not begin with a large ad budget. It starts with making the website easier to understand and easier to trust. When visitors feel aligned with your offer, they are more likely to stay, click, and convert." },
      { type: "heading", text: "Focus on intent, not just volume" },
      { type: "paragraph", text: "Traffic quality matters more than raw numbers. A more targeted audience often brings a higher return than a broad audience that never engages. This is why clear positioning is so important in every page title, heading, and call to action." },
      { type: "list", items: ["Make your value proposition visible above the fold.", "Align content with the real questions your target customers ask.", "Use landing pages that guide visitors to a specific next step."] },
      { type: "heading", text: "Improve the journey after the click" },
      { type: "paragraph", text: "Visitors often leave because the page feels slow, confusing, or too generic. A clean page layout, readable typography, and immediate proof of value can reduce friction. Thoughtful calls to action keep momentum high once the user has arrived." },
      { type: "paragraph", text: "The most effective traffic strategies combine a smart acquisition plan with a strong on-page experience. Without both, you are creating attention without conversion." }
    ]
  },
  {
    id: "building-mobile-apps-from-idea-to-launch",
    slug: "building-mobile-apps-from-idea-to-launch",
    title: "Building Mobile Apps From Idea To Launch",
    excerpt:
      "A clear mobile app roadmap helps teams balance user value, product decisions, and launch readiness without losing momentum.",
    featuredImage: "/imgs/BuildingMobileApps.jpg",
    imageAlt: "Mobile app planning and product strategy",
    author: "EasyBoyWeb Team",
    publishedDate: "April 28, 2026",
    category: "Mobile Product Strategy",
    categoryKey: "mobile",
    readingTime: "7 min read",
    content: [
      { type: "paragraph", text: "The best mobile apps start with a practical path from early concept to launch. Teams that define the product vision early are easier to align around decisions, technical trade-offs, and customer value." },
      { type: "heading", text: "Define the real problem before design work starts" },
      { type: "paragraph", text: "Users do not adopt apps because they are feature-rich; they adopt them because they solve a recurring problem in a way that feels simple and dependable. Product strategy should be driven by that need first." },
      { type: "list", items: ["Clarify the user problem and target audience.", "Map essential user flows before development begins.", "Prioritize launch-ready features over decorative extras."] },
      { type: "heading", text: "Create a launch plan, not just a product plan" },
      { type: "paragraph", text: "Strong mobile teams plan for feedback loops, app store readiness, testing, and post-launch iteration. That keeps product quality high and reduces last-minute surprises before the public release." }
    ]
  },
  {
    id: "improve-mobile-app-ux",
    slug: "improve-mobile-app-ux",
    title: "Simple Tricks To Improve Your App's UX",
    excerpt:
      "Great mobile UX often comes from small, thoughtful improvements that reduce friction and create a smoother day-to-day experience.",
    featuredImage: "/imgs/App's UX.jpg",
    imageAlt: "UX process and mobile app layout",
    author: "EasyBoyWeb Team",
    publishedDate: "March 25, 2026",
    category: "User Experience",
    categoryKey: "mobile",
    readingTime: "4 min read",
    content: [
      { type: "paragraph", text: "A polished app experience is built through careful decisions that make routines easier. People do not want to learn your product every time they open it. They want a few clear steps and predictable results." },
      { type: "heading", text: "Simplify the path to the core action" },
      { type: "paragraph", text: "Your primary action should be obvious and easy to reach. If people must search or decode the layout before doing the main thing, the product will feel heavier than necessary." },
      { type: "list", items: ["Reduce unnecessary steps in the primary flow.", "Use familiar patterns for navigation and form elements.", "Keep important actions visible without overwhelming the screen."] },
      { type: "heading", text: "Give feedback early and often" },
      { type: "paragraph", text: "Users feel more confident when the app acknowledges progress. Loading states, confirmation messages, and clear error handling reassure people that the system is working, even if something temporary goes wrong." }
    ]
  },
  {
    id: "understanding-custom-software-development",
    slug: "understanding-custom-software-development",
    title: "Understanding Custom Software Development",
    excerpt:
      "Custom software gives growing businesses the flexibility to improve workflows, automate tasks, and create more efficient operations.",
    featuredImage: "/imgs/Custom-Software-Development.jpg",
    imageAlt: "Custom software dashboard illustration",
    author: "EasyBoyWeb Team",
    publishedDate: "February 11, 2026",
    category: "Custom Software",
    categoryKey: "software",
    readingTime: "8 min read",
    content: [
      { type: "paragraph", text: "Not every business process fits inside a generic tool. Custom software development exists to solve that challenge. Instead of forcing teams to adapt to a limited system, custom tools are designed around the exact operations that matter most." },
      { type: "heading", text: "When custom software makes sense" },
      { type: "paragraph", text: "Custom solutions become more valuable when a business has multiple steps, unique workflows, or data that needs to move across tools in a specific way. In those cases, off-the-shelf tools often create gaps that slow teams down." },
      { type: "list", items: ["Manual work gets repeated across departments.", "The team is customizing processes around limitations in software.", "The business needs more visibility into internal operations."] },
      { type: "heading", text: "Build for growth, not just the current process" },
      { type: "paragraph", text: "A well-designed custom system should scale with the business. It should be easy to update as new departments, customers, or regulations appear. That flexibility is where custom software gains lasting value." }
    ]
  },
  {
    id: "automated-seo-for-social-media",
    slug: "automated-seo-for-social-media",
    title: "Ways To Use Automated SEO For Social Media",
    excerpt:
      "Automation can support SEO work across content planning, visibility, and optimization so teams keep a consistent publishing rhythm.",
    featuredImage: "/imgs/Automated SEO.jpg",
    imageAlt: "Social media SEO strategy illustration",
    author: "EasyBoyWeb Team",
    publishedDate: "January 22, 2026",
    category: "SEO & Automation",
    categoryKey: "seo",
    readingTime: "6 min read",
    content: [
      { type: "paragraph", text: "SEO and social media are often treated as separate channels, but they support each other in powerful ways. When content is aligned with search intent and supported by consistent publishing, a business gains stronger visibility across the buyer journey." },
      { type: "heading", text: "Use automation to stay consistent" },
      { type: "paragraph", text: "The biggest challenge for many teams is not strategy; it is consistency. Automated SEO workflows help flag keyword opportunities, monitor content performance, and suggest updates before traffic begins to drop." },
      { type: "list", items: ["Repurpose top-performing content into multiple formats.", "Track content performance from search and social trends.", "Refresh older posts with new keywords and updated insights."] },
      { type: "heading", text: "Keep the human layer in place" },
      { type: "paragraph", text: "Automation should support decision-making, not replace it. The best teams review data, refine messaging, and ensure the final content still sounds natural and relevant to real people." }
    ]
  },
  {
    id: "better-software-design",
    slug: "better-software-design",
    title: "Effective Tips For Better Software Design",
    excerpt:
      "Strong software design balances usability, maintainability, and business value so the product stays useful as it evolves.",
    featuredImage: "/imgs/Better Software Design.jpg",
    imageAlt: "Software design interface and workflow",
    author: "EasyBoyWeb Team",
    publishedDate: "December 17, 2025",
    category: "Software Design",
    categoryKey: "software",
    readingTime: "7 min read",
    content: [
      { type: "paragraph", text: "Software design is not just about layout or aesthetics. It is about making a system understandable, maintainable, and reliable for the people who depend on it every day." },
      { type: "heading", text: "Design for clarity before scale" },
      { type: "paragraph", text: "A product can be fast and feature-rich, but if the core flow is confusing, the experience will eventually break down. Clear interfaces and clean logic create a more resilient system over time." },
      { type: "list", items: ["Map the user journey before building broader features.", "Limit hidden decisions by showing clear statuses.", "Reduce duplicated logic where the system can be simplified."] },
      { type: "heading", text: "Keep the long-term view in mind" },
      { type: "paragraph", text: "Good software design anticipates future changes. Teams that make choices with maintainability in mind spend less time fighting technical debt and more time delivering value to customers." }
    ]
  },
  {
    id: "ai-mobile-app-solutions",
    slug: "ai-mobile-app-solutions",
    title: "AI Revolution: Supercharge Your Mobile App",
    excerpt:
      "Artificial intelligence can make apps more adaptive, personalized, and efficient, while helping teams serve customers faster.",
    featuredImage: "/imgs/AI Revolution.jpg",
    imageAlt: "AI mobile app concept",
    author: "EasyBoyWeb Team",
    publishedDate: "November 8, 2025",
    category: "AI Development",
    categoryKey: "ai",
    readingTime: "5 min read",
    content: [
      { type: "paragraph", text: "AI is no longer limited to futuristic use cases. It is becoming practical in everyday product experiences, from personalization and customer support to smarter workflows inside the app itself." },
      { type: "heading", text: "Look for high-value problem areas" },
      { type: "paragraph", text: "The most successful AI features solve specific problems for users instead of layering generic automation onto every screen. This means teams should identify moments where guidance, summarization, or prediction produces a real time savings." },
      { type: "list", items: ["Support faster customer response times.", "Personalize recommendations based on real behavior.", "Reduce repetitive work for staff and customers."] },
      { type: "heading", text: "Create trust through transparency" },
      { type: "paragraph", text: "Users respond well to AI when it feels helpful and predictable. Clear labels, meaningful defaults, and thoughtful human override points help the feature feel supportive rather than intrusive." }
    ]
  },
  {
    id: "smarter-mobile-apps-with-ai",
    slug: "smarter-mobile-apps-with-ai",
    title: "How AI Can Make Your Mobile App Smarter",
    excerpt:
      "Smart apps use AI to simplify decision-making, improve personalization, and create a more relevant experience for each user.",
    featuredImage: "/imgs/Your Mobile App Smarter.jpg",
    imageAlt: "Mobile app personalization with AI",
    author: "EasyBoyWeb Team",
    publishedDate: "October 2, 2025",
    category: "AI Product Strategy",
    categoryKey: "ai",
    readingTime: "6 min read",
    content: [
      { type: "paragraph", text: "One of the biggest benefits of AI is that it helps software adapt to user behavior. Instead of offering the same path to everyone, a smarter app can recognize patterns and respond to what matters most for each person." },
      { type: "heading", text: "Personalization should add value" },
      { type: "paragraph", text: "Users are most receptive to personalization when it feels useful. That could be a better recommendation, a more relevant dashboard, or a faster decision-support workflow based on prior actions." },
      { type: "list", items: ["Tailor the experience to customer goals and usage patterns.", "Use AI to highlight what matters most in real time.", "Keep the experience human-centered and transparent."] },
      { type: "heading", text: "Smart is not always complex" },
      { type: "paragraph", text: "A smarter app does not need dozens of intricate features. Often it is the smaller, more contextual improvements that create the biggest difference in how people experience the product day to day." }
    ]
  },
  {
    id: "top-tools-for-building-mobile-apps",
    slug: "top-tools-for-building-mobile-apps",
    title: "Top Tools For Building Mobile Apps",
    excerpt:
      "From design workflows to testing and deployment, the right stack can accelerate product quality and reduce delivery risk.",
    featuredImage: "/imgs/Top Tools for Building Mobile Apps.jpg",
    imageAlt: "Software development tools workspace",
    author: "EasyBoyWeb Team",
    publishedDate: "April 9, 2026",
    category: "Mobile App Development",
    categoryKey: "mobile",
    readingTime: "7 min read",
    content: [
      { type: "paragraph", text: "Choosing the right tools for a mobile app project depends on the experience you want to create, the timeline you need to meet, and the technical complexity of the product. The goal is not to collect the latest trend, but to build a clear, sustainable workflow." },
      { type: "heading", text: "Start with design and product planning" },
      { type: "paragraph", text: "Before writing code, teams need a shared understanding of the app's purpose, user journey, and success metrics. Tools that help map screens and priorities help everyone stay aligned as the product evolves." },
      { type: "subheading", text: "Useful early-stage tools" },
      { type: "list", items: ["Wireframing tools for UX planning.", "Design systems for consistent visual patterns.", "Collaborative planning boards for backlog and priorities."] },
      { type: "heading", text: "Build for real-world testing" },
      { type: "paragraph", text: "A reliable development workflow includes testing, monitoring, and feedback loops. During launch and post-launch phases, teams need data about crashes, performance, and adoption so they can refine the app instead of guessing." }
    ]
  }
];