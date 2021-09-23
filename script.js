
function compute()
{
    var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var x = document.createElement("MARK"); 
   //principal * years * rate / 100;
   
  

  var amount = principal * years * rate /100;
  var year = new Date().getFullYear()+parseInt(years);

function marks(y) {
  var x = document.getElementById("highlight");
    //x=y;
    x.innerHTML=y;
   return x.innerHTML;
  
}
   //Check if Amount field is empty
   if(principal== ""){
    alert("Please enter the Amount");
    document.getElementById("result").innerHTML.focus();
    return false;
}
//Check if Amount value 0
else if (principal<=0){
    alert("Please enter the valid number, Amount must be positive and nonzero");
    document.getElementById("result").innerHTML.focus();
    return false;
}
//If all is well return true.
else
{alert("validation is successful.")
//return true;

document.getElementById("result").innerHTML="If you deposit "+marks(principal)+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";
}
    
}
        