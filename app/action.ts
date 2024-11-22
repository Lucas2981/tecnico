"use server";

import { sendEmail } from "@/lib/brevo";
import { redirect } from "next/navigation";

export async function handleForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const asunto = formData.get("asunto");
  const message = formData.get("message");

  if (!name || !email || !asunto || !message) {
    return console.log("Todos los campos son obligatorios");
  }
}

// await sendEmail({
//   subject: asunto as string,
//   to: [{ email: email as string, name: name as string }],
//   htmlContent: message as string,
//   sender: {
//     name: "TecniCo",
//     email: "lucas298113@gmail.com",
//   },
// });

// return redirect("/");
