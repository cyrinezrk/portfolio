import React from 'react';
import './Accueil.css';
import ExperienceSlider from './slider';
import ContactForm from "./Contact";

function Accueil() {
  return (
    <>
    <div className='info'>
    <section className="accueil">
      <div className="accueil-grid">
        <div className='pro'>
          <div className='Parcours'>
            <div className="Formation">
              <h1>Formations</h1>
              <ul className="formation-list">
                {/* <Slider/> */}
                <li>
                  <a href="https://www.umontpellier.fr/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/montpellier.png`} alt="Montpellier" className="ecole" />
                    <div>
                      <h3>Université de Montpellier </h3>
                      <p>L1 - Informatique - 2022/2023</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://institut-g4.fr/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/g4.png`} alt="G4" className="ecole" />
                    <div>
                      <h3>Institut G4</h3>
                      <p>L2 & L3 - Cycle Bachelor Informatique - 2023/2025</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.epitech.eu/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/epitech.png`} alt="Epitech" className="ecole" />
                    <div>
                      <h3>Epitech</h3>
                      <p>Pré-MSC & Master of Science - 2025/2028</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="Alternance">
              <h1>Expériences</h1>
              <ul className="experience-list">
                <li>
                  <a href="https://www.majoli.io/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/majoli.png`} alt="majoli" className="alternance" />
                    <div>
                      <h3>Développeuse Web - Majoli</h3>
                      <p>Développement Web, No-Code & React, Automatisation IA, Marketing, Chef de Projet</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://wearejolies.com/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/waj.png`} alt="waj" className="alternance" />
                    <div>
                      <h3>Chef de Projet Web - We Are Jolies</h3>
                      <p>Maintenance Web, Analyse KPI, SAV, Drive & Automatisation, Data Analyse</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='Compétences'>
            <h1>Compétences</h1>
            <ExperienceSlider />
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
              <p> Baccalauréat Générale : Spécialité Maths, Physique-Chimie, Numérique et Science de l'Informatique</p>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/theatre.png`} alt="theatre" className="hobby" />
              <p> 6 année de Théatre, avec différent professeur dont Mariem Ben Chaabane</p>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/chant.png`} alt="chant" className="hobby" />
              <p>7 année de Chant, avec différent professeur dont Ameni Ben Tara</p>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/chef.png`} alt="chef" className="hobby" />
              <p> L'un de mes passe temps préférée est faire de bon petit plat pour mes proches.</p>
            </li>
          </ul>
        </div>


      </div>
    </section>
        <ContactForm />
    </div>
    </>
  );
}

export default Accueil;
