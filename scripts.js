// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = (event) => {
    console.log('page is fully loaded');
    const takeoff = document.querySelector('#takeoff');
    const landing = document.querySelector('#landing');
    const abort = document.querySelector('#missionAbort');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let flightStatus = document.getElementById('flightStatus');
    let height = 0;
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let rocketImage = document.getElementById("rocket");
    rocketImage.style.position= "absolute";
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
    rocketImage.style.visibility='visible';
    let up = this.document.getElementById('up');
    let down = this.document.getElementById('down');
    let left = this.document.getElementById('left');
    let right = this.document.getElementById('right');
    let vertPosString = rocketImage.style.top;
    let vertPos = Number(vertPosString.split('px')[0]);
    let horizonPosString = rocketImage.style.left;
    let horiPos = Number(horizonPosString.split('px')[0]);
    let movement;
    takeoff.addEventListener('click', (event) => {
        let affirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(affirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.background = "blue";
            height += Number(10000);
            shuttleHeight.innerHTML = height;
        }
    })

    landing.addEventListener('click', (event) => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        height = 0;
        shuttleHeight.innerHTML = height;
    })

    abort.addEventListener('click', (event) => {
        let affirm = window.confirm("Confirm that you want to abort the mission.");
        if(affirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.background = "green";
            height = 0;
            shuttleHeight.innerHTML = height;
        }
    })

    up.addEventListener('click', function(){
        movement = parseInt(rocketImage.style.top) + 10 + 'px';
        rocketImage.style.top = movement;
        
        //if(vertPos > -10) vertPos -= 10;
        //rocketImage.style.top = `${vertPos}px`;
        //height += 10000;
        //shuttleHeight.innerHTML = height;
    });

    down.addEventListener("click", function(){
        movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
        rocketImage.style.bottom = movement;
       // shuttleHeight.innerHTML=parseInt(shuttleHeight.innerHTML) - 10000;

        //if(vertPos < 250) vertPos += 10;
        //rocketImage.style.top = `${vertPos}px`;
        //height -= 10000;
        //shuttleHeight.innerHTML = height;
    });

    left.addEventListener('click', function(){
        movement =parseInt(rocketImage.style.left) - 10 +'px';
        rocketImage.style.left = movement;

        //if(horiPos > -160) horiPos -= 10;
        //rocketImage.style.left = `${horiPos}px`;
    });

    right.addEventListener('click', function() {
        movement = parseInt(rocketImage.style.left) + 10 + 'px';
        rocketImage.style.left = movement;
        //if(horiPos < 160) horiPos += 10;
        //rocketImage.style.left = `${horiPos}px`;
    });

  };