// function data1(name,branch){
//     return "Name:"+name+ "Branch:" +branch+ "";
// }
// a=data1("Asritha","CSM")

// console.log(a)


// function player(name,score){
//     let add = score + 20; 
//     let sub = score - 20;
//     let mul = score * 2;
//     let div = score / 2;
    
//     return "name: " +name+ "  score:"+score+"   Add:" +add+"   sub:" +sub+ "";
// }
// a=player("Abc",120)
// console.log(a)


// function factioral(num){
//   if(num==0||num==1){
//     return 1;
//   }
//   else{
//     return num*factorial(num-1);
//   }
// }
// v=factioral(5)
// console.log(v)



// function cal(num1,num2){
//     let add = num1 + num2; 
//     let sub = num1 - num2;
//     let mul = num1 * num2;
//     let div = num1 / num2;
//     return "add:"+add+ "sub:"+sub+"mul:"+mul+"div:"+div+"";
// }
// console.log(cal(20,23))

// function ci(p,r,t){
//     let result= p * (Math.pow((1 + r / 100), t));
//     return result;
// }
// console.log(ci(10,20,30))


// let p=prompt("Enter p:");
// let r=prompt("Enter r:");
// let t=prompt("Enter t:");
// let result=p * (Math.pow((1 + r / 100), t));
// console.log(result)

// function cal(a,b,operator){
//   if(operator === '+'){
//     return a+b;
//   }
//   if(operator === '-'){
//     return a-b;
//   }
//   if(operator === '*'){
//     return a*b;
//   }
//   if(operator === '/'){
//     return a/b;
//   }
// }
// console.log(cal(10,20,'*'))

// let marks=prompt("Enter students marks:");
// if(marks>=90&&  marks<=100){
//   console.log("O")
// }
// else if(marks<90 && marks>=80)
//   console.log("A")
// else if(marks<80 && marks>=70)
//   console.log("B")
// else if(marks<70 && marks>=60)
//   console.log("C")
// else if(marks<60 && marks>=0)
//   console.log("Fail")
// else
//   console.log("Not in proper form")

// let speed=30;
// let d=0;
// for(i=10;i<=90;i+=10){
//   d=d+speed/6;
//   if(speed<120){
//     speed*=2;
//   }
// }
// d=d+speed/10
// console.log(d);

// price=30 for 4km
// for next 5km the price=10
// for next 10km the price=15
// if the kms are more the will be 20
// for 19.5kms price is?



// function calculateFare(distance) {
//   let fare = 0;

//   // First 4 km
//   if (distance <= 4) {
//     fare = 30;
//     return fare;
//   } else {
//     fare = 30;
//     distance -= 4;
//   }

//   // Next 5 km (4 to 9)
//   if (distance <= 5) {
//     fare += distance * 10;
//     return fare;
//   } else {
//     fare += 5 * 10;
//     distance -= 5;
//   }

//   // Next 10 km (9 to 19)
//   if (distance <= 10) {
//     fare += distance * 15;
//     return fare;
//   } else {
//     fare += 10 * 15;
//     distance -= 10;
//   }

//   // Beyond 19 km
//   fare += distance * 20;

//   return fare;
// }

// let distance=calculateFare(19.5);

// console.log(distance);

// let i=0;
// while(i<=3){
//   console.log(i)
//   i++;
// }

// let i=1;
// let x=5;
// while(i<=10){
//    console.log(x*i)
//    i++;
// }



myDiv.addEventListener('click',() => {
  alert('Div clicked!');
});
