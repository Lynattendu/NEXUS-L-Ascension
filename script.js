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
  dailyRewards: "nexusVital_dailyRewards",

  history: "nexusVital_history",

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

const progressionScreen =
  document.getElementById(
    "progressionScreen"
  );

   
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
   ÉPREUVES — SYSTÈME NEXUS
   SEULS CES 5 MINI-JEUX SONT UTILISÉS :
   1. RÉSONANCE DES CRISTAUX
   2. PORTAIL INSTABLE
   3. SCEAU FRACTURÉ
   4. Résonnance des abysses
   5. Courant des abysses
========================================================= */


/* =========================================================
   ÉLÉMENTS DOM DES ÉPREUVES
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
   LANCEMENT D'UNE ÉPREUVE ALÉATOIRE
========================================================= */

function startRandomChallenge(
  hardMode = false,
  callback = null
) {

  if (
    !challengeOverlay ||
    !challengeArea
  ) {

    console.error(
      "Zone d'épreuve NEXUS introuvable."
    );

    return;

  }


  challengeOverlay
    .classList
    .remove(
      "hidden"
    );


  /*
    VISUEL DE FOND
  */

  const challengeCard =
    challengeOverlay
      .querySelector(
        ".challenge-card"
      );


  if (
    challengeCard
  ) {

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

  }


  /*
    RESET DU BOUTON CONTINUER
  */

  if (
    challengeContinueBtn
  ) {

    challengeContinueBtn
      .classList
      .add(
        "hidden"
      );


    challengeContinueBtn.onclick =
      null;

  }


  /*
    RESET DE LA ZONE
  */

  challengeArea.innerHTML =
    "";


  challengeArea.className =
    "challenge-area";


  /*
    UNIQUEMENT LES 3 NOUVELLES ÉPREUVES
  */

 const challenges = [
  "crystals",
  "portal",
  "seal",
  "abyssMatch",
  "abyssCurrent"
];

  const selected =
    challenges[
      Math.floor(
        Math.random() *
        challenges.length
      )
    ];


  console.log(
    "Épreuve NEXUS :",
    selected
  );


  if (
    selected ===
    "crystals"
  ) {

    challengeCrystals(
      hardMode,
      callback
    );


    return;

  }


  if (
  selected ===
  "portal"
) {

  challengePortal(
    hardMode,
    callback
  );


  return;

}


/* =====================================================
   RÉSONANCE DES ABYSSES
===================================================== */

if (
  selected ===
  "abyssMatch"
) {

  challengeAbyssMatch(
    hardMode,
    callback
  );


  return;

}


/* =====================================================
   COURANT DES ABYSSES
===================================================== */

if (
  selected ===
  "abyssCurrent"
) {

  challengeAbyssCurrent(
    hardMode,
    callback
  );


  return;

}


/* =====================================================
   SCEAU FRACTURÉ
===================================================== */

challengeSeal(
  hardMode,
  callback
);

}


/* =========================================================
   1 — RÉSONANCE DES CRISTAUX
========================================================= */

function challengeCrystals(
  hardMode = false,
  callback = null
) {

  challengeType.textContent =
    hardMode
      ? "Résonance supérieure"
      : "Épreuve de mémoire";


  challengeTitle.textContent =
    "Résonance des Cristaux";


  challengeInstructions.textContent =
    "Observe la séquence lumineuse, puis reproduis-la.";


  const crystalClasses = [

    "cyan",

    "blue",

    "violet",

    "gold"

  ];


  const sequenceLength =
    hardMode
      ? 6
      : 4;


  const sequence =
    [];


  let playerIndex =
    0;


  let acceptingInput =
    false;


  let finished =
    false;


  /*
    CRÉATION DE LA SÉQUENCE
  */

  for (
    let i = 0;
    i < sequenceLength;
    i++
  ) {

    sequence.push(
      Math.floor(
        Math.random() * 4
      )
    );

  }


  /*
    AFFICHAGE
  */

  challengeArea.innerHTML = `
    <div class="crystal-game">

      <div
        class="challenge-status"
        id="crystalStatus"
      >
        Observe la résonance…
      </div>

      <div class="crystal-grid">

        ${crystalClasses
          .map(
            (
              crystalClass,
              index
            ) => `

              <button
                type="button"
                class="resonance-crystal ${crystalClass}"
                data-crystal="${index}"
                disabled
                aria-label="Cristal ${index + 1}"
              ></button>

            `
          )
          .join("")}

      </div>

      <div class="crystal-sequence-info">

        ${
          hardMode
            ? "Résonance intense • 6 impulsions"
            : "Résonance stable • 4 impulsions"
        }

      </div>

    </div>
  `;


  const crystalStatus =
    document.getElementById(
      "crystalStatus"
    );


  const crystals =
    Array.from(
      challengeArea
        .querySelectorAll(
          ".resonance-crystal"
        )
    );


  /*
    ALLUMER UN CRISTAL
  */

  function illuminateCrystal(
    index,
    duration = 460
  ) {

    return new Promise(
      resolve => {

        const crystal =
          crystals[index];


        if (
          !crystal
        ) {

          resolve();

          return;

        }

        crystal
          .classList
          .add(
            "active"
          );


        setTimeout(
          () => {

            crystal
              .classList
              .remove(
                "active"
              );


            setTimeout(
              resolve,
              170
            );

          },
          duration
        );

      }
    );

  }


  /*
    JOUER LA SÉQUENCE
  */

  async function playSequence() {

    await new Promise(
      resolve =>
        setTimeout(
          resolve,
          650
        )
    );


    for (
      const index
      of sequence
    ) {

      if (
        finished
      ) {

        return;

      }


      await illuminateCrystal(
        index,
        hardMode
          ? 390
          : 480
      );

    }


    if (
      finished
    ) {

      return;

    }


    acceptingInput =
      true;


    crystalStatus.textContent =
      "À toi";


    crystals.forEach(
      crystal => {

        crystal.disabled =
          false;

      }
    );

  }


  /*
    CLIC DU JOUEUR
  */

  crystals.forEach(
    crystal => {

      crystal.addEventListener(
        "click",
        () => {

          if (
            !acceptingInput ||
            finished
          ) {

            return;

          }


          const selected =
            Number(
              crystal.dataset.crystal
            );


          crystal
            .classList
            .add(
              "active",
              "player-hit"
            );


          setTimeout(
            () => {

              crystal
                .classList
                .remove(
                  "active",
                  "player-hit"
                );

            },
            220
          );


          /*
            ERREUR
          */

          if (
            selected !==
            sequence[playerIndex]
          ) {

            finished =
              true;


            acceptingInput =
              false;


            crystals.forEach(
              button => {

                button.disabled =
                  true;

              }
            );


            crystalStatus.textContent =
              "La résonance s'est rompue";


            crystalStatus
              .classList
              .add(
                "fail"
              );


            setTimeout(
              () => {

                resolveChallenge(
                  false,
                  callback
                );

              },
              500
            );


            return;

          }


          /*
            BON CRISTAL
          */

          playerIndex++;


          crystalStatus.textContent =
            `${playerIndex} / ${sequenceLength}`;


          /*
            VICTOIRE
          */

          if (
            playerIndex >=
            sequence.length
          ) {

            finished =
              true;


            acceptingInput =
              false;


            crystals.forEach(
              button => {

                button.disabled =
                  true;

              }
            );


            crystalStatus.textContent =
              "Résonance parfaite";


            crystalStatus
              .classList
              .add(
                "success"
              );


            setTimeout(
              () => {

                resolveChallenge(
                  true,
                  callback
                );

              },
              550
            );

          }

        }
      );

    }
  );


  playSequence();

}


