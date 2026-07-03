const materials = {
  steel: {
    name: "Steel",
    strength: 10,
    lightness: 3,
    stiffness: 9,
    flexibility: 2,
    cost: 6,
    sustainability: 5,
    explanation: "Steel is very strong and stiff, but it is heavy."
  },
  aluminum: {
    name: "Aluminum",
    strength: 7,
    lightness: 8,
    stiffness: 6,
    flexibility: 3,
    cost: 5,
    sustainability: 6,
    explanation: "Aluminum is strong for its weight, so engineers use it when lightness matters."
  },
  wood: {
    name: "Wood",
    strength: 5,
    lightness: 7,
    stiffness: 5,
    flexibility: 4,
    cost: 8,
    sustainability: 8,
    explanation: "Wood is light, affordable, and useful for many structures."
  },
  plastic: {
    name: "Plastic",
    strength: 3,
    lightness: 9,
    stiffness: 2,
    flexibility: 7,
    cost: 9,
    sustainability: 3,
    explanation: "Plastic is light and cheap, but usually not as strong as metal."
  },
  rubber: {
    name: "Rubber",
    strength: 2,
    lightness: 6,
    stiffness: 1,
    flexibility: 10,
    cost: 7,
    sustainability: 4,
    explanation: "Rubber is flexible and absorbs bumps, but it is not good for stiff structures."
  },
  bamboo: {
    name: "Bamboo",
    strength: 6,
    lightness: 8,
    stiffness: 5,
    flexibility: 5,
    cost: 8,
    sustainability: 9,
    explanation: "Bamboo is light, fairly strong, and renewable."
  },
  concrete: {
    name: "Concrete",
    strength: 8,
    lightness: 1,
    stiffness: 8,
    flexibility: 1,
    cost: 7,
    sustainability: 4,
    explanation: "Concrete is strong in compression, but very heavy."
  },
  carbonfiber: {
    name: "Carbon Fiber",
    strength: 9,
    lightness: 9,
    stiffness: 8,
    flexibility: 3,
    cost: 2,
    sustainability: 4,
    explanation: "Carbon fiber is very strong and light, but expensive."
  }
};

const missions = {
  bridge: {
    description: "A bridge needs to be strong and stiff so it does not break or bend too much.",
    weights: { strength: 9, lightness: 4, stiffness: 9, flexibility: 1, cost: 5, sustainability: 4 }
  },
  phone: {
    description: "A phone case should be light, flexible, and able to absorb bumps.",
    weights: { strength: 5, lightness: 7, stiffness: 2, flexibility: 9, cost: 6, sustainability: 4 }
  },
  toycar: {
    description: "A toy car should be light, affordable, and strong enough to survive play.",
    weights: { strength: 5, lightness: 8, stiffness: 4, flexibility: 3, cost: 8, sustainability: 5 }
  },
  bike: {
    description: "A bike frame needs to be strong and lightweight.",
    weights: { strength: 8, lightness: 9, stiffness: 7, flexibility: 2, cost: 4, sustainability: 4 }
  },
  playground: {
    description: "A playground slide should be safe, strong, smooth, and affordable.",
    weights: { strength: 8, lightness: 3, stiffness: 6, flexibility: 4, cost: 6, sustainability: 6 }
  }
};

const missionSelect = document.getElementById("missionSelect");
const materialSelect = document.getElementById("materialSelect");
const missionDescription = document.getElementById("missionDescription");
const testButton = document.getElementById("testButton");
const resultBox = document.getElementById("resultBox");

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

function loadMaterials() {
  for (const key in materials) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = materials[key].name;
    materialSelect.appendChild(option);
  }
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

function testDesign() {
  const selectedMaterial = materials[materialSelect.value];

  const weights = {
    strength: Number(sliders.strength.value),
    lightness: Number(sliders.lightness.value),
    stiffness: Number(sliders.stiffness.value),
    flexibility: Number(sliders.flexibility.value),
    cost: Number(sliders.cost.value),
    sustainability: Number(sliders.sustainability.value)
  };

  const score = calculateScore(selectedMaterial, weights);

  let message = "";

  if (score >= 80) {
    message = "Your design passed. This material is a strong match for your mission.";
  } else if (score >= 60) {
    message = "Your design is okay, but it could be improved. Try changing the material or priorities.";
  } else {
    message = "Your design needs work. Try choosing a different material.";
  }

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <p class="score">${score}/100</p>
    <h3>${message}</h3>
    <p><strong>Material:</strong> ${selectedMaterial.name}</p>
    <p><strong>Why?</strong> ${selectedMaterial.explanation}</p>
  `;
}

missionSelect.addEventListener("change", updateMission);
testButton.addEventListener("click", testDesign);

for (const property in sliders) {
  sliders[property].addEventListener("input", updateSliderValues);
}

loadMaterials();
updateMission();
