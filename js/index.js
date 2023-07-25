const form = document.querySelector("form");
/* pour voir le détail d'un objet on fait
console.dir(form) */
form.addEventListener("submit",handleForm)

function handleForm(e){
    e.preventDefault();
    calculateBMI()

    
}

const input = document.querySelectorAll("input")

function calculateBMI(){
    const height =input[0].value;
    const weight =input[1].value;

    if(!height || !weight || height<= 0 || weight <= 0){
    handleError()
    
    
    return;

    }
    const BMI = (weight/ Math.pow(height /100, 2)).toFixed(1)

}

const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

function handleError(){
    displayBMI.textContext ="Wops";
    result.textContent = "Remplissez correctement les inputs."

}




