function percent(){
    let a=parseInt(prompt("enter number of your maths subject "))
    let b=parseInt(prompt("enter number of your physics"))
    let c=parseInt(prompt("enter numbers of your chemistry subject"))
    let d=parseInt(prompt("enter value of english subject"))
    let e=parseInt(prompt("enter value of your IP/PE subject"))
    let f=a+b+c+d+e/5
    document.getElementById("demo").innerHTML=f
}
percent()