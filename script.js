/* =========================================================
   NEXUS VITAL — L'ASCENSION
   SCRIPT.JS
   V4 — ASCENSION + MONDE NEXUS + 6 HABITATS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


/* =========================================================
   CLÉS LOCALSTORAGE
========================================================= */

const STORAGE = {
  dayDate: "nexusVital_dayDate",
  habits: "nexusVital_habits",
  totalCrystals: "nexusVital_totalCrystals",
  collection: "nexusVital_collection",
  ascensionLevel: "nexusVital_ascensionLevel",
  world: "nexusVital_world",
  stats: "nexusVital_stats",
  nexusWorld: "nexusVital_nexusWorld"
};


/* =========================================================
   VISUELS
========================================================= */

const VISUALS = {

  home:
    "images/Visuel-1.PNG",

  portal:
    "images/Visuel-2.PNG",

  pathMist:
    "images/Visuel-3.PNG",

  pathCrystal:
    "images/Visuel-4.PNG",

  pathForbidden:
    "images/Visuel-5.PNG",

  crystalRoom:
    "images/Visuel-6.PNG",

  chestRoom:
    "images/Visuel-7.PNG",

  mistRoom:
    "images/Visuel-8.PNG",

  sanctuaryRoom:
    "images/Visuel-9.PNG",

  forbiddenRoom:
    "images/Visuel-10.PNG",

  secretRoom:
    "images/Visuel-11.PNG",

  guardianRoom:
    "images/Visuel-12.PNG",

  sanctuary:
    "images/Visuel-13.PNG",

  reward:
    "images/Visuel-14.PNG",

  challenge:
    "images/Visuel-15.PNG"

};


/* =========================================================
   MONDES ASCENSION
========================================================= */

const WORLDS = [

  {
    id: 1,
    name: "Les Jardins engloutis",
    image: "images/Monde-1.PNG",
    guardian: "Gardien des Marées",
    guardianImage: "images/Gardien-1.PNG"
  },

  {
    id: 2,
    name: "La Grotte de Cristal",
    image: "images/Monde-2.PNG",
    guardian: "Gardien Prismatique",
    guardianImage: "images/Gardien-2.PNG"
  },

  {
    id: 3,
    name: "Les Ruines oubliées",
    image: "images/Monde-3.PNG",
    guardian: "Gardien des Glyphes",
    guardianImage: "images/Gardien-3.PNG"
  },

  {
    id: 4,
    name: "La Forêt luminescente",
    image: "images/Monde-4.PNG",
    guardian: "Gardien Sylvestre",
    guardianImage: "images/Gardien-4.PNG"
  },

  {
    id: 5,
    name: "Le Temple du NEXUS",
    image: "images/Monde-5.PNG",
    guardian: "Gardien Originel",
    guardianImage: "images/Gardien-5.PNG"
  }

];


/* =========================================================
   OBJETS DE COLLECTION
========================================================= */

const REWARD_ITEMS = {

  common: [

    {
      name: "Éclat d'azur",
      type: "Décoration",
      icon: "◇"
    },

    {
      name: "Mousse lumineuse",
      type: "Plante",
      icon: "❋"
    },

    {
      name: "Fragment marin",
      type: "Fragment",
      icon: "◈"
    }

  ],


  uncommon: [

    {
      name: "Corail spectral",
      type: "Décoration",
      icon: "✦"
    },

    {
      name: "Fleur de brume",
      type: "Plante",
      icon: "❉"
    },

    {
      name: "Perle runique",
      type: "Artefact",
      icon: "●"
    }

  ],


  rare: [

    {
      name: "Cristal des profondeurs",
      type: "Artefact",
      icon: "◆"
    },

    {
      name: "Méduse astrale",
      type: "Créature",
      icon: "✺"
    },

    {
      name: "Relique des Marées",
      type: "Artefact",
      icon: "◎"
    }

  ],


  epic: [

    {
      name: "Orbe du Passage",
      type: "Artefact",
      icon: "◉"
    },

    {
      name: "Gardien miniature",
      type: "Créature",
      icon: "✹"
    },

    {
      name: "Arbre de lumière",
      type: "Décoration",
      icon: "✧"
    }

  ],


  legendary: [

    {
      name: "Cœur du NEXUS",
      type: "Artefact",
      icon: "✶"
    },

    {
      name: "Dragon des Abysses",
      type: "Créature",
      icon: "♢"
    },

    {
      name: "Fragment Originel",
      type: "Artefact",
      icon: "✷"
    }

  ]

};


/* =========================================================
   CONFIGURATION DES 6 HABITATS
========================================================= */

const HABITATS = [

  {
    key: "jardinBulles",
    dataHabitat: "jardin-bulles",
    number: 1,

    name:
      "Jardin des Bulles",

    image:
      "images/Habitat-Jardin-Bulles.PNG",

    description:
      "Éveille un premier refuge au cœur des Abysses Astrals.",

    crystalCost:
      15,

    resources: [

      {
        name: "Fragment marin",
        quantity: 1,
        icon: "◈"
      }

    ]
  },


  {
    key: "bassinAstral",
    dataHabitat: "bassin-astral",
    number: 2,

    name:
      "Bassin Astral",

    image:
      "images/Habitat-Bassin-Astral.PNG",

    description:
      "Un bassin lumineux capable d'accueillir les créatures astrales.",

    crystalCost:
      25,

    resources: [

      {
        name: "Éclat d'azur",
        quantity: 1,
        icon: "◇"
      }

    ]
  },


  {
    key: "lagonCourants",
    dataHabitat: "lagon-courants",
    number: 3,

    name:
      "Lagon des Courants",

    image:
      "images/Habitat-Lagon-Courants.PNG",

    description:
      "Les courants des Abysses se rassemblent pour former un vaste lagon.",

    crystalCost:
      35,

    resources: [

      {
        name: "Fragment marin",
        quantity: 2,
        icon: "◈"
      }

    ]
  },


  {
    key: "jardinCorail",
    dataHabitat: "jardin-corail",
    number: 4,

    name:
      "Jardin de Corail Céleste",

    image:
      "images/Habitat-Jardin-Corail-Celeste.PNG",

    description:
      "Un jardin de coraux célestes où la lumière semble prendre vie.",

    crystalCost:
      45,

    resources: [

      {
        name: "Corail spectral",
        quantity: 1,
        icon: "✦"
      },

      {
        name: "Perle runique",
        quantity: 1,
        icon: "●"
      }

    ]
  },


  {
    key: "templeMarees",
    dataHabitat: "temple-marees",
    number: 5,

    name:
      "Temple des Marées",

    image:
      "images/Habitat-Temple-Marees.PNG",

    description:
      "Un temple ancien réagit au rythme des marées du NEXUS.",

    crystalCost:
      60,

    resources: [

      {
        name: "Relique des Marées",
        quantity: 1,
        icon: "◎"
      },

      {
        name: "Perle runique",
        quantity: 2,
        icon: "●"
      }

    ]
  },


  {
    key: "sanctuaireProfondeurs",
    dataHabitat: "sanctuaire-profondeurs",
    number: 6,

    name:
      "Sanctuaire des Profondeurs",

    image:
      "images/Habitat-Sanctuaire-Profondeurs.PNG",

    description:
      "Le refuge ultime des Abysses Astrals.",

    crystalCost:
      90,

    resources: [

      {
        name: "Relique des Marées",
        quantity: 2,
        icon: "◎"
      },

      {
        name: "Perle runique",
        quantity: 3,
        icon: "●"
      },

      {
        name: "Cristal des profondeurs",
        quantity: 1,
        icon: "◆"
      }

    ]
  }

];


/* =========================================================
   ÉCRANS
========================================================= */

const homeScreen =
  document.getElementById("homeScreen");

const ascensionScreen =
  document.getElementById("ascensionScreen");

const sanctuaryScreen =
  document.getElementById("sanctuaryScreen");

const nexusWorldScreen =
  document.getElementById("nexusWorldScreen");


/* =========================================================
   ACCUEIL
========================================================= */

const todayLabel =
  document.getElementById("todayLabel");

const dayStatusText =
  document.getElementById("dayStatusText");

const xpValue =
  document.getElementById("xpValue");

const xpCurrentText =
  document.getElementById("xpCurrentText");

const xpBarFill =
  document.getElementById("xpBarFill");

const resonanceLevel =
  document.getElementById("resonanceLevel");

const dailyCount =
  document.getElementById("dailyCount");

const rewardTrack =
  document.getElementById("rewardTrack");

const portalPreview =
  document.getElementById("portalPreview");

const portalAccessTitle =
  document.getElementById("portalAccessTitle");

const portalAccessText =
  document.getElementById("portalAccessText");

const enterAscensionBtn =
  document.getElementById("enterAscensionBtn");


/* =========================================================
   MENU
========================================================= */

const openMenuBtn =
  document.getElementById("openMenuBtn");

const menuOverlay =
  document.getElementById("menuOverlay");

const closeMenuBtn =
  document.getElementById("closeMenuBtn");

const menuHomeBtn =
  document.getElementById("menuHomeBtn");

const menuSanctuaryBtn =
  document.getElementById("menuSanctuaryBtn");

const menuStatsBtn =
  document.getElementById("menuStatsBtn");

const resetTodayBtn =
  document.getElementById("resetTodayBtn");

const resetAllBtn =
  document.getElementById("resetAllBtn");


/* =========================================================
   ASCENSION
========================================================= */

const leaveAscensionBtn =
  document.getElementById("leaveAscensionBtn");

const pauseBtn =
  document.getElementById("pauseBtn");

const worldName =
  document.getElementById("worldName");

const ascensionName =
  document.getElementById("ascensionName");

const runicStability =
  document.getElementById("runicStability");

const stabilityNumber =
  document.getElementById("stabilityNumber");

const stabilityMessage =
  document.getElementById("stabilityMessage");

