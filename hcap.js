window.addEventListener('load', function () {
  const hdiv = document.getElementById("h-captcha-div");
  const siteKey = hdiv.dataset.sitekey;

  if (siteKey && hcaptcha) {
    hcaptcha.render('h-captcha-div', {
      sitekey: siteKey,
      callback: function (token) {
        // Optional: auto-submit or show the token
        console.log("h-captcha-response:", token);
      }
    });
  } else {
    document.getElementById('error2').innerText = "Failed to load hCaptcha.";
  }
});
