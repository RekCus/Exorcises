//Var Cirkel
let opv=document.getElementById("oppervlakte");
let om=document.getElementById("omtrek");
let straal=document.getElementById("straal");

//Var Rechthoek
let lengte =document.getElementById("lengte");
let breedte=document.getElementById("breedte");
let opv1=document.getElementById("oppervlakteR");
let om1=document.getElementById("omtrekR");
let dia=document.getElementById("diag");

//Var Temp.
let fahr=document.getElementById("fahr");
let cels=document.getElementById("celsius");
let kel=document.getElementById("kelvin");
let fahr1=document.getElementById("fahrK");
let cels1=document.getElementById("celsiusK");
let kel1=document.getElementById("kelvinK");

function calCirkel(){

    let opp= Math.PI *Math.pow(straal.value,2);
    opp=Math.round(opp*100)/100;

    let omm=Math.PI*2*straal.value;
    omm =Math.round(omm*100)/100;

    opv.innerHTML=opp;
    om.innerHTML=omm;

    if(straal.value.length==0){
        opv.innerHTML="Niks is in gevuld";
        om.innerHTML="Niks is in gevuld";
    }
}

function calRechthoek(){

    let opp= lengte.value*breedte.value;
    opp=Math.round(opp*100)/100;

    let omm=2*lengte.value+2*breedte.value;
    omm=Math.round(omm*100)/100;

    let diag=Math.pow(lengte.value,2)+Math.pow(breedte.value,2);

    opv1.innerHTML=opp;
    om1.innerHTML=omm;
    dia.innerHTML=diag;

}

function calTemp(){
    
    let tfahr=(9*cels.value/5)+32;
    let tkelv=cels.value+273.15;
    
    //C to K & F
    tfahr=Math.round(tfahr*100)/100;
    fahr.innerHTML=tfahr;
    kel.innerHTML=tkelv;
    
    if(cels.value.length==0){
        fahr.innerHTML="Niks is in gevuld";
        kel.innerHTML="Niks is in gevuld"; 
    }

    //K to C & F
    let tcels1=kel1.value-273.15;
    let tfahr1=  (9*kel1.value-273.15)+32;
    tcels1=Math.round(tcels1*100)/100;
    tfahr1=Math.round(tfahr1*100)/100;
    fahr1.innerHTML=tfahr1;
    
    cels1.innerHTML=tcels1;
    if(kel1.value.length==0){
        fahr1.innerHTML="Niks is in gevult";
        cels1.innerHTML="Niks is in gevuld";
    }
}