/* =========================================================
   2 — PORTAIL INSTABLE
========================================================= */

function challengePortal(
  hardMode = false,
  callback = null
) {

  challengeType.textContent =
    hardMode
      ? "Instabilité critique"
      : "Épreuve de précision";


  challengeTitle.textContent =
    "Portail instable";


  challengeInstructions.textContent =
    "Arrête l'énergie lorsqu'elle traverse la zone lumineuse.";


  challengeArea.innerHTML = `
    <div class="portal-timing-game">

      <div
        class="challenge-status"
        id="portalStatus"
      >
        Synchronise-toi avec le Portail
      </div>

      <div class="portal-timing-orb">
        ◎
      </div>

      <div
        class="timing-track"
        id="timingTrack"
      >

        <div
          class="timing-target"
          id="timingTarget"
        ></div>

        <div
          class="timing-cursor"
          id="timingCursor"
        ></div>

      </div>

      <button
        type="button"
        class="timing-stop-button"
        id="timingStopButton"
      >
        Stabiliser
      </button>

    </div>
  `;


  const portalStatus =
    document.getElementById(
      "portalStatus"
    );


  const timingTarget =
    document.getElementById(
      "timingTarget"
    );


  const timingCursor =
    document.getElementById(
      "timingCursor"
    );


  const timingStopButton =
    document.getElementById(
      "timingStopButton"
    );


  /*
    TAILLE DE LA ZONE CIBLE
  */

  const targetWidth =
    hardMode
      ? 15
      : 22;


  /*
    POSITION ALÉATOIRE
  */

  const targetLeft =
    18 +
    Math.random() *
    (
      64 -
      targetWidth
    );


  timingTarget.style.left =
    `${targetLeft}%`;


  timingTarget.style.width =
    `${targetWidth}%`;


  /*
    CURSEUR
  */

  let position =
    0;


  let direction =
    1;


  let previousTime =
    null;


  let animationId =
    null;


  let finished =
    false;


  const speed =
    hardMode
      ? 72
      : 54;


  /*
    ANIMATION
  */

  function animateCursor(
    timestamp
  ) {

    if (
      finished
    ) {

      return;

    }


    if (
      previousTime === null
    ) {

      previousTime =
        timestamp;

    }


    const delta =
      Math.min(
        (
          timestamp -
          previousTime
        ) / 1000,
        0.04
      );


    previousTime =
      timestamp;


    position +=
      direction *
      speed *
      delta;


    if (
      position >= 100
    ) {

      position =
        100;


      direction =
        -1;

    }


    if (
      position <= 0
    ) {

      position =
        0;


      direction =
        1;

    }


    timingCursor.style.left =
      `calc(${position}% - 7px)`;


    animationId =
      requestAnimationFrame(
        animateCursor
      );

  }


  animationId =
    requestAnimationFrame(
      animateCursor
    );


  /*
    BOUTON STABILISER
  */

  timingStopButton.addEventListener(
    "click",
    () => {

      if (
        finished
      ) {

        return;

      }


      finished =
        true;


      cancelAnimationFrame(
        animationId
      );


      timingStopButton.disabled =
        true;


      const targetEnd =
        targetLeft +
        targetWidth;


      const success =
        position >= targetLeft &&
        position <= targetEnd;


      /*
        RÉUSSITE
      */

      if (
        success
      ) {

        portalStatus.textContent =
          "Portail stabilisé";


        portalStatus
          .classList
          .add(
            "success"
          );


        timingCursor.style.boxShadow =
          "0 0 18px #fff, 0 0 38px #6af9ea";

      }

      /*
        ÉCHEC
      */

      else {

        portalStatus.textContent =
          "Synchronisation manquée";


        portalStatus
          .classList
          .add(
            "fail"
          );

      }


      setTimeout(
        () => {

          resolveChallenge(
            success,
            callback
          );

        },
        650
      );

    }
  );

}


/* =========================================================
   3 — SCEAU FRACTURÉ
========================================================= */

