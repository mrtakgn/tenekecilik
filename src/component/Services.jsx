import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: "🏠",
      title: "Urla Eksiz Oluk",
      desc: "Modern ve estetik eksiz oluk sistemleri, profesyonel montaj"
    },
    {
      id: 2,
      icon: "🛡️",
      title: "İzmir Çatı İzolasyon",
      desc: "Su yalıtımı ve ısı yalıtımı ile çatı izolasyon hizmetleri"
    },
    {
      id: 3,
      icon: "💧",
      title: "İzmir Yağmur İniş Boruları",
      desc: "Kaliteli malzeme ile yağmur iniş borusu montajı ve tamiri"
    },
    {
      id: 4,
      icon: "🔧",
      title: "İzmir Duvar Dibi Saç İşleri",
      desc: "Duvar dibi saç kaplama ve detay işlemleri"
    },
    {
      id: 5,
      icon: "🏗️",
      title: "İzmir Baca Dibi Saç İşleri",
      desc: "Baca çevresi su yalıtımı ve baca dibi saç uygulamaları"
    },
    {
      id: 6,
      icon: "⚡",
      title: "İzmir Kenet Çatı Sistemleri",
      desc: "Modern kenet çatı sistemleri, uzun ömürlü ve estetik çözümler"
    }
  ];

  return (
    <div className="services">
      <div className="services-container">
        <h1>Hizmetlerimiz</h1>
        <p className="services-intro">Aracınız için sunduğumuz tüm hizmetler</p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <section className="why-choose-us">
          <h2>Neden Bizi Seçmelisiniz?</h2>
          <div className="reasons">
            <div className="reason">
              <h4>✓ Uzman Kadro</h4>
              <p>İzmir ve Urla'da yıllardır hizmet veren deneyimli ekip</p>
            </div>
            <div className="reason">
              <h4>✓ Kalite Garantisi</h4>
              <p>Tüm çatı ve oluk işlerimizde garantili hizmet</p>
            </div>
            <div className="reason">
              <h4>✓ Modern Malzeme</h4>
              <p>Dayanıklı ve uzun ömürlü kaliteli malzemeler</p>
            </div>
            <div className="reason">
              <h4>✓ Uygun Fiyat</h4>
              <p>İzmir'in en uygun fiyatları ile profesyonel hizmet</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;

