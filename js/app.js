//Script del juego

const piedra = 0;
const papel = 1;
const tijera = 2;
var rivalResult = "hola";


const piedraBtn = document.getElementById("piedra1");
const papelBtn = document.getElementById("papel1");
const tijerasBtn = document.getElementById("tijeras1");
const result = document.getElementById("resultText");

const empate = 0;
const victoria = 1;
const derrota = 2;

piedraBtn.addEventListener("click", ()=>{play(piedra)});
papelBtn.addEventListener("click", ()=>{play(papel)} );
tijerasBtn.addEventListener("click", ()=>{play(tijera)});



function calcResultado(optElegida, rivalOption){
    if(optElegida === rivalOption){
        return empate;
    }else if(optElegida === piedra){

        if(rivalOption === papel)return derrota;
        if(rivalOption === tijera)return victoria;

    }else if(optElegida === papel){

        if(rivalOption === piedra)return victoria;
        if(rivalOption === tijera)return derrota;

    }else if(optElegida === tijera){
        
        if(rivalOption === piedra)return derrota;
        if(rivalOption === papel)return victoria;
    }
}


function play(optElegida){
    const rivalOption = Math.floor(Math.random() * 3);
    const resultado = calcResultado(optElegida, rivalOption);

    if(rivalOption === 0){
        rivalResult = "La máquina ha elegido piedra:";
    }
    else if(rivalOption === 1){
        rivalResult = "La máquina ha elegido papel:";
    }
    else if(rivalOption === 2){
        rivalResult = "La máquina ha elegido tijeras:";
    }
    

    switch(resultado){
        case empate:
            alert(rivalResult + " es un Empate.");
            break;
        case victoria:
            alert(rivalResult + " has ganado!");
            break;
        case derrota:
            alert(rivalResult + " has perdido...");
            break;
    }
}


document.getElementById("btnVolver").addEventListener("click", function() {
    window.location.href = "index.html";
});