const currentStepText =
  document.getElementById("currentStepText");

const runCrystals =
  document.getElementById("runCrystals");

const activePowerText =
  document.getElementById("activePowerText");

const roomTitle =
  document.getElementById("roomTitle");

const roomDescription =
  document.getElementById("roomDescription");

const roomVisual =
  document.getElementById("roomVisual");

const pathChoices =
  document.getElementById("pathChoices");

const roomActionZone =
  document.getElementById("roomActionZone");

const roomActionBtn =
  document.getElementById("roomActionBtn");


/* =========================================================
   POUVOIRS
========================================================= */

const powerOverlay =
  document.getElementById("powerOverlay");


/* =========================================================
   ÉPREUVES
========================================================= */

const challengeOverlay =
  document.getElementById("challengeOverlay");

const challengeType =
  document.getElementById("challengeType");

const challengeTitle =
  document.getElementById("challengeTitle");

const challengeInstructions =
  document.getElementById("challengeInstructions");

const challengeArea =
  document.getElementById("challengeArea");

const challengeContinueBtn =
  document.getElementById("challengeContinueBtn");


/* =========================================================
   GARDIEN
========================================================= */

const guardianOverlay =
  document.getElementById("guardianOverlay");

const guardianMessage =
  document.getElementById("guardianMessage");

const guardianWins =
  document.getElementById("guardianWins");

const guardianRounds =
  document.getElementById("guardianRounds");

const startGuardianBtn =
  document.getElementById("startGuardianBtn");


/* =========================================================
   RÉCOMPENSE
========================================================= */

const rewardOverlay =
  document.getElementById("rewardOverlay");

const rewardBigIcon =
  document.getElementById("rewardBigIcon");

const rewardRarity =
  document.getElementById("rewardRarity");

const rewardTitle =
  document.getElementById("rewardTitle");

const rewardDescription =
  document.getElementById("rewardDescription");

const rewardContinueBtn =
  document.getElementById("rewardContinueBtn");


/* =========================================================
   FIN ASCENSION
========================================================= */

const endAscensionOverlay =
  document.getElementById("endAscensionOverlay");

const endAscensionLabel =
  document.getElementById("endAscensionLabel");

const endAscensionTitle =
  document.getElementById("endAscensionTitle");

const endAscensionText =
  document.getElementById("endAscensionText");

const endCrystals =
  document.getElementById("endCrystals");

const endSteps =
  document.getElementById("endSteps");

const endHomeBtn =
  document.getElementById("endHomeBtn");

const endSanctuaryBtn =
  document.getElementById("endSanctuaryBtn");


/* =========================================================
   SANCTUAIRE
========================================================= */

const sanctuaryBackBtn =
  document.getElementById("sanctuaryBackBtn");

const totalCrystalsElement =
  document.getElementById("totalCrystals");

const artifactCount =
  document.getElementById("artifactCount");

const creatureCount =
  document.getElementById("creatureCount");

const collectionGrid =
  document.getElementById("collectionGrid");


/* =========================================================
   MONDE NEXUS
========================================================= */

const openNexusWorldBtn =
  document.getElementById("openNexusWorldBtn");

const closeNexusWorldBtn =
  document.getElementById("closeNexusWorldBtn");

const centralSanctuaryBtn =
  document.getElementById("centralSanctuaryBtn");

const buildHabitatOverlay =
  document.getElementById("buildHabitatOverlay");

const cancelBuildHabitatBtn =
  document.getElementById("cancelBuildHabitatBtn");

const confirmBuildHabitatBtn =
  document.getElementById("confirmBuildHabitatBtn");


/* =========================================================
   CONFIRMATION
========================================================= */

const confirmOverlay =
  document.getElementById("confirmOverlay");

const confirmTitle =
  document.getElementById("confirmTitle");

const confirmText =
  document.getElementById("confirmText");

const cancelConfirmBtn =
  document.getElementById("cancelConfirmBtn");

const confirmActionBtn =
  document.getElementById("confirmActionBtn");


/* =========================================================
   TOAST
========================================================= */

const toast =
  document.getElementById("toast");

const toastText =
  document.getElementById("toastText");


/* =========================================================
   ÉTAT GLOBAL
========================================================= */

let habits = {};

let currentXP = 0;

let totalPermanentCrystals = 0;

let collection = [];

let ascensionLevel = 1;

let currentWorld = 1;

let stats = {

  totalAscensions: 0,

  successfulAscensions: 0,

  perfectDays: 0

};


/* =========================================================
   MONDE NEXUS — ÉTAT
========================================================= */

let nexusWorldData = {

  /*
    Les Abysses Astrals ne sont plus ouverts
    automatiquement.

    Déblocage officiel :
    - avoir réussi au moins 1 Ascension
    - posséder 10 cristaux
    - les 10 cristaux sont dépensés une seule fois
  */

  abyssesUnlocked:
    false,

  habitats: {

    jardinBulles:
      false,

    bassinAstral:
      false,

    lagonCourants:
      false,

    jardinCorail:
      false,

    templeMarees:
      false,

    sanctuaireProfondeurs:
      false

  }

};

/* =========================================================
   PARTIE EN COURS
========================================================= */

let run = {

  active:
    false,

  maxSteps:
    0,

  currentStep:
    1,

  stability:
    3,

  crystals:
    0,

  power:
    null,

  shieldUsed:
    false,

  path:
    null,

  guardianWins:
    0,

  guardianRounds:
    0

};


/* =========================================================
   DATE
========================================================= */

function getTodayKey() {

  const date =
    new Date();


  const year =
    date.getFullYear();


  const month =
    String(
      date.getMonth() + 1
    ).padStart(
      2,
      "0"
    );


  const day =
    String(
      date.getDate()
    ).padStart(
      2,
      "0"
    );


  return `${year}-${month}-${day}`;

}


function formatToday() {

  return new Intl.DateTimeFormat(
    "fr-FR",
    {
      weekday: "long",
      day: "numeric",
      month: "long"
    }
  ).format(
    new Date()
  );

}


/* =========================================================
   INITIALISATION
========================================================= */

function init() {

  loadPermanentData();

  loadNexusWorldData();

  checkDailyReset();

  loadDailyHabits();


  todayLabel.textContent =
    capitalize(
      formatToday()
    );


  bindHabitButtons();

  bindNavigation();

  bindPathButtons();

  bindPowerButtons();

  bindNexusWorld();


  applyPermanentVisuals();

  updateDailyUI();

  updateSanctuary();

  renderAllHabitats();


  showScreen(
    homeScreen
  );

}


init();


/* =========================================================
   VISUELS GÉNÉRAUX
========================================================= */

function applyPermanentVisuals() {

  homeScreen.style.backgroundImage =
    `
      linear-gradient(
        180deg,
        rgba(2,8,12,.50),
        rgba(2,8,12,.86)
      ),
      url("${VISUALS.home}")
    `;


  homeScreen.style.backgroundSize =
    "cover";


  homeScreen.style.backgroundPosition =
    "center";


  homeScreen.style.backgroundAttachment =
    "fixed";


  const portalCard =
    document.querySelector(
      ".portal-access-card"
    );


  if (
    portalCard
  ) {

    portalCard.style.backgroundImage =
      `
        linear-gradient(
          90deg,
          rgba(3,12,18,.76),
          rgba(3,12,18,.42)
        ),
        url("${VISUALS.portal}")
      `;


    portalCard.style.backgroundSize =
      "cover";


    portalCard.style.backgroundPosition =
      "center";

  }


  setPathVisual(
    document.querySelector(
      ".mist-path"
    ),
    VISUALS.pathMist
  );


  setPathVisual(
    document.querySelector(
      ".crystal-path"
    ),
    VISUALS.pathCrystal
  );


  setPathVisual(
    document.querySelector(
      ".forbidden-path"
    ),
    VISUALS.pathForbidden
  );

}


function setPathVisual(
  element,
  image
) {

  if (
    !element
  ) {

    return;

  }


  element.style.backgroundImage =
    `
      linear-gradient(
        180deg,
        rgba(3,10,16,.30),
        rgba(3,10,16,.88)
      ),
      url("${image}")
    `;


  element.style.backgroundSize =
    "cover";


  element.style.backgroundPosition =
    "center";

}


/* =========================================================
   DONNÉES PERMANENTES
========================================================= */

function loadPermanentData() {

  totalPermanentCrystals =
    Number(
      localStorage.getItem(
        STORAGE.totalCrystals
      )
    ) || 0;


  try {

    collection =
      JSON.parse(
        localStorage.getItem(
          STORAGE.collection
        ) || "[]"
      );

  }

  catch {

    collection = [];

  }


  ascensionLevel =
    Number(
      localStorage.getItem(
        STORAGE.ascensionLevel
      )
    ) || 1;


  currentWorld =
    Number(
      localStorage.getItem(
        STORAGE.world
      )
    ) || 1;


  try {

    const loadedStats =
      JSON.parse(
        localStorage.getItem(
          STORAGE.stats
        ) || "{}"
      );


    stats = {

      ...stats,

      ...loadedStats

    };

  }

  catch {

    stats = {

      totalAscensions: 0,

      successfulAscensions: 0,

      perfectDays: 0

    };

  }

}


function savePermanentData() {

  localStorage.setItem(
    STORAGE.totalCrystals,
    totalPermanentCrystals
  );


  localStorage.setItem(
    STORAGE.collection,
    JSON.stringify(
      collection
    )
  );


  localStorage.setItem(
    STORAGE.ascensionLevel,
    ascensionLevel
  );


  localStorage.setItem(
    STORAGE.world,
    currentWorld
  );


  localStorage.setItem(
    STORAGE.stats,
    JSON.stringify(
      stats
    )
  );

}


/* =========================================================
   MONDE NEXUS — CHARGEMENT
========================================================= */

