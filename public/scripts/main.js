(function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  document.querySelectorAll(".faq-item .faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      q.closest(".faq-item").classList.toggle("open");
    });
  });

  const checklist = document.querySelector("[data-eligibility]");
  if (checklist) {
    const result = document.querySelector("#eligibilityResult");
    function updateEligibility() {
      const checked = checklist.querySelectorAll(".check-item.checked").length;
      if (checked >= 3) {
        result.className = "result good";
        result.textContent = "Likely suitable for this role. You matched " + checked + " of 5 points.";
      } else {
        result.className = "result low";
        result.textContent = "You may still review details. You matched " + checked + " of 5 points.";
      }
    }

    checklist.querySelectorAll(".check-item").forEach(function (item) {
      item.addEventListener("click", function () {
        item.classList.toggle("checked");
        const box = item.querySelector(".check-box");
        if (box) {
          box.textContent = item.classList.contains("checked") ? "\u2713" : "";
        }
        updateEligibility();
      });
    });

    updateEligibility();
  }

  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    const status = contactForm.querySelector("[data-contact-status]");
    const nameInput = contactForm.querySelector("#name");
    const emailInput = contactForm.querySelector("#email");
    const messageInput = contactForm.querySelector("#message");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";

      if (!name || !email || !message) {
        if (status) {
          status.style.color = "#dc2626";
          status.textContent = "Please fill out your name, email, and message.";
        }
        return;
      }

      const mailto = "mailto:support@skillstartjobs.online";
      const subject = encodeURIComponent("Website contact form message from " + name);
      const body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
      );

      if (status) {
        status.style.color = "#1d7a5f";
        status.textContent = "Opening your email app to send this message.";
      }

      window.location.href = mailto + "?subject=" + subject + "&body=" + body;
    });
  }
})();



