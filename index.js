let btn  = document.getElementById('toggleBtn')
let bulb = document.getElementById('bulb')
btn.addEventListener('click',toggelBulb)
function toggelBulb(e){
    if(btn.textContent.includes('On')){
        bulb.src="img/pic_bulbon_on.gif"
        btn.textContent='Turn Off'
        }else{
            bulb.src ="img/pic_bulboff_off.gif";
            btn.textContent='Turn On'
        }
};
