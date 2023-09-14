
window.onload = init;
let i = 0;

function init(){
	let images = document.querySelectorAll("ul li img");
	console.log(images);
	for (i = 1; i < images.length; i++) {
		images[i].style.display = "none";
}
	i=0;
}

function changeImageDroite(){
	console.log(i);
	images = document.querySelectorAll("ul li img");
	if (i < images.length - 1) {
		images[i].style.display = "none";
		i = i+1;
		images[i].style.display = "block";
	}
	else {
		images[i].style.display = "none";
		i = 0;
		images[i].style.display = "block";
	}
}

function changeImageGauche(){
	console.log(i);
	images = document.querySelectorAll("ul li img");
	if (i > 0) {
		images[i].style.display = "none";
		i--;
		images[i].style.display = "block";
	}
	else {
		images[i].style.display = "none";
		i = images.length - 1;
		images[i].style.display = "block";
	}
}
