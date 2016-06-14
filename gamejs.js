var event = document.getElementById("button");
    event.addEventListener('click',Game,false);


    var number = Math.floor((Math.random()*100)+1);
    var i = 0;

function Game()
{
    
    var userinput = parseInt(document.getElementById("input").value);
    //document.getElementById("demo").innerHTML = number;
    

   
   do{
       i++;
    if(number<userinput)
        {
            document.getElementById("demo").innerHTML = "your guessing number is too large"
        }
    else if (number > userinput)
        {
            document.getElementById("demo").innerHTML = "your guessing number is too small"
        }
    else
        {
            document.getElementById("demo").innerHTML = " Well Done...!!correct guess. Secret number is : "+ number + " and you tried for "+ i + "times";
            break;
        }
     }while(number == userinput);
       
    
    
    //document.getElementById("demo2").innerHTML = " Well Done." + number;
        
      
}
