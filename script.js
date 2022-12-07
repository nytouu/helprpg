// on dit au JS quelles sont nos div joueurs et ennemi
pichu = document.getElementById("player")
carmache = document.getElementById("ennemy")

// pareil pour les HPs
hpPichu = document.getElementById("HpPlayer")
hpCarmache = document.getElementById("HpEnnemy")

// le bouton servira a declencher les actions de jeu
bouton = document.getElementById("bouton")

// cette box servira a montrer du texte en fonction de nos actions de jeu
textbox = document.getElementById("textbox")


// on a une variable tour pour pouvoir permettre de faire jouer les 2 joueurs
tour = 0

// cette fonction renvoie un nombre aleatoire entre 0 et max
function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

// permet de faire attaquer un des joueur et de lui infliger des degats
// on va aussi afficher dans la box text ce qu'il se passe
function joueurAttaque(joueur,ennemi,hpEnnemi)
{
    /*
     *  Arguments :
     *      joueur : contient un string du nom du joueur en train d'attaquer
     *      ennemi : contient un string du nom du joueur en train de se faire attaquer
     *      hpEnnemi : contient un int avec les hp de celui qui se fait attaquer
     */

    // on a une valeur random qui correspond au degats infliges par le joueur
	var degats = getRandomInt(10);

    // on applique les degats a notre valeur
	hpEnnemi.innerHTML = hpEnnemi.innerHTML - degats;

    // on montre dans notre textbox ce qu'il s'est passe
	textbox.innerHTML = joueur + " inflige " + degats + " à " + ennemi + " !!!";

    // dans le cas ou le joueur meurt, on remet a zero pour ne pas avoir de hp negatifs (moche)
	if (hpEnnemi.innerHTML < 0){
		hpEnnemi.innerHTML = 0;
	}

    // on incremente le nombre de tour
	tour = tour + 1;
}

// fonction qui s'execute quand on clique sur le bouton attaquer
bouton.onclick = function()
{
    // si les hp des deux joueurs sont au dessus de zero, alors on joue
	if (hpPichu.innerHTML > 0 && hpCarmache.innerText > 0) {
        // si le tour est pair
		if (tour % 2 == 0) {
			joueurAttaque("pichu", "carmache", hpCarmache);
		}
        // sinon c'est au tour de l'autre
		else {
			joueurAttaque("carmache", "pichu", hpPichu);
		}
	}
    // si un des joueurs a ses HP a zero alors :
    // si c'est pichu qu'est mort
	else if (hpPichu.innerHTML == 0){
		textbox.innerHTML = "pichu est mort"
	}
    // sinon si c'est carmache
	else if (hpCarmache.innerHTML == 0){
		textbox.innerHTML = "carmache est mort"
	}
}

// fonction qui s'execute quand on passe notre souris sur l'image pichu
pichu.onmouseover = function()
{
    // on affiche les hp courants psk c'est bo
	textbox.innerHTML = "pichu a " + hpPichu.innerHTML + "hp"
}
carmache.onmouseover = function()
{
	textbox.innerHTML = "carmache a " + hpCarmache.innerHTML + "hp"
}

pichu.onmouseout = fucntion()
{
	// s'execute quand on sort de la box avec l'image pichu
    // la je met rien psk flemme, mais si vous aviez besoin
    // d'executer un truc quand la souris s'en va de la box
    // c'est  bien onmouseout qu'il faut utiliser
}
