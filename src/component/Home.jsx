import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { GalleryPreview } from './Gallery';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-brand">GÜLHAN</span>
            <span className="title-main">Profesyonel</span>
            <span className="title-accent">Tenekecilik Hizmeti</span>
          </h1>
          <p className="hero-description">Uzman Kadro | Modern Ekipman | Kaliteli İşçilik</p>

           
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Neden Biz?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Uzman Ekip</h3>
            <p>İzmir ve Urla'da 15 yıllık deneyime sahip uzman tenekeci kadromuz</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Modern Malzeme</h3>
            <p>Dayanıklı ve kaliteli çatı kaplama malzemeleri ile uzun ömürlü çözümler</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💎</div>
            <h3>Garantili Hizmet</h3>
            <p>Tüm çatı ve oluk işlerimizde garanti sertifikası</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Hızlı Teslimat</h3>
            <p>Randevu sistemi ile zamanında ve hızlı servis garantisi</p>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <GalleryPreview />
      <Contact />
    </div>
  );
}

export default Home;
