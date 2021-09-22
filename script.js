function compute()
{
    var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value; 
   //principal * years * rate / 100;
   
  /* function updateRate() 
{
    var rateval = document.getElementById("rate").value;
     var p=document.getElementById("rate_val").innerText=rateval; 
     return p;  
}*/
function check()
{
    //Check if username field is empty
    if(principal.value == ""){
        alert("Please enter the Amount");
        username.focus();
        return false;
  }
 //Check if email field is empty
  if(principal.value == 0){
        alert("Please enter the valid");
        emailid.focus();
        return false;
  }
 //If all is well return true.
 alert("Form validation is successful.")
  return true;
}
var interest = principal * years * rate /100;
   var year = new Date().getFullYear()+parseInt(years);

document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";

    
}
        