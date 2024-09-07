document.addEventListener('keydown',function(event)
{
    document.getElementById("demo").textContent="which key you have passed on a keyboard ="+event.key
});
// Mouse event listner
document.addEventListener('click',function(event){
    document.getElementById("demo").textContent="You have clicked the mouse"
});