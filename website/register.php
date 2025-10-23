<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


$conn = new mysqli('localhost', 'metauser', 'Sudhansh9386u@@', 'user_auth');


if ($conn->connect_error) {
   echo "can't connect";
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $first_name = filter_input(INPUT_POST, 'first_name');
    $last_name = filter_input(INPUT_POST, 'last_name');
    $email = filter_input(INPUT_POST, 'email');
    $phone_number = filter_input(INPUT_POST, 'phone_number');

    
    // Validate the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }

    // Insert user data into the database
    $query = "INSERT INTO users (first_name, last_name, email, phone_number) 
              VALUES ('$first_name', '$last_name', '$email', '$phone_number')";

    if ($conn->query($query) === TRUE) {
        echo "$first_name, you have been registered successfully !";
        echo "<table border='1' style='border-collapse: collapse;'>";
        echo "<tr><th style='text-align: center; padding: 10px;'>First Name</th><th style='text-align: center; padding: 10px;'>Last Name</th><th style='text-align: center; padding: 10px;'>Email</th></tr>";
        echo "<tr>";
        echo "<td style='text-align: center; padding: 10px;'>$first_name</td>";
        echo "<td style='text-align: center; padding: 10px;'>$last_name</td>";
        echo "<td style='text-align: center; padding: 10px;'>$email</td>";
        echo "</tr>";
        echo "</table>";


    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}

$conn->close();
?>
