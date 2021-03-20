import {
  actOfContrition,
  fatimaPrayer,
  fatimaPrayer201,
  gloryBe,
  hailMary,
  signOfTheCross,
  theApostelsCreed,
  ourFather,
  letUsPray01,
  prayerAfterRosary,
  fatimaPrayer202,
  litanies,
  popePrayers,
} from "../audio/en/prayers";

export const prayers = {
  start: {
    label: "prayers.start.label",
    description: "prayers.start.description",
    audio: { en: signOfTheCross, es: "" },
  },
  intentions: {
    label: "prayers.intentions.label",
    description: "prayers.intentions.description",
  },
  actOfContrition: {
    label: "prayers.actOfContrition.label",
    description: "prayers.actOfContrition.description",
    audio: { en: actOfContrition, es: "" },
  },
  ourFather: {
    label: "prayers.ourFather.label",
    description: "prayers.ourFather.description",
    audio: { en: ourFather, es: "" },
  },
  hailMary: {
    label: "prayers.hailMary.label",
    description: "prayers.hailMary.description",
    audio: { en: hailMary, es: "" },
  },
  glory: {
    label: "prayers.glory.label",
    description: "prayers.glory.description",
    audio: { en: gloryBe, es: "" },
  },
  creed: {
    label: "prayers.creed.label",
    description: "prayers.creed.description",
    audio: { en: theApostelsCreed, es: "" },
  },
  signOfCross: {
    label: "prayers.signOfCross.label",
    description: "prayers.signOfCross.description",
    audio: { en: signOfTheCross, es: "" },
  },
  jaculatoria2: {
    label: "prayers.jaculatoria2.label",
    description: "prayers.jaculatoria2.description",
    audio: { en: fatimaPrayer, es: "" },
  },
  jaculatoria3: {
    label: "prayers.jaculatoria3.label",
    description: "prayers.jaculatoria3.description",
    audio: { en: fatimaPrayer201, es: "" },
  },
  fatima: {
    label: "prayers.fatima.label",
    description: "prayers.fatima.description",
    audio: { en: fatimaPrayer, es: "" },
  },
  salve: {
    label: "prayers.salve.label",
    description: "prayers.salve.description",
  },
  pope: {
    label: "prayers.pope.label",
    description: "prayers.pope.description",
    audio: { en: popePrayers, es: "" },
  },
  litanies: {
    label: "prayers.litanies.label",
    description: "prayers.litanies.description",
    audio: { en: litanies, es: "" },
  },
};