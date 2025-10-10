import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-main">Profesyonel</span>
            <span className="title-accent">Tenekecilik Hizmeti</span>
          </h1>
          <p className="hero-description">Uzman Kadro | Modern Ekipman | Kaliteli İşçilik</p>
          <p className="hero-subtitle">Aracınız Güvenle Bizimle!</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Yıl Tecrübe</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Mutlu Müşteri</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">%100</span>
              <span className="stat-label">Memnuniyet</span>
            </div>
          </div>
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

      <section className="services-preview">
        <h2 className="section-title">Hizmet Alanlarımız</h2>
        <div className="services-list">
          <div className="service-item">
            <span className="service-bullet">▸</span>
            Urla Eksiz Oluk
          </div>
          <div className="service-item">
            <span className="service-bullet">▸</span>
            İzmir Çatı İzolasyon
          </div>
          <div className="service-item">
            <span className="service-bullet">▸</span>
            İzmir Yağmur İniş Boruları
          </div>
          <div className="service-item">
            <span className="service-bullet">▸</span>
            İzmir Duvar Dibi Saç İşleri
          </div>
          <div className="service-item">
            <span className="service-bullet">▸</span>
            İzmir Baca Dibi Saç İşleri
          </div>
          <div className="service-item">
            <span className="service-bullet">▸</span>
            İzmir Kenet Çatı Sistemleri
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

