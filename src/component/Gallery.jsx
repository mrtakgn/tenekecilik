import React from 'react';
import './Gallery.css';

function Gallery() {
  // Galeri resimleri
  const galleryItems = [
    { 
      id: 1, 
      title: "Eksiz Oluk Montajı", 
      desc: "Urla villa projesi",
      image: "https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    { 
      id: 2, 
      title: "Çatı İzolasyonu", 
      desc: "İzmir çatı yalıtım işi",
      image: "https://images.pexels.com/photos/48882/roof-plate-tiles-brick-black-48882.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    { 
      id: 3, 
      title: "Yağmur İniş Borusu", 
      desc: "Komplet iniş borusu montajı",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    { 
      id: 4, 
      title: "Duvar Dibi Saç", 
      desc: "Duvar dibi detay işleri",
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    { 
      id: 5, 
      title: "Baca Dibi İşleri", 
      desc: "Baca çevresi su yalıtımı",
      image: "https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    { 
      id: 6, 
      title: "Kenet Çatı Sistemi", 
      desc: "Modern kenet çatı uygulaması",
      image: "https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="gallery">
      <div className="gallery-container">
        <h1>Galeri</h1>
        <p className="gallery-intro">Yaptığımız işlerden bazı örnekler</p>
        
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <img src={item.image} alt={item.title} loading="lazy" />
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

