
// adding event listener to button
var event = document.getElementById("button");
    event.addEventListener('click',calculate,false);

//calling function to calculate interest
function calculate()
{
    
    var A = parseInt(document.getElementById("amount").value);
    var I = parseInt(document.getElementById("interest").value);
    var T = parseInt(document.getElementById("loantime").value);
    
    var TotalI = (A*(I*0.1)*T)/100;
    var MonthlyI = TotalI/T;
    document.getElementById("result1").innerHTML = "Your monthly interest payment on the loan is : " + MonthlyI;
    document.getElementById("result2").innerHTML = "The total interest paid on the loan for the length of time of loan is : " + TotalI;
}