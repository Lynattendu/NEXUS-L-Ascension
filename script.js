/* =========================================================
   NEXUS VITAL — L'ASCENSION
   SCRIPT.JS
   V2 — MONDES + VISUELS + SALLES
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


/* =========================================================
   CLÉS LOCALSTORAGE
========================================================= */

const STORAGE = {

  dayDate:
    "nexusVital_dayDate",

  habits:
    "nexusVital_habits",

  totalCrystals:
    "nexusVital_totalCrystals",

  collection:
    "nexusVital_collection",

  ascensionLevel:
    "nexusVital_ascensionLevel",

  world:
    "nexusVital_world",

  stats:
    "nexusVital_stats"

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
   MONDES
========================================================= */

const WORLDS = [

  {
    id: 1,

    name:
      "Les Jardins engloutis",

    image:
      "images/Monde-1.PNG",

    guardian:
      "Gardien des Marées",

    guardianImage:
      "images/Gardien-1.PNG"
  },

  {
    id: 2,

    name:
      "La Grotte de Cristal",

    image:
      "images/Monde-2.PNG",

    guardian:
      "Gardien Prismatique",

    guardianImage:
      "images/Gardien-2.PNG"
  },

  {
    id: 3,

    name:
      "Les Ruines oubliées",

    image:
      "images/Monde-3.PNG",

    guardian:
      "Gardien des Glyphes",

    guardianImage:
      "images/Gardien-3.PNG"
  },

  {
    id: 4,

    name:
      "La Forêt luminescente",

    image:
      "images/Monde-4.PNG",

    guardian:
      "Gardien Sylvestre",

    guardianImage:
      "images/Gardien-4.PNG"
  },

  {
    id: 5,

    name:
      "Le Temple du NEXUS",

    image:
      "images/Monde-5.PNG",

    guardian:
      "Gardien Originel",

    guardianImage:
      "images/Gardien-5.PNG"
  }

];


/* =========================================================
   OBJETS DE COLLECTION
========================================================= */

const REWARD_ITEMS = {

  common: [

    {
      name:
        "Éclat d'azur",

      type:
        "Décoration",

      icon:
        "◇"
    },

    {
      name:
        "Mousse lumineuse",

      type:
        "Plante",

      icon:
        "❋"
    },

    {
      name:
        "Fragment marin",

      type:
        "Fragment",

      icon:
        "◈"
    }

  ],


  uncommon: [

    {
      name:
        "Corail spectral",

      type:
        "Décoration",

      icon:
        "✦"
    },

    {
      name:
        "Fleur de brume",

      type:
        "Plante",

      icon:
        "❉"
    },

    {
      name:
        "Perle runique",

      type:
        "Artefact",

      icon:
        "●"
    }

  ],


  rare: [

    {
      name:
        "Cristal des profondeurs",

      type:
        "Artefact",

      icon:
        "◆"
    },

    {
      name:
        "Méduse astrale",

      type:
        "Créature",

      icon:
        "✺"
    },

    {
      name:
        "Relique des Marées",

      type:
        "Artefact",

      icon:
        "◎"
    }

  ],


  epic: [

    {
      name:
        "Orbe du Passage",

      type:
        "Artefact",

      icon:
        "◉"
    },

    {
      name:
        "Gardien miniature",

      type:
        "Créature",

      icon:
        "✹"
    },

    {
      name:
        "Arbre de lumière",

      type:
        "Décoration",

      icon:
        "✧"
    }

  ],


  legendary: [

    {
      name:
        "Cœur du NEXUS",

      type:
        "Artefact",

      icon:
        "✶"
    },

    {
      name:
        "Dragon des Abysses",

      type:
        "Créature",

      icon:
        "♢"
    },

    {
      name:
        "Fragment Originel",

      type:
        "Artefact",

      icon:
        "✷"
    }

  ]

};


/* =========================================================
   ÉCRANS
========================================================= */

const homeScreen =
  document.getElementById(
    "homeScreen"
  );

const ascensionScreen =
  document.getElementById(
    "ascensionScreen"
  );

const sanctuaryScreen =
  document.getElementById(
    "sanctuaryScreen"
  );


/* =========================================================
   ACCUEIL
========================================================= */

const todayLabel =
  document.getElementById(
    "todayLabel"
  );

const dayStatusText =
  document.getElementById(
    "dayStatusText"
  );

const xpValue =
  document.getElementById(
    "xpValue"
  );

const xpCurrentText =
  document.getElementById(
    "xpCurrentText"
  );

const xpBarFill =
  document.getElementById(
    "xpBarFill"
  );

const resonanceLevel =
  document.getElementById(
    "resonanceLevel"
  );

const dailyCount =
  document.getElementById(
    "dailyCount"
  );

const rewardTrack =
  document.getElementById(
    "rewardTrack"
  );

const portalPreview =
  document.getElementById(
    "portalPreview"
  );

const portalAccessTitle =
  document.getElementById(
    "portalAccessTitle"
  );

const portalAccessText =
  document.getElementById(
    "portalAccessText"
  );

const enterAscensionBtn =
  document.getElementById(
    "enterAscensionBtn"
  );


/* =========================================================
   MENU
========================================================= */

const openMenuBtn =
  document.getElementById(
    "openMenuBtn"
  );

const menuOverlay =
  document.getElementById(
    "menuOverlay"
  );

const closeMenuBtn =
  document.getElementById(
    "closeMenuBtn"
  );

const menuHomeBtn =
  document.getElementById(
    "menuHomeBtn"
  );

const menuSanctuaryBtn =
  document.getElementById(
    "menuSanctuaryBtn"
  );

const menuStatsBtn =
  document.getElementById(
    "menuStatsBtn"
  );

const resetTodayBtn =
  document.getElementById(
    "resetTodayBtn"
  );

const resetAllBtn =
  document.getElementById(
    "resetAllBtn"
  );


/* =========================================================
   ASCENSION
========================================================= */

const leaveAscensionBtn =
  document.getElementById(
    "leaveAscensionBtn"
  );

const pauseBtn =
  document.getElementById(
    "pauseBtn"
  );

const worldName =
  document.getElementById(
    "worldName"
  );

const ascensionName =
  document.getElementById(
    "ascensionName"
  );

const runicStability =
  document.getElementById(
    "runicStability"
  );

const stabilityNumber =
  document.getElementById(
    "stabilityNumber"
  );

const stabilityMessage =
  document.getElementById(
    "stabilityMessage"
  );

const currentStepText =
  document.getElementById(
    "currentStepText"
  );

const runCrystals =
  document.getElementById(
    "runCrystals"
  );

const activePowerText =
  document.getElementById(
    "activePowerText"
  );

const currentRoom =
  document.getElementById(
    "currentRoom"
  );

const roomTitle =
  document.getElementById(
    "roomTitle"
  );

const roomDescription =
  document.getElementById(
    "roomDescription"
  );

const roomVisual =
  document.getElementById(
    "roomVisual"
  );

const pathChoices =
  document.getElementById(
    "pathChoices"
  );

const roomActionZone =
  document.getElementById(
    "roomActionZone"
  );

const roomActionBtn =
  document.getElementById(
    "roomActionBtn"
  );


/* =========================================================
   POUVOIRS
========================================================= */

const powerOverlay =
  document.getElementById(
    "powerOverlay"
  );


/* =========================================================
   ÉPREUVES
========================================================= */

const challengeOverlay =
  document.getElementById(
    "challengeOverlay"
  );

const challengeType =
  document.getElementById(
    "challengeType"
  );

const challengeTitle =
  document.getElementById(
    "challengeTitle"
  );

const challengeInstructions =
  document.getElementById(
    "challengeInstructions"
  );

const challengeArea =
  document.getElementById(
    "challengeArea"
  );

const challengeContinueBtn =
  document.getElementById(
    "challengeContinueBtn"
  );


/* =========================================================
   GARDIEN
========================================================= */

const guardianOverlay =
  document.getElementById(
    "guardianOverlay"
  );

const guardianMessage =
  document.getElementById(
    "guardianMessage"
  );

const guardianWins =
  document.getElementById(
    "guardianWins"
  );

const guardianRounds =
  document.getElementById(
    "guardianRounds"
  );

const startGuardianBtn =
  document.getElementById(
    "startGuardianBtn"
  );


/* =========================================================
   RÉCOMPENSE
========================================================= */

const rewardOverlay =
  document.getElementById(
    "rewardOverlay"
  );

const rewardBigIcon =
  document.getElementById(
    "rewardBigIcon"
  );

const rewardRarity =
  document.getElementById(
    "rewardRarity"
  );

const rewardTitle =
  document.getElementById(
    "rewardTitle"
  );

const rewardDescription =
  document.getElementById(
    "rewardDescription"
  );

const rewardContinueBtn =
  document.getElementById(
    "rewardContinueBtn"
  );


/* =========================================================
   FIN ASCENSION
========================================================= */

const endAscensionOverlay =
  document.getElementById(
    "endAscensionOverlay"
  );

const endAscensionLabel =
  document.getElementById(
    "endAscensionLabel"
  );

const endAscensionTitle =
  document.getElementById(
    "endAscensionTitle"
  );

const endAscensionText =
  document.getElementById(
    "endAscensionText"
  );

const endCrystals =
  document.getElementById(
    "endCrystals"
  );

const endSteps =
  document.getElementById(
    "endSteps"
  );

const endHomeBtn =
  document.getElementById(
    "endHomeBtn"
  );

const endSanctuaryBtn =
  document.getElementById(
    "endSanctuaryBtn"
  );


/* =========================================================
   SANCTUAIRE
========================================================= */

const sanctuaryBackBtn =
  document.getElementById(
    "sanctuaryBackBtn"
  );

const totalCrystals =
  document.getElementById(
    "totalCrystals"
  );

const artifactCount =
  document.getElementById(
    "artifactCount"
  );

const creatureCount =
  document.getElementById(
    "creatureCount"
  );

const collectionGrid =
  document.getElementById(
    "collectionGrid"
  );


/* =========================================================
   CONFIRMATION
========================================================= */

const confirmOverlay =
  document.getElementById(
    "confirmOverlay"
  );

const confirmTitle =
  document.getElementById(
    "confirmTitle"
  );

const confirmText =
  document.getElementById(
    "confirmText"
  );

const cancelConfirmBtn =
  document.getElementById(
    "cancelConfirmBtn"
  );

const confirmActionBtn =
  document.getElementById(
    "confirmActionBtn"
  );


/* =========================================================
   TOAST
========================================================= */

const toast =
  document.getElementById(
    "toast"
  );

const toastText =
  document.getElementById(
    "toastText"
  );


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
   PARTIE EN COURS
========================================================= */

let run = {

  active: false,

  maxSteps: 0,

  currentStep: 1,

  stability: 3,

  crystals: 0,

  power: null,

  shieldUsed: false,

  path: null,

  guardianWins: 0,

  guardianRounds: 0

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

  return (
    `${year}-${month}-${day}`
  );

}


function formatToday() {

  return new Intl.DateTimeFormat(
    "fr-FR",
    {

      weekday:
        "long",

      day:
        "numeric",

      month:
        "long"

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

  applyPermanentVisuals();

  updateDailyUI();

  updateSanctuary();

  showScreen(
    homeScreen
  );

}


init();


/* =========================================================
   VISUELS GÉNÉRAUX
========================================================= */

function applyPermanentVisuals() {

  /* Accueil */

  homeScreen.style.backgroundImage =
    `
      linear-gradient(
        180deg,
        rgba(2, 8, 12, 0.50),
        rgba(2, 8, 12, 0.86)
      ),
      url("${VISUALS.home}")
    `;

  homeScreen.style.backgroundSize =
    "cover";

  homeScreen.style.backgroundPosition =
    "center";

  homeScreen.style.backgroundAttachment =
    "fixed";


  /* Portail */

  const portalCard =
    document.querySelector(
      ".portal-access-card"
    );

  if (portalCard) {

    portalCard.style.backgroundImage =
      `
        linear-gradient(
          90deg,
          rgba(3, 12, 18, 0.76),
          rgba(3, 12, 18, 0.42)
        ),
        url("${VISUALS.portal}")
      `;

    portalCard.style.backgroundSize =
      "cover";

    portalCard.style.backgroundPosition =
      "center";

  }


  /* Chemins */

  const mistPath =
    document.querySelector(
      ".mist-path"
    );

  const crystalPath =
    document.querySelector(
      ".crystal-path"
    );

  const forbiddenPath =
    document.querySelector(
      ".forbidden-path"
    );


  setPathVisual(
    mistPath,
    VISUALS.pathMist
  );

  setPathVisual(
    crystalPath,
    VISUALS.pathCrystal
  );

  setPathVisual(
    forbiddenPath,
    VISUALS.pathForbidden
  );

}


function setPathVisual(
  element,
  image
) {

  if (!element) {
    return;
  }

  element.style.backgroundImage =
    `
      linear-gradient(
        180deg,
        rgba(3,10,16,0.30),
        rgba(3,10,16,0.88)
      ),
      url("${image}")
    `;

  element.style.backgroundSize =
    "cover";

  element.style.backgroundPosition =
    "center";

}


/* =========================================================
   CHARGEMENT PERMANENT
========================================================= */

function loadPermanentData() {

  totalPermanentCrystals =
    Number(
      localStorage.getItem(
        STORAGE.totalCrystals
      )
    ) || 0;


  collection =
    JSON.parse(
      localStorage.getItem(
        STORAGE.collection
      ) || "[]"
    );


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


  stats =
    JSON.parse(
      localStorage.getItem(
        STORAGE.stats
      ) ||
      JSON.stringify(
        stats
      )
    );

}


/* =========================================================
   SAUVEGARDE PERMANENTE
========================================================= */

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

    habits = {};

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

  habits =
    JSON.parse(
      localStorage.getItem(
        STORAGE.habits
      ) || "{}"
    );

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
    .forEach(card => {

      const habitName =
        card.dataset.habit;


      card
        .querySelectorAll(
          ".habit-choice"
        )
        .forEach(button => {

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

        });

    });

}


/* =========================================================
   SÉLECTION HABITUDE
========================================================= */

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
  ] = value;


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

    } else {

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

  let xp = 0;


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


/* =========================================================
   HABITUDES VISUELLES
========================================================= */

function updateHabitVisuals() {

  let completed = 0;


  document
    .querySelectorAll(
      ".habit-card"
    )
    .forEach(card => {

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
        .forEach(button => {

          button.classList.remove(
            "active"
          );


          if (
            selectedValue !==
              undefined &&
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

        });


      if (
        selectedValue !==
          undefined
      ) {

        completed++;

      }

    });


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

  } else if (
    currentXP >= 75
  ) {

    resonanceLevel.textContent =
      "Résonance forte";

  } else if (
    currentXP >= 60
  ) {

    resonanceLevel.textContent =
      "Résonance stable";

  } else if (
    currentXP >= 45
  ) {

    resonanceLevel.textContent =
      "Résonance fragile";

  } else {

    resonanceLevel.textContent =
      "Résonance faible";

  }


  if (
    currentXP === 100
  ) {

    dayStatusText.textContent =
      "Le NEXUS atteint sa résonance maximale.";

  } else if (
    currentXP >= 90
  ) {

    dayStatusText.textContent =
      "Le Portail est pleinement accessible.";

  } else if (
    currentXP >= 70
  ) {

    dayStatusText.textContent =
      "Le Portail est ouvert.";

  } else if (
    currentXP >= 50
  ) {

    dayStatusText.textContent =
      "Le NEXUS commence à réagir.";

  } else {

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
    .forEach(step => {

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

      } else {

        step.classList.remove(
          "unlocked"
        );

        state.textContent =
          "Verrouillé";

      }

    });

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

  } else if (
    currentXP >= 90
  ) {

    portalAccessTitle.textContent =
      "Ascension complète";

    portalAccessText.textContent =
      "8 étapes, Gardien du Portail et pouvoir renforcé.";

  } else if (
    currentXP >= 80
  ) {

    portalAccessTitle.textContent =
      "Ascension intermédiaire";

    portalAccessText.textContent =
      "5 étapes sont accessibles.";

  } else {

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
    sanctuaryScreen
  ]
    .forEach(
      item => {

        item.classList.remove(
          "active"
        );

      }
    );


  screen.classList.add(
    "active"
  );


  window.scrollTo({
    top: 0
  });

}


