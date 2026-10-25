import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: "🏠",
      title: "Tenekecilik",
      desc: "Teneke ve sac işlerinde ölçüye özel üretim ve uygulama"
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Yağmur Oluğu",
      desc: "Yağmur suyunu güvenle tahliye eden oluk üretimi ve montajı"
    },
    {
      id: 3,
      icon: "💧",
      title: "Saç İşleri",
      desc: "İhtiyaca uygun sac kesim, büküm ve montaj işleri"
    },
    {
      id: 4,
      icon: "🔧",
      title: "Baca Dibi",
      desc: "Baca çevresinde su sızıntılarına karşı sac uygulamaları"
    },
    {
      id: 5,
      icon: "🏗️",
      title: "Çatı İşleri",
      desc: "Çatı kaplama, bakım ve tamamlayıcı sac uygulamaları"
    },
    {
      id: 6,
      icon: "⚡",
      title: "Su Oluğu",
      desc: "Yapıya uygun su oluğu üretimi ve montajı"
    },
    {
      id: 7,
      icon: "🔥",
      title: "Mangal İmalatı",
      desc: "İsteğe ve ölçüye göre mangal imalatı"
    },
    {
      id: 8,
      icon: "🌬️",
      title: "Havalandırma İşleri",
      desc: "Havalandırma kanalı ve bağlantı parçalarının üretimi ve montajı"
    },
    {
      id: 9,
      icon: "▦",
      title: "Izgara Sipariş İşleri",
      desc: "Ölçü ve ihtiyaca göre ızgara imalatı ve sipariş hazırlığı"
    },
    {
      id: 10,
      icon: "🔩",
      title: "Demir İşleri",
      desc: "İhtiyaca uygun demir imalat ve montaj işleri"
    }
  ];

  return (
    <div className="services" id="hizmetlerimiz">
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
              <p>Yıllardır hizmet veren deneyimli ekip</p>
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
              <p>Uygun fiyatlarla profesyonel hizmet</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
