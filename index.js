function validation(){
			var x=document.forms["myform"]["name"].value;
			var y=document.forms["myform"]["email"].value;
			var z=document.forms["myform"]["message"].value;
			var patt=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
			if(x==null||x=="")
        {
        	alert("Username Shouldnt be empty!!");
        }
        if(y.match(patt)){
        	alert("Valid email");

        }
        else
        {
        	alert("Invalid email!!");
        }
        if(z<10)
        {
        	alert("Message Shouldnt be less than 10 character!!");
        }}