function change(){
    random_r= Math.floor(Math.random()* 255 ) + 1;
    random_g= Math.floor(Math.random()* 255 ) + 1;
    random_b= Math.floor(Math.random()* 255 ) + 1;
    document.getElementById("result_emotion_name").style.color="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("cap").style.color="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("snap").style.color="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("headingas").style.backgroundColor="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("headingas").style.color="white";
    document.getElementById("bucap").style.backgroundColor="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("buch").style.backgroundColor="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("camera").style.border="2px dashed black";
    document.getElementById("result").style.border="2px dashed black";
    //set webcamera property 
 Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

Camera=document.getElementById("camera");

//display live webcam 
 Webcam.attach('#camera');

}

function tip() {
    document.getElementById("note").style.visibility="visible";
}

var p1 ="";


  function take_snapshot(){
      Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+ data_uri +'"/>';
      });
  }
//console 
 console.log(ml5.version);

 classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AMOlsc_p6/model.json' , modelLoaded)

 function modelLoaded() {
    console.log("Model Loaded!");
 }

 function speak(){
 var synth=window.speechSynthesis;
 speak1="the first predicition is " + p1;
 var utterThis=new SpeechSynthesisUtterance(speak1);
 synth.speak(utterThis);
 }

 //define check func

 function check() {
  img=document.getElementById('captured_image');

  classifier.classify(img , gotResult);
}

function gotResult(error , results) {
  if (error) {
    console.error(error);
  }else{
   console.log(results);

   
   p1=results[0].label;
   

   

  if (results[0].label == "Pikachu") {
    document.getElementById("result_emotion_name").innerHTML="Pokemon - Pikachu"; 
    speak();
  }

  if (results[0].label == "Charizard") {
   document.getElementById("result_emotion_name").innerHTML="Pokemon - Charizad"; 
   speak();
 }

 if (results[0].label =="Greninja") {
   document.getElementById("result_emotion_name").innerHTML="Pokemon - Greninja"; 
   speak();
 }

 if (results[0].label == "Torterra garden") {
  document.getElementById("result_emotion_name").innerHTML="Pokemon - Torterra garden"; 
  speak();
}
if (results[0].label == "Gengar") {
 document.getElementById("result_emotion_name").innerHTML="Pokemon - Gengar "; 
 speak();
}

if (results[0].label =="Dragonite") {
 document.getElementById("result_emotion_name").innerHTML="Pokemon - Dragonite "; 
 speak();
}

if (results[0].label =="Lucario") {
  document.getElementById("result_emotion_name").innerHTML="Pokemon - Lucario "; 
  speak();
 }


 }

}