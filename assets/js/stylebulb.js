function switching(){
    x=document.getElementById("bulb");
    x.src="./image/bulbon.png";
    console.log("Hello world1");
    b=document.getElementById("bulb_on");
    a=document.getElementById("bulb_off");
    b.className="switchon";
    a.className = "switch";
}
function switchingOff(){
    x=document.getElementById("bulb");
    x.src="./image/bulboff.png";
    console.log("Hello world1");
    a=document.getElementById("bulb_off");
     b=document.getElementById("bulb_on");
    a.className="switchoff";   
    b.className="switch" ;
}
