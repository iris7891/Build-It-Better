const materials = {
  steel: {
    name: "Steel",
    strength: 10,
    lightness: 3,
    stiffness: 9,
    flexibility: 2,
    cost: 6,
    sustainability: 5,
    explanation: "Steel is very strong and stiff, but it is heavy.",
    realDataNote: "Steel usually has high strength and stiffness, but its density is much higher than materials like aluminum or wood."
  },
  aluminum: {
    name: "Aluminum",
    strength: 7,
    lightness: 8,
    stiffness: 6,
    flexibility: 3,
    cost: 5,
    sustainability: 6,
    explanation: "Aluminum is strong for its weight, so engineers use it when lightness matters.",
    realDataNote: "Aluminum has lower density than steel, which makes it useful in bikes, airplanes, and lightweight structures."
  },
  wood: {
    name: "Wood",
    strength: 5,
    lightness: 7,
    stiffness: 5,
    flexibility: 4,
    cost: 8,
    sustainability: 8,
    explanation: "Wood is light, affordable, and useful for many structures.",
    realDataNote: "Wood is a natural material with moderate strength, low density, and relatively good sustainability."
  },
  plastic: {
    name: "Plastic",
    strength: 3,
    lightness: 9,
    stiffness: 2,
    flexibility: 7,
    cost: 9,
    sustainability: 3,
    explanation: "Plastic is light and cheap, but usually not as strong as metal.",
    realDataNote: "Many plastics have low density and low cost, but they often have lower stiffness and strength than metals."
  },
  rubber: {
    name: "Rubber",
    strength: 2,
    lightness: 6,
    stiffness: 1,
    flexibility: 10,
    cost: 7,
    sustainability: 4,
    explanation: "Rubber is flexible and absorbs bumps, but it is not good for stiff structures.",
    realDataNote: "Rubber is useful when flexibility and impact absorption matter more than stiffness."
  },
  bamboo: {
    name: "Bamboo",
    strength: 6,
    lightness: 8,
    stiffness: 5,
    flexibility: 5,
    cost: 8,
    sustainability: 9,
    explanation: "Bamboo is light, fairly strong, and renewable.",
    realDataNote: "Bamboo is renewable and lightweight, making it useful for sustainable design examples."
  },
  concrete: {
    name: "Concrete",
    strength: 8,
    lightness: 1,
    stiffness: 8,
    flexibility: 1,
    cost: 7,
    sustainability: 4,
    explanation: "Concrete is strong in compression, but very heavy.",
    realDataNote: "Concrete is strong when squeezed, which is called compression, but it is heavy and not flexible."
  },
  cardboard: {
    name: "Cardboard",
    strength: 2,
    lightness: 10,
    stiffness: 2,
    flexibility: 5,
    cost: 10,
    sustainability: 7,
    explanation: "Cardboard is very light and cheap, but it is not very strong.",
    realDataNote: "Cardboard is useful for prototypes because it is inexpensive, lightweight, and easy to cut."
  },
  carbonfiber: {
    name: "Carbon Fiber",
    strength: 9,
    lightness: 9,
    stiffness: 8,
    flexibility: 3,
    cost: 2,
    sustainability: 4,
    explanation: "Carbon fiber is very strong and light, but expensive.",
    realDataNote: "Carbon fiber has excellent strength-to-weight performance, but it is costly and harder to recycle."
  }
};

const missions = {
  bridge: {
    name: "Build a Bridge",
    description: "A bridge needs to be strong and stiff so it does not break or bend too much.",
    weights: { strength: 9, lightness: 4, stiffness: 9, flexibility: 1, cost: 5, sustainability: 4 },
    checklist: {
      strength: 6,
      stiffness: 6,
      cost: 4
    }
  },
  phone: {
    name: "Design a Phone Case",
    description: "A phone case should be light, flexible, and able to absorb bumps.",
    weights: { strength: 5, lightness: 7, stiffness: 2, flexibility: 9, cost: 6, sustainability: 4 },
    checklist: {
      flexibility: 6,
      lightness: 6,
      cost: 4
    }
  },
  toycar: {
    name: "Build a Toy Car",
    description: "A toy car should be light, affordable, and strong enough to survive play.",
    weights: { strength: 5, lightness: 8, stiffness: 4, flexibility: 3, cost: 8, sustainability: 5 },
    checklist: {
      lightness: 6,
      cost: 6,
      strength: 4
    }
  },
  bike: {
    name: "Design a Bike Frame",
    description: "A bike frame needs to be strong and lightweight.",
    weights: { strength: 8, lightness: 9, stiffness: 7, flexibility: 2, cost: 4, sustainability: 4 },
    checklist: {
      strength: 6,
      lightness: 6,
      stiffness: 5
    }
  },
  playground: {
    name: "Design a Playground Slide",
    description: "A playground slide should be safe, strong, smooth, and affordable.",
    weights: { strength: 8, lightness: 3, stiffness: 6, flexibility: 4, cost: 6, sustainability: 6 },
    checklist: {
      strength: 6,
      stiffness: 5,
      cost: 4
    }
  }
};