function challengeSeal(
  hardMode = false,
  callback = null
) {

  challengeType.textContent =
    hardMode
      ? "Sceau ancien"
      : "Épreuve runique";


  challengeTitle.textContent =
    "Sceau fracturé";


  challengeInstructions.textContent =
    "Observe l'ordre des fragments, puis réactive le sceau.";


  const symbols = [

    "◇",

    "△",

    "◉",

    "✦"

  ];


  const sequenceLength =
    hardMode
      ? 6
      : 4;


  const sequence =
    [];


  let playerIndex =
    0;


  let acceptingInput =
    false;


  let finished =
    false;


  /*
    CRÉATION DE LA SÉQUENCE
  */

  for (
    let i = 0;
    i < sequenceLength;
    i++
  ) {

    sequence.push(
      Math.floor(
        Math.random() *
        symbols.length
      )
    );

  }


  /*
    AFFICHAGE
  */

  challengeArea.innerHTML = `
    <div class="seal-game">

      <div
        class="challenge-status"
        id="sealStatus"
      >
        Le sceau révèle sa structure…
      </div>

      <div
        class="seal-core"
        id="sealCore"
      >

        ${symbols
          .map(
            (
              symbol,
              index
            ) => `

              <button
                type="button"
                class="seal-piece"
                data-seal="${index}"
                disabled
                aria-label="Fragment ${index + 1}"
              >
                ${symbol}
              </button>

            `
          )
          .join("")}

      </div>

      <div
        class="seal-sequence"
        id="sealSequence"
      >
        Observe attentivement
      </div>

    </div>
  `;


  const sealStatus =
    document.getElementById(
      "sealStatus"
    );


  const sealSequence =
    document.getElementById(
      "sealSequence"
    );


  const pieces =
    Array.from(
      challengeArea
        .querySelectorAll(
          ".seal-piece"
        )
    );


  /*
    ILLUMINER UN FRAGMENT
  */

  function illuminatePiece(
    index,
    duration = 420
  ) {

    return new Promise(
      resolve => {

        const piece =
          pieces[index];


        if (
          !piece
        ) {

          resolve();

          return;

        }


        piece
          .classList
          .add(
            "active"
          );


        setTimeout(
          () => {

            piece
              .classList
              .remove(
                "active"
              );


            setTimeout(
              resolve,
              150
            );

          },
          duration
        );

      }
    );

  }


  /*
    MONTRER LA SÉQUENCE
  */

  async function revealSeal() {

    await new Promise(
      resolve =>
        setTimeout(
          resolve,
          650
        )
    );


    for (
      const index
      of sequence
    ) {

      if (
        finished
      ) {

        return;

      }


      sealSequence.textContent =
        symbols[index];


      await illuminatePiece(
        index,
        hardMode
          ? 330
          : 420
      );

    }


    if (
      finished
    ) {

      return;

    }


    sealSequence.textContent =
      "Réactive les fragments";


    sealStatus.textContent =
      "À toi";


    acceptingInput =
      true;


    pieces.forEach(
      piece => {

        piece.disabled =
          false;

      }
    );

  }


  /*
    CLIC SUR LES FRAGMENTS
  */

  pieces.forEach(
    piece => {

      piece.addEventListener(
        "click",
        () => {

          if (
            !acceptingInput ||
            finished
          ) {

            return;

          }


          const selected =
            Number(
              piece.dataset.seal
            );


          piece
            .classList
            .add(
              "active"
            );


          setTimeout(
            () => {

              piece
                .classList
                .remove(
                  "active"
                );

            },
            220
          );


          /*
            ERREUR
          */

          if (
            selected !==
            sequence[playerIndex]
          ) {

            finished =
              true;


            acceptingInput =
              false;


            pieces.forEach(
              button => {

                button.disabled =
                  true;

              }
            );


            sealStatus.textContent =
              "Le sceau s'est brisé";


            sealStatus
              .classList
              .add(
                "fail"
              );


            setTimeout(
              () => {

                resolveChallenge(
                  false,
                  callback
                );

              },
              500
            );


            return;

          }


          /*
            BON FRAGMENT
          */

          playerIndex++;


          sealSequence.textContent =
            `${playerIndex} / ${sequenceLength}`;


          /*
            VICTOIRE
          */

          if (
            playerIndex >=
            sequence.length
          ) {

            finished =
              true;


            acceptingInput =
              false;


            pieces.forEach(
              button => {

                button.disabled =
                  true;

              }
            );


            sealStatus.textContent =
              "Sceau restauré";


            sealStatus
              .classList
              .add(
                "success"
              );


            sealSequence.textContent =
              "✦";


            setTimeout(
              () => {

                resolveChallenge(
                  true,
                  callback
                );

              },
              550
            );

          }

        }
      );

    }
  );


  revealSeal();

}
/* =========================================================
   4 — RÉSONANCE DES ABYSSES
========================================================= */

