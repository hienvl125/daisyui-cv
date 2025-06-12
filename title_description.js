import avatar from "./public/2024_avatar.jpg"
import andpadLogo from "./public/andpad_logo.png"
import goldenOwlLogo from "./public/golden_owl_logo.jpeg"
import nobeeLogo from "./public/nobee_logo.jpeg"
import defaultCompanyLogo from "./public/default_company_logo.png"

export const backendDevDescription = {
  informationSectionTitle: "Information",
  skillSectionTitle: "Skills",
  aboutMeSectionTitle: "About me",
  workExperienceSectionTitle: "Work experience",
  educationSectionTitle: "Education",
  cvLastUpdatedLable: "CV last updated as of Jun 2025",
  avatarURL: avatar,
  fullName: "LUONG VI HIEN",
  title: "Backend Developer",
  location: "Ho Chi Minh City, Vietnam",
  yoe: "6 years of experience",
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
    { badgeClass: "badge badge-warning badge-outline", label: "AWS" },
    { badgeClass: "badge badge-primary badge-outline", label: "Terraform" },
    { badgeClass: "badge badge-info badge-outline", label: "Kubernetes" },
    { badgeClass: "badge badge-info badge-outline", label: "React" },
  ],
  aboutMe: "I am a backend developer with over 6 years of experience in web development. I love solving problems and puzzles. Currently, I'm expanding my skills by delving into backend scaling, distributed systems, and DevOps practices.",
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
  informationSectionTitle: "Information",
  skillSectionTitle: "Skills",
  aboutMeSectionTitle: "About me",
  workExperienceSectionTitle: "Work experience",
  educationSectionTitle: "Education",
  cvLastUpdatedLable: "CV last updated as of Oct 2024",
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

