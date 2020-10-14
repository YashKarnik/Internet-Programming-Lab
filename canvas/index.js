let shapesCanvas= document.getElementById("shapesCanvas").getContext("2d");
shapesCanvas.moveTo(5, 25);
shapesCanvas.lineTo(5, 125)
shapesCanvas.stroke();
shapesCanvas.strokeRect(25, 25, 100, 100);

shapesCanvas.moveTo(220, 75);
shapesCanvas.arc(180, 75, 40, 0, 2 * Math.PI);
shapesCanvas.stroke();

shapesCanvas.moveTo(230, 30);
shapesCanvas.lineTo(230, 130)
shapesCanvas.stroke();
shapesCanvas.lineTo(290, 80)
shapesCanvas.stroke();
shapesCanvas.lineTo(230, 30)
shapesCanvas.stroke();


let imageCanvas = document.getElementById("imageCanvas").getContext("2d");
let img = new Image();  
img.src = '../static/images/GoogleDP.jpg';
img.addEventListener('load', function() {
    imageCanvas.drawImage(img, 15, 15,270,120);
}, false);

let carCanvas = document.getElementById("carCanvas").getContext("2d");
carCanvas.fillStyle = "#000";
carCanvas.fillRect(20, 15, 120, 50);
carCanvas.fillRect(0, 50, 160, 25);
carCanvas.fill();

carCanvas.fillStyle = "#fff";
carCanvas.fillRect(35, 20, 40, 25);

carCanvas.fillRect(80, 20, 45, 25);
carCanvas.fill();

carCanvas.fillStyle = "black";
carCanvas.arc(30, 75, 20, 0, 2 * Math.PI);
carCanvas.arc(130, 75, 20, 0, 2 * Math.PI);
carCanvas.fill();