function challengeAbyssMatch(
  hardMode = false,
  callback = null
) {

  challengeType.textContent =
    hardMode
      ? "Résonance supérieure"
      : "Épreuve de résonance";


  challengeTitle.textContent =
    "Résonance des Abysses";


  challengeInstructions.textContent =
    hardMode
      ? "Crée deux alignements de 3 créatures identiques."
      : "Échange deux créatures voisines pour créer un alignement de 3.";


  const rows = 5;
  const cols = 5;


  /* =====================================================
     ICÔNES
  ====================================================== */

  const symbols = [

    {
      id: "star",
      icon: "⭐"
    },

    {
      id: "fish",
      icon: "🐟"
    },

    {
      id: "jelly",
      icon: "🪼"
    },

    {
      id: "octopus",
      icon: "🐙"
    }

  ];


  const requiredMatches =
    hardMode
      ? 10
      : 6;


  const maxMoves =
    hardMode
      ? 18
      : 12;


  let board = [];

  let selectedIndex = null;

  let moves = 0;

  let matchesMade = 0;

  let locked = false;

  let finished = false;


  /* =====================================================
     OUTILS
  ====================================================== */

  function randomSymbol() {

    return symbols[
      Math.floor(
        Math.random() *
        symbols.length
      )
    ];

  }


  function getRow(index) {

    return Math.floor(
      index / cols
    );

  }


  function getCol(index) {

    return index % cols;

  }


  function areAdjacent(
    first,
    second
  ) {

    const row1 =
      getRow(first);

    const col1 =
      getCol(first);

    const row2 =
      getRow(second);

    const col2 =
      getCol(second);


    return (
      Math.abs(
        row1 - row2
      ) +
      Math.abs(
        col1 - col2
      )
    ) === 1;

  }


  function swapCells(
    first,
    second
  ) {

    const temp =
      board[first];


    board[first] =
      board[second];


    board[second] =
      temp;

  }


  /* =====================================================
     TROUVER LES ALIGNEMENTS
  ====================================================== */

  function findMatches() {

    const matched =
      new Set();


    /* -------------------------
       HORIZONTAL
    ------------------------- */

    for (
      let row = 0;
      row < rows;
      row++
    ) {

      let start = 0;


      while (
        start < cols
      ) {

        const startIndex =
          row * cols +
          start;


        const symbolId =
          board[
            startIndex
          ].id;


        let end =
          start + 1;


        while (
          end < cols &&
          board[
            row * cols +
            end
          ].id === symbolId
        ) {

          end++;

        }


        const length =
          end - start;


        if (
          length >= 3
        ) {

          for (
            let col = start;
            col < end;
            col++
          ) {

            matched.add(
              row * cols +
              col
            );

          }

        }


        start =
          end;

      }

    }


    /* -------------------------
       VERTICAL
    ------------------------- */

    for (
      let col = 0;
      col < cols;
      col++
    ) {

      let start = 0;


      while (
        start < rows
      ) {

        const startIndex =
          start * cols +
          col;


        const symbolId =
          board[
            startIndex
          ].id;


        let end =
          start + 1;


        while (
          end < rows &&
          board[
            end * cols +
            col
          ].id === symbolId
        ) {

          end++;

        }


        const length =
          end - start;


        if (
          length >= 3
        ) {

          for (
            let row = start;
            row < end;
            row++
          ) {

            matched.add(
              row * cols +
              col
            );

          }

        }


        start =
          end;

      }

    }


    return Array.from(
      matched
    );

  }


  /* =====================================================
     VÉRIFIER QU'UN COUP EST POSSIBLE
  ====================================================== */

  function hasPossibleMove() {

    for (
      let index = 0;
      index < board.length;
      index++
    ) {

      const row =
        getRow(index);

      const col =
        getCol(index);


      const neighbours =
        [];


      if (
        col < cols - 1
      ) {

        neighbours.push(
          index + 1
        );

      }


      if (
        row < rows - 1
      ) {

        neighbours.push(
          index + cols
        );

      }


      for (
        const neighbour
        of neighbours
      ) {

        swapCells(
          index,
          neighbour
        );


        const match =
          findMatches()
            .length > 0;


        swapCells(
          index,
          neighbour
        );


        if (
          match
        ) {

          return true;

        }

      }

    }


    return false;

  }


  /* =====================================================
     CRÉER UNE GRILLE JOUABLE
  ====================================================== */

  function createBoard() {

    let attempts = 0;


    do {

      board = [];


      for (
        let index = 0;
        index < rows * cols;
        index++
      ) {

        board.push(
          randomSymbol()
        );

      }


      attempts++;


    } while (
      (
        findMatches().length > 0 ||
        !hasPossibleMove()
      ) &&
      attempts < 250
    );

  }


  /* =====================================================
     INTERFACE
  ====================================================== */

  challengeArea.innerHTML = `
    <div class="abyss-match-game">

      <div
        class="challenge-status"
        id="abyssMatchStatus"
      >
        Choisis une créature
      </div>


      <div class="abyss-match-info">

        <div>
          <span>
            Résonances
          </span>

          <strong id="abyssMatchScore">
            0 / ${requiredMatches}
          </strong>
        </div>


        <div>
          <span>
            Déplacements
          </span>

          <strong id="abyssMatchMoves">
            0 / ${maxMoves}
          </strong>
        </div>

      </div>


      <div
        class="abyss-match-grid"
        id="abyssMatchGrid"
      ></div>


      <div class="abyss-match-help">
        Touche une créature puis une créature voisine.
      </div>

    </div>
  `;


  const status =
    document.getElementById(
      "abyssMatchStatus"
    );


  const scoreElement =
    document.getElementById(
      "abyssMatchScore"
    );


  const movesElement =
    document.getElementById(
      "abyssMatchMoves"
    );


  const grid =
    document.getElementById(
      "abyssMatchGrid"
    );


  /* =====================================================
     AFFICHER LA GRILLE
  ====================================================== */

  function renderBoard() {

    if (
      !grid
    ) {

      return;

    }


    grid.innerHTML =
      board
        .map(
          (
            symbol,
            index
          ) => `

            <button
              type="button"
              class="
                abyss-match-cell
                abyss-match-${symbol.id}
                ${
                  selectedIndex === index
                    ? "selected"
                    : ""
                }
              "
              data-index="${index}"
              aria-label="${symbol.id}"
            >
              <span class="abyss-match-icon">
                ${symbol.icon}
              </span>
            </button>

          `
        )
        .join("");


    grid
      .querySelectorAll(
        ".abyss-match-cell"
      )
      .forEach(
        button => {

          button.addEventListener(
            "click",
            () => {

              handleCellClick(
                Number(
                  button.dataset.index
                )
              );

            }
          );

        }
      );

  }


  /* =====================================================
     SURBRILLANCE
  ====================================================== */

  function highlightMatches(
    matched
  ) {

    matched.forEach(
      index => {

        const cell =
          grid.querySelector(
            `[data-index="${index}"]`
          );


        if (
          cell
        ) {

          cell.classList.add(
            "matched"
          );

        }

      }
    );

  }


  /* =====================================================
     REMPLACER LES ALIGNEMENTS
  ====================================================== */

  function replaceMatchedSymbols(
    matched
  ) {

    matched.forEach(
      index => {

        board[index] =
          randomSymbol();

      }
    );


    let safety = 0;


    while (
      findMatches().length > 0 &&
      safety < 80
    ) {

      const automaticMatches =
        findMatches();


      automaticMatches.forEach(
        index => {

          board[index] =
            randomSymbol();

        }
      );


      safety++;

    }


    if (
      !hasPossibleMove()
    ) {

      createBoard();

    }

  }


  /* =====================================================
     CLIC JOUEUR
  ====================================================== */

  function handleCellClick(
    index
  ) {

    if (
      locked ||
      finished
    ) {

      return;

    }


    /* PREMIER CHOIX */

    if (
      selectedIndex === null
    ) {

      selectedIndex =
        index;


      status.textContent =
        "Choisis une créature voisine";


      renderBoard();


      return;

    }


    /* MÊME CASE */

    if (
      selectedIndex === index
    ) {

      selectedIndex =
        null;


      status.textContent =
        "Choisis une créature";


      renderBoard();


      return;

    }


    /* CASE NON VOISINE */

    if (
      !areAdjacent(
        selectedIndex,
        index
      )
    ) {

      selectedIndex =
        index;


      status.textContent =
        "Choisis une créature voisine";


      renderBoard();


      return;

    }


    const first =
      selectedIndex;


    const second =
      index;


    selectedIndex =
      null;


    locked =
      true;


    swapCells(
      first,
      second
    );


    renderBoard();


    const matched =
      findMatches();


    /* =====================================================
       PAS D'ALIGNEMENT
    ====================================================== */

    if (
      matched.length === 0
    ) {

      status.textContent =
        "Aucune résonance";


      setTimeout(
        () => {

          swapCells(
            first,
            second
          );


          renderBoard();


          status.textContent =
            "Essaie un autre déplacement";


          locked =
            false;

        },
        420
      );


      return;

    }


    /* =====================================================
       ALIGNEMENT RÉUSSI
    ====================================================== */

    moves++;

    matchesMade++;


    scoreElement.textContent =
      `${matchesMade} / ${requiredMatches}`;


    movesElement.textContent =
      `${moves} / ${maxMoves}`;


    status.textContent =
      "Résonance détectée";


    status.classList.add(
      "success"
    );


    highlightMatches(
      matched
    );


    /* =====================================================
       VICTOIRE
    ====================================================== */

    if (
      matchesMade >=
      requiredMatches
    ) {

      finished =
        true;


      setTimeout(
        () => {

          resolveChallenge(
            true,
            callback
          );

        },
        750
      );


      return;

    }


    /* =====================================================
       CONTINUER
    ====================================================== */

    setTimeout(
      () => {

        status
          .classList
          .remove(
            "success"
          );


        replaceMatchedSymbols(
          matched
        );


        renderBoard();


        if (
          moves >=
          maxMoves
        ) {

          finished =
            true;


          resolveChallenge(
            false,
            callback
          );


          return;

        }


        status.textContent =
          "Crée une nouvelle résonance";


        locked =
          false;

      },
      650
    );

  }


  /* =====================================================
     DÉMARRAGE
  ====================================================== */

  createBoard();

  renderBoard();

}

