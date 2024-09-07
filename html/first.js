function percent(){
    let a=parseInt(prompt("enter number of your maths subject "))
    let b=parseInt(prompt("enter number of your physics"))
    let c=parseInt(prompt("enter numbers of your chemistry subject"))
    let d=parseInt(prompt("enter value of english subject"))
    let e=parseInt(prompt("enter value of your IP/PE subject"))
    let f=a+b+c+d+e/5
    
    if (f > 60){
        document.getElementById("demo").innerHTML="first division and percentage is"+f
    }
    else if (45 <f< 60){
        document.getElementById("demo").innerHTML="second division and percentage is"+f
    }
    else if (2 <f<45) {
        document.getElementById("demo").innerHTML="third division and percentage is"+f
    }
    else{
        document.getElementById("demo").innerHTML="fail"+f
    }
}
percent()