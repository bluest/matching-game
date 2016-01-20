var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces(){
	for(var i = 0; i < numberOfFaces; i++){
		var face = document.createElement("IMG");
		face.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
		face.style.top = Math.floor(Math.random() * 400) + "px";
		face.style.left = Math.floor(Math.random() * 400) + "px";
		theLeftSide.appendChild(face);
	}
	var leftSideImages = theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);

	theLeftSide.lastChild.onclick = function nextLevel(event){
		event.stopPropagation();
		while(theLeftSide.lastChild){
			theLeftSide.removeChild(theLeftSide.lastChild);
		}
		while(theRightSide.lastChild){
			theRightSide.removeChild(theRightSide.lastChild);
		}
		numberOfFaces += 5;
		generateFaces();
	};

	theBody.onclick = function gameOver() {
		alert("Game Over!");
		theBody.onclick = null;
		theLeftSide.lastChild.onclick = null;
	}; 
}

window.addEventListener("load", generateFaces);