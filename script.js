document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.getElementById('result');
    const bmiResultSpan = document.getElementById('bmiResult');
    const bmiMessage = document.getElementById('bmiMessage');

    calculateButton.addEventListener('click', function () {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
            const bmi = calculateBMI(height, weight);
            const bmiCategory = getBMICategory(bmi);

            bmiResultSpan.textContent = bmi.toFixed(2);
            bmiMessage.textContent = `You are ${bmiCategory}.`;
        } else {
            bmiResultSpan.textContent = '';
            bmiMessage.textContent = 'Please enter valid height and weight.';
        }
    });

    function calculateBMI(height, weight) {
        // BMI formula: BMI = weight (kg) / (height (m) * height (m))
        const heightMeters = height / 100;
        return weight / (heightMeters * heightMeters);
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }
});

const div = document.getElementById("content");
div.addEventListener("contextmenu", (e) => { e.preventDefault() });

document.body.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
