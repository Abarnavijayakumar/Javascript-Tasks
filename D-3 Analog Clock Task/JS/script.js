const hours = document.querySelector('.hrs');
const seconds = document.querySelector('.sec');
const minutes = document.querySelector('.min');
setInterval(runclock,1000);

function runclock(){
    const time = new Date();
    const sec = time.getSeconds()/60;
    const min = (sec+time.getMinutes())/60;
    const hrs = (min+time.getHours())/12;
   
    hours.style.setProperty('--rotation',hrs*360);
    minutes.style.setProperty('--rotation',min*360);
    seconds.style.setProperty('--rotation',sec*360);
    // console.log(hrs, min, sec);
    
}
runclock();