// function shortlife(age){
//   expectedage=90;
//   currentAge=expectedage-age;
//   var days=365;
//   var weeks=52;
//   var months=12;
//   console.log("You have "+" "+(currentAge*days)+"days"+" "+(currentAge*weeks)+"weeks"+" "+(currentAge*months)+"months")

// }
// shortlife(19);


// function bmiCalculator(weight,height){
//   var ans=(weight/(height*height));
//   return Math.floor(ans);
// }
// var bmi=bmiCalculator(65,1.8);
// console.log("Body mass index of this person is",bmi);

/* Love calculator */
// function luv(){
//   prompt("first person:");
//   prompt("second person:");
//   var calci=Math.random();
//   console.log("The love percentage is:",calci)

// }
// luv();

// function bmiCalculator(weight,height){
//   var ans=(weight/(height*height));
//   return Math.floor(ans);

// }
// var bmi=bmiCalculator(65,1.8);
// console.log("Body mass index of this person is",bmi);
// if (bmi<18.5){
//   console.log("underweight");
// }if(bmi>18.5 && bmi<24.9){
//   console.log('normie');

// }if(bmi>24.9){
//   console.log("overweught");
// }

/*leap year*/
// function leapyear(year){
//   if((year%4===0 && year%100!==0 || year%400===0)){
//     console.log("its a leap year")
//   }else{
//     console.log("not a leap year")
//   }
// }
// leapyear(2024);

// function guestWelcomer(reciever){
//   var guests=["Angela","Jack","Pam","James","Lara","Jason"];
//   if (guests.includes(reciever)){
//     console.log("welcome",reciever)
//   }else{
//     console.log("Maybe next time")
//   }
// }
// guestWelcomer("An");

/*random selector*/
// function randomName(){
  
//   var names=["a","b","c","d","e"]

//   var noPeople=names.length;
//   var randomer=Math.floor(Math.random()*noPeople);
//   console.log(names[randomer],"is gonna pay")
  
// }
// randomName()


/* Fibonacci generator */
function fiboGen(n){
  var op=[];
  if(n===1){
    op=[0];
  }else if(n===2){
    op=[0,1]
  }else{
    op=[0,1];
    for(i=2;i<n;i++){
      op.push(op[op.length-2]+op[op.length-1]);//Now i want to add it in the existing array
    }
  return op  
  }
}
var output=fiboGen(5);
console.log(output)


