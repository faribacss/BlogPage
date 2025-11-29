// i18n.js
import i18n from "@/i18n.js";

export function getToastFont() {
  const isRtl = i18n.dir() === "rtl";
  const lang = (i18n.language || "").split("-")[0];
  let fontFamily;
  if (lang === "fa") {
    fontFamily = "Lalezar";
  } else if (lang === "ko") {
    fontFamily = "JejuMyeongjo";
  } else {
    fontFamily = "BricolageBold";
  }

  return { fontFamily, isRtl, lang };
}
