import brevo, { TransactionalEmailsApiApiKeys } from "@getbrevo/brevo";

console.log(brevo); // Verifica si brevo es undefined

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
);

const smtpEmail = new brevo.SendSmtpEmail();

export async function sendEmail() {
  smtpEmail.subject = "Hello world!";
  smtpEmail.to = [
    {
      email: "pKgMw@example.com",
      name: "John Doe",
    },
  ];
  smtpEmail.htmlContent = "<h1>Hello world!</h1>";
  smtpEmail.sender = {
    name: "TecniCo",
    email: "lucas298113@gmail.com",
  };

  await apiInstance.sendTransacEmail(smtpEmail);
}
