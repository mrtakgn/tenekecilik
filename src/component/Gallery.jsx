import React, { useState } from 'react';
import './Gallery.css';

const galleryFiles = import.meta.glob('../../gülhan/*.{jpeg,mp4}', {
  eager: true,
  import: 'default',
  query: '?url',
});

const galleryItems = Object.entries(galleryFiles)
.sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, 'tr', { numeric: true }))
.map(([path, src]) => {
  const isVideo = /\.mp4$/i.test(path);

  return { id: path, src, isVideo };
});

export function GalleryPreview() {
  const photos = galleryItems.filter((item) => !item.isVideo).slice(0, 4);

  return (
    <section className="gallery-preview" aria-labelledby="gallery-preview-title">
      <h2 id="gallery-preview-title">Yaptığımız İşlerden</h2>
      <div className="gallery-grid">
        {photos.map((item, index) => (
          <div key={item.id} className="gallery-item">
            <div className="gallery-image">
              <img src={item.src} alt={`Yapılan işlerden örnek ${index + 1}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const photos = galleryItems.filter((item) => !item.isVideo);
  const videos = galleryItems.filter((item) => item.isVideo);
  const [activeSection, setActiveSection] = useState('photos');

  return (
    <div className="gallery">
      <div className="gallery-container">
        <h1>Galeri</h1>
        <p className="gallery-intro">Yaptığımız işlerden fotoğraf ve videolar</p>

        <div className="gallery-toggles">
          <button
            type="button"
            aria-expanded={activeSection === 'photos'}
            aria-controls="gallery-photos"
            onClick={() => setActiveSection('photos')}
          >
            Görseller
          </button>
          <button
            type="button"
            aria-expanded={activeSection === 'videos'}
            aria-controls="gallery-videos"
            onClick={() => setActiveSection('videos')}
          >
            Videolar
          </button>
        </div>

        <section className="gallery-section" id="gallery-photos" aria-labelledby="gallery-photos-title" hidden={activeSection !== 'photos'}>
          <h2 id="gallery-photos-title">Görseller</h2>
          <div className="gallery-grid">
            {photos.map((item, index) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image">
                  <img src={item.src} alt={`Yapılan işlerden örnek ${index + 1}`} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section" id="gallery-videos" aria-labelledby="gallery-videos-title" hidden={activeSection !== 'videos'}>
          <h2 id="gallery-videos-title">Videolar</h2>
          <div className="gallery-grid">
            {videos.map((item, index) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image">
                  <video src={item.src} controls preload="metadata" aria-label={`Galeri videosu ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery;