function loadNexusWorldData() {

  const saved =
    localStorage.getItem(
      STORAGE.nexusWorld
    );


  if (
    !saved
  ) {

    saveNexusWorldData();

    return;

  }


  try {

    const parsed =
      JSON.parse(
        saved
      );


    nexusWorldData = {

      ...nexusWorldData,

      ...parsed,

      habitats: {

        ...nexusWorldData.habitats,

        ...(
          parsed.habitats ||
          {}
        )

      }

    };

  }

  catch (
    error
  ) {

    console.warn(
      "Sauvegarde Monde NEXUS invalide.",
      error
    );


    nexusWorldData = {

      abyssesUnlocked:
        false,

      habitats: {

        jardinBulles:
          false,

        bassinAstral:
          false,

        lagonCourants:
          false,

        jardinCorail:
          false,

        templeMarees:
          false,

        sanctuaireProfondeurs:
          false

      }

    };


    saveNexusWorldData();

  }

}


function saveNexusWorldData() {

  localStorage.setItem(
    STORAGE.nexusWorld,
    JSON.stringify(
      nexusWorldData
    )
  );

}


/* =========================================================
   RESET QUOTIDIEN
========================================================= */

function checkDailyReset() {

  const today =
    getTodayKey();


  const savedDate =
    localStorage.getItem(
      STORAGE.dayDate
    );


  if (
    savedDate !== today
  ) {

    habits =
      {};


    localStorage.setItem(
      STORAGE.dayDate,
      today
    );


    localStorage.setItem(
      STORAGE.habits,
      JSON.stringify({})
    );

  }

}


/* =========================================================
   HABITUDES
========================================================= */

function loadDailyHabits() {

  try {

    habits =
      JSON.parse(
        localStorage.getItem(
          STORAGE.habits
        ) || "{}"
      );

  }

  catch {

    habits =
      {};

  }

}


function saveDailyHabits() {

  localStorage.setItem(
    STORAGE.habits,
    JSON.stringify(
      habits
    )
  );

}


/* =========================================================
   BOUTONS HABITUDES
========================================================= */

function bindHabitButtons() {

  document
    .querySelectorAll(
      ".habit-card"
    )
    .forEach(
      card => {

        const habitName =
          card.dataset.habit;


        card
          .querySelectorAll(
            ".habit-choice"
          )
          .forEach(
            button => {

              button.addEventListener(
                "click",
                () => {

                  selectHabit(
                    habitName,
                    Number(
                      button.dataset.value
                    )
                  );

                }
              );

            }
          );

      }
    );

}


function selectHabit(
  habitName,
  value
) {

  const previousValue =
    habits[
      habitName
    ];


  habits[
    habitName
  ] =
    value;


  saveDailyHabits();

  updateDailyUI();


  if (
    previousValue !== value
  ) {

    if (
      value > 0
    ) {

      showToast(
        `+${value} XP`
      );

    }

    else {

      showToast(
        "Critère enregistré"
      );

    }

  }

}


/* =========================================================
   XP
========================================================= */

function calculateXP() {

  let xp =
    0;


  Object
    .values(
      habits
    )
    .forEach(
      value => {

        xp +=
          Number(
            value
          ) || 0;

      }
    );


  return Math.min(
    xp,
    100
  );

}


/* =========================================================
   UI JOURNÉE
========================================================= */

function updateDailyUI() {

  currentXP =
    calculateXP();


  xpValue.textContent =
    currentXP;


  xpCurrentText.textContent =
    currentXP;


  xpBarFill.style.width =
    `${currentXP}%`;


  updateHabitVisuals();

  updateResonanceLevel();

  updateRewardTrack();

  updatePortalAccess();

}


function updateHabitVisuals() {

  let completed =
    0;


  document
    .querySelectorAll(
      ".habit-card"
    )
    .forEach(
      card => {

        const habitName =
          card.dataset.habit;


        const selectedValue =
          habits[
            habitName
          ];


        card.classList.remove(
          "selected"
        );


        card
          .querySelectorAll(
            ".habit-choice"
          )
          .forEach(
            button => {

              button.classList.remove(
                "active"
              );


              if (
                selectedValue !== undefined &&
                Number(
                  button.dataset.value
                ) ===
                Number(
                  selectedValue
                )
              ) {

                button.classList.add(
                  "active"
                );


                card.classList.add(
                  "selected"
                );

              }

            }
          );


        if (
          selectedValue !== undefined
        ) {

          completed++;

        }

      }
    );


  dailyCount.textContent =
    `${completed} / 12`;

}


/* =========================================================
   RÉSONANCE
========================================================= */

function updateResonanceLevel() {

  if (
    currentXP >= 90
  ) {

    resonanceLevel.textContent =
      "Résonance maximale";

  }

  else if (
    currentXP >= 75
  ) {

    resonanceLevel.textContent =
      "Résonance forte";

  }

  else if (
    currentXP >= 60
  ) {

    resonanceLevel.textContent =
      "Résonance stable";

  }

  else if (
    currentXP >= 45
  ) {

    resonanceLevel.textContent =
      "Résonance fragile";

  }

  else {

    resonanceLevel.textContent =
      "Résonance faible";

  }


  if (
    currentXP === 100
  ) {

    dayStatusText.textContent =
      "Le NEXUS atteint sa résonance maximale.";

  }

  else if (
    currentXP >= 90
  ) {

    dayStatusText.textContent =
      "Le Portail est pleinement accessible.";

  }

  else if (
    currentXP >= 70
  ) {

    dayStatusText.textContent =
      "Le Portail est ouvert.";

  }

  else if (
    currentXP >= 50
  ) {

    dayStatusText.textContent =
      "Le NEXUS commence à réagir.";

  }

  else {

    dayStatusText.textContent =
      "Alimente ton énergie pour éveiller le Portail.";

  }

}


/* =========================================================
   PALIERS
========================================================= */

function updateRewardTrack() {

  rewardTrack
    .querySelectorAll(
      ".reward-step"
    )
    .forEach(
      step => {

        const threshold =
          Number(
            step.dataset.threshold
          );


        const state =
          step.querySelector(
            ".reward-state"
          );


        if (
          currentXP >= threshold
        ) {

          step.classList.add(
            "unlocked"
          );


          state.textContent =
            "Débloqué";

        }

        else {

          step.classList.remove(
            "unlocked"
          );


          state.textContent =
            "Verrouillé";

        }

      }
    );

}


/* =========================================================
   PORTAIL
========================================================= */

function updatePortalAccess() {

  portalPreview
    .classList
    .remove(
      "locked",
      "open",
      "max-resonance"
    );


  if (
    currentXP < 70
  ) {

    portalPreview
      .classList
      .add(
        "locked"
      );


    portalAccessTitle.textContent =
      "Portail verrouillé";


    portalAccessText.textContent =
      "Atteins 70 XP pour commencer à ouvrir le Portail.";


    enterAscensionBtn.disabled =
      true;


    return;

  }


  enterAscensionBtn.disabled =
    false;


  portalPreview
    .classList
    .add(
      "open"
    );


  if (
    currentXP === 100
  ) {

    portalPreview
      .classList
      .add(
        "max-resonance"
      );


    portalAccessTitle.textContent =
      "Résonance maximale";


    portalAccessText.textContent =
      "Ascension complète, pouvoir renforcé et coffre rare garanti.";

  }

  else if (
    currentXP >= 90
  ) {

    portalAccessTitle.textContent =
      "Ascension complète";


    portalAccessText.textContent =
      "8 étapes, Gardien du Portail et pouvoir renforcé.";

  }

  else if (
    currentXP >= 80
  ) {

    portalAccessTitle.textContent =
      "Ascension intermédiaire";


    portalAccessText.textContent =
      "5 étapes sont accessibles.";

  }

  else {

    portalAccessTitle.textContent =
      "Mini-Ascension";


    portalAccessText.textContent =
      "3 étapes sont accessibles.";

  }

}


/* =========================================================
   NAVIGATION
========================================================= */

function bindNavigation() {

  openMenuBtn.addEventListener(
    "click",
    () => {

      menuOverlay
        .classList
        .remove(
          "hidden"
        );

    }
  );


  closeMenuBtn.addEventListener(
    "click",
    closeMenu
  );


  menuHomeBtn.addEventListener(
    "click",
    () => {

      closeMenu();


      showScreen(
        homeScreen
      );

    }
  );


  menuSanctuaryBtn.addEventListener(
    "click",
    () => {

      closeMenu();


      updateSanctuary();


      showScreen(
        sanctuaryScreen
      );

    }
  );


  menuStatsBtn.addEventListener(
    "click",
    () => {

      closeMenu();


      showToast(
        `Ascensions réussies : ${stats.successfulAscensions}`
      );

    }
  );


  sanctuaryBackBtn.addEventListener(
    "click",
    () => {

      showScreen(
        homeScreen
      );

    }
  );


  enterAscensionBtn.addEventListener(
    "click",
    prepareAscension
  );


  leaveAscensionBtn.addEventListener(
    "click",
    () => {

      if (
        confirm(
          "Quitter cette Ascension ?"
        )
      ) {

        run.active =
          false;


        showScreen(
          homeScreen
        );

      }

    }
  );


  pauseBtn.addEventListener(
    "click",
    () => {

      showToast(
        "Pause"
      );

    }
  );


  resetTodayBtn.addEventListener(
    "click",
    () => {

      closeMenu();


      openConfirmation(
        "Réinitialiser la journée ?",
        "Tous les XP et choix du jour seront effacés.",
        resetToday
      );

    }
  );


  resetAllBtn.addEventListener(
    "click",
    () => {

      closeMenu();


      openConfirmation(
        "Tout réinitialiser ?",
        "Les XP, cristaux, objets et toute la progression seront supprimés.",
        resetAll
      );

    }
  );


  cancelConfirmBtn.addEventListener(
    "click",
    () => {

      confirmOverlay
        .classList
        .add(
          "hidden"
        );

    }
  );


  endHomeBtn.addEventListener(
    "click",
    () => {

      endAscensionOverlay
        .classList
        .add(
          "hidden"
        );


      showScreen(
        homeScreen
      );

    }
  );


  endSanctuaryBtn.addEventListener(
    "click",
    () => {

      endAscensionOverlay
        .classList
        .add(
          "hidden"
        );


      updateSanctuary();


      showScreen(
        sanctuaryScreen
      );

    }
  );

}


