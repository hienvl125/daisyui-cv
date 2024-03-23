import "./style.css"
import uniLogo from "./public/hcmus.jpeg"
import { backendDevDescription as data } from "./title_description"
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

const buildEducationItemHTML = function ({
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
