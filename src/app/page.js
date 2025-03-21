"use client"
import { useState } from "react";
import "./page.scss";

import { FaWhatsapp } from "react-icons/fa";
import SplitText from "./textEf";

export default function Home() {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleNavbar = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <>
      <nav>

        <div className="logo">
          <img src="logo.svg" alt="logo" />
        </div>

        <div className="links">
          <a href="#home">Acceuil</a>
          <a href="#services">Nos Services</a>
          <a href="#about">À Propos</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="call">
          <a href="tel:+2120656561701">Appeler Maintenant</a>
        </div>

        <div className="toggle" onClick={toggleNavbar}>
          <i className={isResponsive ? "fa fa-times" : "fa fa-bars"}></i>
        </div>

        {isResponsive && (
          <div className="dropdown">
            <a>Acceuil</a>
            <a>Nos Services</a>
            <a>À Propos</a>
            <a>Contact</a>
            <button>Appeler Maintenant</button>
          </div>
        )}
      </nav>


      <header id="home">
        <div className="container">
          <div className="left">
            <h3>SOS Rabat/Salé AMBULANCE </h3>
            <h1>
              <SplitText
                text="Service d'ambulance rapide et fiable, disponible"
                className="text-2xl font-semibold text-center"
                delay={20}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />


              <span className="colored">
                <SplitText
                  text="24h/24 et 7j/7."
                  className="text-2xl font-semibold text-center"
                  delay={60}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </span>
            </h1>
            <p>
              Besoin d’une intervention d’urgence ? Nous assurons un transport sécurisé et une assistance immédiate.
            </p>

            <div className="btns">
              <a href="https://wa.link/5uq4en" target="_blank" className="btn2"><FaWhatsapp /> Contacter Nous </a>
              <a href="tel:+2120656561701" className="btn1">Appeler Maintenant</a>
            </div>
          </div>

          <div className="right">
            <img src="/Assets/Amb.svg" alt="ambulance" />"
          </div>
        </div>
      </header>

      <section className="services" id="services">
        <div className="container">
          <div className="card">
            <img src="/Assets/AmbIco.svg " alt="ambulance" />
            <div className="content">
              <h3>Service d'ambulance rapide et fiable</h3>
              <p>
                Déplacement sécurisé des patients
              </p>
            </div>
          </div>

          <div className="card">
            <img src="/Assets/EmerIco.svg " alt="ambulance" />
            <div className="content">
              <h3>Service d'ambulance rapide et fiable</h3>
              <p>
                Nous assurons un transport sécurisé et une assistance immédiate.
              </p>
            </div>
          </div>

          <div className="card">
            <img src="/Assets/AssistIco.svg " alt="ambulance" />
            <div className="content">
              <h3>Service d'ambulance rapide et fiable</h3>
              <p>
                Nous assurons un transport sécurisé et une assistance immédiate.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="gallery" id="about">

        <div className="title">
          <h2>Nos Interventions en Images</h2>
          <p>Découvrez nos services en action et notre engagement envers votre sécurité.</p>
        </div>

        <div className="imageContainer">
          <div className="div1">
            <img src="/Assets/VB1.svg" alt="ambulance1" />
          </div>
          <div className="div2">
            <img src="/Assets/VB2.svg" alt="ambulance2" />
          </div>
          <div className="div3">
            <img src="/Assets/VB3.svg" alt="ambulance3" />
          </div>
          <div className="div4">
            <img src="/Assets/VB4.svg" alt="ambulance4" />
          </div>
          <div className="div5">
            <img src="/Assets/VB5.svg" alt="ambulance5" />
          </div>
          <div className="div6">
            <img src="/Assets/VB6.svg" alt="ambulance6" />
          </div>
          <div className="div7">
            <img src="/Assets/VB7.svg" alt="ambulance7" />
          </div>
          <div className="div8">
            <img src="/Assets/VB8.svg" alt="ambulance8" />
          </div>
        </div>

      </section>

      <section className="feedback">

        <div className="title">
          <h2>🛑 Ce que disent nos patients</h2>
          <p>Découvrez les témoignages de ceux qui nous ont fait confiance.</p>
        </div>

        <div className="feed-container">
          <div className="card">
            <div className="header">
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star half"></i>
              </div>

              <div className="number">
                <span>4.5/5</span>
              </div>
            </div>

            <p>Excellent service Ambulanciers très professionnel l équipe est réellement génial un grand merci 🙏🏻</p>

            <div className="footer">
              <div className="avatar">
                <span>KA</span>
              </div>
              <div className="info">
                <h3>Khalid Arraji</h3>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="header">
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star empty"></i>
              </div>

              <div className="number">
                <span>5/5</span>
              </div>
            </div>

            <p>Service rapide tbarkelah 🙏🏾🙏🏾.Bonne continuation</p>

            <div className="footer">
              <div className="avatar">
                <span>MN</span>
              </div>
              <div className="info">
                <h3>Mehdi Noujaima</h3>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="header">
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star .empty"></i>
              </div>

              <div className="number">
                <span>4/5</span>
              </div>
            </div>

            <p>Tres bon service,equipe comprehensive, arrivé a lheure, meme le prix est convenable.</p>

            <div className="footer">
              <div className="avatar">
                <span>AO</span>
              </div>
              <div className="info">
                <h3>Azelarab Ouglaa</h3>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="contact" id="contact">

        <div className="title">
          <h2>📞 Contactez-nous</h2>
          <p>Besoin d’une ambulance ou d’informations ? Notre équipe est disponible 24h/24 et 7j/7.</p>
        </div>



        <div className="container">
          <div className="left">
            <iframe className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=&amp;height=&amp;hl=en&amp;q=Bloc 11 numéro 776 Hay Essalam, 11003 SOS Rabat/Salé AMBULANCE&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            <div className="address">
              <h3>📍 Adresse : Bloc 11 numéro 776 Hay Essalam, 11003 </h3>
              <h3>📞 Téléphone : +212 0656561701</h3>
              <h3>📧 Email : contact@sosambulance.com</h3>
            </div>
          </div>
          <div className="right">
            <div className="form">
              <div className="input">
                <input type="text" placeholder="Prenom" />
                <input type="text" placeholder="Nom" />
              </div>

              <input type="email" placeholder="Addresse e-mail" />

              <input type="tel" placeholder="Numero de téléphone" />


              <div className="input">
                <textarea placeholder="Message"></textarea>
              </div>

              <div className="btn">
                <button>Envoyer</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="left">
            <img src="logo.svg" alt="logo2" />
            <p>SAS Rabat Ambulance est un service spécialisé dans le transport sanitaire des patients nécessitant des soins et un transport adapté à leur état de santé. Que ce soit en urgence ou pour des consultations médicales, nous offrons un transport médicalisé sécurisé grâce à une flotte d'ambulances et de VSL (véhicules sanitaires légers).</p>
          </div>

          <div className="right">
            <h3>© GO ASSISTANCE MEDICALE 2025</h3>
            <h3>© Developed and Maintained By <a href="https://webinadigital.com/" target="_blank">Webina Digital</a> </h3>
          </div>
        </div>
      </footer>
    </>
  );
}
