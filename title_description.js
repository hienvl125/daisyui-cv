import avatar from "./public/avatar.jpeg"
import andpadLogo from "./public/andpad_logo.png"
import goldenOwlLogo from "./public/golden_owl_logo.jpeg"
import nobeeLogo from "./public/nobee_logo.jpeg"
import defaultCompanyLogo from "./public/default_company_logo.png"

export const PREV_backendDevDescription = {
  cvLastUpdatedLable: "CV last updated as of July 2023",
  avatarURL: avatar,
  fullName: "LUONG VI HIEN",
  title: "Backend Developer",
  location: "Ho Chi Minh City, Vietnam",
  yoe: "5 years of experience",
  email: "hienviluong125@gmail.com",
  github: {
    label: "hienvl125",
    link: "https://github.com/hienvl125"
  },
  linkedin: {
    label: "Hien Luong",
    link: "https://www.linkedin.com/in/hien-luong-49913517b/"
  },
  skills: [
    { badgeClass: "badge badge-primary badge-outline", label: "Problem-solving" },
    { badgeClass: "badge badge-accent badge-outline", label: "Golang" },
    { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
    { badgeClass: "badge badge-neutral badge-outline", label: "Mysql" },
    { badgeClass: "badge badge-info badge-outline", label: "React" },
    { badgeClass: "badge badge-warning badge-outline", label: "AWS" },
  ],
  aboutMe: "I am a backend developer with over 5 years of experience in web development. I love solving problems and puzzles. Currently, I'm expanding my skills by delving into backend scaling, distributed systems, and DevOps practices.",
  workExperiences: [
    {
      title: "Backend Developer",
      companyName: "ANDPAD",
      companyLogoURL: andpadLogo,
      workType: "Full-time", // Full-time | Part-time
      duration: "Mar 2022 - Present",
      techStack: [
        { badgeClass: "badge badge-accent badge-outline", label: "Golang" },
        { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
        { badgeClass: "badge badge-primary badge-outline", label: "GraphQL" },
        { badgeClass: "badge badge-neutral badge-outline", label: "Mysql" },
        { badgeClass: "badge badge-warning badge-outline", label: "AWS" },
      ],
      workDesc: [
        "Created a GraphQL server as BFF(Backend for Frontend) that gathers information from different micro-services, ensuring secure user access.",
        "Built a strong foundation with microservices to manage business data and operations effectively.",
        "Designed and developed tailored backend solutions for a construction products company, improving overall efficiency.",
      ]
    },
    {
      title: "Backend Developer",
      companyName: "Nobee",
      companyLogoURL: nobeeLogo,
      workType: "Full-time", // Full-time | Part-time
      duration: "May 2021 - Feb 2022",
      techStack: [
        { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
        { badgeClass: "badge badge-neutral badge-outline", label: "Postgresql" },
        { badgeClass: "badge badge-warning badge-outline", label: "AWS" },
      ],
      workDesc: [
        "Developed APIs using Ruby on Rails.",
        "Collaborated closely with the Front-end team to building a housing finding web app.",
        "Designed and built a property showing management dashboard enabling agency clients to easily schedule, organize, and transfer showing sessions.",
      ]
    },
    {
      title: "Web Developer",
      companyName: "Freelancer",
      companyLogoURL: defaultCompanyLogo,
      workType: "Part-time", // Full-time | Part-time
      duration: "Dec 2020 - Apr 2021",
      techStack: [
        { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
        { badgeClass: "badge badge-neutral badge-outline", label: "Postgresql" },
        { badgeClass: "badge badge-info badge-outline", label: "ReactJS" },
      ],
      workDesc: [
        "Created a dashboard for managing employers at a startup.",
        "Developed an event app for shop owners to livestream and integrate Shopify products.",
      ]
    },
    {
      title: "Backend Developer",
      companyName: "Golden Owl Consulting Ltd",
      companyLogoURL: goldenOwlLogo,
      workType: "Full-time", // Full-time | Part-time
      duration: "Jul 2019 - Dec 2020",
      techStack: [
        { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
        { badgeClass: "badge badge-neutral badge-outline", label: "Postgresql" },
        { badgeClass: "badge badge-warning badge-outline", label: "AWS" },
        { badgeClass: "badge badge-info badge-outline", label: "ReactJS" },
      ],
      workDesc: [
        "Developed web apps using Ruby on Rails.",
        "Managed audiences and events.",
        "Set up automated livestreams and scheduled videos for upcoming events.",
        "Added real-time chat for live interaction.",
        "Designed interactive quizzes during videos for user engagement.",
      ]
    },
    {
      title: "Javascript Developer",
      companyName: "BLOOD inc",
      companyLogoURL: defaultCompanyLogo,
      workType: "Part-time", // Full-time | Part-time
      duration: "Aug 2018 - Jun 2019",
      techStack: [
        { badgeClass: "badge badge-success badge-outline", label: "ExpressJS" },
        { badgeClass: "badge badge-info badge-outline", label: "ReactJS" },
        { badgeClass: "badge badge-neutral badge-outline", label: "MongoDB" },
      ],
      workDesc: [
        "Engineered a fullstack web app using ReactJS and ExpressJS.",
        "Integrated Google Maps API for interactive features.",
        "Enabled users to engage in a real-estate game, including property selection, trading, and wallet integration.",
      ]
    },

  ],
  educations: [
    {
      avatar: "",
      title: "Bachelor's degree in IT",
      school: "VNUHCM - University of Science",
      duration: "Sept 2019 - Dec 2021",
    },
    {
      avatar: "",
      title: "College's degree in IT",
      school: "VNUHCM - University of Science",
      duration: "Sept 2016 - Jun 2019",
    }
  ]
}

export const fullstackDevDescription = {
  cvLastUpdatedLable: "CV last updated as of Jan 2024",
  avatarURL: avatar,
  fullName: "LUONG VI HIEN",
  title: "Full-stack Web Developer",
  location: "Ho Chi Minh City, Vietnam",
  yoe: "5 years of experience",
  email: "hienviluong125@gmail.com",
  github: {
    label: "hienvl125",
    link: "https://github.com/hienvl125"
  },
  linkedin: {
    label: "Hien Luong",
    link: "https://www.linkedin.com/in/hien-luong-49913517b/"
  },
  skills: [
    { badgeClass: "badge badge-primary badge-outline", label: "Problem-solving" },
    { badgeClass: "badge badge-accent badge-outline", label: "Golang" },
    { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
    { badgeClass: "badge badge-neutral badge-outline", label: "Mysql" },
    { badgeClass: "badge badge-info badge-outline", label: "React.JS" },
    { badgeClass: "badge badge-success badge-outline", label: "Vue.JS" },
    { badgeClass: "badge badge-warning badge-outline", label: "AWS" },
  ],
  aboutMe: "I've been working as a Web Developer for over 5 years, mainly focusing on backend development. I enjoy problem-solving and am currently exploring web app scaling, distributed systems, and DevOps practices to expand my skills.",
  workExperiences: [
    {
      title: "Backend Developer",
      companyName: "ANDPAD",
      companyLogoURL: andpadLogo,
      workType: "Full-time", // Full-time | Part-time
      duration: "Mar 2022 - Present",
      techStack: [
        { badgeClass: "badge badge-accent badge-outline", label: "Golang" },
        { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
        { badgeClass: "badge badge-primary badge-outline", label: "GraphQL" },
        { badgeClass: "badge badge-neutral badge-outline", label: "Mysql" },
        { badgeClass: "badge badge-warning badge-outline", label: "AWS" },
      ],
      workDesc: [
        "Created a GraphQL server as BFF(Backend for Frontend) that gathers information from different micro-services, ensuring secure user access.",
        "Built a strong foundation with microservices to manage business data and operations effectively.",
        "Designed and developed tailored backend solutions for a construction products company, improving overall efficiency.",
      ]
    },
    {
      title: "Web Developer",
      companyName: "Nobee",
      companyLogoURL: nobeeLogo,
      workType: "Full-time", // Full-time | Part-time
      duration: "May 2021 - Feb 2022",
      techStack: [
        { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
        { badgeClass: "badge badge-neutral badge-outline", label: "Postgresql" },
        { badgeClass: "badge badge-warning badge-outline", label: "AWS" },
      ],
      workDesc: [
        "Developed APIs using Ruby on Rails and UI using React.JS.",
        "Fully in charge of features for both backend and frontend.",
        "Designed and built a property showing management dashboard enabling agency clients to easily schedule, organize, and transfer showing sessions.",
        "Wrote automation tests using Capybara."
      ]
    },
    {
      title: "Web Developer",
      companyName: "Freelancer",
      companyLogoURL: defaultCompanyLogo,
      workType: "Part-time", // Full-time | Part-time
      duration: "Dec 2020 - Apr 2021",
      techStack: [
        { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
        { badgeClass: "badge badge-neutral badge-outline", label: "Postgresql" },
        { badgeClass: "badge badge-info badge-outline", label: "ReactJS" },
      ],
      workDesc: [
        "Created a dashboard for managing employers at a startup.",
        "Developed an event app for shop owners to livestream and integrate Shopify products.",
      ]
    },
    {
      title: "Web Developer",
      companyName: "Golden Owl Consulting Ltd",
      companyLogoURL: goldenOwlLogo,
      workType: "Full-time", // Full-time | Part-time
      duration: "Jul 2019 - Dec 2020",
      techStack: [
        { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
        { badgeClass: "badge badge-neutral badge-outline", label: "Postgresql" },
        { badgeClass: "badge badge-warning badge-outline", label: "AWS" },
        { badgeClass: "badge badge-info badge-outline", label: "ReactJS" },
        { badgeClass: "badge badge-success badge-outline", label: "VueJS" },
      ],
      workDesc: [
        "Developed web apps using Ruby on Rails, React.JS, and Vue.JS.",
        "Contributed to an Event Management project, overseeing audience and event management.",
        "Established automated livestreams and scheduled videos for upcoming events.",
        "Implemented real-time chat for live interaction.",
        "Designed interactive quizzes within videos to enhance user engagement."
      ]
    },
    {
      title: "Javascript Developer",
      companyName: "BLOOD inc",
      companyLogoURL: defaultCompanyLogo,
      workType: "Part-time", // Full-time | Part-time
      duration: "Aug 2018 - Jun 2019",
      techStack: [
        { badgeClass: "badge badge-success badge-outline", label: "ExpressJS" },
        { badgeClass: "badge badge-info badge-outline", label: "ReactJS" },
        { badgeClass: "badge badge-neutral badge-outline", label: "MongoDB" },
      ],
      workDesc: [
        "Engineered a fullstack web app using ReactJS and ExpressJS.",
        "Integrated Google Maps API for interactive features.",
        "Enabled users to engage in a real-estate game, including property selection, trading, and wallet integration.",
      ]
    },

  ],
  educations: [
    {
      avatar: "",
      title: "Bachelor's degree in IT",
      school: "VNUHCM - University of Science",
      duration: "Sept 2019 - Dec 2021",
    },
    {
      avatar: "",
      title: "College's degree in IT",
      school: "VNUHCM - University of Science",
      duration: "Sept 2016 - Jun 2019",
    }
  ]
}
