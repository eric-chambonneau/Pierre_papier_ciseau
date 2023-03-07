const contenantChoixOrdinateur = document.getElementById("Choix-ordinateur");
const contenantChoixUtilisateur = document.getElementById("Choix-utilisateur");
const contenantResultat = document.getElementById("resultat");

const choixPossibles = document.querySelectorAll("button");
let choixUtilisateur;
let resultat
let choixOrdinateur;

//Evenement 'click' sur les boutons
choixPossibles.foreach((choixPossible) =>
  choixPossible.addEventListener("click", (e) => {
    //récupération de l'ID du bouton cliqué
    choixUtilisateur = e.target.id;
    //on ajoute l'image correspondante au choix de l'utilisateur
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`;
    generer_choix_ordinateur();
  })
);

//fonction qui génère le choix de l'ordinateur
function generer_choix_ordinateur() {
  random = Math.floor(Math.random() * 3) + 1; //génère un nombre aléatoire entre 1 et 3
  if (random === 1) {
    //si random = à 1
    choixOrdinateur = "pierre";
  }
  if (random === 2) {
    //si random = à 1
    choixOrdinateur = "papier";
  }
  if (random === 3) {
    //si random = à 1
    choixOrdinateur = "ciseaux";
  }
  //on ajoute l'image correspondante au choix de l'ordinateur
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`;
}

//fonction pour vérifier si l'utilisateur a gagné ou perdu
function verification (){
if(choixUtilisateur === choixOrdinateur){
  resultat = "Egalité"
}
//les cas où l'utilisateur perd
if(choixUtilisateur == "pierre" && choixOrdinateur == "papier"){
  resultat = "Perdu"
}
if(choixUtilisateur == "papier" && choixOrdinateur == "ciseaux"){
    resultat = "Perdu"
    }
if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre"){
    resultat = "Perdu"
    }
    //les cas où l'utilisateur gagne
if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux"){
    resultat = "Gagné"
    }
if(choixUtilisateur == "papier" && choixOrdinateur == "pierre"){
    resultat = "Gagné"
    }
if(choixUtilisateur == "ciseaux" && choixOrdinateur == "papier"){
    resultat = "Gagné"
    }
    contenantResultat.innerHTML = resultat;
}