// import { SERVICE_ID, TEMPLATE_ID } from "../js/keys";

// export const sendMail = () => {
const sendMail = () => {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_vifytjq";
  const templateID = "template_nbzwh1g";
  // const serviceID = SERVICE_ID;
  // const templateID = TEMPLATE_ID;

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message has been sent successfully!!");
    })
    .catch((err) => console.log(err));
};