/* =========================================================
   MENU
========================================================= */

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

  } else {

    startAscension();

  }

}


/* =========================================================
   NOMBRE ÉTAPES
========================================================= */

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
        world.id ===
        currentWorld
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
        rgba(2,8,12,0.24),
        rgba(2,8,12,0.72)
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
   ENTRÉE / CHOIX CHEMINS
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


  const room =
    generateRoom(
      path
    );


  showRoom(
    room
  );

}


/* =========================================================
   GÉNÉRATION SALLE
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
      roll < 0.30
    ) {

      return "sanctuary";

    }

    if (
      roll < 0.58
    ) {

      return "crystal";

    }

    if (
      roll < 0.80
    ) {

      return "mist";

    }

    return "challenge";

  }


  if (
    path === "crystal"
  ) {

    if (
      roll < 0.28
    ) {

      return "crystal";

    }

    if (
      roll < 0.52
    ) {

      return "chest";

    }

    if (
      roll < 0.76
    ) {

      return "challenge";

    }

    return "obstacle";

  }


  if (
    path ===
      "forbidden"
  ) {

    if (
      roll < 0.28
    ) {

      return "forbidden";

    }

    if (
      roll < 0.50
    ) {

      return "obstacle";

    }

    if (
      roll < 0.72
    ) {

      return "challenge";

    }

    if (
      roll < 0.92
    ) {

      return "chest";

    }

    return "secret";

  }


  return "crystal";

}


/* =========================================================
   IMAGE DE SALLE
========================================================= */

