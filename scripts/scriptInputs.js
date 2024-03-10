const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const userMessage = document.getElementById("text-area");
const permissionSend = false;

function sendEmail(event) {
  let mess = "";
  if (userMessage) {
    mess = userMessage.value;
  }
  let params = {
    nameValue: nameInput.value,
    emailValue: emailInput.value,
    mess,
  };
  event.preventDefault();
  if (permissionSend) {
    emailjs
      .send("service_g60qzha", "template_y0rvdn7", params)
      .then(function () {
        alert("Успішно відправлено! ");
      });
  } else {
    alert(
      "Шановний " +
        nameInput.value +
        " \nдякую вам за інтерес до даного сайту \n" +
        "цей сайт розроблено як демо версію сайту, \n" +
        "тому ваші дані не будуть ніяким способом \n" +
        "оброблені або куди - небудь надіслані!"
    );
  }
}
