import React from 'react';
import './Accueil.css';
import CompetencesSlider from './slider';
import ContactForm from "./Contact";

function Accueil({ language = 'fr' }) {
  const texts = {
    fr: {
      formationsTitle: 'Formations',
      experiencesTitle: 'Expériences',
      skillsTitle: 'Compétences',
      montpellier: 'L1 - Informatique - 2022/2023',
      g4: 'L2 & L3 - Cycle Bachelor Informatique - 2023/2025',
      epitech: 'Pré-MSC & Master of Science - 2025/2028',
      majoliTitle: 'Développeuse Web - Majoli',
      majoliText: 'Développement Web, No-Code & React, Automatisation IA, Marketing, Chef de Projet',
      wajTitle: 'Chef de Projet Web - We Are Jolies',
      wajText: 'Maintenance Web, Analyse KPI, SAV, Drive & Automatisation, Data Analyse',
      bac: "Baccalauréat Générale : Spécialité Maths, Physique-Chimie, Numérique et Science de l'Informatique",
      theatre: '6 année de Théatre, avec différent professeur dont Mariem Ben Chaabane',
      chant: '7 année de Chant, avec différent professeur dont Ameni Ben Tara',
      cooking: "L'un de mes passe temps préférée est faire de bon petit plat pour mes proches.",
    },
    en: {
      formationsTitle: 'Education',
      experiencesTitle: 'Experience',
      skillsTitle: 'Skills',
      montpellier: 'Year 1 - Computer Science - 2022/2023',
      g4: 'Years 2 & 3 - Bachelor in Computer Science - 2023/2025',
      epitech: 'Pre-MSc & Master of Science - 2025/2028',
      majoliTitle: 'Web Developer - Majoli',
      majoliText: 'Web development, No-Code & React, AI automation, marketing, project management',
      wajTitle: 'Web Project Manager - We Are Jolies',
      wajText: 'Web maintenance, KPI analysis, customer support, Drive & automation, data analysis',
      bac: 'French high school diploma: Mathematics, Physics-Chemistry, Digital and Computer Science specialties',
      theatre: '6 years of theater with several teachers, including Mariem Ben Chaabane',
      chant: '7 years of singing with several teachers, including Ameni Ben Tara',
      cooking: 'One of my favorite hobbies is cooking good meals for the people close to me.',
    },
  };
  const t = texts[language];

  return (
    <>
    <div className='info'>
    <section className="accueil">
      <div className="accueil-grid">
        <div className='pro'>
          <div className='Parcours'>
            <div className="Formation">
              <h1>{t.formationsTitle}</h1>
              <ul className="formation-list">
                {/* <Slider/> */}
                <li>
                  <a href="https://www.umontpellier.fr/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/montpellier.png`} alt="Montpellier" className="ecole" />
                    <div>
                      <h3>Université de Montpellier </h3>
                      <p>{t.montpellier}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://institut-g4.fr/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/g4.png`} alt="G4" className="ecole" />
                    <div>
                      <h3>Institut G4</h3>
                      <p>{t.g4}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.epitech.eu/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/epitech.png`} alt="Epitech" className="ecole" />
                    <div>
                      <h3>Epitech</h3>
                      <p>{t.epitech}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="Alternance">
              <h1>{t.experiencesTitle}</h1>
              <ul className="experience-list">
                <li>
                  <a href="https://www.majoli.io/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/majoli.png`} alt="majoli" className="alternance" />
                    <div>
                      <h3>{t.majoliTitle}</h3>
                      <p>{t.majoliText}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://wearejolies.com/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/waj.png`} alt="waj" className="alternance" />
                    <div>
                      <h3>{t.wajTitle}</h3>
                      <p>{t.wajText}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='Compétences'>
            <h1>{t.skillsTitle}</h1>
            <CompetencesSlider />
          </div>
        </div>
        <div className='moi'>
          <div className='cyrine'>
            <h1>Zarkouna Cyrine</h1>
            <h2>21</h2>
          </div>
          <ul className='me'>
            <li>
              <img src={`${process.env.PUBLIC_URL}/bac.png`}alt="bac" className="hobby" />
              <p>{t.bac}</p>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/theatre.png`} alt="theatre" className="hobby" />
              <p>{t.theatre}</p>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/chant.png`} alt="chant" className="hobby" />
              <p>{t.chant}</p>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/chef.png`} alt="chef" className="hobby" />
              <p>{t.cooking}</p>
            </li>
          </ul>
        </div>


      </div>
    </section>
        <ContactForm language={language} />
    </div>
    </>
  );
}

export default Accueil;
