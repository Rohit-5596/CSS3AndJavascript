function Display()
{
   alert("Line error")
   var val="";
   if(document.getElementById("r1").checked)
   {
   val=document.getElementById("r1").value;alert(val);
   }
   else if(document.getElementById("r2").checked)
   {
   val=document.getElementById("r2").value;alert(val);
   }
  document.getElementById("mydiv").innerHTML=val;

  
  }
   