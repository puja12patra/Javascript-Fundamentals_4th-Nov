// Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/
// height * height.

//Note ** Used html file to fetch the input values.

function calculates_BMI()
{
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const BMI = weight/(height**2);
    document.getElementById('bmivalue').value = Math.round(BMI);
}
