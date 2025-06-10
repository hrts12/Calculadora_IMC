// Javascript

// IMC DATA
const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
];

// Seleção de elementos
const imc_table = document.querySelector("#imc-table");
const height_input = document.querySelector("#height");
const weight_input = document.querySelector("#weight");
const calc_btn = document.querySelector("#calc-btn");
const clear_btn = document.querySelector("#clear-btn");
const calc_container = document.querySelector("#calc-container");
const result_container = document.querySelector("#result-container");
const imc_number = document.querySelector("#imc-number span");
const imc_info = document.querySelector("#imc-info span");
const back_btn = document.querySelector("#back-btn");

// Funções
function createTable(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("table-data");

    const classification = document.createElement("p");
    classification.innerText = item.classification;

    const info = document.createElement("p");
    info.innerText = item.info;

    const obesity = document.createElement("p");
    obesity.innerText = item.obesity;

    div.appendChild(classification);
    div.appendChild(info);
    div.appendChild(obesity);

    imc_table.appendChild(div);
  });
}

function valid_digits(text) {
  return text.replace(/[^0-9,]/g, "");
}

function calc_imc(weight, height) {
  const imc = (weight / (height * height)).toFixed(1);
  return imc;
}

function clean_inputs() {
  height_input.value = "";
  weight_input.value = "";
  imc_number.className = "";
  imc_info.className = "";
}

function show_or_hide_results() {
  calc_container.classList.toggle("hide");
  result_container.classList.toggle("hide");
}

// Inicialização
createTable(data);

// Eventos
[height_input, weight_input].forEach((el) => {
  el.addEventListener("input", (e) => {
    const updated_value = valid_digits(e.target.value);
    e.target.value = updated_value;
  });
});

calc_btn.addEventListener("click", (e) => {
  e.preventDefault();

  const weight = +weight_input.value.replace(",", ".");
  const height = +height_input.value.replace(",", ".");

  if (!weight || !height) return;

  const imc = calc_imc(weight, height);
  let info;

  data.forEach((item) => {
    if (imc >= item.min && imc <= item.max) {
      info = item.info;
    }
  });

  if (!info) return;

  imc_number.innerText = imc;
  imc_info.innerText = info;

  switch (info) {
    case "Magreza":
      imc_number.classList.add("low");
      imc_info.classList.add("low");
      break;
    case "Normal":
      imc_number.classList.add("good");
      imc_info.classList.add("good");
      break;
    case "Sobrepeso":
      imc_number.classList.add("low");
      imc_info.classList.add("low");
      break;
    case "Obesidade":
      imc_number.classList.add("medium");
      imc_info.classList.add("medium");
      break;
    case "Obesidade grave":
      imc_number.classList.add("high");
      imc_info.classList.add("high");
      break;
  }

  show_or_hide_results();
});

clear_btn.addEventListener("click", (e) => {
  e.preventDefault();
  clean_inputs();
});

back_btn.addEventListener("click", (e) => {
  clean_inputs();
  show_or_hide_results();
});