/* =========================================================
   ÉCRANS
========================================================= */

function showScreen(
  screen
) {

  [
    homeScreen,
    ascensionScreen,
    sanctuaryScreen,
    nexusWorldScreen
  ]
    .filter(
      Boolean
    )
    .forEach(
      item => {

        item.classList.remove(
          "active"
        );

      }
    );


  if (
    screen
  ) {

    screen.classList.add(
      "active"
    );

  }


  window.scrollTo({
    top: 0
  });

}


function closeMenu() {

  menuOverlay
    .classList
    .add(
      "hidden"
    );

}


/* =========================================================
   PRÉPARER ASCENSION
========================================================= */

function prepareAscension() {

  if (
    currentXP < 70
  ) {

    return;

  }


  run = {

    active:
      true,

    maxSteps:
      getAscensionSteps(),

    currentStep:
      1,

    stability:
      3,

    crystals:
      0,

    power:
      null,

    shieldUsed:
      false,

    path:
      null,

    guardianWins:
      0,

    guardianRounds:
      0

  };


  stats.totalAscensions++;


  savePermanentData();


  if (
    currentXP >= 90
  ) {

    powerOverlay
      .classList
      .remove(
        "hidden"
      );

  }

  else {

    startAscension();

  }

}


function getAscensionSteps() {

  if (
    currentXP >= 90
  ) {

    return 8;

  }


  if (
    currentXP >= 80
  ) {

    return 5;

  }


  return 3;

}


/* =========================================================
   POUVOIRS
========================================================= */

function bindPowerButtons() {

  document
    .querySelectorAll(
      ".power-card"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            run.power =
              button.dataset.power;


            powerOverlay
              .classList
              .add(
                "hidden"
              );


            startAscension();

          }
        );

      }
    );

}


/* =========================================================
   MONDE ACTUEL
========================================================= */

function getCurrentWorld() {

  return (
    WORLDS.find(
      world =>
        world.id === currentWorld
    ) ||
    WORLDS[0]
  );

}


/* =========================================================
   DÉMARRER ASCENSION
========================================================= */

function startAscension() {

  const world =
    getCurrentWorld();


  worldName.textContent =
    `Monde ${world.id}`;


  ascensionName.textContent =
    world.name;


  ascensionScreen.style.backgroundImage =
    `
      linear-gradient(
        180deg,
        rgba(2,8,12,.24),
        rgba(2,8,12,.72)
      ),
      url("${world.image}")
    `;


  ascensionScreen.style.backgroundSize =
    "cover";


  ascensionScreen.style.backgroundPosition =
    "center";


  ascensionScreen.style.backgroundAttachment =
    "fixed";


  updateRunUI();


  showScreen(
    ascensionScreen
  );


  showEntrance();

}


/* =========================================================
   ENTRÉE
========================================================= */

function showEntrance() {

  roomTitle.textContent =
    "Le passage s'éveille";


  roomDescription.textContent =
    "Trois chemins se dessinent devant toi.";


  setRoomImage(
    VISUALS.portal,
    "◎"
  );


  pathChoices
    .classList
    .remove(
      "hidden"
    );


  roomActionZone
    .classList
    .add(
      "hidden"
    );

}


/* =========================================================
   CHEMINS
========================================================= */

function bindPathButtons() {

  document
    .querySelectorAll(
      ".path-card"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            if (
              run.path
            ) {

              return;

            }


            run.path =
              button.dataset.path;


            resolvePathChoice(
              run.path
            );

          }
        );

      }
    );

}


function resolvePathChoice(
  path
) {

  pathChoices
    .classList
    .add(
      "hidden"
    );


  showRoom(
    generateRoom(
      path
    )
  );

}


/* =========================================================
   GÉNÉRATION SALLES
========================================================= */

function generateRoom(
  path
) {

  const roll =
    Math.random();


  if (
    path === "mist"
  ) {

    if (
      roll < .30
    ) {

      return "sanctuary";

    }


    if (
      roll < .58
    ) {

      return "crystal";

    }


    if (
      roll < .80
    ) {

      return "mist";

    }


    return "challenge";

  }


  if (
    path === "crystal"
  ) {

    if (
      roll < .28
    ) {

      return "crystal";

    }


    if (
      roll < .52
    ) {

      return "chest";

    }


    if (
      roll < .76
    ) {

      return "challenge";

    }


    return "obstacle";

  }


  if (
    path === "forbidden"
  ) {

    if (
      roll < .28
    ) {

      return "forbidden";

    }


    if (
      roll < .50
    ) {

      return "obstacle";

    }


    if (
      roll < .72
    ) {

      return "challenge";

    }


    if (
      roll < .92
    ) {

      return "chest";

    }


    return "secret";

  }


  return "crystal";

}


/* =========================================================
   IMAGE SALLE
========================================================= */

function setRoomImage(
  image,
  symbol = ""
) {

  roomVisual.innerHTML =
    `
      <img
        src="${image}"
        alt=""
        class="room-scene-image"
      >

      ${
        symbol
          ? `
              <div class="temporary-symbol">
                ${symbol}
              </div>
            `
          : ""
      }
    `;

}


/* =========================================================
   SALLES
========================================================= */

function showRoom(
  type
) {

  pathChoices
    .classList
    .add(
      "hidden"
    );


  roomActionZone
    .classList
    .remove(
      "hidden"
    );


  if (
    type === "crystal"
  ) {

    roomTitle.textContent =
      "Salle des Cristaux";


    roomDescription.textContent =
      "Des fragments d'énergie résonnent autour de toi.";


    setRoomImage(
      VISUALS.crystalRoom,
      "◆"
    );


    roomActionBtn.textContent =
      "Collecter";


    roomActionBtn.onclick =
      () => {

        const gain =
          randomInt(
            4,
            10
          );


        addRunCrystals(
          gain
        );


        showToast(
          `+${gain} cristaux`
        );


        nextStep();

      };


    return;

  }


  if (
    type === "chest"
  ) {

    roomTitle.textContent =
      "Salle du Coffre";


    roomDescription.textContent =
      "Un coffre ancien pulse au centre de la salle.";


    setRoomImage(
      VISUALS.chestRoom
    );


    roomActionBtn.textContent =
      "Ouvrir le coffre";


    roomActionBtn.onclick =
      () => {

        giveRandomReward(
          getRewardRarity(
            run.path
          ),
          nextStep
        );

      };


    return;

  }


  if (
    type === "mist"
  ) {

    roomTitle.textContent =
      "Salle des Brumes";


    roomDescription.textContent =
      "Quelque chose bouge derrière le voile.";


    setRoomImage(
      VISUALS.mistRoom
    );


    roomActionBtn.textContent =
      "Traverser";


    roomActionBtn.onclick =
      () => {

        const roll =
          Math.random();


        if (
          roll < .55
        ) {

          const gain =
            randomInt(
              3,
              8
            );


          addRunCrystals(
            gain
          );


          showToast(
            `+${gain} cristaux`
          );

        }

        else if (
          roll < .80
        ) {

          restoreStability();

        }

        else {

          loseStability();

        }


        if (
          run.stability > 0
        ) {

          nextStep();

        }

      };


    return;

  }


  if (
    type === "sanctuary"
  ) {

    roomTitle.textContent =
      "Salle du Sanctuaire";


    roomDescription.textContent =
      "Une énergie ancienne stabilise ton passage.";


    setRoomImage(
      VISUALS.sanctuaryRoom
    );


    roomActionBtn.textContent =
      "Recevoir l'énergie";


    roomActionBtn.onclick =
      () => {

        restoreStability();

        nextStep();

      };


    return;

  }


  if (
    type === "challenge"
  ) {

    roomTitle.textContent =
      "Salle d'Épreuve";


    roomDescription.textContent =
      "Le NEXUS te soumet à une épreuve.";


    setRoomImage(
      VISUALS.challenge,
      "◈"
    );


    roomActionBtn.textContent =
      "Commencer l'épreuve";


    roomActionBtn.onclick =
      () => {

        startRandomChallenge(
          false,
          () => {

            nextStep();

          }
        );

      };


    return;

  }


  if (
    type === "obstacle"
  ) {

    roomTitle.textContent =
      "Salle de l'Obstacle";


    roomDescription.textContent =
      "Le passage est instable. Traverse-le.";


    setRoomImage(
      VISUALS.forbiddenRoom,
      "⚠"
    );


    roomActionBtn.textContent =
      "Affronter l'obstacle";


    roomActionBtn.onclick =
      () => {

        startRandomChallenge(
          false,
          success => {

            if (
              success
            ) {

              const bonus =
                randomInt(
                  5,
                  12
                );


              addRunCrystals(
                bonus
              );


              showToast(
                `+${bonus} cristaux`
              );

            }


            if (
              run.stability > 0
            ) {

              nextStep();

            }

          }
        );

      };


    return;

  }


  if (
    type === "forbidden"
  ) {

    roomTitle.textContent =
      "Salle Interdite";


    roomDescription.textContent =
      "Une énergie dangereuse protège un trésor rare.";


    setRoomImage(
      VISUALS.forbiddenRoom,
      "✦"
    );


    roomActionBtn.textContent =
      "Entrer";


    roomActionBtn.onclick =
      () => {

        startRandomChallenge(
          true,
          success => {

            if (
              success
            ) {

              const gain =
                randomInt(
                  12,
                  24
                );


              addRunCrystals(
                gain
              );


              giveRandomReward(
                randomRareRarity(),
                nextStep
              );

            }

            else if (
              run.stability > 0
            ) {

              nextStep();

            }

          }
        );

      };


    return;

  }


  if (
    type === "secret"
  ) {

    roomTitle.textContent =
      "Salle Secrète";


    roomDescription.textContent =
      "Un passage oublié vient de s'ouvrir.";


    setRoomImage(
      VISUALS.secretRoom,
      "✶"
    );


    roomActionBtn.textContent =
      "Découvrir le secret";


    roomActionBtn.onclick =
      () => {

        giveRandomReward(
          Math.random() < .30
            ? "legendary"
            : "epic",
          nextStep
        );

      };

  }

}


