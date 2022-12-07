pichu = document.getElementById("player")
carmache = document.getElementById("ennemy")

hpPichu = document.getElementById("HpPlayer")
hpCarmache = document.getElementById("HpEnnemy")

bouton = document.getElementById("bouton")
textbox = document.getElementById("textbox")

tour = 0

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function joueurAttaque(joueur,ennemi,hpEnnemi)
{
	var degats = getRandomInt(10);
	hpEnnemi.innerHTML = hpEnnemi.innerHTML - degats;
	textbox.innerHTML = joueur + " inflige " + degats + " à " + ennemi + " !!!";
	if (hpEnnemi.innerHTML < 0){
		hpEnnemi.innerHTML = 0;
	}
	tour = tour + 1;
}

bouton.onclick = function()
{
	if (hpPichu.innerHTML > 0 && hpCarmache.innerText > 0) {
		if (tour % 2 == 0) {
			joueurAttaque("pichu", "carmache", hpCarmache);
		}
		else {
			joueurAttaque("carmache", "pichu", hpPichu);
		}
	}
	else if (hpPichu.innerHTML == 0){
		textbox.innerHTML = "pichu est mort"
	}
	else if (hpCarmache.innerHTML == 0){
		textbox.innerHTML = "carmache est mort"
	}
}

pichu.onmouseover = function()
{
	textbox.innerHTML = "pichu a " + hpPichu.innerHTML + "hp"
}
carmache.onmouseover = function()
{
	textbox.innerHTML = "carmache a " + hpCarmache.innerHTML + "hp"
}

pichu.onmouseout = fucntion()
{
	// s'execute quand on sort de la box avec l'image pichu}
}
