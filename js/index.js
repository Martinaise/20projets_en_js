const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
  ];
  


const form = document.querySelector("form");
/* pour voir le détail d'un objet on fait
console.dir(form) */
form.addEventListener("submit",handleForm)

function handleForm(e){
    e.preventDefault();
    calculateBMI()

    
}
//  géré la validation 1
const input = document.querySelectorAll("input")

function calculateBMI(){
    const height =input[0].value;
    const weight =input[1].value;

    if(!height || !weight || height<= 0 || weight <= 0){
    handleError()
    
    
    return;

    }
    /* calcul de l'IMC = poids en kg / taille au carré en m
     pow permet de faire le calcul avec une puissance  toFixed(1) est gardé 1 chiffre après la virgule
     on divise par 100 pour mettre en cm*/
    const BMI = (weight/ Math.pow(height /100, 2)).toFixed(1)
    // une fonction qui montre le résultat
    console.log(BMI);
    showResult(BMI)
    

}
//  géré la validation 2
const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

function handleError(){
    displayBMI.textContent ="Wops";
     // remmetre la  couleur à zero
    displayBMI.style.color ="inherit"
    result.textContent = "Remplissez correctement les inputs."
   

}
//  fin de validation

/*fonction pour voir le résultat. 
La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument. Sinon, la valeur undefined est renvoyée.*/


function showResult(BMI){
    const rank = BMIData.find(data => {
        if(BMI >= data.range[0] && BMI < data.range[1]) return data;
        else if(typeof data.range === "number" &&  BMI >= data.range)return data;
    })
    displayBMI.textContent = BMI;
    displayBMI.style.color = `${rank.color}`
    result.textContent = `Resultat ${rank.name}`
}



