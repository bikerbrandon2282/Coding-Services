/* =========================================================
   5. Contact Form Validation (Enhanced)
   ========================================================= */

const contactForm = document.querySelector("form");

if (contactForm) {
  const nameInput = contactForm.querySelector("input[type='text']");
  const emailInput = contactForm.querySelector("input[type='email']");
  const subjectInput = contactForm.querySelector("input[type='text']:nth-of-type(2)");
  const messageInput = contactForm.querySelector("textarea");

  const showError = (input, message) => {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");

    let feedback = input.nextElementSibling;
    if (!feedback || !feedback.classList.contains("invalid-feedback")) {
      feedback = document.createElement("div");
      feedback.className = "invalid-feedback";
      input.insertAdjacentElement("afterend", feedback);
    }
    feedback.textContent = message;
  };

  const showSuccess = (input) => {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;

    // Name validation
    if (!nameInput.value.trim()) {
      showError(nameInput, "Please enter your name.");
      valid = false;
    } else {
      showSuccess(nameInput);
    }

    // Email validation
    if (!emailInput.value.trim()) {
      showError(emailInput, "Please enter your email address.");
      valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address.");
      valid = false;
    } else {
      showSuccess(emailInput);
    }

    // Subject validation
    if (!subjectInput.value.trim()) {
      showError(subjectInput, "Please enter a subject.");
      valid = false;
    } else {
      showSuccess(subjectInput);
    }

    // Message validation
    if (!messageInput.value.trim()) {
      showError(messageInput, "Please enter a message.");
      valid = false;
    } else {
      showSuccess(messageInput);
    }

    // Final result
    if (valid) {
      alert("Your message has been validated successfully! (Demo mode — no backend yet)");
      contactForm.reset();

      // Remove validation styling after reset
      [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        input.classList.remove("is-valid");
      });
    }
  });
}
