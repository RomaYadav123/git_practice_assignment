let a= "lol":
let empty={};
for(let i=a.length-1; i<=0; i--){
empty+=a[i];
}
if(empty==a){
console.log("Palindrome");
} else{
console.log("Not")
}