extends layout

block content
	    h1 My First Heading
	    #login_form
	      form#f1(name="f1", method="post", action="login.php")
	        table
	          tr
	            td.f1_label User Name :
	            td
	              input(type="text", name="username", value="")
	          tr
	            td.f1_label Password  :
	            td
	              input(type="password", name="password", value="")
	          tr
	            td
	              input(type="submit", name="login", value="Log In", style="font-size:18px; ")