/* =========================================================
   ÉTAPE SUIVANTE
========================================================= */

function nextStep() {

  if (
    !run.active
  ) {

    return;

  }


  if (
    run.stability <= 0
  ) {

    endAscension(
      false
    );


    return;

  }


  run.currentStep++;


  updateRunUI();


  if (
    run.maxSteps === 8 &&
    run.currentStep === 7
  ) {

    openGuardian();

    return;

  }


  if (
    run.currentStep >=
    run.maxSteps
  ) {

    finalTreasure();

    return;

  }


  showRoom(
    generateRoom(
      run.path
    )
  );

}


/* =========================================================
   TRÉSOR FINAL
========================================================= */

function finalTreasure() {

  roomTitle.textContent =
    "Trésor final";


  roomDescription.textContent =
    "Le NEXUS reconnaît ton passage.";


  setRoomImage(
    VISUALS.reward
  );


  pathChoices
    .classList
    .add(
      "hidden"
    );


  roomActionZone
    .classList
    .remove(
      "hidden"
    );


  roomActionBtn.textContent =
    "Ouvrir le trésor";


  roomActionBtn.onclick =
    () => {

      const rarity =
        currentXP === 100
          ? "rare"
          : getFinalRarity();


      giveRandomReward(
        rarity,
        completeAscension
      );

    };

}


function getFinalRarity() {

  const roll =
    Math.random();


  if (
    run.stability === 3
  ) {

    if (
      roll < .08
    ) {

      return "epic";

    }


    if (
      roll < .35
    ) {

      return "rare";

    }


    return "uncommon";

  }


  if (
    run.stability === 2
  ) {

    if (
      roll < .20
    ) {

      return "rare";

    }


    return "uncommon";

  }


  return "common";

}


/* =========================================================
   CRISTAUX PARTIE
========================================================= */

function addRunCrystals(
  amount
) {

  run.crystals +=
    amount;


  runCrystals.textContent =
    run.crystals;

}


/* =========================================================
   STABILITÉ
========================================================= */

function restoreStability() {

  if (
    run.stability >= 3
  ) {

    showToast(
      "Stabilité déjà maximale"
    );


    return;

  }


  run.stability++;


  updateStabilityUI();


  showToast(
    "Stabilité restaurée"
  );

}


function loseStability() {

  if (
    run.power === "shield" &&
    run.shieldUsed === false
  ) {

    run.shieldUsed =
      true;


    showToast(
      "Bouclier runique activé"
    );


    return;

  }


  run.stability--;


  updateStabilityUI();


  if (
    run.stability <= 0
  ) {

    showToast(
      "Le Portail s'effondre"
    );


    setTimeout(
      () => {

        endAscension(
          false
        );

      },
      650
    );

  }

  else {

    showToast(
      "Le Portail vacille"
    );

  }

}


function updateStabilityUI() {

  stabilityNumber.textContent =
    run.stability;


  document
    .querySelectorAll(
      ".stability-crystal"
    )
    .forEach(
      (
        crystal,
        index
      ) => {

        crystal.classList.toggle(
          "active",
          index < run.stability
        );

      }
    );


  runicStability
    .classList
    .remove(
      "fragile",
      "critical",
      "collapsed"
    );


  if (
    run.stability === 3
  ) {

    stabilityMessage.textContent =
      "Le portail est parfaitement stable.";

  }

  else if (
    run.stability === 2
  ) {

    runicStability
      .classList
      .add(
        "fragile"
      );


    stabilityMessage.textContent =
      "Le portail commence à vaciller.";

  }

  else if (
    run.stability === 1
  ) {

    runicStability
      .classList
      .add(
        "critical"
      );


    stabilityMessage.textContent =
      "La résonance est critique.";

  }

  else {

    runicStability
      .classList
      .add(
        "collapsed"
      );


    stabilityMessage.textContent =
      "Le portail s'est effondré.";

  }

}


function updateRunUI() {

  currentStepText.textContent =
    `${Math.min(
      run.currentStep,
      run.maxSteps
    )} / ${run.maxSteps}`;


  runCrystals.textContent =
    run.crystals;


  if (
    run.power === "shield"
  ) {

    activePowerText.textContent =
      "Bouclier";

  }

  else if (
    run.power === "vision"
  ) {

    activePowerText.textContent =
      "Vision";

  }

  else {

    activePowerText.textContent =
      "Aucun";

  }


  updateStabilityUI();

}


/* =========================================================
   ÉPREUVES
========================================================= */

function startRandomChallenge(
  hardMode = false,
  callback = null
) {

  challengeOverlay
    .classList
    .remove(
      "hidden"
    );


  const challengeCard =
    challengeOverlay
      .querySelector(
        ".challenge-card"
      );


  challengeCard.style.backgroundImage =
    `
      linear-gradient(
        180deg,
        rgba(3,10,15,.18),
        rgba(3,10,15,.86)
      ),
      url("${VISUALS.challenge}")
    `;


  challengeCard.style.backgroundSize =
    "cover";


  challengeCard.style.backgroundPosition =
    "center";


  challengeContinueBtn
    .classList
    .add(
      "hidden"
    );


  const challenges = [
    "memory",
    "different",
    "seal"
  ];


  const selected =
    challenges[
      Math.floor(
        Math.random() *
        challenges.length
      )
    ];


  if (
    selected === "memory"
  ) {

    challengeMemory(
      hardMode,
      callback
    );

  }

  else if (
    selected === "different"
  ) {

    challengeDifferent(
      hardMode,
      callback
    );

  }

  else {

    challengeSeal(
      hardMode,
      callback
    );

  }

}


/* =========================================================
   MÉMOIRE
========================================================= */

function challengeMemory(
  hardMode,
  callback
) {

  challengeType.textContent =
    "Mémoire runique";


  challengeTitle.textContent =
    "Mémorise le cristal";


  challengeInstructions.textContent =
    "Observe son symbole avant qu'il ne disparaisse.";


  const symbols = [
    "◆",
    "◈",
    "✦",
    "◎",
    "◇",
    "❋"
  ];


  const correct =
    symbols[
      Math.floor(
        Math.random() *
        symbols.length
      )
    ];


  challengeArea.innerHTML =
    `
      <div
        style="
          width:120px;
          height:160px;
          display:grid;
          place-items:center;
          font-size:5rem;
          color:#7cfff1;
          text-shadow:
            0 0 20px #6af9ea,
            0 0 50px #68b8ff;
        "
      >
        ${correct}
      </div>
    `;


  setTimeout(
    () => {

      const options =
        shuffleArray([
          correct,

          ...pickOtherSymbols(
            symbols,
            correct,
            hardMode
              ? 4
              : 3
          )
        ]);


      challengeArea.innerHTML =
        `
          <div
            style="
              display:grid;
              grid-template-columns:
                repeat(2,90px);
              gap:16px;
              justify-content:center;
            "
          >

            ${
              options
                .map(
                  symbol => `
                    <button
                      class="challenge-memory-button"
                      data-answer="${symbol}"
                      style="
                        width:90px;
                        height:90px;
                        border-radius:24px;
                        border:
                          1px solid rgba(106,249,234,.30);
                        background:
                          radial-gradient(
                            circle,
                            rgba(106,249,234,.15),
                            rgba(7,25,34,.88)
                          );
                        color:#7cfff1;
                        font-size:2.5rem;
                      "
                    >
                      ${symbol}
                    </button>
                  `
                )
                .join("")
            }

          </div>
        `;


      challengeArea
        .querySelectorAll(
          ".challenge-memory-button"
        )
        .forEach(
          button => {

            button.addEventListener(
              "click",
              () => {

                resolveChallenge(
                  button.dataset.answer === correct,
                  callback
                );

              }
            );

          }
        );

    },
    hardMode
      ? 1200
      : 1800
  );

}


/* =========================================================
   INTRUS
========================================================= */

function challengeDifferent(
  hardMode,
  callback
) {

  challengeType.textContent =
    "Observation runique";


  challengeTitle.textContent =
    "Trouve la rune instable";


  challengeInstructions.textContent =
    "Une seule rune ne résonne pas comme les autres.";


  const count =
    hardMode
      ? 15
      : 12;


  const target =
    randomInt(
      0,
      count - 1
    );


  let html =
    `
      <div
        style="
          display:grid;
          grid-template-columns:
            repeat(3,72px);
          gap:12px;
          justify-content:center;
        "
      >
    `;


  for (
    let i = 0;
    i < count;
    i++
  ) {

    html +=
      `
        <button
          class="challenge-rune"
          data-correct="${
            i === target
              ? "yes"
              : "no"
          }"
          style="
            width:72px;
            height:72px;
            border-radius:18px;
            border:
              1px solid rgba(106,249,234,.25);
            background:
              rgba(5,23,32,.90);
            color:#6af9ea;
            font-size:2rem;
          "
        >
          ${
            i === target
              ? "◇"
              : "◆"
          }
        </button>
      `;

  }


  html +=
    "</div>";


  challengeArea.innerHTML =
    html;


  challengeArea
    .querySelectorAll(
      ".challenge-rune"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            resolveChallenge(
              button.dataset.correct === "yes",
              callback
            );

          }
        );

      }
    );

}


