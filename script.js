let name = "Divine"
name = prompt("quel est ton prénom ?"); 
let nom = prompt("quel est ton nom de famille")
console.log("Bonjour " + name +  " "  + nom);
console.log("comment va tu " + name + "?")

let welcomeTitle = document.getElementById("welcomeTitle");

welcomeTitle.innerText ="Bienvenue " + name;

let isOk = prompt("ça va ? répondre par oui ou non")

if ((isOk == "oui") || (isOk == "OUI") || (isOk == "Oui"))
{
	// faire un truc
	console.log("l'utilisatrice va bien")
}

else if ((isOk == "non") || (isOk == "NON") || (isOk == "Non"))
{
	// faire autre chose
	console.log("l'utilisatrice va mal")
}
else
{
// faire un truc dans le cas ou l'utilisatreur(ice) fait ce qu'il veut
	console.log("l'utilisatrice  ne respect pas la question")
}
