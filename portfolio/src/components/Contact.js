import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

// sous composant réutilisable
function ContactContent({ state, handleSubmit }) {
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="nom-mail">
        <div>
          <label htmlFor="name">
            Qui êtes-vous ? :
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Votre nom"
              required
            />
          </label>

          <label htmlFor="email">
            Email :
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Votre email"
              required
            />
          </label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="reso2">
          <a
            href="https://www.linkedin.com/in/cyrine-zarkouna-6022301b1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={'${process.env.PUBLIC_URL}/linkedin2.png'} className="sociallinkedin" alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/cyrine_zrk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={'${process.env.PUBLIC_URL}/instagram2.png'} className="social-icon" alt="Instagram" />
          </a>
        </div>
      </div>

      <label htmlFor="message">
        Message :
        <textarea
          id="message"
          name="message"
          placeholder="Votre message"
          required
        ></textarea>
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? "Envoi..." : "Envoyer"}
      </button>
    </form>
  );
}

// --- Composant principal ---
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeorobow");

  if (state.succeeded) {
    return <p>Merci !! Ton message a bien été envoyé </p>;
  }

  return (
    <div className="contact-container">
      <ContactContent state={state} handleSubmit={handleSubmit} />
    </div>
  );
}
