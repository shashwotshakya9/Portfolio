function validateForm()
{
var E_mail=document.forms["contact"]["emailaddress"].value;
var fname=document.forms["contact"]["fname"].value;
var lname=document.forms["contact"]["lname"].value;
if(fname==""||E-mail=""||lname=""){
	alert("Fields are left empty, please fill the form");

}else{
	alert("Thank you for your feedback");
}
}
