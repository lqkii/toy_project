var startKeys = 0;
var land = 0;
var number = 0;
var countNum = 0;
var layer = -1;
var allowFlips = true;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

this.document.addEventListener("keydown", space)

function space(e) {
    if(!allowFlips) return

        if(e.keyCode === 32) {       	        	
            allowFlips = false;
            startKeys = 1;
            layer++;
            number = (getRandomInt(1, 10));
            document.getElementById("number").innerHTML = number;
            if(number <= 7) {
                document.getElementById("land").innerHTML = "fail!";
                land = 0;
                console.log(land)
                document.getElementById("bottleFailContainer").style.zIndex = layer;
                var failVideo = document.getElementById("bottleFail")
                failVideo.load()
                failVideo.play()

                setTimeout(function() {
                    allowFlips = true;
                }, 1500)
            }
            else {
                allowFlips = false;
                document.getElementById("land").innerHTML = "land!";

                layer++;
                // console.log(countNum);
                land = 1;
                console.log(land)
                document.getElementById("bottleLandContainer").style.zIndex = layer;
                var landVideo = document.getElementById("bottleLand")
                landVideo.load()
                landVideo.play()

                setTimeout(function() {
                    countNum++;
                    document.getElementById("count_key").innerHTML = countNum;
                    allowFlips = true;
                }, 1500)
            }
            // console.log("startKey Inits"); 
        }

        if(startKeys == 1) {
            document.getElementById("pressSpace").style.color = "transparent";
            document.getElementById("pressSpace").style.marginTop = "4vh";
            document.getElementById("count_key").style.opacity = "100";
            // console.log("swag");
        }

}

