function avg(){
    let a = parseInt(prompt("enter value of a"))
    let b= parseInt(prompt("enter value of b"))
    let c= parseInt(prompt("enter value of c"))
    let avg=(a+b+c)/3
    document.getElementById("demo").innerHTML="average of a,b,and c"+avg
}
avg()