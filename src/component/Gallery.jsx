import React from 'react';
import './Gallery.css';

function Gallery() {
  // Örnek galeri resimleri (placeholder)
  const galleryItems = [
    { id: 1, title: "Eksiz Oluk Montajı", desc: "Urla villa projesi" },
    { id: 2, title: "Çatı İzolasyonu", desc: "İzmir çatı yalıtım işi" },
    { id: 3, title: "Yağmur İniş Borusu", desc: "Komplet iniş borusu montajı" },
    { id: 4, title: "Duvar Dibi Saç", desc: "Duvar dibi detay işleri" },
    { id: 5, title: "Baca Dibi İşleri", desc: "Baca çevresi su yalıtımı" },
    { id: 6, title: "Kenet Çatı Sistemi", desc: "Modern kenet çatı uygulaması" }
  ];

  return (
    <div className="gallery">
      <div className="gallery-container">
        <h1>Galeri</h1>
        <p className="gallery-intro">Yaptığımız işlerden bazı örnekler</p>
        
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-placeholder">
                <span className="placeholder-icon">🚗</span>
              </div>
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

