<?php
// Database connection
$conn = new mysqli('localhost', 'metauser', 'Sudhansh9386u@@', 'user_auth');

// Check connection
if ($conn->connect_error) {
    echo "connection Failed";
    die("Connection failed: " . $conn->connect_error);
    
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize and validate inputs
    $first_name = $conn->real_escape_string($_POST['first_name']);
    $last_name = $conn->real_escape_string($_POST['last_name']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone_number = (int)$_POST['phone_number']; // Casting to int for the INT field in the database

    // Password hashing (if needed for login systems)
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    // Insert user data into the database
    $query = "INSERT INTO users (first_name, last_name, email, phone_number) 
              VALUES ('$first_name', '$last_name', '$email', '$phone_number')";

    if ($conn->query($query) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();

error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
