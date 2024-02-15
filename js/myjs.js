function mylogin()
{
	document.getElementById("loginForm").style.display="block";
	document.getElementById("signupForm").style.display="none";
}
function mysignup()
{
    document.getElementById("loginForm").style.display="none";
	document.getElementById("signupForm").style.display="block";
}
function openpop(n)
{
	document.getElementById('pop'+n).style.display='block';
	document.getElementById('fade'+n).style.display='block';
}
function closepop(n)
{
	document.getElementById('pop'+n).style.display='none';
	document.getElementById('fade'+n).style.display='none';a
}
function addtocart(x)
{
	if (x == 1)
	{
		document.getElementById('cart').innerHTML += "Bass";
		document.getElementById('cart').innerHTML += "<br>";
	}
	else if(x == 2)
	{
		document.getElementById('cart').innerHTML += "Goldfish";
		document.getElementById('cart').innerHTML += "<br>";
	}
	else if(x == 3)
	{
		document.getElementById('cart').innerHTML += "Angler Fish";
		document.getElementById('cart').innerHTML += "<br>";
	}
	else if(x == 4)
	{
		document.getElementById('cart').innerHTML += "Magikarp";
		document.getElementById('cart').innerHTML += "<br>";
	}
	else if(x == 5)
	{
		document.getElementById('cart').innerHTML += "Fish Fry";
		document.getElementById('cart').innerHTML += "<br>";
	}
}
function displaycart()
{
	document.getElementById('cart-content').style.display='block';
}