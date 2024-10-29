import "./style.css"
import LoadCV from "./dataloader";
import { fullstackDevDescriptionVietnamese, fullstackDevDescription } from "./title_description"

document.addEventListener("DOMContentLoaded", () => {
  LoadCV(fullstackDevDescriptionVietnamese);

  document.querySelector("#translate-button").addEventListener("click", () => {
    const lang = document.querySelector("#translate-button").getAttribute("data-lang");
    if (lang === "en") {
      LoadCV(fullstackDevDescription);
      document.querySelector("#translate-button").setAttribute("data-lang", "vi");
      document.querySelector("#translate-button").innerHTML = "Tiếng Việt";
    } else {
      LoadCV(fullstackDevDescriptionVietnamese);
      document.querySelector("#translate-button").setAttribute("data-lang", "en");
      document.querySelector("#translate-button").innerHTML = "English";
    }
  })
})
