function flipCard() {
    let flipBox = document.getElementById("flipBox");
    flipBox.style.transform = flipBox.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
}

function showSignup(userType) {
    document.querySelector(".farmer").style.display = "none";
    document.querySelector(".consumer").style.display = "none";
    if (userType === "farmer") {
        document.querySelector(".farmer-signup").style.display = "flex";
    } else {
        document.querySelector(".consumer-signup").style.display = "flex";
    }
}

function hideSignup() {
    document.querySelector(".farmer-signup").style.display = "none";
    document.querySelector(".consumer-signup").style.display = "none";
    document.querySelector(".farmer").style.display = "flex";
    document.querySelector(".consumer").style.display = "flex";
}
function handleFarmerLogin(event) {
    event.preventDefault(); // Prevent the default form submission
    // Here you can add any validation or processing logic if needed
    window.location.href = 'farmer.html'; // Redirect to farmer page
}

function handleConsumerLogin(event) {
    event.preventDefault(); // Prevent the default form submission
    // Here you can add any validation or processing logic if needed
    window.location.href = 'customer.html'; // Redirect to customer page
}

function showTerms(userType) {
    const termsPopup = document.getElementById("termsPopup");
    const termsContent = document.getElementById("termsContent");
    termsPopup.style.display = "block";

    if (userType === "farmer") {
        termsContent.textContent = "Sellers must adhere to ethical selling practices by providing accurate product descriptions, ensuring quality and safety, setting fair prices, using honest weights and measures, fulfilling orders promptly, maintaining respectful customer communication, verifying product origin, and complying with all applicable laws and regulations. Sellers are encouraged to adopt environmentally responsible practices. Failure to comply may result in warnings, account suspension, or termination of selling privileges, and sellers are responsible for any legal issues arising from their sales. By agreeing to these terms, sellers commit to providing high-quality products to consumers.";
        termsPopup.dataset.userType = "farmer";
    } else {
        termsContent.textContent = "Consumers are expected to use our platform ethically and responsibly. This includes providing accurate and truthful information, adhering to stated policies, and communicating respectfully with all parties. Our platform's role is to facilitate connections and provide services; we are committed to ensuring a seamless experience and upholding the integrity of the platform. Consumers are responsible for their interactions and transactions. By using our services, consumers agree to these terms and acknowledge our role as a service provider.";
        termsPopup.dataset.userType = "consumer";
    }
}

function confirmTerms() {
    const termsCheckbox = document.getElementById("termsCheckbox");
    if (termsCheckbox.checked) {
        const termsPopup = document.getElementById("termsPopup");
        const userType = termsPopup.dataset.userType;
        termsPopup.style.display = "none";

        if (userType === "farmer") {
            document.getElementById("farmerSignupForm").submit();
        } else {
            document.getElementById("consumerSignupForm").submit();
        }

    } else {
        alert("Please agree to the terms and conditions to proceed.");
    }
}
function handleFarmerSignup(event) {
    event.preventDefault(); // Prevent the default form submission
    // Here you can add any validation or processing logic if needed
    window.location.href = 'farmer.html'; // Redirect to farmer page after signup
}

function handleConsumerSignup(event) {
    event.preventDefault(); // Prevent the default form submission
    // Here you can add any validation or processing logic if needed
    window.location.href = 'customer.html'; // Redirect to customer page after signup
}

// #######################################################################################################################

