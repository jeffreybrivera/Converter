function calculate(){
    let a = document.getElementById("input").value;
    let b = document.getElementById("inputunit").value;

    let x = 2.54; //inch to centimeter
    let y = 100; // meter to centimeter

    //Input
    if(b == "Inch"){
        var c = x*a;
    }
    else if(b == "Meter"){
        var c = y*a;
    }
    else {
        var c = a; 
    }

    //Output
    let ab = document.getElementById("outputunit").value;
    if(ab == "Inch"){
        var cd = c/x ;
    }
    else if(ab=="Meter"){
        var cd = c/y;
    }
    else{
        var cd = c;
    }
    document.getElementById("output").value = cd;
}