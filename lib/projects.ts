export type ProjectCategory = "realEstate" | "industrial" | "healthcare" | "crm" | "agency" | "dating" | "restaurant" | "business";
export type Project = { slug: string; title: string; category: ProjectCategory; industry: string; country: string; year: string; url: string; thumbnail: string; gallery: string[]; seo: { title: string; description: string }; technologies: string[]; description: { ar: string; en: string }; features: { ar: string[]; en: string[] } };

const projectRecords: Omit<Project, "industry" | "thumbnail" | "gallery" | "seo">[] = [
  {
    slug: "dating-advice",
    title: "DatingAdvice.io",
    category: "dating",
    country: "USA",
    year: "2026",
    url: "https://datingadvice.io",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Content Management",
      "Responsive Design",
      "Vercel"
    ],
    description: {
      ar: "منصة محتوى متقدمة تقدم نصائح متخصصة في العلاقات من خلال تجربة استخدام سريعة ومحسنة لمحركات البحث مع محتوى احترافي وسهل التصفح.",
      en: "A premium content platform delivering expert relationship advice through a fast, SEO-optimized experience with intuitive navigation and engaging editorial content."
    },
    features: {
      ar: [
        "هيكل متوافق مع محركات البحث",
        "تجربة قراءة سريعة",
        "تصميم متجاوب بالكامل",
        "إدارة محتوى احترافية",
        "أداء عالي وسرعة تحميل"
      ],
      en: [
        "SEO optimized architecture",
        "Fast reading experience",
        "Fully responsive design",
        "Professional content management",
        "High-performance loading"
      ]
    }
  },

  {
    slug: "saudi-real-estate",
    title: "Saudi Real Estate",
    category: "realEstate",
    country: "Saudi Arabia",
    year: "2026",
    url: "https://saudi-real-estate-web.vercel.app/en",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "i18n",
      "Responsive UI",
      "Vercel"
    ],
    description: {
      ar: "منصة عقارية احترافية ثنائية اللغة تعرض المشاريع السكنية والتجارية بأسلوب عصري مع تجربة تصفح سلسة تساعد المستخدمين على اكتشاف العقارات بسهولة.",
      en: "A premium bilingual real estate platform showcasing residential and commercial developments with elegant design, interactive browsing, and a seamless user experience tailored for the Saudi market."
    },
    features: {
      ar: [
        "عرض المشاريع العقارية",
        "دعم اللغتين العربية والإنجليزية",
        "واجهة مستخدم حديثة",
        "تصميم متجاوب لجميع الأجهزة",
        "أداء وسرعة عالية"
      ],
      en: [
        "Property showcase",
        "Bilingual support",
        "Modern user interface",
        "Responsive across all devices",
        "Optimized performance"
      ]
    }
  },

  {
    slug: "primesteel",
    title: "PrimeSteel KSA",
    category: "industrial",
    country: "Saudi Arabia",
    year: "2026",
    url: "https://primesteelksa.com/",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Responsive Design",
      "Vercel"
    ],
    description: {
      ar: "موقع صناعي احترافي يعرض منتجات الحديد وخدمات الشركة ومشاريعها بطريقة عصرية مع تجربة استخدام سهلة تركز على تحويل الزوار إلى عملاء.",
      en: "A modern industrial website showcasing steel products, company capabilities, and project expertise while delivering a seamless customer journey and lead generation experience."
    },
    features: {
      ar: [
        "عرض المنتجات الصناعية",
        "نماذج طلب واستفسار",
        "تصميم احترافي متجاوب",
        "تحسين لمحركات البحث",
        "واجهة سهلة الاستخدام"
      ],
      en: [
        "Industrial product showcase",
        "Inquiry & quotation forms",
        "Responsive modern design",
        "SEO optimized structure",
        "User-friendly experience"
      ]
    }
  },

  {
    slug: "mcec-care",
    title: "MCEC Care",
    category: "healthcare",
    country: "Saudi Arabia",
    year: "2026",
    url: "https://www.mceccare.com/",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Healthcare UX",
      "SEO",
      "Responsive Design"
    ],
    description: {
      ar: "منصة رعاية صحية احترافية صممت لبناء ثقة المرضى من خلال عرض الخدمات الطبية بطريقة واضحة مع تجربة استخدام مريحة وسريعة.",
      en: "A modern healthcare platform designed to build patient confidence through intuitive navigation, clear service presentation, and an accessible digital experience."
    },
    features: {
      ar: [
        "عرض الخدمات الطبية",
        "سهولة التواصل",
        "واجهة موثوقة",
        "تجربة متوافقة مع جميع الأجهزة",
        "تحسين لمحركات البحث"
      ],
      en: [
        "Healthcare service showcase",
        "Easy patient communication",
        "Trust-focused interface",
        "Responsive experience",
        "SEO optimized"
      ]
    }
  },

  {
    slug: "adonix-digital",
    title: "Adonix Digital",
    category: "agency",
    country: "Saudi Arabia",
    year: "2026",
    url: "http://adonixdigital.com/",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "SEO",
      "UI/UX",
      "Vercel"
    ],
    description: {
      ar: "الموقع الرسمي لوكالة أدونيكس ديجيتال، يعرض خدمات تطوير المواقع، وأتمتة الذكاء الاصطناعي، وتحسين محركات البحث، والتسويق الرقمي من خلال تجربة مستخدم احترافية وعصرية.",
      en: "The official Adonix Digital website showcasing premium web development, AI automation, SEO, digital marketing, and custom software services through an immersive modern experience."
    },
    features: {
      ar: [
        "تصميم فاخر وعصري",
        "عرض الخدمات الرقمية",
        "أتمتة الذكاء الاصطناعي",
        "تحسين تجربة المستخدم",
        "دعوات واضحة لاتخاذ الإجراء"
      ],
      en: [
        "Premium modern design",
        "Digital service showcase",
        "AI automation solutions",
        "Optimized user experience",
        "High-converting call-to-actions"
      ]
    }
  },
  {
  slug: "sajid-technician",
  title: "Sajid Technician",
  category: "business",
  country: "Saudi Arabia",
  year: "2026",
  url: "https://sajidtechnician.vercel.app/",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "SEO",
    "Responsive Design",
    "Lead Generation",
    "Vercel"
  ],
  description: {
    ar: "منصة خدمات منزلية احترافية صُممت لعرض خدمات الصيانة والإصلاح بطريقة منظمة، مع تجربة مستخدم سهلة تساعد العملاء على حجز الخدمات والتواصل بسرعة.",
    en: "A professional home services platform built to showcase maintenance and repair solutions while generating qualified leads through a seamless booking and contact experience."
  },
  features: {
    ar: [
      "عرض الخدمات باحترافية",
      "نماذج حجز واستفسار",
      "تصميم متجاوب",
      "تحسين لمحركات البحث",
      "سهولة التواصل مع العملاء"
    ],
    en: [
      "Professional service showcase",
      "Booking & inquiry forms",
      "Responsive design",
      "SEO optimized",
      "Easy customer communication"
    ]
  }
},

