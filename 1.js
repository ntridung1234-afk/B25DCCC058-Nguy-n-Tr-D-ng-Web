document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("current-year");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const messageInput = document.getElementById("message");
    const charCount = document.getElementById("char-count");
    const maxChars = 200;
    messageInput.addEventListener("input", () => {
        let length = messageInput.value.length;
        if (length > maxChars) {
            messageInput.value = messageInput.value.substring(0, maxChars);
            length = maxChars;
        }
        charCount.textContent = length;
    });

    const contactForm = document.getElementById("contact-form");
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const formSuccess = document.getElementById("form-success");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;
        document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");
        formSuccess.textContent = "";
        if (fullnameInput.value.trim() === "") {
            showError(fullnameInput, "Họ và tên không được để trống");
            isValid = false;
        } else if (fullnameInput.value.trim().length < 3) {
            showError(fullnameInput, "Họ và tên phải có ít nhất 3 ký tự");
            isValid = false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email không được để trống");
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, "Email không đúng định dạng ");
            isValid = false;
        }
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Lời nhắn không được để trống");
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, "Lời nhắn phải dài ít nhất 10 ký tự");
            isValid = false;
        }
        if (isValid) {
            formSuccess.textContent = "Gửi thông tin thành công!";
            contactForm.reset();
            charCount.textContent = "0";
        }
    });
    function showError(inputElement, message) {
        const formGroup = inputElement.parentElement;
        const errorElement = formGroup.querySelector(".error-msg");
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

