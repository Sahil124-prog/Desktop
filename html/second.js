let code=parseInt(prompt("Enter the code of subject="))
switch (code){
    case 108:
        document.getElementById("demo").innerHTML="108 code is python";
        break;
    case 109:
        document.getElementById("demo").innerHTML="111 code is orientation to computing";
        break;
    case 326:
        document.getElementById("demo").innerHTML="326 code is of internet programming";
        break;
    default:
        document.getElementById("demo").innerHTML="you have written wrong code";
        break;
}