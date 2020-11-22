<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Log In</title>
		<link rel="stylesheet" href="register.css" />
	</head>
	<style>
.base{
    font-family:sans-serif;
width:100%;
padding:20px;
text-align:center;
opacity:0.8;
border-radius:5px;
}

.error {
    background-color:red;
}
.success {
    background-color:green;
}
</style>

<?php
if(isset($_POST['submit']))
   { 
	   if(empty($_POST['age']) || empty($_POST['email']) || empty($_POST['password']) || empty($_POST['email'])) 
			echo "<h1 class='error base'>Error....Empty fields disallowed!!</h1>";
   		 
		else if(strlen($_POST['password'])<=8)  
			echo "<h1 class='error base'>Error....Password must be greater than eight chars long!</h1>";
  		
		else if(empty(strpos($_POST['email'],'@')))  
			echo "<h1 class='error base'>Error....Email must contain '@'</h1>";
		else if(!is_numeric($_POST['age']))  
			echo "<h1 class='error base'>Error....Age must be a number</h1>";
		else{
        $conn = new mysqli('localhost','root','','form_valid_db') or die('Unable to connect');
        $query=sprintf("INSERT INTO register (age,email,passwword,username) VALUES ('%u','%s','%s','%s')",$_POST['age'],$_POST['email'],$_POST['password'],$_POST['username']);
        if(mysqli_query($conn,$query))
            echo "<h1 class='success base'>Successfully registered</h1>";
		else
		echo mysqli_error($conn);
		}
	}
        
    ?>

	<body>
	
		<div class="container">
			<h1>Register</h1>
			<form  method="POST" action="register.php">
				<input
					type="text"
					name="username"
					placeholder="Username"
				/>
				<input
					
					name="age"
					placeholder="Age"
				/>
				<input
					
					name="email"
					placeholder="Email"
				/>
				
				<input
					type="password"
					name="password"
					placeholder="Password"
				/>
				
				<button type="submit" name="submit" >Submit</button>
			</form>
		</div>

	</body>
</html>