const missionSelect = document.getElementById("missionSelect");
const materialSelect = document.getElementById("materialSelect");
const missionDescription = document.getElementById("missionDescription");
const testButton = document.getElementById("testButton");
const resultBox = document.getElementById("resultBox");

const recommendButton = document.getElementById("recommendButton");
const recommendBox = document.getElementById("recommendBox");

const compareA = document.getElementById("compareA");
const compareB = document.getElementById("compareB");
const compareButton = document.getElementById("compareButton");
const compareBox = document.getElementById("compareBox");

const modeSelect = document.getElementById("modeSelect");

const sliders = {
  strength: document.getElementById("strengthSlider"),
  lightness: document.getElementById("lightnessSlider"),
  stiffness: document.getElementById("stiffnessSlider"),
  flexibility: document.getElementById("flexibilitySlider"),
  cost: document.getElementById("costSlider"),
  sustainability: document.getElementById("sustainabilitySlider")
};

const values = {
  strength: document.getElementById("strengthValue"),
  lightness: document.getElementById("lightnessValue"),
  stiffness: document.getElementById("stiffnessValue"),
  flexibility: document.getElementById("flexibilityValue"),
  cost: document.getElementById("costValue"),
  sustainability: document.getElementById("sustainabilityValue")
};

function loadMaterialDropdowns() {
  for (const key in materials) {
    const option1 = document.createElement("option");
    option1.value = key;
    option1.textContent = materials[key].name;
    materialSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = key;
    option2.textContent = materials[key].name;
    compareA.appendChild(option2);

    const option3 = document.createElement("option");
    option3.value = key;
    option3.textContent = materials[key].name;
    compareB.appendChild(option3);
  }

  materialSelect.value = "plastic";
  compareA.value = "steel";
  compareB.value = "aluminum";
}

function updateMission() {
  const mission = missions[missionSelect.value];
  missionDescription.textContent = mission.description;

  for (const property in mission.weights) {
    sliders[property].value = mission.weights[property];
    values[property].textContent = mission.weights[property];
  }
}

function updateSliderValues() {
  for (const property in sliders) {
    values[property].textContent = sliders[property].value;
  }
}

function getCurrentWeights() {
  return {
    strength: Number(sliders.strength.value),
    lightness: Number(sliders.lightness.value),
    stiffness: Number(sliders.stiffness.value),
    flexibility: Number(sliders.flexibility.value),
    cost: Number(sliders.cost.value),
    sustainability: Number(sliders.sustainability.value)
  };
}

function calculateScore(material, weights) {
  let total = 0;
  let maxTotal = 0;

  for (const property in weights) {
    total += material[property] * weights[property];
    maxTotal += 10 * weights[property];
  }

  if (maxTotal === 0) {
    return 0;
  }

  return Math.round((total / maxTotal) * 100);
}

function getScoreMessage(score) {
  if (score >= 80) {
    return "Your design passed. This material is a strong match for your mission.";
  } else if (score >= 60) {
    return "Your design is okay, but it could be improved. Try changing the material or priorities.";
  } else {
    return "Your design needs work. Try choosing a different material.";
  }
}

function createChecklist(material, mission) {
  let html = `<div class="checklist"><h3>Design Checklist</h3>`;

  for (const property in mission.checklist) {
    const neededScore = mission.checklist[property];
    const materialScore = material[property];

    if (materialScore >= neededScore) {
      html += `<div class="check-item pass">✓ ${capitalize(property)} passed: ${materialScore}/10</div>`;
    } else {
      html += `<div class="check-item fail">✗ ${capitalize(property)} needs improvement: ${materialScore}/10</div>`;
    }
  }

  html += `</div>`;
  return html;
}

function createTradeoffExplanation(material, missionName, score) {
  const strongestProperties = getTopProperties(material);
  const weakestProperties = getWeakProperties(material);

  return `
    <div class="tradeoff-box">
      <h3>Engineering Tradeoffs</h3>
      <p>
        Engineers rarely choose a material because it is perfect at everything.
        They choose the material that best fits the job.
      </p>
      <p>
        For <strong>${missionName}</strong>, <strong>${material.name}</strong> scored ${score}/100.
        Its strongest areas are <strong>${strongestProperties.join(", ")}</strong>.
        Its weaker areas are <strong>${weakestProperties.join(", ")}</strong>.
      </p>
    </div>
  `;
}

function createEngineerDetails(material, weights) {
  let html = `
    <div class="engineer-details">
      <h3>Engineer Mode Details</h3>
      <p class="small-note">
        These 1–10 scores are simplified versions of real engineering ideas.
        Strength relates to how much force a material can handle.
        Lightness relates to density.
        Stiffness relates to how much a material resists bending.
        Cost and sustainability are simplified comparison scores.
      </p>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Material Score</th>
          <th>Importance Weight</th>
        </tr>
  `;

  for (const property in weights) {
    html += `
      <tr>
        <td>${capitalize(property)}</td>
        <td>${material[property]}/10</td>
        <td>${weights[property]}/10</td>
      </tr>
    `;
  }

  html += `
      </table>
      <p><strong>Data note:</strong> ${material.realDataNote}</p>
    </div>
  `;

  return html;
}

