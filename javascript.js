function changeTrafficLight(){
    if(document.getElementById("yellow").className === "light yellow-light"){
        document.getElementById("red").className = "light red-light";
        document.getElementById("yellow").className = "light yellow-off";
    }
    else{
        if(document.getElementById("red").className === "light red-light"){
            document.getElementById("red").className = "light red-off";
            document.getElementById("green").className = "light green-light";
        }
        else{
            document.getElementById("green").className = "light green-off";
            document.getElementById("yellow").className = "light yellow-light";
        }
    }

}