function setRoomImage(image, symbol = "") {

  roomVisual.innerHTML = `
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

  roomActionZone
    .classList
    .remove(
      "hidden"
    );


  /* CRISTAUX */

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


  /* COFFRE */

  if (
    type === "chest"
  ) {

    roomTitle.textContent =
      "Salle du Coffre";

    roomDescription.textContent =
      "Un coffre ancien pulse au centre de la salle.";

    setRoomImage(
      VISUALS.chestRoom,
      ""
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


  /* BRUMES */

  if (
    type === "mist"
  ) {

    roomTitle.textContent =
      "Salle des Brumes";

    roomDescription.textContent =
      "Quelque chose bouge derrière le voile.";

    setRoomImage(
      VISUALS.mistRoom,
      ""
    );

    roomActionBtn.textContent =
      "Traverser";


    roomActionBtn.onclick =
      () => {

        const roll =
          Math.random();


        if (
          roll < 0.55
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

        } else if (
          roll < 0.80
        ) {

          restoreStability();

        } else {

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


  /* SANCTUAIRE */

  if (
    type === "sanctuary"
  ) {

    roomTitle.textContent =
      "Salle du Sanctuaire";

    roomDescription.textContent =
      "Une énergie ancienne stabilise ton passage.";

    setRoomImage(
      VISUALS.sanctuaryRoom,
      ""
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


  /* ÉPREUVE */

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


  /* OBSTACLE */

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


  /* INTERDITE */

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

            } else if (
              run.stability > 0
            ) {

              nextStep();

            }

          }
        );

      };


    return;

  }


  /* SECRÈTE */

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
          Math.random() <
            0.30
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


  showEntrance();

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
    VISUALS.reward,
    ""
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


/* =========================================================
   RARETÉ FINALE
========================================================= */

function getFinalRarity() {

  const roll =
    Math.random();


  if (
    run.stability === 3
  ) {

    if (
      roll < 0.08
    ) {

      return "epic";

    }

    if (
      roll < 0.35
    ) {

      return "rare";

    }

    return "uncommon";

  }


  if (
    run.stability === 2
  ) {

    if (
      roll < 0.20
    ) {

      return "rare";

    }

    return "uncommon";

  }


  return "common";

}


/* =========================================================
   CRISTAUX
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
    run.power ===
      "shield" &&
    run.shieldUsed ===
      false
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

  } else {

    showToast(
      "Le Portail vacille"
    );

  }

}


/* =========================================================
   UI STABILITÉ
========================================================= */

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
          index <
            run.stability
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

  } else if (
    run.stability === 2
  ) {

    runicStability
      .classList
      .add(
        "fragile"
      );

    stabilityMessage.textContent =
      "Le portail commence à vaciller.";

  } else if (
    run.stability === 1
  ) {

    runicStability
      .classList
      .add(
        "critical"
      );

    stabilityMessage.textContent =
      "La résonance est critique.";

  } else {

    runicStability
      .classList
      .add(
        "collapsed"
      );

    stabilityMessage.textContent =
      "Le portail s'est effondré.";

  }

}


/* =========================================================
   UI PARTIE
========================================================= */

function updateRunUI() {

  currentStepText.textContent =
    `${Math.min(
      run.currentStep,
      run.maxSteps
    )} / ${run.maxSteps}`;


  runCrystals.textContent =
    run.crystals;


  if (
    run.power ===
      "shield"
  ) {

    activePowerText.textContent =
      "Bouclier";

  } else if (
    run.power ===
      "vision"
  ) {

    activePowerText.textContent =
      "Vision";

  } else {

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
        rgba(3,10,15,0.18),
        rgba(3,10,15,0.86)
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

  } else if (
    selected ===
      "different"
  ) {

    challengeDifferent(
      hardMode,
      callback
    );

  } else {

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
              options.map(
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
                      box-shadow:
                        0 0 20px rgba(106,249,234,.08);
                    "
                  >
                    ${symbol}
                  </button>
                `
              ).join("")
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
                  button.dataset.answer ===
                    correct,
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
              radial-gradient(
                circle,
                rgba(106,249,234,.12),
                rgba(5,23,32,.90)
              );
            color:#6af9ea;
            font-size:2rem;
            box-shadow:
              inset 0 0 20px rgba(106,249,234,.04);
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


  html += "</div>";


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
              button.dataset.correct ===
                "yes",
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
                    index ===
                      correct
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
                      radial-gradient(
                        circle,
                        rgba(169,134,255,.15),
                        rgba(5,18,31,.92)
                      );
                    color:#a986ff;
                    font-size:2.6rem;
                    box-shadow:
                      0 0 24px rgba(169,134,255,.12);
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
              button.dataset.correct ===
                "yes",
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
            text-shadow:
              0 0 20px rgba(130,242,186,.35);
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
        rgba(2,7,12,0.10),
        rgba(2,7,12,0.84)
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
   RÉCOMPENSE
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
        rgba(3,8,14,0.10),
        rgba(3,8,14,0.86)
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
   RARETÉ
