let a=["java","python","C","C++"]
let len_a=a.length
let s=""
for(let i=0;i<len_a;i++){
    s+=a[i]+" "
}
document.getElementById("demo").innerHTML=s
const car={type:"Flat",model:"500",color:"white"};
document.getElementById("demo1").innerHTML="The car type is"+car.type;