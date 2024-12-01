document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    const responseMessage = document.getElementById('responseMessage');

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(bookingForm); // Collect form data

        fetch('process_booking.php', {
            method: 'POST',
            body: formData
        })
            .then(async (response) => {
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP Error: ${response.status}, ${errorText}`);
                }
                return response.json(); // Parse the JSON response
            })
            .then(data => {
                console.log('Server Response:', data); // Log server response
                if (data.status === 'success') {
                    responseMessage.textContent = data.message;
                    responseMessage.classList.add('success'); // Add success class
                    responseMessage.classList.remove('error');
                    bookingForm.reset(); // Clear the form after success
                } else {
                    responseMessage.textContent = data.message;
                    responseMessage.classList.add('error'); // Add error class
                    responseMessage.classList.remove('success');
                }
            })
            .catch(error => {
                console.error('AJAX Error:', error); // Log the error
                responseMessage.textContent = 'An error occurred. Please try again.';
                responseMessage.classList.add('error'); // Add error styling
                responseMessage.classList.remove('success');
            });
    });
});
