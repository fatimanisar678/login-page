const form1= document.getElementById("myform");
const errormsg=document.getElementById("errormsg");
form1.addEventListener("submit",function(e)
{
    e.preventDefault();
    const username=document.getElementById("username").value.trim();
    const password=document.getElementById("password").value.trim();

    if(username=="")
    {
      errormsg.textContent="Fill username";

    }else if(password=="")
    {
        errormsg.textContent="Fill password";
    }
    else if(username==="Fatima" && password==="fatima12")
    {
        alert("Login sucessful!!");
        errormsg.textContent=" ";
    }else
    {
        errormsg.textContent="Invalid username or password";
    }

});
