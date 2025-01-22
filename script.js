function CalculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let BMIValue = (weight / (height * height)).toFixed(2);
    const result = document.getElementById('result');
    
    if(BMIValue < 18.5){
        result.style.color = "blue";
        result.textContent ="BMI "+  BMIValue + ":  (You are Under weight)";
    }
    else if(BMIValue <= 24.9) {
        result.style.color = "green";
        result.textContent ="BMI "+ BMIValue +" (you are Normal)";
    }
    else{
        result.style.color = "red";
        result.textContent ="BMI "+  BMIValue + "(you are over weigh)";
    }
}