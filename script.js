
// sign up form validation
function signupValidation()
{
var u1 = document.getElementById("name1");
var u2 = document.getElementById("name2");
var passid1 = document.getElementById("pas1");
var phone1=document.getElementById("phn1");
var passid2 = document.getElementById("pas2");
var uemail = document.getElementById("email");
var ch1 = document.getElementById("Check1")

if(fname_len(u1,5,12))
{
 if(pass_len(passid1,passid2,8,12))
 {
    if(fname_al(u1,u2))
    {
  if(phonenumber(phone1))
  { 
 if(ValidateEmail(uemail))
   {
 if(checkbox1(ch1))
 {
 }
    } 
 }
     }
 } 
}
return false;
}
// first name length check
function fname_len(u1,mx,my)
{
var u1_len = u1.value.length;
var temp=0;
if (u1_len == 0 )
{
alert("First name should not be empty ");
u1.focus();
temp=1;
return false;
}
if (temp==0)
{
if ( u1_len >= my || u1_len < mx)
{
alert("First name length should be between "+mx+" to "+my);
u1.focus();
return false;
}
}
return true;
}
// password length check
function pass_len(passid1,passid2,mx,my)
{
var pas_len1 = passid1.value.length;
var pas_len2 = passid2.value.length;
var temp=0;
if (pas_len1 == 0 || pas_len2 ==0 )
{
alert("Password should not be empty ");
passid1.focus();
temp=1;
return false;
}
if (temp==0)
{
if ( pas_len1 >= my || pas_len1 < mx)
{
alert(" Password length should be between "+mx+" to "+my);
passid1.focus();
return false;
}
}
if (temp==0)
{
if ( pas_len2 >= my || pas_len2 < mx)
{
alert(" Confirm password length should be between "+mx+" to "+my);
passid1.focus();
return false;
}
}
return true;
}
// first name & last name alphabet check
function fname_al(u1,u2)
{ 
var letters = /^[A-Za-z]+$/;
var len=u2.value.length;
var temp=0;
if(u1.value.match(letters))
{
   
    if(len>0)
    {
        if(u2.value.match(letters))
        {
        var temp=1;
      
        }
    }
    if(temp==1)
    {
       
    
    return true;
    }
    else
    {
        alert('Second name must have alphabet characters only');
        u2.focus();
        return false;
    }
}
else
{
alert('First name must have alphabet characters only');
u1.focus();
return false;
}
}
// Email address validation
function ValidateEmail(uemail)
{
var mailformat = /^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
// password check


// checkbox validation
function checkbox1(ch1)
{
    if(ch1.checked==true)
    {
        alert('Form  Submitted Succesfully');
        return true;
    }
    else
    {
        alert('Please accept the Terms and Conditions');
        return false;
    }

}


//login form validation
function loginValidation()
{
    var u1 = document.getElementById("emaill");
    if(ValidateEmail(u1))
    { 
        if(pass_len(pass1))
        {
        }
    }   
    return false;
    }



// Email address validation
function ValidateEmail(u1)
{
var mailformat = /^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
if(u1.value.match(mailformat))
{
alert("You are Logged in!");
u1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
u1.focus();
return false;
}
}
// phone number
  
function phonenumber(phone1)
{
    if (phone1.value.length==10)
    {
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(phone1.value.match(phoneno))
  {
  return true;
  }
  }
  else
  {
  alert("You have entered an invalid phone number!");
  phone1.focus();
  return false;
  }
  }


// password strength
function validatePassword(password) {
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
   
    var color = "";
    var strength = "";
    switch (ctr ) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}