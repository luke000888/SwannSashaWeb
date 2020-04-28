//popup
console.log("Ok");

var today  = new Date();
console.log(document.getElementById("date").innerHTML);
document.getElementById("date").innerHTML = today.toLocaleDateString("fr-FR");
window.onload=function() { // Au chargement de la page
	alert("Welcome1"); // On ouvre la popup
	alert("Welcome2");
	alert("Welcome3");
	alert("hahaha");

};

//modifier la couleur background
function CouleurBackground() {
	var color = document.getElementById("color").value;
	console.log(color);
	document.body.style.background = color;
};

//read more or less
function LirePlus(TroisPoints, Plus, Boutton) {
  var dots = document.getElementById(TroisPoints);
  var moreText = document.getElementById(Plus);
  var btnText = document.getElementById(Boutton);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "+"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "-"; 
    moreText.style.display = "inline";
  }
}

function blague(){
	alert("11 mai 2021!")
}