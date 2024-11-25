import locales from "../locales.json";

export function loadLocales() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(locales);
        }, 250);
    });
}