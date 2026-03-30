document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookieConsent")) {
    document.querySelector(".cookie-banner").style.display = "block";
  }

  document.getElementById("acceptCookies")?.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "true");
    document.querySelector(".cookie-banner").style.display = "none";
  });
});