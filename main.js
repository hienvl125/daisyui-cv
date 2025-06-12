import "./style.css"
import LoadCV from "./dataloader";
import { backendDevDescription, fullstackDevDescription } from "./title_description"

document.addEventListener("DOMContentLoaded", () => {
  LoadCV(backendDevDescription);

  // Tạm thời không cần đổi ngôn ngữ
  // document.querySelector("#translate-button").addEventListener("click", () => {
  //   const lang = document.querySelector("#translate-button").getAttribute("data-lang");
  //   if (lang === "en") {
  //     LoadCV(backendDevDescription);
  //     document.querySelector("#translate-button").setAttribute("data-lang", "vi");
  //     document.querySelector("#translate-button").innerHTML = "Tiếng Việt";
  //   } else {
  //     LoadCV(backendDevDescription);
  //     document.querySelector("#translate-button").setAttribute("data-lang", "en");
  //     document.querySelector("#translate-button").innerHTML = "English";
  //   }
  // })
})
