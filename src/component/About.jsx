import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about" id="hakkimizda">
      <div className="about-container">
        <h1>Hakkımızda</h1>
        
        <section className="about-section">
          <h2>Biz Kimiz?</h2>
          <p>
            İzmir ve Urla'da yıllardır hizmet veren tenekecilik firması olarak, 
            çatı sistemleri, oluk montajı, izolasyon ve tüm saç işlerinde uzmanız. 
            Deneyimli kadromuz ve kaliteli malzemelerimiz ile binanızın çatı ihtiyaçlarına 
            profesyonel çözümler sunuyoruz.
          </p>
        </section>

        <section className="about-section">
          <h2>Misyonumuz</h2>
          <p>
            Müşteri memnuniyetini ön planda tutarak, İzmir ve Urla'da en kaliteli 
            çatı ve oluk hizmetlerini sunmak, uzun ömürlü ve estetik çözümler üretmek 
            bizim önceliğimizdir.
          </p>
        </section>

        <section className="about-section">
          <h2>Vizyonumuz</h2>
          <p>
            İzmir bölgesinde çatı ve tenekecilik sektöründe öncü ve güvenilir bir marka 
            olarak, modern teknikler ve kaliteli malzemelerle sürekli gelişim içinde olmaktır.
          </p>
        </section>

        <section className="about-values">
          <h2>Değerlerimiz</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Kalite</h3>
              <p>Her işimizde en yüksek kalite standartları</p>
            </div>
            <div className="value-item">
              <h3>Güven</h3>
              <p>Müşteri memnuniyeti ve güveni</p>
            </div>
            <div className="value-item">
              <h3>Tecrübe</h3>
              <p>İzmir'de yıllara dayanan çatı ve oluk tecrübesi</p>
            </div>
            <div className="value-item">
              <h3>Yenilikçilik</h3>
              <p>Modern çatı sistemleri ve dayanıklı malzemeler</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
