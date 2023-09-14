function envoiFormulaire(){
	let nom = document.getElementById("nom").value;
	let msg = document.getElementById("message").value;
	console.log(nom,msg);
	message = "Votre nom : " + nom;
	message += "\n";
	message += "Votre message : ";
	message += "\n";
	message += msg;
	alert(message);
}