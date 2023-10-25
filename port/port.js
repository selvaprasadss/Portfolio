/* dark mode & light mode */
const toggleswitch = document.querySelector(".toggleswitch");

toggleswitch.addEventListener("click", function () {
  document.body.classList.toggle("switch");
});

/* Email js code */
function sendMail() {
  var template = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  var serviceID = "service_m1bhvbk";
  var templateId = "template_4p3bl4j";

  emailjs
    .send(serviceID, templateId, template)
    .then(function (res) {
      alert("Email send successfully...! " + res.status);
    })
    .catch("sorry the email is not send..");
}
