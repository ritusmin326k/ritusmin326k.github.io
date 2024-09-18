const adminPassword = "RitusminSaikia9435@#"; // Your chosen password

function displayLoveLetter() {
    var name = document.getElementById("nameInput").value.trim().toLowerCase();

    // List of acceptable names
    var validNames = ['anuska bhuyan', 'anushka bhuyan', 'anushkaa bhuyan','anuskaa bhuyan','anuskaa','anuska','anushka','anushkaa'];

    // Check if the entered name matches one of the valid names
    if (validNames.includes(name)) {
        var formattedName = name.charAt(0).toUpperCase() + name.slice(1);
        document.getElementById("userName").innerText = formattedName;
        document.getElementById("inputSection").style.display = "none";
        document.getElementById("letterSection").style.display = "block";
        document.getElementById("errorMessage").style.display = "none";
        
        // Show the "Accept" button if the name is valid
        document.getElementById("acceptButton").style.display = "block";

        saveName(formattedName); // Save the name
    } else {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("letterSection").style.display = "none";
        document.getElementById("acceptButton").style.display = "none";
    }
}

// Function to save the name in localStorage
function saveName(name) {
    let savedNames = JSON.parse(localStorage.getItem("names")) || []; // Get existing names
    savedNames.push(name); // Add new name
    localStorage.setItem("names", JSON.stringify(savedNames)); // Save the updated names list
}

// Function to check if the correct password is entered
function checkPassword() {
    var enteredPassword = document.getElementById("passwordInput").value;

    // If the password is correct, display the saved names
    if (enteredPassword === adminPassword) {
        document.getElementById("namesList").style.display = "block"; // Show the list of names
        displaySavedNames(); // Display the names
    } else {
        alert("Incorrect password! Access denied.");
    }
}

// Function to display all saved names
function displaySavedNames() {
    let savedNames = JSON.parse(localStorage.getItem("names")) || [];
    let namesList = document.getElementById("savedNames");
    namesList.innerHTML = ""; // Clear existing list

    // Display each saved name as a list item
    savedNames.forEach(function(name) {
        let listItem = document.createElement("li");
        listItem.textContent = name;
        namesList.appendChild(listItem);
    });
}

// Function to show the thank you message when the "Accept" button is clicked
function showThankYou() {
    var name = document.getElementById("userName").innerText;
    let acceptedNames = JSON.parse(localStorage.getItem("acceptedNames")) || []; // Get existing accepted names
    if (!acceptedNames.includes(name)) {
        acceptedNames.push(name); // Add the accepted name
        localStorage.setItem("acceptedNames", JSON.stringify(acceptedNames)); // Save the updated list
    }
    document.getElementById("letterSection").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
}

// Display saved names when the page loads
window.onload = function() {
    displaySavedNames();
};