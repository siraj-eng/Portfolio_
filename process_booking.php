<?php
header('Content-Type: application/json'); // Ensure JSON response
try {
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $name = htmlspecialchars(trim($_POST['fname']));
        $email = htmlspecialchars(trim($_POST['email']));
        $phone = htmlspecialchars(trim($_POST['phone']));
        $message = htmlspecialchars(trim($_POST['message']));

        // Validate required fields
        if (empty($name) || empty($email) || empty($phone) || empty($message)) {
            echo json_encode(["status" => "error", "message" => "All fields are required."]);
            exit;
        }

        // Mail configuration
        $to = 'wahhajsiraj16@gmail.com';
        $subject = "New Booking Request from $name";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
        $headers .= "From: $email" . "\r\n";

        $email_message = "<h3>Booking Request</h3>
                          <p><strong>Name:</strong> $name</p>
                          <p><strong>Email:</strong> $email</p>
                          <p><strong>Phone:</strong> $phone</p>
                          <p><strong>Message:</strong> $message</p>";

        // Send email
        if (mail($to, $subject, $email_message, $headers)) {
            echo json_encode(["status" => "success", "message" => "Booking confirmed! Your message has been sent."]);
        } else {
            error_log("Mail function failed.");
            echo json_encode(["status" => "error", "message" => "There was a problem sending your message. Please try again later."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid request method."]);
    }
} catch (Exception $e) {
    error_log("Exception: " . $e->getMessage());
    echo json_encode(["status" => "error", "message" => "An unexpected error occurred. Please try again later."]);
}
?>