function testDesign() {
  const selectedMaterial = materials[materialSelect.value];
  const selectedMission = missions[missionSelect.value];
  const weights = getCurrentWeights();
  const score = calculateScore(selectedMaterial, weights);
  const message = getScoreMessage(score);

  let html = `
    <p class="score">${score}/100</p>
    <h3>${message}</h3>
    <p><strong>Mission:</strong> ${selectedMission.name}</p>
    <p><strong>Material:</strong> ${selectedMaterial.name}</p>
    <p><strong>Why?</strong> ${selectedMaterial.explanation}</p>
    ${createChecklist(selectedMaterial, selectedMission)}
    ${createTradeoffExplanation(selectedMaterial, selectedMission.name, score)}
  `;

  if (modeSelect.value === "engineer") {
    html += createEngineerDetails(selectedMaterial, weights);
  }

  resultBox.style.display = "block";
  resultBox.innerHTML = html;
}

function findBestMaterial() {
  const weights = getCurrentWeights();
  let bestMaterial = null;
  let bestScore = -1;

  for (const key in materials) {
    const score = calculateScore(materials[key], weights);

    if (score > bestScore) {
      bestScore = score;
      bestMaterial = materials[key];
    }
  }

  recommendBox.innerHTML = `
    <div class="recommendation">
      <h3>Best Match: ${bestMaterial.name}</h3>
      <p class="score">${bestScore}/100</p>
      <p>${bestMaterial.explanation}</p>
      <p>
        This recommendation is based on the mission priorities and the slider values you selected.
      </p>
    </div>
  `;
}

function compareMaterials() {
  const materialA = materials[compareA.value];
  const materialB = materials[compareB.value];
  const weights = getCurrentWeights();

  const scoreA = calculateScore(materialA, weights);
  const scoreB = calculateScore(materialB, weights);

  let winner = "Tie";

  if (scoreA > scoreB) {
    winner = materialA.name;
  } else if (scoreB > scoreA) {
    winner = materialB.name;
  }

  compareBox.innerHTML = `
    <table class="comparison-table">
      <tr>
        <th>Property</th>
        <th>${materialA.name}</th>
        <th>${materialB.name}</th>
      </tr>
      <tr>
        <td>Strength</td>
        <td>${materialA.strength}/10</td>
        <td>${materialB.strength}/10</td>
      </tr>
      <tr>
        <td>Lightness</td>
        <td>${materialA.lightness}/10</td>
        <td>${materialB.lightness}/10</td>
      </tr>
      <tr>
        <td>Stiffness</td>
        <td>${materialA.stiffness}/10</td>
        <td>${materialB.stiffness}/10</td>
      </tr>
      <tr>
        <td>Flexibility</td>
        <td>${materialA.flexibility}/10</td>
        <td>${materialB.flexibility}/10</td>
      </tr>
      <tr>
        <td>Cost</td>
        <td>${materialA.cost}/10</td>
        <td>${materialB.cost}/10</td>
      </tr>
      <tr>
        <td>Sustainability</td>
        <td>${materialA.sustainability}/10</td>
        <td>${materialB.sustainability}/10</td>
      </tr>
      <tr>
        <th>Overall Score</th>
        <th>${scoreA}/100</th>
        <th>${scoreB}/100</th>
      </tr>
    </table>

    <div class="tradeoff-box">
      <h3>Comparison Result</h3>
      <p><strong>Winner for this mission:</strong> ${winner}</p>
      <p>
        ${materialA.name} explanation: ${materialA.explanation}
      </p>
      <p>
        ${materialB.name} explanation: ${materialB.explanation}
      </p>
    </div>
  `;
}

function getTopProperties(material) {
  const properties = ["strength", "lightness", "stiffness", "flexibility", "cost", "sustainability"];

  return properties
    .filter(property => material[property] >= 8)
    .map(property => capitalize(property));
}

function getWeakProperties(material) {
  const properties = ["strength", "lightness", "stiffness", "flexibility", "cost", "sustainability"];

  const weak = properties
    .filter(property => material[property] <= 3)
    .map(property => capitalize(property));

  if (weak.length === 0) {
    return ["no major weaknesses"];
  }

  return weak;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

missionSelect.addEventListener("change", updateMission);
testButton.addEventListener("click", testDesign);
recommendButton.addEventListener("click", findBestMaterial);
compareButton.addEventListener("click", compareMaterials);

for (const property in sliders) {
  sliders[property].addEventListener("input", updateSliderValues);
}

loadMaterialDropdowns();
updateMission();
