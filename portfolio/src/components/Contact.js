import React from "react";
import "./Contact.css";

export default function ContactForm() {
  return (
    <div className="contact-container">
      <h2>Contactez-moi</h2>
      <form className="contact-form">
        <label>
          Nom :
          <input type="text" name="name" placeholder="Votre nom" />
        </label>

        <label>
          Email :
          <input type="email" name="email" placeholder="Votre email" />
        </label>

        <label>
          Message :
          <textarea name="message" placeholder="Votre message"></textarea>
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
