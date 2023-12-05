let weight;
let height;
let results;

document.getElementById("weight").addEventListener("change", function (e) {
  weight = parseFloat(e.target.value);
});

document.getElementById("height").addEventListener("change", function (e) {
  height = parseFloat(e.target.value);
});

document.getElementById("calculate").addEventListener("click", function (e) {
  e.preventDefault();

  if (isNaN(weight) || isNaN(height)) {
    console.log("Please enter valid weight and height values");
    return;
  }

  const calculatedHeight = height / 100;
  const bmi = (weight / (calculatedHeight * calculatedHeight)).toFixed(1);

  document.getElementById("results").innerHTML = `BMI ${bmi}`;
});
