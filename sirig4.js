let a=1;
let b=10;
let text ="";
do{
    if(a%2==0){
        text+=a*a+" ";
        a++;
    }
    else{
        text+=a+" ";
        a++;
    }
}while(a<=b);
console.log(text);