/* =========================================================
   5 — COURANT DES ABYSSES
========================================================= */

function challengeAbyssCurrent(
  hardMode = false,
  callback = null
) {

  challengeType.textContent =
    hardMode
      ? "Courant abyssal critique"
      : "Épreuve de navigation";


  challengeTitle.textContent =
    "Courant des Abysses";


  challengeInstructions.textContent =
    hardMode
      ? "Guide la créature jusqu'au Portail. Les courants sont plus rapides."
      : "Guide la créature jusqu'au Portail en évitant les dangers.";


  /* =====================================================
     CONFIGURATION
  ====================================================== */

  const lanes =
    3;


  const totalRows =
    hardMode
      ? 8
      : 7;


  const stepDelay =
    hardMode
      ? 650
      : 850;


  let creatureLane =
    1;


  let currentRow =
    totalRows - 1;


  let finished =
    false;


  let bonusCollected =
    false;


  let timer =
    null;


  /*
    Chaque ligne peut contenir :
    - hazard
    - bonus
    - rien

    Une seule case dangereuse par ligne,
    donc il reste toujours un passage.
  */

  const rows =
    [];


  const hazardTypes = [

    {
      type: "mine",
      image:
        "images/MiniJeu-Mine-Abyssale.PNG"
    },

    {
      type: "jelly",
      image:
        "images/MiniJeu-Meduse-Dangereuse.PNG"
    },

    {
      type: "vortex",
      image:
        "images/MiniJeu-Tourbillon-Abysses.PNG"
    }

  ];


  /* =====================================================
     CRÉER LE PARCOURS
  ====================================================== */

  function createCourse() {

    rows.length =
      0;


    for (
      let row = 0;
      row < totalRows;
      row++
    ) {

      rows.push({

        hazardLane:
          null,

        hazard:
          null,

        bonusLane:
          null

      });

    }


    /*
      Pas de danger sur la première ligne
      de départ ni sur la dernière ligne
      proche du Portail.
    */

    for (
      let row = 1;
      row < totalRows - 1;
      row++
    ) {

      const shouldHaveHazard =
        Math.random() <
        (
          hardMode
            ? 0.90
            : 0.78
        );


      if (
        shouldHaveHazard
      ) {

        rows[row].hazardLane =
          Math.floor(
            Math.random() *
            lanes
          );


        rows[row].hazard =
          hazardTypes[
            Math.floor(
              Math.random() *
              hazardTypes.length
            )
          ];

      }

    }


    /*
      PLACER UN CRISTAL BONUS
    */

    const bonusRow =
      Math.floor(
        Math.random() *
        (
          totalRows - 3
        )
      ) + 1;


    const forbiddenLane =
      rows[
        bonusRow
      ].hazardLane;


    const possibleBonusLanes =
      [
        0,
        1,
        2
      ]
        .filter(
          lane =>
            lane !==
            forbiddenLane
        );


    rows[
      bonusRow
    ].bonusLane =
      possibleBonusLanes[
        Math.floor(
          Math.random() *
          possibleBonusLanes.length
        )
      ];

  }


  /* =====================================================
     INTERFACE
  ====================================================== */

  challengeArea.innerHTML = `
    <div class="abyss-current-game">

      <div
        class="challenge-status"
        id="abyssCurrentStatus"
      >
        Le courant t'emporte vers le Portail…
      </div>


      <div
        class="abyss-current-board"
        id="abyssCurrentBoard"
      >

        <img
          src="images/MiniJeu-Courant-Abysses-Fond.PNG"
          alt=""
          class="abyss-current-background"
        >


        <div class="abyss-current-portal">

          <img
            src="images/MiniJeu-Portail-Abysses.PNG"
            alt="Portail des Abysses"
          >

        </div>


        <div
          class="abyss-current-grid"
          id="abyssCurrentGrid"
        ></div>


        <div
          class="abyss-current-creature"
          id="abyssCurrentCreature"
        >

          <img
            src="images/MiniJeu-Creature-Abysses.PNG"
            alt="Créature des Abysses"
          >

        </div>

      </div>


      <div class="abyss-current-progress">

        <span>
          Portail
        </span>

        <strong id="abyssCurrentProgress">
          0%
        </strong>

      </div>


      <div class="abyss-current-controls">

        <button
          type="button"
          class="abyss-current-control"
          id="abyssCurrentLeft"
          aria-label="Déplacer la créature vers la gauche"
        >
          ←
        </button>


        <button
          type="button"
          class="abyss-current-control"
          id="abyssCurrentRight"
          aria-label="Déplacer la créature vers la droite"
        >
          →
        </button>

      </div>


      <div class="abyss-current-help">
        Déplace la créature avant qu'elle n'atteigne le prochain danger.
      </div>

    </div>
  `;


  const status =
    document.getElementById(
      "abyssCurrentStatus"
    );


  const board =
    document.getElementById(
      "abyssCurrentBoard"
    );


  const grid =
    document.getElementById(
      "abyssCurrentGrid"
    );


  const creature =
    document.getElementById(
      "abyssCurrentCreature"
    );


  const progress =
    document.getElementById(
      "abyssCurrentProgress"
    );


  const leftButton =
    document.getElementById(
      "abyssCurrentLeft"
    );


  const rightButton =
    document.getElementById(
      "abyssCurrentRight"
    );


  /* =====================================================
     AFFICHAGE DU PARCOURS
  ====================================================== */

  function renderCourse() {

    let html =
      "";


    for (
      let row = 0;
      row < totalRows;
      row++
    ) {

      for (
        let lane = 0;
        lane < lanes;
        lane++
      ) {

        let content =
          "";


        /*
          DANGER
        */

        if (
          rows[row].hazardLane ===
          lane
        ) {

          content += `
            <img
              src="${rows[row].hazard.image}"
              alt=""
              class="
                abyss-current-object
                abyss-current-hazard
                abyss-current-${rows[row].hazard.type}
              "
            >
          `;

        }


        /*
          CRISTAL BONUS
        */

        if (
          rows[row].bonusLane ===
          lane
        ) {

          content += `
            <img
              src="images/MiniJeu-Cristal-Bonus.PNG"
              alt="Cristal bonus"
              class="
                abyss-current-object
                abyss-current-bonus
              "
            >
          `;

        }


        html += `
          <div
            class="abyss-current-cell"
            data-row="${row}"
            data-lane="${lane}"
          >
            ${content}
          </div>
        `;

      }

    }


    grid.innerHTML =
      html;

  }


  /* =====================================================
     POSITIONNER LA CRÉATURE
  ====================================================== */

  function updateCreaturePosition() {

    if (
      !creature
    ) {

      return;

    }


    const laneWidth =
      100 / lanes;


    const left =
      creatureLane *
      laneWidth +
      laneWidth / 2;


    const travelledRows =
      (
        totalRows - 1
      ) -
      currentRow;


    const maxTravel =
      totalRows - 1;


    const percentTravelled =
      travelledRows /
      maxTravel;


    const bottom =
      5 +
      percentTravelled *
      76;


    creature.style.left =
      `${left}%`;


    creature.style.bottom =
      `${bottom}%`;


    progress.textContent =
      `${
        Math.round(
          percentTravelled *
          100
        )
      }%`;

  }


  /* =====================================================
     DÉPLACEMENT GAUCHE / DROITE
  ====================================================== */

  function moveLeft() {

    if (
      finished
    ) {

      return;

    }


    if (
      creatureLane > 0
    ) {

      creatureLane--;

      updateCreaturePosition();

    }

  }


  function moveRight() {

    if (
      finished
    ) {

      return;

    }


    if (
      creatureLane <
      lanes - 1
    ) {

      creatureLane++;

      updateCreaturePosition();

    }

  }


  leftButton.addEventListener(
    "click",
    moveLeft
  );


  rightButton.addEventListener(
    "click",
    moveRight
  );


  /* =====================================================
     FIN DU JEU
  ====================================================== */

  function finishGame(
    success
  ) {

    if (
      finished
    ) {

      return;

    }


    finished =
      true;


    if (
      timer
    ) {

      clearInterval(
        timer
      );

    }


    leftButton.disabled =
      true;


    rightButton.disabled =
      true;


    if (
      success
    ) {

      status.textContent =
        bonusCollected
          ? "Portail atteint • Cristal récupéré"
          : "Portail atteint";


      status.classList.add(
        "success"
      );


      /*
        Le cristal bonus donne
        quelques cristaux pendant
        une Ascension normale.
      */

      if (
        bonusCollected &&
        run.active
      ) {

        addRunCrystals(
          3
        );


        showToast(
          "+3 cristaux bonus"
        );

      }


      setTimeout(
        () => {

          resolveChallenge(
            true,
            callback
          );

        },
        700
      );

    }

    else {

      status.textContent =
        "La créature a heurté un danger";


      status.classList.add(
        "fail"
      );


      creature.classList.add(
        "hit"
      );


      setTimeout(
        () => {

          resolveChallenge(
            false,
            callback
          );

        },
        700
      );

    }

  }


  /* =====================================================
     VÉRIFIER LA CASE ACTUELLE
  ====================================================== */

  function checkCurrentCell() {

    const rowData =
      rows[
        currentRow
      ];


    if (
      !rowData
    ) {

      return;

    }


    /*
      DANGER
    */

    if (
      rowData.hazardLane ===
      creatureLane
    ) {

      finishGame(
        false
      );


      return;

    }


    /*
      CRISTAL BONUS
    */

    if (
      rowData.bonusLane ===
      creatureLane
    ) {

      bonusCollected =
        true;


      rowData.bonusLane =
        null;


      status.textContent =
        "Cristal bonus récupéré ✦";


      renderCourse();

    }

  }


  /* =====================================================
     MONTÉE AUTOMATIQUE
  ====================================================== */

  function ascendOneStep() {

    if (
      finished
    ) {

      return;

    }


    currentRow--;


    /*
      PORTAIL ATTEINT
    */

    if (
      currentRow < 0
    ) {

      currentRow =
        0;


      updateCreaturePosition();


      finishGame(
        true
      );


      return;

    }


    updateCreaturePosition();


    checkCurrentCell();

  }


  /* =====================================================
     DÉMARRAGE
  ====================================================== */

  createCourse();

  renderCourse();

  updateCreaturePosition();


  /*
    Petit délai avant le départ
    pour laisser le joueur observer.
  */

  status.textContent =
    hardMode
      ? "Prépare-toi… le courant est puissant"
      : "Prépare-toi…";


  setTimeout(
    () => {

      if (
        finished
      ) {

        return;

      }


      status.textContent =
        "Remonte vers le Portail";


      timer =
        setInterval(
          ascendOneStep,
          stepDelay
        );

    },
    1100
  );

}
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

