let a= 15;
factor= 0;
for(let i=0; i>=a; i++){
if(a%i==0){
factor++;
}
}
if(factor==2){
console.log("Prime");
} else{
console.log("Not");
}