/* =========================================================
   SCEAUX
========================================================= */

function challengeSeal(
  hardMode,
  callback
) {

  challengeType.textContent =
    "Résonance";


  challengeTitle.textContent =
    "Choisis le sceau vivant";


  challengeInstructions.textContent =
    "Un seul sceau contient l'énergie du NEXUS.";


  const seals = [
    "✦",
    "◆",
    "◎",
    "◈"
  ];


  const count =
    hardMode
      ? 4
      : 3;


  const correct =
    randomInt(
      0,
      count - 1
    );


  challengeArea.innerHTML =
    `
      <div
        style="
          display:flex;
          flex-wrap:wrap;
          gap:18px;
          justify-content:center;
        "
      >

        ${
          seals
            .slice(
              0,
              count
            )
            .map(
              (
                seal,
                index
              ) => `

                <button
                  class="challenge-seal"
                  data-correct="${
                    index === correct
                      ? "yes"
                      : "no"
                  }"
                  style="
                    width:100px;
                    height:100px;
                    border-radius:50%;
                    border:
                      1px solid rgba(169,134,255,.36);
                    background:
                      rgba(5,18,31,.92);
                    color:#a986ff;
                    font-size:2.6rem;
                  "
                >
                  ${seal}
                </button>

              `
            )
            .join("")
        }

      </div>
    `;


  challengeArea
    .querySelectorAll(
      ".challenge-seal"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            resolveChallenge(
              button.dataset.correct === "yes",
              callback
            );

          }
        );

      }
    );

}


/* =========================================================
   RÉSOLUTION ÉPREUVE
========================================================= */

function resolveChallenge(
  success,
  callback
) {

  if (
    !success
  ) {

    loseStability();

  }


  challengeArea.innerHTML =
    success
      ? `
          <div
            style="
              font-size:1.3rem;
              font-weight:800;
              color:#82f2ba;
            "
          >
            ✦ Résonance réussie
          </div>
        `
      : `
          <div
            style="
              font-size:1.3rem;
              font-weight:800;
              color:#ffba78;
            "
          >
            Le Portail vacille
          </div>
        `;


  challengeContinueBtn
    .classList
    .remove(
      "hidden"
    );


  challengeContinueBtn.onclick =
    () => {

      challengeOverlay
        .classList
        .add(
          "hidden"
        );


      if (
        run.stability <= 0
      ) {

        return;

      }


      if (
        callback
      ) {

        callback(
          success
        );

      }

    };

}


/* =========================================================
   GARDIEN
========================================================= */

function openGuardian() {

  const world =
    getCurrentWorld();


  guardianOverlay
    .classList
    .remove(
      "hidden"
    );


  const guardianCard =
    guardianOverlay
      .querySelector(
        ".guardian-card"
      );


  guardianCard.style.backgroundImage =
    `
      linear-gradient(
        180deg,
        rgba(2,7,12,.10),
        rgba(2,7,12,.84)
      ),
      url("${world.guardianImage}")
    `;


  guardianCard.style.backgroundSize =
    "cover";


  guardianCard.style.backgroundPosition =
    "center";


  run.guardianWins =
    0;


  run.guardianRounds =
    0;


  guardianMessage.textContent =
    `${world.guardian} exige deux victoires sur trois.`;


  updateGuardianUI();


  startGuardianBtn.textContent =
    "Affronter le Gardien";


  startGuardianBtn.onclick =
    guardianRound;

}


function guardianRound() {

  guardianOverlay
    .classList
    .add(
      "hidden"
    );


  startRandomChallenge(
    true,
    success => {

      run.guardianRounds++;


      if (
        success
      ) {

        run.guardianWins++;

      }


      guardianOverlay
        .classList
        .remove(
          "hidden"
        );


      updateGuardianUI();


      if (
        run.guardianWins >= 2
      ) {

        guardianMessage.textContent =
          "Le Gardien reconnaît ta résonance.";


        startGuardianBtn.textContent =
          "Franchir le Portail";


        startGuardianBtn.onclick =
          guardianVictory;


        return;

      }


      if (
        run.guardianRounds >= 3 ||
        run.stability <= 0
      ) {

        guardianMessage.textContent =
          "Le Gardien referme le passage.";


        startGuardianBtn.textContent =
          "Terminer";


        startGuardianBtn.onclick =
          guardianDefeat;


        return;

      }


      guardianMessage.textContent =
        "Le Gardien prépare une nouvelle épreuve.";


      startGuardianBtn.textContent =
        "Manche suivante";


      startGuardianBtn.onclick =
        guardianRound;

    }
  );

}


function updateGuardianUI() {

  guardianWins.textContent =
    `${run.guardianWins} / 2`;


  guardianRounds.textContent =
    `${run.guardianRounds} / 3`;

}


function guardianVictory() {

  guardianOverlay
    .classList
    .add(
      "hidden"
    );


  run.currentStep =
    8;


  updateRunUI();


  finalTreasure();

}


function guardianDefeat() {

  guardianOverlay
    .classList
    .add(
      "hidden"
    );


  endAscension(
    false
  );

}


/* =========================================================
   RÉCOMPENSES
========================================================= */

function giveRandomReward(
  rarity,
  callback
) {

  const pool =
    REWARD_ITEMS[
      rarity
    ];


  const reward = {

    ...pool[
      Math.floor(
        Math.random() *
        pool.length
      )
    ],

    rarity:
      rarity,

    obtainedAt:
      new Date()
        .toISOString()

  };


  collection.push(
    reward
  );


  savePermanentData();


  rewardBigIcon.textContent =
    reward.icon;


  rewardRarity.textContent =
    getRarityLabel(
      rarity
    );


  rewardTitle.textContent =
    reward.name;


  rewardDescription.textContent =
    `${reward.type} ajouté au Sanctuaire.`;


  const rewardCard =
    rewardOverlay
      .querySelector(
        ".reward-modal"
      );


  rewardCard.style.backgroundImage =
    `
      linear-gradient(
        180deg,
        rgba(3,8,14,.10),
        rgba(3,8,14,.86)
      ),
      url("${VISUALS.reward}")
    `;


  rewardCard.style.backgroundSize =
    "cover";


  rewardCard.style.backgroundPosition =
    "center";


  rewardOverlay
    .classList
    .remove(
      "hidden"
    );


  rewardContinueBtn.onclick =
    () => {

      rewardOverlay
        .classList
        .add(
          "hidden"
        );


      if (
        callback
      ) {

        callback();

      }

    };

}


/* =========================================================
   RARETÉS
========================================================= */

function getRewardRarity(
  path
) {

  const roll =
    Math.random();


  if (
    path === "forbidden"
  ) {

    if (
      roll < .05
    ) {

      return "legendary";

    }


    if (
      roll < .18
    ) {

      return "epic";

    }


    if (
      roll < .48
    ) {

      return "rare";

    }


    if (
      roll < .80
    ) {

      return "uncommon";

    }


    return "common";

  }


  if (
    path === "crystal"
  ) {

    if (
      roll < .04
    ) {

      return "epic";

    }


    if (
      roll < .22
    ) {

      return "rare";

    }


    if (
      roll < .62
    ) {

      return "uncommon";

    }


    return "common";

  }


  if (
    roll < .12
  ) {

    return "rare";

  }


  if (
    roll < .42
  ) {

    return "uncommon";

  }


  return "common";

}


function randomRareRarity() {

  const roll =
    Math.random();


  if (
    roll < .08
  ) {

    return "legendary";

  }


  if (
    roll < .28
  ) {

    return "epic";

  }


  return "rare";

}


function getRarityLabel(
  rarity
) {

  const labels = {

    common:
      "Commun",

    uncommon:
      "Peu commun",

    rare:
      "Rare",

    epic:
      "Épique",

    legendary:
      "Légendaire"

  };


  return (
    labels[
      rarity
    ] ||
    rarity
  );

}


/* =========================================================
   ASCENSION RÉUSSIE
========================================================= */

function completeAscension() {

  totalPermanentCrystals +=
    run.crystals;


  stats.successfulAscensions++;


  if (
    currentXP === 100
  ) {

    stats.perfectDays++;

  }


  ascensionLevel++;


  if (
    ascensionLevel > 10
  ) {

    ascensionLevel =
      1;


    currentWorld++;


    if (
      currentWorld >
      WORLDS.length
    ) {

      currentWorld =
        1;

    }

  }


  savePermanentData();


  endAscension(
    true
  );

}


/* =========================================================
   FIN ASCENSION
========================================================= */

function endAscension(
  success
) {

  run.active =
    false;


  if (
    !success
  ) {

    totalPermanentCrystals +=
      run.crystals;


    savePermanentData();

  }


  if (
    success
  ) {

    endAscensionLabel.textContent =
      "Ascension réussie";


    endAscensionTitle.textContent =
      "Portail franchi";


    endAscensionText.textContent =
      "Le NEXUS a enregistré ta progression.";

  }

  else {

    endAscensionLabel.textContent =
      "Ascension interrompue";


    endAscensionTitle.textContent =
      "Le Portail s'est refermé";


    endAscensionText.textContent =
      "Tes trésors et cristaux déjà gagnés sont conservés.";

  }


  endCrystals.textContent =
    run.crystals;


  endSteps.textContent =
    `${Math.min(
      run.currentStep,
      run.maxSteps
    )} / ${run.maxSteps}`;


  endAscensionOverlay
    .classList
    .remove(
      "hidden"
    );


  updateSanctuary();

}


/* =========================================================
   SANCTUAIRE
========================================================= */

