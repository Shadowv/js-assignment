//defin var of time
let seconds=0;
let minutes=0;
let hours=0;


//var for display
let displayseconds=0;
let displayminutes=0;
let displayhours=0;

//define function to start and stop
let interval=null; 
let status="stopped";

//stopwach function
function stopWatch(){

    seconds++;
    if(seconds/60===1){
        seconds=0;
        minutes++;

        if(minutes/60===1){
            minutes=0;
            hours++;

        }
    }

    //function to remove single digit
    if(seconds<10){
        displayseconds="0"+seconds.toString();
    }
    else{
        displayseconds=seconds;
    }
    if(minutes<10){
    displayminutes="0"+minutes.toString();
    }
    else{
        displayminutes=minutes;
    }
    if(hours<10){
        displayhours="0"+hours.toString();
    }
    else{
        displayhours=hours;
    }
    document.getElementById("display").innerHTML = displayhours+ ":" + displayminutes + ":" + displayseconds;
}

// function for start and stop
function startstop(){
    if(status==="stopped"){
        interval=window.setInterval(stopWatch,1000);
        document.getElementById("startstop").innerHTML="stop";
        status="started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML="start";
        status="stopped";
    }
}

//function for rseset
function reset(){
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("display").innerHTML="00:00:00";
    document.getElementById("startstop").innerHTML="start";
}