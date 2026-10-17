/* =========================================================
   NEXUS VITAL — L'ASCENSION
   SCRIPT.JS
   V1
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
  stats: "nexusVital_stats"
};


/* =========================================================
   CONFIGURATION QUOTIDIENNE
========================================================= */

const HABITS = {
  breakfast: {
    label: "Petit-déjeuner équilibré",
    max: 5
  },

  lunch: {
    label: "Déjeuner équilibré",
    max: 5
  },

  dinner: {
    label: "Dîner équilibré",
    max: 5
  },

  quantity: {
    label: "Quantité raisonnable",
    max: 10
  },

  slow: {
    label: "Manger doucement",
    max: 10
  },

  water: {
    label: "Boire suffisamment d'eau",
    max: 10
  },

  snacking: {
    label: "Pas de grignotage",
    max: 10
  },

  healthy: {
    label: "Privilégier les aliments sains",
    max: 10
  },

  fullness: {
    label: "S'arrêter avant d'être trop plein",
    max: 10
  },

  activity: {
    label: "Activité physique",
    max: 10
  },

  craving: {
    label: "Pas de craquage impulsif",
    max: 10
  },

  duplicate: {
    label: "Pas de doublon",
    max: 5
  }
};


/* =========================================================
   MONDES
========================================================= */