export const fullstackDevDescriptionVietnamese = {
  informationSectionTitle: "Thông tin",
  skillSectionTitle: "Kĩ năng",
  aboutMeSectionTitle: "Giới thiệu",
  workExperienceSectionTitle: "Kinh nghiệm làm việc",
  educationSectionTitle: "Học vấn",
  cvLastUpdatedLable: "Cập nhật lần cuối vào tháng 10 năm 2024",
  avatarURL: avatar,
  fullName: "LƯƠNG VĨ HIỀN",
  title: "Lập trình viên Full-stack Web",
  location: "Thành phố Hồ Chí Minh, Việt Nam",
  yoe: "5 năm kinh nghiệm",
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
    { badgeClass: "badge badge-primary badge-outline", label: "Kĩ năng giải quyết vấn đề" },
    { badgeClass: "badge badge-accent badge-outline", label: "Golang" },
    { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
    { badgeClass: "badge badge-neutral badge-outline", label: "Mysql" },
    { badgeClass: "badge badge-info badge-outline", label: "React.JS" },
    { badgeClass: "badge badge-success badge-outline", label: "Vue.JS" },
    { badgeClass: "badge badge-warning badge-outline", label: "AWS" },
  ],
  aboutMe: "Tôi đã làm việc như một nhà phát triển web hơn 5 năm, chủ yếu tập trung vào phát triển backend. Tôi thích giải quyết các vấn đề và hiện đang tìm hiểu về việc mở rộng ứng dụng web, hệ thống phân tán và các phương pháp DevOps để mở rộng kỹ năng của mình cho các doanh nghiệp cần chuyển đổi số.",
  workExperiences: [
    {
      title: "Lập trình viên Backend",
      companyName: "ANDPAD",
      companyLogoURL: andpadLogo,
      workType: "Toàn thời gian", // Full-time | Part-time
      duration: "Tháng 3 năm 2022 - Hiện tại",
      techStack: [
        { badgeClass: "badge badge-accent badge-outline", label: "Golang" },
        { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
        { badgeClass: "badge badge-primary badge-outline", label: "GraphQL" },
        { badgeClass: "badge badge-neutral badge-outline", label: "Mysql" },
        { badgeClass: "badge badge-warning badge-outline", label: "AWS" },
      ],
      workDesc: [
        "Tạo máy chủ GraphQL làm Backend cho Frontend (BFF) để thu thập thông tin từ các dịch vụ micro khác nhau, đảm bảo quyền truy cập an toàn cho người dùng.",
        "Xây dựng nền tảng mạnh mẽ với microservices để quản lý dữ liệu và hoạt động của doanh nghiệp một cách hiệu quả.",
        "Thiết kế và phát triển các giải pháp backend tùy chỉnh cho công ty sản phẩm xây dựng, cải thiện hiệu suất tổng thể."
      ]
    },
    {
      title: "Lập trình viên Web",
      companyName: "Nobee",
      companyLogoURL: nobeeLogo,
      workType: "Toàn thời gian", // Full-time | Part-time
      duration: "Tháng 5 năm 2021 - Tháng 2 năm 2022",
      techStack: [
        { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
        { badgeClass: "badge badge-neutral badge-outline", label: "Postgresql" },
        { badgeClass: "badge badge-warning badge-outline", label: "AWS" },
      ],
      workDesc: [
        "Phát triển các API bằng Ruby on Rails và giao diện người dùng bằng React.JS.",
        "Phụ trách hoàn toàn các tính năng cho cả backend và frontend.",
        "Thiết kế và xây dựng một bảng điều khiển quản lý các buổi trình chiếu tài sản, giúp khách hàng dễ dàng lên lịch, tổ chức và chuyển giao các buổi trình chiếu.",
        "Viết các bài kiểm tra tự động bằng Capybara."
      ]
    },
    {
      title: "Lập trình viên Web",
      companyName: "Freelancer",
      companyLogoURL: defaultCompanyLogo,
      workType: "Bán thời gian", // Full-time | Part-time
      duration: "Tháng 12 năm 2020 - Tháng 4 năm 2021",
      techStack: [
        { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
        { badgeClass: "badge badge-neutral badge-outline", label: "Postgresql" },
        { badgeClass: "badge badge-info badge-outline", label: "ReactJS" },
      ],
      workDesc: [
        "Tạo bảng điều khiển quản lý nhân viên tại một công ty khởi nghiệp.",
        "Phát triển ứng dụng sự kiện cho chủ cửa hàng livestream và tích hợp sản phẩm Shopify."
      ]
    },
    {
      title: "Lập trình viên Web",
      companyName: "Golden Owl Consulting Ltd",
      companyLogoURL: goldenOwlLogo,
      workType: "Toàn thời gian", // Full-time | Part-time
      duration: "Tháng 7 năm 2019 - Tháng 12 năm 2020",
      techStack: [
        { badgeClass: "badge badge-error badge-outline", label: "Ruby on Rails" },
        { badgeClass: "badge badge-neutral badge-outline", label: "Postgresql" },
        { badgeClass: "badge badge-warning badge-outline", label: "AWS" },
        { badgeClass: "badge badge-info badge-outline", label: "ReactJS" },
        { badgeClass: "badge badge-success badge-outline", label: "VueJS" },
      ],
      workDesc: [
        "Phát triển các ứng dụng web bằng Ruby on Rails, React.JS và Vue.JS.",
        "Tham gia vào dự án quản lý sự kiện, giám sát quản lý khán giả và sự kiện.",
        "Thiết lập livestream tự động và lên lịch các video cho các sự kiện sắp tới.",
        "Triển khai tính năng chat thời gian thực để tương tác trực tiếp.",
        "Thiết kế các câu đố tương tác trong video nhằm tăng tương tác người dùng."
      ]
    },
    {
      title: "Lập trình viên Javascript",
      companyName: "BLOOD inc",
      companyLogoURL: defaultCompanyLogo,
      workType: "Bán thời gian", // Full-time | Part-time
      duration: "Tháng 8 năm 2018 - Tháng 6 năm 2019",
      techStack: [
        { badgeClass: "badge badge-success badge-outline", label: "ExpressJS" },
        { badgeClass: "badge badge-info badge-outline", label: "ReactJS" },
        { badgeClass: "badge badge-neutral badge-outline", label: "MongoDB" },
      ],
      workDesc: [
        "Xây dựng một ứng dụng web fullstack bằng ReactJS và ExpressJS.",
        "Tích hợp API Google Maps cho các tính năng tương tác.",
        "Cho phép người dùng tham gia vào trò chơi bất động sản, bao gồm chọn bất động sản, giao dịch và tích hợp ví tiền."
      ]
    }
  ],
  educations: [
    {
      avatar: "",
      title: "Cử nhân CNTT",
      school: "Đại học Khoa học Tự nhiên - ĐHQG TPHCM",
      duration: "Tháng 9 năm 2019 - Tháng 12 năm 2021",
    },
    {
      avatar: "",
      title: "Cao đẳng CNTT",
      school: "Đại học Khoa học Tự nhiên - ĐHQG TPHCM",
      duration: "Tháng 9 năm 2016 - Tháng 6 năm 2019",
    }
  ]
}
