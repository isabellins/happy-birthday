var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 function newImage() {
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        blocoObj = Img;
        blocoObj.scaleToWidth(700);
        blocoObj.scaleToHeight(510);
        blocoObj.set({
            top: 0, left: 0
        })
        canvas.add(blocoObj);
    })
}

function playSound(){
	x.play()
}
