var startKeys = 0;
var land = 0;
var number = 0;
var countNum = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

this.document.addEventListener("keydown", space)

function space(e) {
    if(e.keyCode === 32) {       	        	

        startKeys = 1;
        number = (getRandomInt(1, 10));
        document.getElementById("number").innerHTML = number;
        if(number <= 7) {
            document.getElementById("land").innerHTML = "fail!";
            land = 0;
            console.log(land)
        }
        else {
            document.getElementById("land").innerHTML = "land!";

            countNum++;
            // console.log(countNum);
             document.getElementById("count_key").innerHTML = "Count = " + countNum;
             land = 1;
             console.log(land)
        }
        // console.log("startKey Inits"); 
    }

    if(startKeys == 1) {
        document.getElementById("pressSpace").style.opacity = "0";
        // console.log("swag");
    }

}

