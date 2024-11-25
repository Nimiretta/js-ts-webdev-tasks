import { loadLocales } from "./api/loadLocales";

async function changeLocale(event: Event) {
    await translateText(event);
    changeContentDirection(event);
}

async function translateText(event: Event) {
    const targetLocale = event.target?.getAttribute("id");
    const locales = await loadLocales();
    const localeStrings = locales[targetLocale];
    const elementsForTranslation = document.querySelectorAll("[data-l10n]");
    elementsForTranslation.forEach((el) => {
        const key = el.getAttribute("data-l10n");
        el.innerText = localeStrings[key];
    });
}

function changeContentDirection(event: Event) {
    const targetLocale = event.target?.getAttribute("id");
    const targetElementsDir = document.querySelectorAll(".change-direction");
    const targetElementsFontReg = document.querySelectorAll(".ar-font-regular");
    const targetElementsFontBold = document.querySelectorAll(".ar-font-bold");
    const btnReserve = document.getElementById("reserveBtn");
    if (targetLocale === "ar") {
        targetElementsDir.forEach((el) => el.style.flexDirection =  "row-reverse");
        targetElementsFontReg.forEach((el) => el.style.fontFamily = "DigiNozhaRegular");
        targetElementsFontBold.forEach((el) => el.style.fontFamily = "DigiNozha2Bold");
        btnReserve.style.fontSize = "24px";
        btnReserve.style.padding = "8px 24px";
    } else {
        targetElementsDir.forEach((el) => el.style.flexDirection = "");
        targetElementsFontReg.forEach((el) => el.style.fontFamily = "");
        targetElementsFontBold.forEach((el) => el.style.fontFamily = "");
        btnReserve.style.fontSize = "";
        btnReserve.style.padding = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const localesButtons = document.querySelectorAll(".locales-btn");
    localesButtons.forEach((btn) => btn.addEventListener("click", changeLocale));
});