function updateSanctuary() {

  sanctuaryScreen.style.backgroundImage =
    `
      linear-gradient(
        180deg,
        rgba(2,8,12,.30),
        rgba(2,8,12,.82)
      ),
      url("${VISUALS.sanctuary}")
    `;


  sanctuaryScreen.style.backgroundSize =
    "cover";


  sanctuaryScreen.style.backgroundPosition =
    "center";


  sanctuaryScreen.style.backgroundAttachment =
    "fixed";


  totalCrystalsElement.textContent =
    totalPermanentCrystals;


  artifactCount.textContent =
    collection.filter(
      item =>
        item.type === "Artefact"
    ).length;


  creatureCount.textContent =
    collection.filter(
      item =>
        item.type === "Créature"
    ).length;


  renderCollection();

}


/* =========================================================
   COLLECTION
========================================================= */

function renderCollection() {

  if (
    collection.length === 0
  ) {

    collectionGrid.innerHTML =
      `
        <div class="empty-collection">

          <div class="empty-symbol">
            ◇
          </div>

          <p>
            Ton Sanctuaire attend ses premiers trésors.
          </p>

        </div>
      `;

    return;

  }


  /* =====================================================
     REGROUPER LES DOUBLONS
  ====================================================== */

  const groupedCollection =
    {};


  collection.forEach(
    item => {

      const key =
        item.name;


      if (
        !groupedCollection[
          key
        ]
      ) {

        groupedCollection[
          key
        ] = {

          ...item,

          quantity:
            1

        };

      }

      else {

        groupedCollection[
          key
        ].quantity++;

      }

    }
  );


  /* =====================================================
     TRANSFORMER EN TABLEAU
  ====================================================== */

  const groupedItems =
    Object.values(
      groupedCollection
    );


  /* =====================================================
     AFFICHAGE
  ====================================================== */

  collectionGrid.innerHTML =
    groupedItems
      .slice()
      .reverse()
      .map(
        item => `

          <article class="collection-item ${getItemClass(item)}">

            <div class="collection-item-visual">

              ${getItemVisual(item)}

              ${
                item.quantity > 1
                  ? `
                      <div class="collection-quantity">
                        x${item.quantity}
                      </div>
                    `
                  : ""
              }

            </div>

            <div class="collection-item-name">
              ${item.name}
            </div>

            <div class="collection-item-rarity rarity-${item.rarity}">
              ${getRarityLabel(item.rarity)}
            </div>

            <div class="collection-item-type">
              ${item.type}
            </div>

          </article>

        `
      )
      .join("");

}

function getItemClass(
  item
) {

  const name =
    item.name
      .toLowerCase();


  if (
    name.includes(
      "méduse astrale"
    )
  ) {

    return "item-meduse";

  }


  if (
    name.includes(
      "éclat d'azur"
    ) ||
    name.includes(
      "eclat d'azur"
    )
  ) {

    return "item-azur";

  }


  if (
    name.includes(
      "relique des marées"
    ) ||
    name.includes(
      "relique des marees"
    )
  ) {

    return "item-marees";

  }


  return "item-generic";

}


function getItemVisual(
  item
) {

  const name =
    item.name
      .toLowerCase();


  /* =====================================================
     MÉDUSE ASTRALE
  ====================================================== */

  if (
    name.includes(
      "méduse astrale"
    )
  ) {

    return `
      <img
        src="images/Objet-Meduse-Astrale.PNG"
        alt="Méduse astrale"
        class="collection-object-image"
      >
    `;

  }


  /* =====================================================
     ÉCLAT D'AZUR
  ====================================================== */

  if (
    name.includes(
      "éclat d'azur"
    ) ||
    name.includes(
      "eclat d'azur"
    )
  ) {

    return `
      <img
        src="images/Objet-Eclat-Azur.PNG"
        alt="Éclat d'azur"
        class="collection-object-image"
      >
    `;

  }


  /* =====================================================
     RELIQUE DES MARÉES
  ====================================================== */

  if (
    name.includes(
      "relique des marées"
    ) ||
    name.includes(
      "relique des marees"
    )
  ) {

    return `
      <img
        src="images/Objet-Relique-Marees.PNG"
        alt="Relique des Marées"
        class="collection-object-image"
      >
    `;

  }


  /* =====================================================
     GARDIEN MINIATURE
  ====================================================== */

  if (
    name.includes(
      "gardien miniature"
    )
  ) {

    return `
      <img
        src="images/Objet-Gardien-Miniature.PNG"
        alt="Gardien miniature"
        class="collection-object-image"
      >
    `;

  }


  /* =====================================================
     DRAGON DES ABYSSES
  ====================================================== */

  if (
    name.includes(
      "dragon des abysses"
    )
  ) {

    return `
      <img
        src="images/Objet-Dragon-Abysses.PNG"
        alt="Dragon des Abysses"
        class="collection-object-image"
      >
    `;

  }


  /* =====================================================
     FRAGMENT ORIGINEL
  ====================================================== */

  if (
    name.includes(
      "fragment originel"
    )
  ) {

    return `
      <img
        src="images/Objet-Fragment-Originel.PNG"
        alt="Fragment Originel"
        class="collection-object-image"
      >
    `;

  }


  /* =====================================================
     PERLE RUNIQUE
  ====================================================== */

  if (
    name.includes(
      "perle runique"
    )
  ) {

    return `
      <img
        src="images/Objet-Perle-Runique.PNG"
        alt="Perle runique"
        class="collection-object-image"
      >
    `;

  }


  /* =====================================================
     CRISTAL DES PROFONDEURS
  ====================================================== */

  if (
    name.includes(
      "cristal des profondeurs"
    )
  ) {

    return `
      <img
        src="images/Objet-Cristal-Profondeurs.PNG"
        alt="Cristal des profondeurs"
        class="collection-object-image"
      >
    `;

  }


  /* =====================================================
     FLEUR DE BRUME
  ====================================================== */

  if (
    name.includes(
      "fleur de brume"
    )
  ) {

    return `
      <img
        src="images/Objet-Fleur-Brume.PNG"
        alt="Fleur de brume"
        class="collection-object-image"
      >
    `;

  }


  /* =====================================================
     VISUEL GÉNÉRIQUE
     pour les objets qui n'ont pas encore leur image
  ====================================================== */

  return `
    <div class="visual-generic">

      <span>
        ${item.icon}
      </span>

    </div>
  `;

}


/* =========================================================
   MONDE NEXUS — ÉVÉNEMENTS
========================================================= */

function bindNexusWorld() {

  if (
    openNexusWorldBtn
  ) {

    openNexusWorldBtn
      .addEventListener(
        "click",
        openNexusScreen
      );

  }


  if (
    closeNexusWorldBtn
  ) {

    closeNexusWorldBtn
      .addEventListener(
        "click",
        closeNexusScreen
      );

  }


  if (
    centralSanctuaryBtn
  ) {

    centralSanctuaryBtn
      .addEventListener(
        "click",
        closeNexusScreen
      );

  }


  document
    .querySelectorAll(
      ".habitat-slot"
    )
    .forEach(
      slot => {

        slot.addEventListener(
          "click",
          () => {

            openHabitatBuild(
              slot.dataset.habitat
            );

          }
        );

      }
    );


  if (
    cancelBuildHabitatBtn
  ) {

    cancelBuildHabitatBtn
      .addEventListener(
        "click",
        closeHabitatBuild
      );

  }


  if (
    confirmBuildHabitatBtn
  ) {

    confirmBuildHabitatBtn
      .addEventListener(
        "click",
        buildSelectedHabitat
      );

  }


  if (
    buildHabitatOverlay
  ) {

    buildHabitatOverlay
      .addEventListener(
        "click",
        event => {

          if (
            event.target === buildHabitatOverlay
          ) {

            closeHabitatBuild();

          }

        }
      );

  }

}


/* =========================================================
   OUVRIR LE MONDE NEXUS
========================================================= */

function openNexusScreen() {

  /* =====================================================
     DÉJÀ DÉBLOQUÉ
  ====================================================== */

  if (
    nexusWorldData.abyssesUnlocked
  ) {

    renderAllHabitats();


    showScreen(
      nexusWorldScreen
    );


    return;

  }


  /* =====================================================
     CONDITION 1 :
     AU MOINS UNE ASCENSION RÉUSSIE
  ====================================================== */

  if (
    stats.successfulAscensions < 1
  ) {

    showToast(
      "Réussis d'abord une Ascension pour éveiller les Abysses Astrals."
    );


    return;

  }


  /* =====================================================
     CONDITION 2 :
     10 CRISTAUX
  ====================================================== */

  const unlockCost =
    10;


  if (
    totalPermanentCrystals <
    unlockCost
  ) {

    const missing =
      unlockCost -
      totalPermanentCrystals;


    showToast(
      `Il te manque ${missing} cristaux pour éveiller les Abysses Astrals.`
    );


    return;

  }


  /* =====================================================
     DÉBLOCAGE
  ====================================================== */

  totalPermanentCrystals -=
    unlockCost;


  nexusWorldData.abyssesUnlocked =
    true;


  savePermanentData();

  saveNexusWorldData();


  updateSanctuary();

  renderAllHabitats();


  showScreen(
    nexusWorldScreen
  );


  showToast(
    "Les Abysses Astrals s'éveillent."
  );

}


function closeNexusScreen() {

  closeHabitatBuild();


  updateSanctuary();


  showScreen(
    sanctuaryScreen
  );

}


/* =========================================================
   INVENTAIRE
========================================================= */

function countCollectionItem(
  itemName
) {

  return collection.filter(
    item =>
      item.name === itemName
  ).length;

}


function removeCollectionItem(
  itemName,
  quantity = 1
) {

  let remaining =
    quantity;


  for (
    let i =
      collection.length - 1;

    i >= 0 &&
    remaining > 0;

    i--
  ) {

    if (
      collection[i].name === itemName
    ) {

      collection.splice(
        i,
        1
      );


      remaining--;

    }

  }


  return remaining === 0;

}


/* =========================================================
   HABITAT CONSTRUIT ?
========================================================= */

