import { Service, Project, Review, TestimonialVideo } from "./types";

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Bespoke corporate platforms engineered with premium performance, lightning-fast response times, and jaw-dropping premium visual design.",
    iconName: "Code",
    detailedPoints: ["NextJS & React production-ready setups", "Fully optimized core web vitals", "Bespoke layouts tailored to brand guidelines", "Fluid animation flows"]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Stores",
    description: "High-converting online flagships with custom secure payment gates, intelligent cart routing, and frictionless mobile checkouts.",
    iconName: "ShoppingBag",
    detailedPoints: ["Shopify headless & custom builds", "Dynamic product catalog engines", "Apple Pay & Stripe high-speed integrations", "Inventory synchronization stubs"]
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "Hyper-focused, single-page funnels designed with premium typography and strict psychological triggers to scale conversions.",
    iconName: "Target",
    detailedPoints: ["Ultra-focused interactive forms", "Clear high-contrast call-to-actions", "A/B structure ready elements", "Optimized mobile scroll sequences"]
  },
  {
    id: "business-sites",
    title: "Business Websites",
    description: "Authoritative virtual headquarters for modern startups and premium enterprises that demand trust, clarity, and status.",
    iconName: "Briefcase",
    detailedPoints: ["Modern corporate identity layouts", "Multi-page SEO-structured blogs", "Secure document portals", "Dynamic team & careers sections"]
  },
  {
    id: "portfolios",
    title: "Portfolio Websites",
    description: "Creative, digital galleries for architects, agencies, designers, and executives wanting to display work with artistic pride.",
    iconName: "Layers",
    detailedPoints: ["Masonry and horizontal grid systems", "Immersive parallax image reveals", "Interactive client project breakdowns", "Minimalist, fluid contact gateways"]
  },
  {
    id: "custom-coding",
    title: "Custom Coding",
    description: "Tailored API development, CRM system automation, database architectures, and custom full-stack solutions built to scale.",
    iconName: "Cpu",
    detailedPoints: ["Highly secure backend API routing", "Node.js & Python database scripting", "Legacy system modern refactoring", "Robust automated background tasks"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "restaurant-1",
    title: "Tasty Bite Restaurant",
    category: "Restaurant & Delivery Website",
    description: "An elegant, high-performance digital menu and table reservation platform. Custom-tailored for a high-status dining experience with lightning-fast menu browsing and friction-free direct mobile booking.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
    demoUrl: "restaurant",
    businessResult: "+35% More Online Orders",
    technologies: ["React", "Tailwind CSS", "Mobile First", "SEO Ready", "Fast Loading"],
    caseStudy: {
      problem: "Tasty Bite was paying massive 20-30% commissions to third-party food portals. Their legacy website was extremely slow on mobile, leading to lost reservations and abandoned online orders during peak evening hours.",
      solution: "We engineered a clean, high-performance React storefront with an interactive, instant-loading digital menu, simple 3-tap table reservation, and full SEO optimization for local search discoverability.",
      results: [
        "+35% increase in direct, commission-free online food orders",
        "Average mobile page load time decreased to 0.4 seconds",
        "Over 320+ automatic table reservations booked in the first month",
        "Ranked #1 on Google for local dining search queries in the target area"
      ]
    }
  },
  {
    id: "clinic-2",
    title: "CarePlus Medical Clinic",
    category: "Doctor Appointment Platform",
    description: "A highly trusted and professional medical portal. Built with an intuitive patient scheduling wizard, live doctor availability calendars, and a modern, reassuring healthcare interface.",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
    demoUrl: "doctor",
    businessResult: "+40% Appointment Requests",
    technologies: ["React", "Tailwind CSS", "Mobile First", "SEO Ready", "Fast Loading"],
    caseStudy: {
      problem: "CarePlus Clinic faced heavy receptionist overhead and constant patient complaints due to double-booked appointments and long wait times over the phone.",
      solution: "We designed a distraction-free, Apple-style appointment booking wizard. It integrates real-time specialist schedules, instant status SMS triggers, and a lightweight, reassuring color palette that fosters patient trust.",
      results: [
        "+40% increase in monthly appointment requests booked digitally",
        "Receptionist phone load reduced by 50%, freeing up staff for patient care",
        "No-show rate reduced to under 4% via automatic booking reminders",
        "Patients rated the booking experience 4.9/5 stars for usability"
      ]
    }
  },
  {
    id: "agency-3",
    title: "Alpha Marketing Agency",
    category: "Corporate Agency Website",
    description: "An ultra-sleek, authoritative corporate platform engineered to acquire high-value client leads. Highlights digital marketing expertise, interactive case studies, and clear call-to-actions.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    demoUrl: "agency",
    businessResult: "+52% Client Leads",
    technologies: ["React", "Tailwind CSS", "Mobile First", "SEO Ready", "Fast Loading"],
    caseStudy: {
      problem: "Alpha Marketing Agency was pitching premium enterprise contracts, but their outdated, static website failed to represent their advanced digital capabilities, costing them high-ticket deals.",
      solution: "We built a cutting-edge corporate hub with immersive scroll animations, custom data visualization widgets showing client performance, and a streamlined, high-converting lead capture form.",
      results: [
        "+52% increase in inbound, highly qualified corporate client leads",
        "Average session duration on case studies rose by 240%",
        "Successfully converted 5 premium enterprise-level retainers within 6 weeks",
        "100% Core Web Vitals score on Google Lighthouse audits"
      ]
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Ahmed Raza",
    role: "Tasty Bite Restaurant",
    company: "Karachi",
    content: "GEN'Z Development created a professional restaurant website for our business. The design looks modern, works perfectly on mobile devices, and made it easier for customers to contact us through WhatsApp.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
  },
  {
    id: "rev-2",
    name: "Muhammad Usman",
    role: "CarePlus Medical Clinic",
    company: "Lahore",
    content: "We needed a clean and professional clinic website with appointment booking functionality. The final result exceeded expectations and helped us build a stronger online presence.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
  },
  {
    id: "rev-3",
    name: "Sana Malik",
    role: "Alpha Marketing Agency",
    company: "Islamabad",
    content: "The team understood our requirements quickly and delivered a premium business website with excellent performance and user experience.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150"
  },
  {
    id: "rev-4",
    name: "Bilal Ahmed",
    role: "Online Store Owner",
    company: "Faisalabad",
    content: "Our e-commerce website now looks more professional and loads significantly faster. Communication throughout the project was excellent.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150"
  }
];

export const TESTIMONIAL_VIDEOS: TestimonialVideo[] = [
  {
    id: "vid-1",
    title: "How GEN'Z Built our Luxury Capital Platform",
    clientName: "Alexander Mercer",
    companyName: "Mercer Lux Capital",
    youtubeId: "dQw4w9WgXcQ", // Standard Rick Astley as stable mock ID but styled elegantly
    thumbnailUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800"
  },
  {
    id: "vid-2",
    title: "Engineering high speed clinic appointment portals",
    clientName: "Dr. Sofia Vance",
    companyName: "Aethel Clinic",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800"
  }
];

export const GALLERY_IMAGES = [
  {
    id: "gal-1",
    url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800",
    title: "Frontend Development",
    category: "React & Next.js Coding",
    description: "Crafting highly responsive, pixel-perfect user interfaces with standard-compliant Tailwind CSS structures and clean state management.",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: "gal-2",
    url: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800",
    title: "UI/UX Design",
    category: "Prototyping & Wireframing",
    description: "Converting brand goals into high-fidelity interactive wireframes, establishing rich typography grids and premium custom styling.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "gal-3",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
    title: "Team Collaboration",
    category: "Synergy & Code Reviews",
    description: "Daily engineering syncs, code reviews, and pair-programming to ensure perfect modular code quality and rapid turnaround times.",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: "gal-4",
    url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800",
    title: "Project Planning",
    category: "Architecture & Sprints",
    description: "Developing robust software architecture diagrams, system flowcharts, database schemas, and precise sprint milestones.",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: "gal-5",
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
    title: "Quality Assurance",
    category: "Lighthouse & Unit Testing",
    description: "Conducting strict multi-device viewport tests, performance benchmarking, SEO audits, and complete security lints.",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: "gal-6",
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
    title: "Project Deployment",
    category: "CI/CD & Cloud Infrastructure",
    description: "Deploying secure, containerized applications to scalable Cloud Run clusters with zero-downtime hot swapping and active SSL.",
    span: "md:col-span-1 md:row-span-1"
  }
];