========================================================= */

function getRewardRarity(
  path
) {

  const roll =
    Math.random();


  if (
    path ===
      "forbidden"
  ) {

    if (
      roll < 0.05
    ) {
      return "legendary";
    }

    if (
      roll < 0.18
    ) {
      return "epic";
    }

    if (
      roll < 0.48
    ) {
      return "rare";
    }

    if (
      roll < 0.80
    ) {
      return "uncommon";
    }

    return "common";

  }


  if (
    path ===
      "crystal"
  ) {

    if (
      roll < 0.04
    ) {
      return "epic";
    }

    if (
      roll < 0.22
    ) {
      return "rare";
    }

    if (
      roll < 0.62
    ) {
      return "uncommon";
    }

    return "common";

  }


  if (
    roll < 0.12
  ) {
    return "rare";
  }

  if (
    roll < 0.42
  ) {
    return "uncommon";
  }

  return "common";

}


function randomRareRarity() {

  const roll =
    Math.random();


  if (
    roll < 0.08
  ) {

    return "legendary";

  }

  if (
    roll < 0.28
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
   FIN
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

  } else {

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
        rgba(2,8,12,0.30),
        rgba(2,8,12,0.82)
      ),
      url("${VISUALS.sanctuary}")
    `;

  sanctuaryScreen.style.backgroundSize =
    "cover";

  sanctuaryScreen.style.backgroundPosition =
    "center";

  sanctuaryScreen.style.backgroundAttachment =
    "fixed";


  totalCrystals.textContent =
    totalPermanentCrystals;


  artifactCount.textContent =
    collection.filter(
      item =>
        item.type ===
          "Artefact"
    ).length;


  creatureCount.textContent =
    collection.filter(
      item =>
        item.type ===
          "Créature"
    ).length;


  renderCollection();

}


/* =========================================================
   COLLECTION
========================================================= */

function renderCollection() {

  if (collection.length === 0) {

    collectionGrid.innerHTML =
      `
        <div class="empty-collection">
          <div class="empty-symbol">◇</div>
          <p>Ton Sanctuaire attend ses premiers trésors.</p>
        </div>
      `;

    return;

  }


  collectionGrid.innerHTML =
    collection
      .slice()
      .reverse()
      .map(item => `

        <article class="collection-item ${getItemClass(item)}">

          <div class="collection-item-visual">
            ${getItemVisual(item)}
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

      `)
      .join("");

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

  habits = {};


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


  habits = {};

  currentXP = 0;

  totalPermanentCrystals = 0;

  collection = [];

  ascensionLevel = 1;

  currentWorld = 1;

  stats = {

    totalAscensions: 0,

    successfulAscensions: 0,

    perfectDays: 0

  };


  localStorage.setItem(
    STORAGE.dayDate,
    getTodayKey()
  );


  updateDailyUI();

  updateSanctuary();

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
        (i + 1)
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
        symbol !==
          excluded
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