function isHabitatBuilt(
  habitat
) {

  return Boolean(
    nexusWorldData
      .habitats[
        habitat.key
      ]
  );

}


/* =========================================================
   HABITAT DISPONIBLE ?
========================================================= */

function isHabitatAvailable(
  habitat
) {

  const index =
    HABITATS.findIndex(
      item =>
        item.key === habitat.key
    );


  if (
    index <= 0
  ) {

    return true;

  }


  const previousHabitat =
    HABITATS[
      index - 1
    ];


  return isHabitatBuilt(
    previousHabitat
  );

}


/* =========================================================
   AFFICHER LES 6 HABITATS
========================================================= */

function renderAllHabitats() {

  HABITATS.forEach(
    habitat => {

      const slot =
        document.querySelector(
          `[data-habitat="${habitat.dataHabitat}"]`
        );


      if (
        !slot
      ) {

        return;

      }


      const built =
        isHabitatBuilt(
          habitat
        );


      const available =
        isHabitatAvailable(
          habitat
        );


      if (
        built
      ) {

        slot.className =
          `habitat-slot habitat-${habitat.number} built`;


        slot.innerHTML =
          `
            <img
              src="${habitat.image}"
              alt="${habitat.name}"
              class="built-habitat-image"
            >

            <span class="built-habitat-label">
              ${habitat.name}
            </span>
          `;


        return;

      }


      if (
        available
      ) {

        slot.className =
          `habitat-slot habitat-${habitat.number} locked available`;


        slot.innerHTML =
          `
            <span class="habitat-lock">
              ◆
            </span>

            <span class="habitat-number">
              ${habitat.number}
            </span>

            <strong>
              ${habitat.name}
            </strong>

            <small>
              À construire
            </small>
          `;


        return;

      }


      slot.className =
        `habitat-slot habitat-${habitat.number} locked`;


      slot.innerHTML =
        `
          <span class="habitat-lock">
            ◆
          </span>

          <span class="habitat-number">
            ${habitat.number}
          </span>

          <strong>
            ${habitat.name}
          </strong>

          <small>
            Verrouillé
          </small>
        `;

    }
  );

}


/* =========================================================
   COMPATIBILITÉ
========================================================= */

function renderJardinBulles() {

  renderAllHabitats();

}


/* =========================================================
   OUVRIR CONSTRUCTION HABITAT
========================================================= */

function openHabitatBuild(
  dataHabitat
) {

  const habitat =
    HABITATS.find(
      item =>
        item.dataHabitat === dataHabitat
    );


  if (
    !habitat
  ) {

    return;

  }


  if (
    isHabitatBuilt(
      habitat
    )
  ) {

    showToast(
      `${habitat.name} est déjà construit.`
    );


    return;

  }


  if (
    !isHabitatAvailable(
      habitat
    )
  ) {

    const index =
      HABITATS.findIndex(
        item =>
          item.key === habitat.key
      );


    const previousHabitat =
      HABITATS[
        index - 1
      ];


    showToast(
      `Construis d'abord ${previousHabitat.name}.`
    );


    return;

  }


  if (
    !buildHabitatOverlay
  ) {

    return;

  }


  buildHabitatOverlay.dataset.habitat =
    habitat.key;


  const title =
    buildHabitatOverlay
      .querySelector(
        ".habitat-build-modal h2"
      );


  if (
    title
  ) {

    title.textContent =
      habitat.name;

  }


  const image =
    buildHabitatOverlay
      .querySelector(
        ".build-habitat-preview"
      );


  if (
    image
  ) {

    image.src =
      habitat.image;


    image.alt =
      habitat.name;

  }


  const description =
    buildHabitatOverlay
      .querySelector(
        ".build-description"
      );


  if (
    description
  ) {

    description.textContent =
      habitat.description;

  }


  const costsContainer =
    buildHabitatOverlay
      .querySelector(
        ".build-costs"
      );


  if (
    costsContainer
  ) {

    let html =
      `
        <div class="build-cost">

          <span>
            ◆
          </span>

          <div>

            <small>
              Cristaux
            </small>

            <strong>
              ${habitat.crystalCost}
            </strong>

          </div>

        </div>
      `;


    habitat.resources.forEach(
      resource => {

        html +=
          `
            <div class="build-cost">

              <span>
                ${resource.icon}
              </span>

              <div>

                <small>
                  ${resource.name}
                </small>

                <strong>
                  ${resource.quantity}
                </strong>

              </div>

            </div>
          `;

      }
    );


    costsContainer.innerHTML =
      html;

  }


  buildHabitatOverlay
    .classList
    .remove(
      "hidden"
    );

}


/* =========================================================
   FERMER CONSTRUCTION
========================================================= */

function closeHabitatBuild() {

  if (
    !buildHabitatOverlay
  ) {

    return;

  }


  buildHabitatOverlay
    .classList
    .add(
      "hidden"
    );


  delete buildHabitatOverlay
    .dataset
    .habitat;

}


/* =========================================================
   CONSTRUIRE HABITAT
========================================================= */

function buildSelectedHabitat() {

  if (
    !buildHabitatOverlay
  ) {

    return;

  }


  const selectedKey =
    buildHabitatOverlay
      .dataset
      .habitat;


  if (
    !selectedKey
  ) {

    return;

  }


  const habitat =
    HABITATS.find(
      item =>
        item.key === selectedKey
    );


  if (
    !habitat
  ) {

    return;

  }


  if (
    isHabitatBuilt(
      habitat
    )
  ) {

    closeHabitatBuild();


    showToast(
      `${habitat.name} est déjà construit.`
    );


    return;

  }


  if (
    !isHabitatAvailable(
      habitat
    )
  ) {

    showToast(
      "Cet habitat est encore verrouillé."
    );


    return;

  }


  if (
    totalPermanentCrystals <
    habitat.crystalCost
  ) {

    const missing =
      habitat.crystalCost -
      totalPermanentCrystals;


    showToast(
      `Il te manque ${missing} cristaux.`
    );


    return;

  }


  for (
    const resource
    of habitat.resources
  ) {

    const owned =
      countCollectionItem(
        resource.name
      );


    if (
      owned <
      resource.quantity
    ) {

      const missing =
        resource.quantity -
        owned;


      showToast(
        `Il te manque ${missing} × ${resource.name}.`
      );


      return;

    }

  }


  totalPermanentCrystals -=
    habitat.crystalCost;


  habitat.resources.forEach(
    resource => {

      removeCollectionItem(
        resource.name,
        resource.quantity
      );

    }
  );


  nexusWorldData
    .habitats[
      habitat.key
    ] =
      true;


  savePermanentData();

  saveNexusWorldData();


  renderAllHabitats();

  updateSanctuary();

  closeHabitatBuild();


  showToast(
    `${habitat.name} s'éveille.`
  );

}


/* =========================================================
   CONFIRMATION
========================================================= */

function openConfirmation(
  title,
  text,
  callback
) {

  confirmTitle.textContent =
    title;


  confirmText.textContent =
    text;


  confirmOverlay
    .classList
    .remove(
      "hidden"
    );


  confirmActionBtn.onclick =
    () => {

      confirmOverlay
        .classList
        .add(
          "hidden"
        );


      callback();

    };

}


/* =========================================================
   RESET JOUR
========================================================= */

function resetToday() {

  habits =
    {};


  localStorage.setItem(
    STORAGE.habits,
    JSON.stringify({})
  );


  localStorage.setItem(
    STORAGE.dayDate,
    getTodayKey()
  );


  updateDailyUI();


  showToast(
    "Journée réinitialisée"
  );

}


/* =========================================================
   RESET TOTAL
========================================================= */

function resetAll() {

  Object
    .values(
      STORAGE
    )
    .forEach(
      key => {

        localStorage.removeItem(
          key
        );

      }
    );


  habits =
    {};


  currentXP =
    0;


  totalPermanentCrystals =
    0;


  collection =
    [];


  ascensionLevel =
    1;


  currentWorld =
    1;


  stats = {

    totalAscensions:
      0,

    successfulAscensions:
      0,

    perfectDays:
      0

  };


  nexusWorldData = {

    abyssesUnlocked:
      false,

    habitats: {

      jardinBulles:
        false,

      bassinAstral:
        false,

      lagonCourants:
        false,

      jardinCorail:
        false,

      templeMarees:
        false,

      sanctuaireProfondeurs:
        false

    }

  };


  localStorage.setItem(
    STORAGE.dayDate,
    getTodayKey()
  );


  saveNexusWorldData();


  updateDailyUI();

  updateSanctuary();

  renderAllHabitats();


  showScreen(
    homeScreen
  );


  showToast(
    "Progression réinitialisée"
  );

}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout =
  null;


function showToast(
  text
) {

  toastText.textContent =
    text;


  toast
    .classList
    .add(
      "show"
    );


  clearTimeout(
    toastTimeout
  );


  toastTimeout =
    setTimeout(
      () => {

        toast
          .classList
          .remove(
            "show"
          );

      },
      1800
    );

}


/* =========================================================
   OUTILS
========================================================= */

function randomInt(
  min,
  max
) {

  return Math.floor(
    Math.random() *
    (
      max -
      min +
      1
    )
  ) + min;

}


function shuffleArray(
  array
) {

  const copy =
    [...array];


  for (
    let i =
      copy.length - 1;

    i > 0;

    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
        (
          i + 1
        )
      );


    [
      copy[i],
      copy[j]
    ] =
    [
      copy[j],
      copy[i]
    ];

  }


  return copy;

}


function pickOtherSymbols(
  symbols,
  excluded,
  count
) {

  return shuffleArray(
    symbols.filter(
      symbol =>
        symbol !== excluded
    )
  ).slice(
    0,
    count
  );

}


function capitalize(
  text
) {

  if (
    !text
  ) {

    return "";

  }


  return (
    text.charAt(0)
      .toUpperCase() +
    text.slice(1)
  );

}


});
