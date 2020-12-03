


let elements = document.getElementsByTagName("p");
function calcul(){
    return Math.trunc(Math.random() * 100);
}

for(let i = 0; i < elements.length; i++){
    elements.item(i).innerHTML = calcul();
}