{
  slug: "al-maamoura",
  title: "Al Maamoura",
  category: "business",
  country: "Saudi Arabia",
  year: "2026",
  url: "https://almaamoura-iota.vercel.app/",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "SEO",
    "Framer Motion",
    "Responsive Design",
    "Vercel"
  ],
  description: {
    ar: "موقع أعمال احترافي يعكس هوية الشركة ويعرض خدماتها ومشاريعها من خلال تصميم أنيق يركز على الموثوقية وبناء الثقة مع العملاء.",
    en: "A premium corporate website designed to strengthen brand credibility, showcase business services, and create a professional digital presence for long-term growth."
  },
  features: {
    ar: [
      "تصميم احترافي",
      "عرض الخدمات",
      "تجربة مستخدم سلسة",
      "تحسين لمحركات البحث",
      "متوافق مع جميع الأجهزة"
    ],
    en: [
      "Professional design",
      "Business service showcase",
      "Smooth user experience",
      "SEO optimized",
      "Fully responsive"
    ]
  }
},

{
  slug: "gulf-reference",
  title: "Gulf Reference",
  category: "business",
  country: "Saudi Arabia",
  year: "2026",
  url: "https://gulf-reference.vercel.app/",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "REST API",
    "SEO"
  ],
  description: {
    ar: "منصة أعمال متكاملة تساعد الشركات على استعراض خدماتها وتنظيم معلوماتها الرقمية من خلال تجربة احترافية سريعة وسهلة الاستخدام.",
    en: "A modern business platform developed to organize services, present company information professionally, and provide visitors with a clean, intuitive digital experience."
  },
  features: {
    ar: [
      "تنظيم المحتوى",
      "واجهة حديثة",
      "هيكل معلومات احترافي",
      "سرعة تحميل عالية",
      "تحسين لمحركات البحث"
    ],
    en: [
      "Structured content",
      "Modern interface",
      "Professional information architecture",
      "High performance",
      "SEO optimized"
    ]
  }
},

{
  slug: "broast-alyoum",
  title: "Broast Alyoum",
  category: "restaurant",
  country: "Saudi Arabia",
  year: "2026",
  url: "https://broastalyoum.com/",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Restaurant UI",
    "Online Ordering",
    "Responsive Design",
    "SEO"
  ],
  description: {
    ar: "موقع مطعم عصري يقدم تجربة رقمية جذابة لعرض قائمة الطعام والعروض الخاصة مع تسهيل عملية الطلب وزيادة تفاعل العملاء.",
    en: "A modern restaurant website delivering an engaging food ordering experience through an attractive menu, responsive design, and conversion-focused customer journey."
  },
  features: {
    ar: [
      "قائمة طعام تفاعلية",
      "سهولة الطلب",
      "تصميم متجاوب",
      "عرض العروض والوجبات",
      "تحسين تجربة العملاء"
    ],
    en: [
      "Interactive food menu",
      "Easy online ordering",
      "Responsive design",
      "Promotions & meal showcase",
      "Enhanced customer experience"
    ]
  }
},
];

const industries: Record<ProjectCategory, string> = {
  realEstate: "Real Estate",
  industrial: "Industrial",
  healthcare: "Healthcare",
  crm: "SaaS",
  agency: "Agency",
  dating: "Dating",
  restaurant: "Restaurant",
  business: "Business"
};

export const projects: Project[] = projectRecords.map((project) => ({
  ...project,
  industry: industries[project.category],
  thumbnail: "/adonix-logo.jpg",
  gallery: [],
  seo: {
    title: `${project.title} | Adonix Digital`,
    description: project.description.en
  }
}));

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);