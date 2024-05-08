document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    var isChecked = document.getElementById("exampleCheck1").checked;

    // Update modal content with form data
    var modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = "<p>Email: " + email + "</p>" +
                            "<p>Password: " + password + "</p>" +
                            "<p>Checkbox Checked: " + isChecked + "</p>";

    // Show the modal
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
});
