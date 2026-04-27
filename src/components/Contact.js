import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

// sous composant réutilisable
function ContactContent({ state, handleSubmit, text }) {
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="nom-mail">
        <div>
          <label htmlFor="name">
            {text.nameLabel}
            <input
              id="name"
              type="text"
              name="name"
              placeholder={text.namePlaceholder}
              required
            />
          </label>

          <label htmlFor="email">
            Email :
            <input
              id="email"
              type="email"
              name="email"
              placeholder={text.emailPlaceholder}
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
            <img
              src={`${process.env.PUBLIC_URL}/linkedin2.png`}
              className="sociallinkedin"
              alt="LinkedIn"
            />
          </a>

          <a
            href="https://www.instagram.com/cyrine_zrk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src={`${process.env.PUBLIC_URL}/instagram2.png`}
              className="social-icon"
              alt="Instagram"
            />
          </a>
        </div>
      </div>

      <label htmlFor="message">
        Message :
        <textarea
          id="message"
          name="message"
          placeholder={text.messagePlaceholder}
          required
        ></textarea>
      </label>

      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? text.sending : text.send}
      </button>
    </form>
  );
}

// --- Composant principal ---
export default function ContactForm({ language = 'fr' }) {
  const [state, handleSubmit] = useForm("xeorobow");
  const texts = {
    fr: {
      nameLabel: 'Qui êtes-vous ? :',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'Votre email',
      messagePlaceholder: 'Votre message',
      sending: 'Envoi...',
      send: 'Envoyer',
      success: 'Merci !! Ton message a bien été envoyé',
    },
    en: {
      nameLabel: 'Who are you? :',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message',
      sending: 'Sending...',
      send: 'Send',
      success: 'Thank you! Your message has been sent',
    },
  };
  const text = texts[language];

  if (state.succeeded) {
    return <p>{text.success}</p>;
  }

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <ContactContent state={state} handleSubmit={handleSubmit} text={text} />
      </div>
    </div>
  );
}