let history = [];

let currentXP = 0;

let totalPermanentCrystals = 0;

let collection = [];

let ascensionLevel = 1;

let currentWorld = 1;
  let dailyRewards = {

  reward30Claimed:
    false,

  reward50Claimed:
    false

};


/*
  Indique qu'une épreuve est lancée
  depuis le palier bonus de 50 XP
  et non depuis l'Ascension.
*/

let bonusChallengeActive =
  false; 

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

loadHistory();

checkDailyReset();

loadDailyHabits();

loadDailyRewards();

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
   HISTORIQUE ALIMENTAIRE
========================================================= */

function loadHistory() {

  try {

    history =
      JSON.parse(
        localStorage.getItem(
          STORAGE.history
        ) || "[]"
      );


    if (
      !Array.isArray(
        history
      )
    ) {

      history = [];

    }

  }

  catch {

    history = [];

  }

}


function saveHistory() {

  /*
    On conserve les 90 journées
    les plus récentes.
  */

  history =
    history
      .slice(-90);


  localStorage.setItem(
    STORAGE.history,
    JSON.stringify(
      history
    )
  );

}


/* =========================================================
   CALCUL XP D'UNE JOURNÉE ARCHIVÉE
========================================================= */

function calculateXPFromHabits(
  habitData
) {

  let xp = 0;


  Object
    .values(
      habitData || {}
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
   ARCHIVER LA JOURNÉE PRÉCÉDENTE
========================================================= */

function archivePreviousDay(
  dateKey
) {

  if (
    !dateKey
  ) {

    return;

  }


  let previousHabits =
    {};


  try {

    previousHabits =
      JSON.parse(
        localStorage.getItem(
          STORAGE.habits
        ) || "{}"
      );

  }

  catch {

    previousHabits =
      {};

  }


  const completedHabits =
    Object.keys(
      previousHabits
    ).length;


  /*
    Si aucun critère n'a été rempli,
    on n'enregistre pas une fausse
    journée à 0 XP.
  */

  if (
    completedHabits === 0
  ) {

    return;

  }


  const xp =
    calculateXPFromHabits(
      previousHabits
    );


  /*
    Empêche d'enregistrer deux fois
    la même date.
  */

  history =
    history.filter(
      day =>
        day.date !== dateKey
    );


  history.push({

    date:
      dateKey,

    xp:
      xp,

    completedHabits:
      completedHabits,

    portalReached:
      xp >= 70,

    habits: {
      ...previousHabits
    }

  });


  /*
    Classement chronologique.
  */

  history.sort(
    (
      a,
      b
    ) =>
      a.date.localeCompare(
        b.date
      )
  );


  saveHistory();

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


  /*
    PREMIÈRE UTILISATION
  */

  if (
    !savedDate
  ) {

    localStorage.setItem(
      STORAGE.dayDate,
      today
    );


    return;

  }


  /*
    NOUVELLE JOURNÉE
  */

  if (
    savedDate !== today
  ) {

    /*
      Avant d'effacer la journée,
      on la conserve dans l'historique.
    */

    archivePreviousDay(
      savedDate
    );


    habits = {};


    dailyRewards = {

      reward30Claimed:
        false,

      reward50Claimed:
        false

    };


    localStorage.setItem(
      STORAGE.dayDate,
      today
    );


    localStorage.setItem(
      STORAGE.habits,
      JSON.stringify({})
    );


    localStorage.setItem(
      STORAGE.dailyRewards,
      JSON.stringify(
        dailyRewards
      )
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
   RÉCOMPENSES QUOTIDIENNES
========================================================= */

function loadDailyRewards() {

  try {

    const saved =
      JSON.parse(
        localStorage.getItem(
          STORAGE.dailyRewards
        ) || "{}"
      );


    dailyRewards = {

      reward30Claimed:
        Boolean(
          saved.reward30Claimed
        ),

      reward50Claimed:
        Boolean(
          saved.reward50Claimed
        )

    };

  }

  catch {

    dailyRewards = {

      reward30Claimed:
        false,

      reward50Claimed:
        false

    };

  }

}


function saveDailyRewards() {

  localStorage.setItem(
    STORAGE.dailyRewards,
    JSON.stringify(
      dailyRewards
    )
  );

}


/* =========================================================
   PALIER 30 XP — FRAGMENT D'ÉNERGIE
========================================================= */

function claimEnergyFragment() {

  if (
    currentXP < 30 ||
    dailyRewards.reward30Claimed
  ) {

    return;

  }


  dailyRewards.reward30Claimed =
    true;


  collection.push({

    name:
      "Fragment d'énergie",

    type:
      "Fragment",

    icon:
      "✦",

    rarity:
      "common",

    obtainedAt:
      new Date()
        .toISOString()

  });


  saveDailyRewards();

  savePermanentData();


  updateRewardTrack();

  updateSanctuary();


  showToast(
    "✦ Fragment d'énergie récupéré"
  );

}


/* =========================================================
   PALIER 50 XP — ÉPREUVE BONUS
========================================================= */

function startDailyBonusChallenge() {

  if (
    currentXP < 50 ||
    dailyRewards.reward50Claimed
  ) {

    return;

  }


  /*
    L'épreuve est consommée
    au moment où elle commence.
  */

  dailyRewards.reward50Claimed =
    true;


  saveDailyRewards();


  updateRewardTrack();


  bonusChallengeActive =
    true;


  startRandomChallenge(
    false,
    success => {

      bonusChallengeActive =
        false;


      if (
        success
      ) {

        const bonus =
          5;


        totalPermanentCrystals +=
          bonus;


        savePermanentData();

        updateSanctuary();


        showToast(
          `✦ Épreuve bonus réussie : +${bonus} cristaux`
        );

      }

      else {

        showToast(
          "Épreuve bonus manquée — aucune pénalité"
        );

      }

    }
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


        /*
          RESET
        */

        step.classList.remove(
          "unlocked",
          "claimable",
          "claimed"
        );


        step.onclick =
          null;


        step.removeAttribute(
          "role"
        );


        step.removeAttribute(
          "tabindex"
        );


        step.style.cursor =
          "";


        /*
          PAS ENCORE DÉBLOQUÉ
        */

        if (
          currentXP < threshold
        ) {

          state.textContent =
            "Verrouillé";


          return;

        }


        step.classList.add(
          "unlocked"
        );


        /* =================================================
           PALIER 30 XP
        ================================================= */

        if (
          threshold === 30
        ) {

          if (
            dailyRewards.reward30Claimed
          ) {

            step.classList.add(
              "claimed"
            );


            state.textContent =
              "Récupéré";


            return;

          }


          step.classList.add(
            "claimable"
          );


          state.textContent =
            "Récupérer";


          step.style.cursor =
            "pointer";


          step.setAttribute(
            "role",
            "button"
          );


          step.setAttribute(
            "tabindex",
            "0"
          );


          step.onclick =
            claimEnergyFragment;


          step.onkeydown =
            event => {

              if (
                event.key === "Enter" ||
                event.key === " "
              ) {

                event.preventDefault();

                claimEnergyFragment();

              }

            };


          return;

        }


        /* =================================================
           PALIER 50 XP
        ================================================= */

        if (
          threshold === 50
        ) {

          if (
            dailyRewards.reward50Claimed
          ) {

            step.classList.add(
              "claimed"
            );


            state.textContent =
              "Terminé";


            return;

          }


          step.classList.add(
            "claimable"
          );


          state.textContent =
            "Jouer";


          step.style.cursor =
            "pointer";


          step.setAttribute(
            "role",
            "button"
          );


          step.setAttribute(
            "tabindex",
            "0"
          );


          step.onclick =
            startDailyBonusChallenge;


          step.onkeydown =
            event => {

              if (
                event.key === "Enter" ||
                event.key === " "
              ) {

                event.preventDefault();

                startDailyBonusChallenge();

              }

            };


          return;

        }


        /*
          AUTRES PALIERS :
          70 / 80 / 90 / 100
        */

        state.textContent =
          "Débloqué";

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
   RÉSOLUTION ÉPREUVE
========================================================= */

function resolveChallenge(
  success,
  callback = null
) {

  if (
    !challengeContinueBtn
  ) {

    return;

  }


  /*
    On mémorise immédiatement
    le type d'épreuve en cours.
  */

  const isBonusChallenge =
    bonusChallengeActive;


  challengeContinueBtn
    .classList
    .remove(
      "hidden"
    );


  /* =====================================================
     RÉUSSITE
  ====================================================== */

  if (
    success
  ) {

    challengeType.textContent =
      isBonusChallenge
        ? "Épreuve bonus réussie"
        : "Épreuve réussie";


    challengeTitle.textContent =
      "Résonance stabilisée";


    challengeInstructions.textContent =
      isBonusChallenge
        ? "Le NEXUS libère une récompense supplémentaire."
        : "Le NEXUS reconnaît ta maîtrise.";


    challengeArea.innerHTML = `
      <div
        class="challenge-result success"
      >

        <div
          class="challenge-result-symbol"
        >
          ✦
        </div>

        <strong>
          ${
            isBonusChallenge
              ? "Bonus réussi"
              : "Épreuve réussie"
          }
        </strong>

        <p>
          ${
            isBonusChallenge
              ? "Une énergie supplémentaire a été libérée."
              : "Le passage reste parfaitement stable."
          }
        </p>

      </div>
    `;

  }


  /* =====================================================
     ÉCHEC
  ====================================================== */

  else {

    challengeType.textContent =
      isBonusChallenge
        ? "Épreuve bonus manquée"
        : "Épreuve manquée";


    challengeTitle.textContent =
      isBonusChallenge
        ? "La résonance s'est dissipée"
        : "La résonance vacille";


    challengeInstructions.textContent =
      isBonusChallenge
        ? "Aucune pénalité : demain offrira une nouvelle tentative."
        : "Le Portail absorbe le choc.";


    challengeArea.innerHTML = `
      <div
        class="challenge-result fail"
      >

        <div
          class="challenge-result-symbol"
        >
          ◇
        </div>

        <strong>
          ${
            isBonusChallenge
              ? "Bonus manqué"
              : "Épreuve manquée"
          }
        </strong>

        <p>
          ${
            isBonusChallenge
              ? "Aucune stabilité n'est perdue."
              : "La stabilité du passage est mise à l'épreuve."
          }
        </p>

      </div>
    `;


    /*
      Une épreuve bonus ne touche JAMAIS
      à la stabilité de l'Ascension.
    */

    if (
      !isBonusChallenge
    ) {

      loseStability();

    }

  }


  /* =====================================================
     CONTINUER
  ====================================================== */

  challengeContinueBtn.onclick =
    () => {

      challengeContinueBtn.onclick =
        null;


      challengeOverlay
        .classList
        .add(
          "hidden"
        );


      /*
        CAS SPÉCIAL :
        ÉPREUVE BONUS DE 50 XP
      */

      if (
        isBonusChallenge
      ) {

        bonusChallengeActive =
          false;


        if (
          typeof callback ===
          "function"
        ) {

          callback(
            success
          );

        }


        return;

      }


      /*
        ASCENSION NORMALE
      */

      if (
        run.stability <= 0
      ) {

        return;

      }


      if (
        typeof callback ===
        "function"
      ) {

        callback(
          success
        );


        return;

      }


      nextStep();

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
     MOUSSE LUMINEUSE
  ====================================================== */

  if (
    name.includes(
      "mousse lumineuse"
    )
  ) {

    return `
      <img
        src="images/Objet-Mousse-Lumineuse.PNG"
        alt="Mousse lumineuse"
        class="collection-object-image"
      >
    `;

  }


  /* =====================================================
     FRAGMENT MARIN
  ====================================================== */

  if (
    name.includes(
      "fragment marin"
    )
  ) {

    return `
      <img
        src="images/Objet-Fragment-Marin.PNG"
        alt="Fragment marin"
        class="collection-object-image"
      >
    `;

  }


  /* =====================================================
     CORAIL SPECTRAL
  ====================================================== */

  if (
    name.includes(
      "corail spectral"
    )
  ) {

    return `
      <img
        src="images/Objet-Corail-Spectral.PNG"
        alt="Corail spectral"
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
     ORBE DU PASSAGE
  ====================================================== */

  if (
    name.includes(
      "orbe du passage"
    )
  ) {

    return `
      <img
        src="images/Objet-Orbe-Passage.PNG"
        alt="Orbe du Passage"
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
     ARBRE DE LUMIÈRE
  ====================================================== */

  if (
    name.includes(
      "arbre de lumière"
    ) ||
    name.includes(
      "arbre de lumiere"
    )
  ) {

    return `
      <img
        src="images/Objet-Arbre-Lumiere.PNG"
        alt="Arbre de lumière"
        class="collection-object-image"
      >
    `;

  }


  /* =====================================================
     CŒUR DU NEXUS
  ====================================================== */

  if (
    name.includes(
      "cœur du nexus"
    ) ||
    name.includes(
      "coeur du nexus"
    )
  ) {

    return `
      <img
        src="images/Objet-Coeur-Nexus.PNG"
        alt="Cœur du NEXUS"
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
     VISUEL GÉNÉRIQUE DE SÉCURITÉ
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
dailyRewards = {

  reward30Claimed:
    false,

  reward50Claimed:
    false

};


bonusChallengeActive =
  false;

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
