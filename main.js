import "./style.css"
import avatar from "./public/avatar.jpeg"
import andpadLogo from "./public/andpad_logo.png"
import goldenOwlLogo from "./public/golden_owl_logo.jpeg"
import nobeeLogo from "./public/nobee_logo.jpeg"
import defaultCompanyLogo from "./public/default_company_logo.png"
import uniLogo from "./public/hcmus.jpeg"

const data = {
  cvLastUpdatedLable: "CV last updated as of July 2023",
  avatarURL: avatar,
  fullName: "LUONG VI HIEN",
  title: "Software Engineer",
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

const buildWorkExperienceItemHTML = function ({
  title,
  companyName,
  companyLogoURL,
  workType,
  duration,
  techStack,
  workDesc,
  hasDivider,
}) {
  const workDescListHTML = workDesc.map(desc => `<li>${desc}</li>`).join("")
  const techStackHTML = techStack.map(stack => `<span style="margin-right: 5px;" class="${stack.badgeClass}">${stack.label}</span>`).join("")

  return `
    <div class="work-experience-item w-full">
      <div class="w-full flex justify-start flex-col md:flex-row">
        <div class="company-avatar avatar">
          <div class="w-11 rounded-xl">
            <img src="${companyLogoURL}" />
          </div>
        </div>
        <div class="mt-1 md:mt-0 md:ml-3">
          <p class="font-medium">${title}</p>
          <p class="text-gray-400 text-sm mt-1">${companyName}</p>
        </div>
        <div class="mt-1 md:ml-auto md:text-right">
          <span class="badge badge-md badge-ghost">${workType}</span>
          <p class="text-gray-400 text-sm mt-1">${duration}</p>
        </div>
      </div>
      <div class="tech-stack mt-1 md:ml-12">
        ${techStackHTML}
      </div>
      <div class="mt-2 md:ml-14">
        <p>
          <ul class="list-disc">
            ${workDescListHTML}
          </ul>
        </p>
        ${hasDivider ? '<div class="divider"></div>' : ''}
      </div>
    </div>
  `
}

const buildEducationItemHTML = function({
  avatar,
  title,
  school,
  duration,
  hasDivider
}) {
  return `
    <div class="education-item w-full">
      <div class="w-full flex justify-start flex-col md:flex-row">
        <div class="company-avatar avatar">
          <div class="w-11 rounded-xl">
            <img src="${avatar}" />
          </div>
        </div>
        <div class="mt-1 md:mt-0 md:ml-3">
          <p class="font-medium">${title}</p>
          <p class="text-gray-400 text-sm mt-1">${school}</p>
        </div>
        <div class="mt-1 md:ml-auto md:text-right flex items-end">
          <p class="text-gray-400 text-sm mt-1">${duration}</p>
        </div>
      </div>
      ${hasDivider ? '<div class="mt-2 md:ml-14"><div class="divider"></div></div>' : ''}
    </div>
  `
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#cv-last-updated-label").innerHTML = data.cvLastUpdatedLable
  document.querySelector("#avatar-url").src = data.avatarURL
  document.querySelector("#fullname").innerHTML = data.fullName
  document.querySelector("#title").innerHTML = data.title
  document.querySelector("#location").innerHTML = data.location
  document.querySelector("#yoe").innerHTML = data.yoe
  document.querySelector("#email").innerHTML = data.email
  document.querySelector("#email").href = `mailto:${data.email}`
  document.querySelector("#github").innerHTML = data.github.label
  document.querySelector("#github").href = data.github.link
  document.querySelector("#linkedin").innerHTML = data.linkedin.label
  document.querySelector("#linkedin").href = data.linkedin.link

  for (let skillTag of data.skills) {
    const badgeHTML = `<span style="margin-right: 5px;" class="${skillTag.badgeClass}">${skillTag.label}</span>`
    document.querySelector("#skill-tags").insertAdjacentHTML("beforeend", badgeHTML)
  }

  document.querySelector("#about-me").innerHTML = data.aboutMe

  for (const [index, workExperience] of data.workExperiences.entries()) {
    document.
      querySelector("#work-experience-list").
      insertAdjacentHTML("beforeend", buildWorkExperienceItemHTML(
        {
          title: workExperience.title,
          companyName: workExperience.companyName,
          companyLogoURL: workExperience.companyLogoURL,
          workType: workExperience.workType,
          duration: workExperience.duration,
          techStack: workExperience.techStack,
          workDesc: workExperience.workDesc,
          hasDivider: index !== (data.workExperiences.length - 1)
        }
      ))
  }

  for (const [index, education] of data.educations.entries()) {
    document.
      querySelector("#education-list").
      insertAdjacentHTML("beforeend", buildEducationItemHTML(
        {
          avatar: uniLogo,
          title: education.title,
          school: education.school,
          duration: education.duration,
          hasDivider: index !== (data.educations.length - 1)
        }
      ))
  }
})
