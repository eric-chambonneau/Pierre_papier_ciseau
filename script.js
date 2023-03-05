const contenantChoixOrdinateur = document.getElementById("Choix-ordinateur");
const contenantChoixUtilisateur = document.getElementById("Choix-utilisateur");
const contenantResultat = document.getElementById("resultat");

const choixPossibles = document.querySelectorAll("button");
let choixUtilisateur 

//Evenement 'click' sur les boutons
choixPossibles.foreach(choixPossible => choixPossible.addEventListener('click',(e)=>{ 
    //récupération de l'ID du bouton cliqué
    choixUtilisateur = e.target.id;
    //on ajoute l'image correspondante au choix de l'utilisateur
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`
    generer_choix_ordinateur()
}))

//fonction qui génère le choix de l'ordinateur
function generer_choix_ordinateur(){
    random = Math.floor(Math.random() *3) +1; //génère un nombre aléatoire entre 1 et 3
    alert(random)