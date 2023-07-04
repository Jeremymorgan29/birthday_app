var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 #myCanvas
 {
    border-innerWidth:10px;
    backgroud-color:white;
    border-style:ridge;
    border-coler:darkviolet;
 }

function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg', funtion(Img) {
    block_image_object.scaleToWidth(700)
    block_image_object.scaleToHeight(510)
    block_image_object.set({
        top:0,
        left:0
    })
    canvas.add(block_image_object)
})	
	
}

function playSound(){
	x.play()
}