const WORLDS = [
  {
    id: 1,
    name: "Les Jardins engloutis",
    guardian: "Gardien des Marées"
  },

  {
    id: 2,
    name: "La Grotte de Cristal",
    guardian: "Gardien Prismatique"
  },

  {
    id: 3,
    name: "Les Ruines oubliées",
    guardian: "Gardien des Glyphes"
  },

  {
    id: 4,
    name: "La Forêt luminescente",
    guardian: "Gardien Sylvestre"
  },

  {
    id: 5,
    name: "Le Temple du NEXUS",
    guardian: "Gardien Originel"
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
   ÉLÉMENTS — ÉCRANS
========================================================= */

const homeScreen =
  document.getElementById("homeScreen");

const ascensionScreen =
  document.getElementById("ascensionScreen");

const sanctuaryScreen =
  document.getElementById("sanctuaryScreen");


/* =========================================================
   ÉLÉMENTS — ACCUEIL
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

const dailyGrid =
  document.getElementById("dailyGrid");

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
   ÉLÉMENTS — MENU
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
   ÉLÉMENTS — ASCENSION
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
   ÉLÉMENTS — POUVOIRS
========================================================= */

const powerOverlay =
  document.getElementById("powerOverlay");


/* =========================================================
   ÉLÉMENTS — ÉPREUVES
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
   ÉLÉMENTS — GARDIEN
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
   ÉLÉMENTS — RÉCOMPENSE
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
   ÉLÉMENTS — FIN ASCENSION
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
   ÉLÉMENTS — SANCTUAIRE
========================================================= */

const sanctuaryBackBtn =
  document.getElementById("sanctuaryBackBtn");

const totalCrystals =
  document.getElementById("totalCrystals");

const artifactCount =
  document.getElementById("artifactCount");

const creatureCount =
  document.getElementById("creatureCount");

const collectionGrid =
  document.getElementById("collectionGrid");


/* =========================================================
   ÉLÉMENTS — CONFIRMATION
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
   ÉTAT PARTIE EN COURS
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
  guardianRounds: 0,
  pendingReward: null,
  rewardCallback: null
};


/* =========================================================
   DATE
========================================================= */

function getTodayKey() {

  const date = new Date();

  const year =
    date.getFullYear();

  const month =
    String(date.getMonth() + 1).padStart(2, "0");

  const day =
    String(date.getDate()).padStart(2, "0");

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
  ).format(new Date());

}


/* =========================================================
   INITIALISATION
========================================================= */

function init() {

  loadPermanentData();

  checkDailyReset();

  loadDailyHabits();

  todayLabel.textContent =
    capitalize(formatToday());

  bindHabitButtons();

  bindNavigation();

  bindPathButtons();

  bindPowerButtons();

  updateDailyUI();

  updateSanctuary();

  showScreen(homeScreen);

}


init();


/* =========================================================
   CHARGEMENT DONNÉES PERMANENTES
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
      ) || JSON.stringify(stats)
    );

}


/* =========================================================
   SAUVEGARDE DONNÉES PERMANENTES
========================================================= */

function savePermanentData() {

  localStorage.setItem(
    STORAGE.totalCrystals,
    totalPermanentCrystals
  );

  localStorage.setItem(
    STORAGE.collection,
    JSON.stringify(collection)
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
    JSON.stringify(stats)
  );

}


/* =========================================================
   RESET QUOTIDIEN AUTOMATIQUE
========================================================= */

function checkDailyReset() {

  const today =
    getTodayKey();

  const savedDate =
    localStorage.getItem(
      STORAGE.dayDate
    );


  if (savedDate !== today) {

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
   HABITUDES QUOTIDIENNES
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
    JSON.stringify(habits)
  );

}


/* =========================================================
   BOUTONS HABITUDES
========================================================= */

function bindHabitButtons() {

  const habitCards =
    document.querySelectorAll(
      ".habit-card"
    );


  habitCards.forEach(card => {

    const habitName =
      card.dataset.habit;

    const buttons =
      card.querySelectorAll(
        ".habit-choice"
      );


    buttons.forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const value =
            Number(button.dataset.value);

          selectHabit(
            habitName,
            value,
            button
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
  value,
  button
) {

  const previousValue =
    habits[habitName];

  habits[habitName] = value;

  saveDailyHabits();

  updateDailyUI();


  if (previousValue !== value) {

    if (value > 0) {

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
   CALCUL XP
========================================================= */

function calculateXP() {

  let xp = 0;

  Object.values(habits)
    .forEach(value => {

      xp += Number(value) || 0;

    });


  return Math.min(
    xp,
    100
  );

}


/* =========================================================
   MISE À JOUR INTERFACE JOURNÉE
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
   ÉTAT VISUEL HABITUDES
========================================================= */

function updateHabitVisuals() {

  const cards =
    document.querySelectorAll(
      ".habit-card"
    );

  let completed = 0;


  cards.forEach(card => {

    const habitName =
      card.dataset.habit;

    const selectedValue =
      habits[habitName];


    card.classList.remove(
      "selected"
    );


    const buttons =
      card.querySelectorAll(
        ".habit-choice"
      );


    buttons.forEach(button => {

      button.classList.remove(
        "active"
      );


      if (
        selectedValue !== undefined &&
        Number(button.dataset.value) ===
        Number(selectedValue)
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
      selectedValue !== undefined
    ) {

      completed++;

    }

  });


  dailyCount.textContent =
    `${completed} / 12`;

}


/* =========================================================
   NIVEAU DE RÉSONANCE
========================================================= */

function updateResonanceLevel() {

  let text = "";

  if (currentXP >= 90) {

    text =
      "Résonance maximale";

  } else if (currentXP >= 75) {

    text =
      "Résonance forte";

  } else if (currentXP >= 60) {

    text =
      "Résonance stable";

  } else if (currentXP >= 45) {

    text =
      "Résonance fragile";

  } else {

    text =
      "Résonance faible";

  }


  resonanceLevel.textContent =
    text;


  if (currentXP === 100) {

    dayStatusText.textContent =
      "Le NEXUS atteint sa résonance maximale.";

  } else if (currentXP >= 90) {

    dayStatusText.textContent =
      "Le Portail est pleinement accessible.";

  } else if (currentXP >= 70) {

    dayStatusText.textContent =
      "Le Portail est ouvert.";

  } else if (currentXP >= 50) {

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

  const steps =
    rewardTrack.querySelectorAll(
      ".reward-step"
    );


  steps.forEach(step => {

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
   ACCÈS ASCENSION
========================================================= */

function updatePortalAccess() {

  portalPreview.classList.remove(
    "locked",
    "open",
    "max-resonance"
  );


  if (currentXP < 70) {

    portalPreview.classList.add(
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

  portalPreview.classList.add(
    "open"
  );


  if (currentXP === 100) {

    portalPreview.classList.add(
      "max-resonance"
    );

    portalAccessTitle.textContent =
      "Résonance maximale";

    portalAccessText.textContent =
      "Ascension complète, pouvoir renforcé et coffre rare garanti.";

  } else if (currentXP >= 90) {

    portalAccessTitle.textContent =
      "Ascension complète";

    portalAccessText.textContent =
      "8 étapes, Gardien du Portail et pouvoir renforcé.";

  } else if (currentXP >= 80) {

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
      menuOverlay.classList.remove(
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

      showScreen(homeScreen);

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
          "Quitter cette Ascension ? Les gains non validés de la partie seront perdus."
        )
      ) {

        run.active = false;

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

      confirmOverlay.classList.add(
        "hidden"
      );

    }
  );


  endHomeBtn.addEventListener(
    "click",
    () => {

      endAscensionOverlay.classList.add(
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

      endAscensionOverlay.classList.add(
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
   AFFICHER ÉCRAN
========================================================= */

function showScreen(screen) {

  [
    homeScreen,
    ascensionScreen,
    sanctuaryScreen
  ].forEach(item => {

    item.classList.remove(
      "active"
    );

  });


  screen.classList.add(
    "active"
  );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   MENU
========================================================= */

function closeMenu() {

  menuOverlay.classList.add(
    "hidden"
  );

}


/* =========================================================
   PRÉPARER ASCENSION
========================================================= */

function prepareAscension() {

  if (currentXP < 70) {
    return;
  }


  run = {
    active: true,
    maxSteps: getAscensionSteps(),
    currentStep: 1,
    stability: 3,
    crystals: 0,
    power: null,
    shieldUsed: false,
    path: null,
    guardianWins: 0,
    guardianRounds: 0,
    pendingReward: null,
    rewardCallback: null
  };


  stats.totalAscensions++;

  savePermanentData();


  if (currentXP >= 90) {

    openPowerSelection();

  } else {

    startAscension();

  }

}


/* =========================================================
   NOMBRE D'ÉTAPES
========================================================= */

function getAscensionSteps() {

  if (currentXP >= 90) {
    return 8;
  }

  if (currentXP >= 80) {
    return 5;
  }

  return 3;

}


/* =========================================================
   POUVOIRS
========================================================= */

function openPowerSelection() {

  powerOverlay.classList.remove(
    "hidden"
  );

}


function bindPowerButtons() {

  const buttons =
    document.querySelectorAll(
      ".power-card"
    );


  buttons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        run.power =
          button.dataset.power;

        powerOverlay.classList.add(
          "hidden"
        );

        startAscension();

      }
    );

  });

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


  updateRunUI();


  showScreen(
    ascensionScreen
  );


  showEntrance();

}


/* =========================================================
   MONDE ACTUEL
========================================================= */

function getCurrentWorld() {

  return (
    WORLDS.find(
      item =>
        item.id === currentWorld
    ) ||
    WORLDS[0]
  );

}


/* =========================================================
   ÉCRAN ENTRÉE
========================================================= */

function showEntrance() {

  roomTitle.textContent =
    "Le passage s'éveille";

  roomDescription.textContent =
    "Trois chemins se dessinent devant toi.";

  roomVisual.innerHTML =
    `<div class="temporary-symbol">◎</div>`;


  pathChoices.classList.remove(
    "hidden"
  );

  roomActionZone.classList.add(
    "hidden"
  );

}


/* =========================================================
   CHEMINS
========================================================= */

function bindPathButtons() {

  const buttons =
    document.querySelectorAll(
      ".path-card"
    );


  buttons.forEach(button => {

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

  });

}


/* =========================================================
   RÉSOLUTION CHEMIN
========================================================= */

function resolvePathChoice(path) {

  pathChoices.classList.add(
    "hidden"
  );


  const room =
    generateRoom(path);


  showRoom(room);

}


/* =========================================================
   GÉNÉRATION SALLE
========================================================= */

function generateRoom(path) {

  const roll =
    Math.random();


  if (path === "mist") {

    if (roll < 0.32) {
      return "sanctuary";
    }

    if (roll < 0.62) {
      return "crystal";
    }

    if (roll < 0.82) {
      return "mist";
    }

    return "challenge";

  }


  if (path === "crystal") {

    if (roll < 0.3) {
      return "crystal";
    }

    if (roll < 0.55) {
      return "chest";
    }

    if (roll < 0.78) {
      return "challenge";
    }

    return "obstacle";

  }


  if (path === "forbidden") {

    if (roll < 0.3) {
      return "forbidden";
    }

    if (roll < 0.52) {
      return "obstacle";
    }

    if (roll < 0.74) {
      return "challenge";
    }

    if (roll < 0.92) {
      return "chest";
    }

    return "secret";

  }


  return "crystal";

}


/* =========================================================
   AFFICHER SALLE
========================================================= */

function showRoom(type) {

  roomActionZone.classList.remove(
    "hidden"
  );


  if (type === "crystal") {

    roomTitle.textContent =
      "Salle des Cristaux";

    roomDescription.textContent =
      "Des fragments d'énergie flottent autour de toi.";

    roomVisual.innerHTML =
      `<div class="temporary-symbol">◆</div>`;

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


  if (type === "chest") {

    roomTitle.textContent =
      "Salle du Coffre";

    roomDescription.textContent =
      "Un coffre ancien attend d'être ouvert.";

    roomVisual.innerHTML =
      `<div class="temporary-symbol">▣</div>`;

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


  if (type === "mist") {

    roomTitle.textContent =
      "Salle des Brumes";

    roomDescription.textContent =
      "La brume dissimule quelque chose.";

    roomVisual.innerHTML =
      `<div class="temporary-symbol">☁</div>`;

    roomActionBtn.textContent =
      "Traverser";

    roomActionBtn.onclick =
      () => {

        const roll =
          Math.random();

        if (roll < 0.55) {

          const gain =
            randomInt(
              3,
              8
            );

          addRunCrystals(
            gain
          );

          showToast(
            `La brume révèle ${gain} cristaux`
          );

        } else if (roll < 0.8) {

          restoreStability();

        } else {

          loseStability();

        }

        if (run.stability > 0) {
          nextStep();
        }

      };

    return;

  }


  if (type === "sanctuary") {

    roomTitle.textContent =
      "Salle du Sanctuaire";

    roomDescription.textContent =
      "Une énergie calme stabilise le Portail.";

    roomVisual.innerHTML =
      `<div class="temporary-symbol">❋</div>`;

    roomActionBtn.textContent =
      "Recevoir l'énergie";

    roomActionBtn.onclick =
      () => {

        restoreStability();

        nextStep();

      };

    return;

  }


  if (type === "challenge") {

    roomTitle.textContent =
      "Salle d'Épreuve";

    roomDescription.textContent =
      "Le NEXUS teste ta concentration.";

    roomVisual.innerHTML =
      `<div class="temporary-symbol">◈</div>`;

    roomActionBtn.textContent =
      "Commencer l'épreuve";

    roomActionBtn.onclick =
      () => {

        startRandomChallenge(
          false,
          nextStep
        );

      };

    return;

  }


  if (type === "obstacle") {

    roomTitle.textContent =
      "Salle de l'Obstacle";

    roomDescription.textContent =
      "Le passage devient instable.";

    roomVisual.innerHTML =
      `<div class="temporary-symbol">⚠</div>`;

    roomActionBtn.textContent =
      "Affronter l'obstacle";

    roomActionBtn.onclick =
      () => {

        startRandomChallenge(
          false,
          () => {

            const bonus =
              randomInt(
                5,
                12
              );

            addRunCrystals(
              bonus
            );

            nextStep();

          }
        );

      };

    return;

  }


  if (type === "forbidden") {

    roomTitle.textContent =
      "Salle Interdite";

    roomDescription.textContent =
      "Une énergie puissante protège un trésor ancien.";

    roomVisual.innerHTML =
      `<div class="temporary-symbol">✦</div>`;

    roomActionBtn.textContent =
      "Entrer";

    roomActionBtn.onclick =
      () => {

        startRandomChallenge(
          true,
          () => {

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
        );

      };

    return;

  }


  if (type === "secret") {

    roomTitle.textContent =
      "Salle Secrète";

    roomDescription.textContent =
      "Tu viens de découvrir un passage extrêmement rare.";

    roomVisual.innerHTML =
      `<div class="temporary-symbol">✶</div>`;

    roomActionBtn.textContent =
      "Découvrir le secret";

    roomActionBtn.onclick =
      () => {

        giveRandomReward(
          Math.random() < 0.3
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

  if (!run.active) {
    return;
  }


  if (run.stability <= 0) {
    endAscension(false);
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
    "Le Portail reconnaît ton passage.";

  roomVisual.innerHTML =
    `<div class="temporary-symbol">◆</div>`;

  pathChoices.classList.add(
    "hidden"
  );

  roomActionZone.classList.remove(
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
        () => {

          completeAscension();

        }
      );

    };

}


/* =========================================================
   RARETÉ FINALE
========================================================= */

function getFinalRarity() {

  const roll =
    Math.random();


  if (run.stability === 3) {

    if (roll < 0.08) {
      return "epic";
    }

    if (roll < 0.35) {
      return "rare";
    }

    return "uncommon";

  }


  if (run.stability === 2) {

    if (roll < 0.2) {
      return "rare";
    }

    return "uncommon";

  }


  return "common";

}


/* =========================================================
   CRISTAUX PARTIE
========================================================= */

function addRunCrystals(amount) {

  run.crystals += amount;

  runCrystals.textContent =
    run.crystals;

}


/* =========================================================
   STABILITÉ
========================================================= */

function restoreStability() {

  if (run.stability >= 3) {

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

    run.shieldUsed = true;

    showToast(
      "Bouclier runique activé"
    );

    return;
  }


  run.stability--;

  updateStabilityUI();


  if (run.stability <= 0) {

    showToast(
      "Le Portail s'effondre"
    );

    setTimeout(
      () => {
        endAscension(false);
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


  const crystals =
    document.querySelectorAll(
      ".stability-crystal"
    );


  crystals.forEach(
    (crystal, index) => {

      if (
        index <
        run.stability
      ) {

        crystal.classList.add(
          "active"
        );

      } else {

        crystal.classList.remove(
          "active"
        );

      }

    }
  );


  runicStability.classList.remove(
    "fragile",
    "critical",
    "collapsed"
  );


  if (run.stability === 3) {

    stabilityMessage.textContent =
      "Le portail est parfaitement stable.";

  }


  if (run.stability === 2) {

    runicStability.classList.add(
      "fragile"
    );

    stabilityMessage.textContent =
      "Le portail commence à vaciller.";

  }


  if (run.stability === 1) {

    runicStability.classList.add(
      "critical"
    );

    stabilityMessage.textContent =
      "La résonance est critique.";

  }


  if (run.stability <= 0) {

    runicStability.classList.add(
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


  if (run.power === "shield") {

    activePowerText.textContent =
      "Bouclier";

  } else if (
    run.power === "vision"
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
  successCallback = null
) {

  const challengeTypes = [
    "memory",
    "different",
    "choice"
  ];


  const selected =
    challengeTypes[
      Math.floor(
        Math.random() *
        challengeTypes.length
      )
    ];


  challengeOverlay.classList.remove(
    "hidden"
  );


  challengeContinueBtn.classList.add(
    "hidden"
  );


  if (selected === "memory") {

    challengeMemory(
      hardMode,
      successCallback
    );

    return;
  }


  if (selected === "different") {

    challengeDifferent(
      hardMode,
      successCallback
    );

    return;
  }


  challengeChoice(
    hardMode,
    successCallback
  );

}


/* =========================================================
   ÉPREUVE MÉMOIRE
========================================================= */

function challengeMemory(
  hardMode,
  successCallback
) {

  challengeType.textContent =
    "Mémoire";

  challengeTitle.textContent =
    "Mémorise le symbole";

  challengeInstructions.textContent =
    "Observe puis retrouve le bon symbole.";


  const symbols =
    [
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
      id="memorySymbol"
      style="
        font-size:4rem;
        color:#67f8ea;
      "
    >
      ${correct}
    </div>
    `;


  const delay =
    hardMode
      ? 1200
      : 1800;


  setTimeout(
    () => {

      const options =
        shuffleArray(
          [
            correct,
            ...pickOtherSymbols(
              symbols,
              correct,
              3
            )
          ]
        );


      challengeArea.innerHTML =
        options
          .map(
            symbol => `
              <button
                class="challenge-choice"
                data-answer="${symbol}"
                style="
                  margin:6px;
                  min-width:60px;
                  min-height:60px;
                  border-radius:14px;
                  border:1px solid rgba(255,255,255,.12);
                  background:rgba(255,255,255,.05);
                  color:white;
                  font-size:1.8rem;
                "
              >
                ${symbol}
              </button>
            `
          )
          .join("");


      challengeArea
        .querySelectorAll(
          ".challenge-choice"
        )
        .forEach(button => {

          button.addEventListener(
            "click",
            () => {

              const success =
                button.dataset.answer ===
                correct;


              resolveChallenge(
                success,
                successCallback
              );

            }
          );

        });

    },
    delay
  );

}


/* =========================================================
   ÉPREUVE SYMBOLE DIFFÉRENT
========================================================= */

function challengeDifferent(
  hardMode,
  successCallback
) {

  challengeType.textContent =
    "Observation";

  challengeTitle.textContent =
    "Trouve l'intrus";

  challengeInstructions.textContent =
    "Un symbole est différent des autres.";


  const normal =
    "◆";

  const different =
    "◇";

  const count =
    hardMode
      ? 12
      : 9;

  const target =
    Math.floor(
      Math.random() *
      count
    );


  let html =
    `<div style="
      display:grid;
      grid-template-columns:repeat(3,60px);
      gap:10px;
      justify-content:center;
    ">`;


  for (
    let i = 0;
    i < count;
    i++
  ) {

    html += `
      <button
        class="challenge-different"
        data-correct="${
          i === target
            ? "yes"
            : "no"
        }"
        style="
          width:60px;
          height:60px;
          border-radius:14px;
          border:1px solid rgba(255,255,255,.12);
          background:rgba(255,255,255,.05);
          color:#67f8ea;
          font-size:1.8rem;
        "
      >
        ${
          i === target
            ? different
            : normal
        }
      </button>
    `;

  }


  html += "</div>";


  challengeArea.innerHTML =
    html;


  challengeArea
    .querySelectorAll(
      ".challenge-different"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          resolveChallenge(
            button.dataset.correct ===
            "yes",
            successCallback
          );

        }
      );

    });

}


/* =========================================================
   ÉPREUVE CHOIX
========================================================= */

function challengeChoice(
  hardMode,
  successCallback
) {

  challengeType.textContent =
    "Intuition";

  challengeTitle.textContent =
    "Choisis le bon sceau";

  challengeInstructions.textContent =
    "Un seul sceau est accordé à la fréquence du Portail.";


  const buttonsCount =
    hardMode
      ? 4
      : 3;

  const correct =
    Math.floor(
      Math.random() *
      buttonsCount
    );


  let html =
    `<div style="
      display:flex;
      flex-wrap:wrap;
      gap:12px;
      justify-content:center;
    ">`;


  for (
    let i = 0;
    i < buttonsCount;
    i++
  ) {

    html += `
      <button
        class="challenge-seal"
        data-correct="${
          i === correct
            ? "yes"
            : "no"
        }"
        style="
          width:72px;
          height:72px;
          border-radius:50%;
          border:1px solid rgba(103,248,234,.25);
          background:rgba(255,255,255,.04);
          color:#67f8ea;
          font-size:2rem;
        "
      >
        ${["✦","◆","◎","◈"][i]}
      </button>
    `;

  }


  html += "</div>";


  challengeArea.innerHTML =
    html;


  challengeArea
    .querySelectorAll(
      ".challenge-seal"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          resolveChallenge(
            button.dataset.correct ===
            "yes",
            successCallback
          );

        }
      );

    });

}


/* =========================================================
   RÉSOLUTION ÉPREUVE
========================================================= */

function resolveChallenge(
  success,
  successCallback
) {

  challengeArea.innerHTML =
    success
      ? `
        <div style="
          text-align:center;
          font-size:1.2rem;
          color:#82f2ba;
        ">
          ✦ Résonance réussie
        </div>
      `
      : `
        <div style="
          text-align:center;
          font-size:1.2rem;
          color:#ffba78;
        ">
          Le Portail vacille
        </div>
      `;


  if (!success) {

    loseStability();

  }


  challengeContinueBtn.classList.remove(
    "hidden"
  );


  challengeContinueBtn.onclick =
    () => {

      challengeOverlay.classList.add(
        "hidden"
      );


      if (
        run.stability <= 0
      ) {
        return;
      }


      if (
        success &&
        successCallback
      ) {

        successCallback();

        return;

      }


      if (
        !success &&
        successCallback
      ) {

        successCallback();

        return;

      }


      nextStep();

    };

}


/* =========================================================
   GARDIEN
========================================================= */

function openGuardian() {

  guardianOverlay.classList.remove(
    "hidden"
  );


  run.guardianWins = 0;
  run.guardianRounds = 0;


  updateGuardianUI();


  guardianMessage.textContent =
    "Le Gardien exige deux victoires sur trois.";


  startGuardianBtn.disabled =
    false;

  startGuardianBtn.textContent =
    "Affronter le Gardien";


  startGuardianBtn.onclick =
    guardianRound;

}


/* =========================================================
   MANCHE GARDIEN
========================================================= */

function guardianRound() {

  if (
    run.guardianWins >= 2
  ) {
    guardianVictory();
    return;
  }


  if (
    run.guardianRounds >= 3
  ) {

    guardianDefeat();

    return;
  }


  guardianOverlay.classList.add(
    "hidden"
  );


  startGuardianChallenge();

}


/* =========================================================
   ÉPREUVE GARDIEN
========================================================= */

function startGuardianChallenge() {

  const beforeStability =
    run.stability;


  startRandomChallenge(
    true,
    () => {

      const success =
        run.stability ===
        beforeStability;


      run.guardianRounds++;


      if (success) {

        run.guardianWins++;

      }


      guardianOverlay.classList.remove(
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


/* =========================================================
   UI GARDIEN
========================================================= */

function updateGuardianUI() {

  guardianWins.textContent =
    `${run.guardianWins} / 2`;

  guardianRounds.textContent =
    `${run.guardianRounds} / 3`;

}


/* =========================================================
   VICTOIRE GARDIEN
========================================================= */

function guardianVictory() {

  guardianOverlay.classList.add(
    "hidden"
  );


  run.currentStep = 8;

  updateRunUI();

  finalTreasure();

}


/* =========================================================
   DÉFAITE GARDIEN
========================================================= */

function guardianDefeat() {

  guardianOverlay.classList.add(
    "hidden"
  );

  endAscension(false);

}


/* =========================================================
   RÉCOMPENSE ALÉATOIRE
========================================================= */

function giveRandomReward(
  rarity,
  callback
) {

  const pool =
    REWARD_ITEMS[rarity];


  const reward =
    {
      ...pool[
        Math.floor(
          Math.random() *
          pool.length
        )
      ],
      rarity: rarity,
      obtainedAt:
        new Date().toISOString()
    };


  collection.push(
    reward
  );

  savePermanentData();


  const rarityLabel =
    getRarityLabel(
      rarity
    );


  rewardBigIcon.textContent =
    reward.icon;

  rewardRarity.textContent =
    rarityLabel;

  rewardTitle.textContent =
    reward.name;

  rewardDescription.textContent =
    `${reward.type} ajouté au Sanctuaire.`;


  rewardOverlay.classList.remove(
    "hidden"
  );


  rewardContinueBtn.onclick =
    () => {

      rewardOverlay.classList.add(
        "hidden"
      );

      if (callback) {
        callback();
      }

    };

}


/* =========================================================
   RARETÉ SELON CHEMIN
========================================================= */

function getRewardRarity(path) {

  const roll =
    Math.random();


  if (path === "forbidden") {

    if (roll < 0.05) {
      return "legendary";
    }

    if (roll < 0.18) {
      return "epic";
    }

    if (roll < 0.48) {
      return "rare";
    }

    if (roll < 0.8) {
      return "uncommon";
    }

    return "common";

  }


  if (path === "crystal") {

    if (roll < 0.04) {
      return "epic";
    }

    if (roll < 0.22) {
      return "rare";
    }

    if (roll < 0.62) {
      return "uncommon";
    }

    return "common";

  }


  if (roll < 0.12) {
    return "rare";
  }

  if (roll < 0.42) {
    return "uncommon";
  }

  return "common";

}


/* =========================================================
   RARETÉ FORTE
========================================================= */

function randomRareRarity() {

  const roll =
    Math.random();


  if (roll < 0.08) {
    return "legendary";
  }

  if (roll < 0.28) {
    return "epic";
  }

  return "rare";

}


/* =========================================================
   LIBELLÉS RARETÉ
========================================================= */

function getRarityLabel(rarity) {

  const labels = {
    common: "Commun",
    uncommon: "Peu commun",
    rare: "Rare",
    epic: "Épique",
    legendary: "Légendaire"
  };


  return (
    labels[rarity] ||
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


  if (currentXP === 100) {

    stats.perfectDays++;

  }


  ascensionLevel++;


  if (
    ascensionLevel > 10
  ) {

    ascensionLevel = 1;

    currentWorld++;


    if (
      currentWorld >
      WORLDS.length
    ) {

      currentWorld = 1;

    }

  }


  savePermanentData();


  endAscension(true);

}


/* =========================================================
   FIN ASCENSION
========================================================= */

function endAscension(success) {

  run.active = false;


  if (!success) {

    totalPermanentCrystals +=
      run.crystals;

    savePermanentData();

  }


  if (success) {

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


  endAscensionOverlay.classList.remove(
    "hidden"
  );


  updateSanctuary();

}


/* =========================================================
   SANCTUAIRE
========================================================= */

function updateSanctuary() {

  totalCrystals.textContent =
    totalPermanentCrystals;


  const artifacts =
    collection.filter(
      item =>
        item.type === "Artefact"
    );


  const creatures =
    collection.filter(
      item =>
        item.type === "Créature"
    );


  artifactCount.textContent =
    artifacts.length;

  creatureCount.textContent =
    creatures.length;


  renderCollection();

}


/* =========================================================
   AFFICHAGE COLLECTION
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


  collectionGrid.innerHTML =
    collection
      .slice()
      .reverse()
      .map(
        item => {

          return `
            <article
              class="collection-item"
            >

              <div
                class="collection-item-icon rarity-${item.rarity}"
              >
                ${item.icon}
              </div>

              <div
                class="collection-item-name"
              >
                ${item.name}
              </div>

              <div
                class="collection-item-rarity rarity-${item.rarity}"
              >
                ${getRarityLabel(
                  item.rarity
                )}
              </div>

              <div
                style="
                  margin-top:4px;
                  font-size:.72rem;
                  color:#718893;
                "
              >
                ${item.type}
              </div>

            </article>
          `;

        }
      )
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

  confirmOverlay.classList.remove(
    "hidden"
  );


  confirmActionBtn.onclick =
    () => {

      confirmOverlay.classList.add(
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

  Object.values(STORAGE)
    .forEach(key => {

      localStorage.removeItem(
        key
      );

    });


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

let toastTimeout = null;


function showToast(text) {

  toastText.textContent =
    text;

  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimeout
  );


  toastTimeout =
    setTimeout(
      () => {

        toast.classList.remove(
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
    (max - min + 1)
  ) + min;

}


function shuffleArray(array) {

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
        symbol !== excluded
    )
  ).slice(
    0,
    count
  );

}


function capitalize(text) {

  if (!text) {
    return "";
  }


  return (
    text.charAt(0)
      .toUpperCase() +
    text.slice(1)
  );

}


});
