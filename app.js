const Clock=document.getElementsByClassName(".clock");
const hours=document.getElementById("hrs");
const minutes=document.getElementById("min");
const seconds=document.getElementById("sec");



setInterval(()=>{
    let clock1=new Date();
    console.log(clock1.getHours());
    hours.innerHTML=(clock1.getHours()<10?"0":"")+clock1.getHours();
    minutes.innerHTML=(clock1.getMinutes()<10?"0":"")+clock1.getMinutes();
    seconds.innerHTML=(clock1.getSeconds()<10?"0":"")+clock1.getSeconds();

},1000)