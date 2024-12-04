//1 hour =60 minutes
//creating space shop
function hoursToMinutes(hours)// function declaration

{
    let result =hours*60;//variable creation
    console.log (result);
    return result;//passing result outside the function
    
}
let a = hoursToMinutes (10);//variable declaration
let b = hoursToMinutes (20);//variable declaration

console.log(a);

//function expression

let daysToHours =function(days)//variable declaration

{//creating body of the function
    return days*24;

}

let c = daysToHours(1);//function  expression

console.log(c);

//variables declaration

let balance =$100;
let stock =$50;
let price =$5;
let quantity =$8;

//check if we have stock 

if (quantity <=stock)
    {

    //reduce stock , increase balance

    //stock =stock - quantity;
    stock -=quantity;

    //balance =balance +price*quantity;

    balance+=price*quantity;

    console.log('purchase complete , balance');
}

else {

    console.log('not enough stock');
}
