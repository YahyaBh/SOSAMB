"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import "./page.scss";

import { FaWhatsapp } from "react-icons/fa";
import SplitText from "./textEf";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Home() {
  const [isResponsive, setIsResponsive] = useState(false);
  const [imageCont, setImageCont] = useState('')


  const toggleNavbar = () => {
    setIsResponsive(!isResponsive);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);


  useEffect(() => {
    if (imageCont !== '') {
      window.document.body.style.overflow = `hidden`
    } else {
      window.document.body.style.overflow = `auto`
    }
  }, [imageCont])




  return (
    <>
      <header id="home">
        <div className="container">
          <div className="left">
            <h3>SOS Ambulance Rabat/Salé</h3>
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
              <a href="https://wa.me/212752921397" target="_blank" className="btn2"><FaWhatsapp /> Contacter Nous </a>
              <a href="tel:+2120752921397" className="btn1">Appeler Maintenant</a>
            </div>
          </div>

          <div className="right">
            <img src="/Assets/Amb.svg" alt="ambulance" data-aos="fade-left" />
          </div>
        </div>
      </header>

      <section className="services" id="services">
        <div className="container">
          <Link href="/services/transport-medicalise" className="card" data-aos="zoom-in-up">
            <img src="/Assets/AmbIco.svg " alt="ambulance" />
            <div className="content">
              <h3>Transport médicalisé </h3>
              <p>
                Déplacement sécurisé des patients
              </p>
            </div>
          </Link>

          <Link href="/services/intervention-urgence" className="card" data-aos="zoom-in-up" data-aos-delay="100">
            <img src="/Assets/EmerIco.svg " alt="ambulance" />
            <div className="content">
              <h3>Intervention d'urgence</h3>
              <p>
                Assistance immédiate en cas de besoin
              </p>
            </div>
          </Link>

          <Link href="/services/assistance-patients" className="card" data-aos="zoom-in-up" data-aos-delay="200">
            <img src="/Assets/AssistIco.svg " alt="ambulance" />
            <div className="content">
              <h3>Assistance aux patients</h3>
              <p>
                Prise en charge et soins sur place
              </p>
            </div>
          </Link>
        </div>
      </section>


      <section className="gallery" id="about">

        <div className="title">
          <h2>Nos Interventions en Images</h2>
          <p>Découvrez nos services en action et notre engagement envers votre sécurité.</p>
        </div>


        {imageCont && <div onClick={() => setImageCont('')} className="imageOverContainer">
          <div className="imageCont">
            <img src={imageCont} alt="ambulance1" />
          </div>
        </div>}

        <div className="imageContainer">

          <div className="div1" data-aos="zoom-out" onClick={() => setImageCont('/Assets/VB1.svg')}>
            <img src="/Assets/VB1.svg" alt="ambulance1" />
          </div>
          <div className="div2" data-aos="zoom-out" data-aos-delay="100" onClick={() => setImageCont('/Assets/VB2.svg')}>
            <img src="/Assets/VB2.svg" alt="ambulance2" />
          </div>
          <div className="div3" data-aos="zoom-out" data-aos-delay="150" onClick={() => setImageCont('/Assets/VB3.svg')}>
            <img src="/Assets/VB3.svg" alt="ambulance3" />
          </div>
          <div className="div4" data-aos="zoom-out" data-aos-delay="200" onClick={() => setImageCont('/Assets/VB4.svg')}>
            <img src="/Assets/VB4.svg" alt="ambulance4" />
          </div>
          <div className="div5" data-aos="zoom-out" data-aos-delay="250" onClick={() => setImageCont('/Assets/VB5.svg')}>
            <img src="/Assets/VB5.svg" alt="ambulance5" />
          </div>
          <div className="div6" data-aos="zoom-out" data-aos-delay="300" onClick={() => setImageCont('/Assets/VB6.svg')}>
            <img src="/Assets/VB6.svg" alt="ambulance6" />
          </div>
          <div className="div7" data-aos="zoom-out" data-aos-delay="350" onClick={() => setImageCont('/Assets/VB7.svg')}>
            <img src="/Assets/VB7.svg" alt="ambulance7" />
          </div>
          <div className="div8" data-aos="zoom-out" data-aos-delay="400" onClick={() => setImageCont('/Assets/VB8.svg')}>
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
          <div className="card" data-aos="fade-up" >
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

          <div className="card" data-aos="fade-up" data-aos-delay="50">
            <div className="header">
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
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

          <div className="card" data-aos="fade-up" data-aos-delay="100">
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
            <iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=&amp;height=&amp;hl=en&amp;q=Bloc 11 numéro 776 Hay Essalam, 11003 SOS Rabat/Salé AMBULANCE&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            <div className="address">
              <h3>📍 Adresse : Bloc 11 numéro 776 Hay Essalam, 11003 , Rabat-Salé</h3>
              <h3>📞 Téléphone : +212 0752921397</h3>
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

      
    </>
  );
}
