import React from 'react'

const images = [
  { src: "/9.jpg", alt: "Design 9" },
  { src: "/10.jpg", alt: "Design 10" },
  { src: "/11.jpg", alt: "Design 11" },
  { src: "/12.jpg", alt: "Design 12" },
  { src: "/13.jpg", alt: "Design 13" },
  { src: "/14.jpg", alt: "Design 14" },
  { src: "/15.jpg", alt: "Design 15" },
  { src: "/16.jpg", alt: "Design 16" },
  { src: "/17.jpg", alt: "Design 17" },
  { src: "/18.jpg", alt: "Design 18" },
  { src: "/19.jpg", alt: "Design 19" },
  { src: "/20.jpg", alt: "Design 20" },
  { src: "/21.jpg", alt: "Design 21" },
  { src: "/22.jpg", alt: "Design 22" },
  { src: "/23.jpg", alt: "Design 23" },
  { src: "/24.jpg", alt: "Design 24" },
  { src: "/25.jpg", alt: "Design 25" },
  { src: "/26.jpg", alt: "Design 26" },
  { src: "/27.jpg", alt: "Design 27" },
  { src: "/28.jpg", alt: "Design 28" },
  { src: "/29.png", alt: "Design 29" },
  { src: "/30.png", alt: "Design 30" },
  { src: "/31.jpg", alt: "Design 31" },
  { src: "/32.jpg", alt: "Design 32" },
  { src: "/33.jpg", alt: "Design 33" },
  { src: "/34.png", alt: "Design 34" },
  { src: "/35.jpg", alt: "Design 35" },
  { src: "/36.jpg", alt: "Design 36" },
  { src: "/37.jpg", alt: "Design 37" },
  { src: "/38.jpg", alt: "Design 38" },
  { src: "/39.jpg", alt: "Design 39" },
  { src: "/40.jpg", alt: "Design 40" },
  { src: "/41.png", alt: "Design 41" },
  { src: "/42.jpg", alt: "Design 42" },
  { src: "/43.jpg", alt: "Design 43" },
  { src: "/44.png", alt: "Design 44" },
  { src: "/45.png", alt: "Design 45" },
  { src: "/46.jpg", alt: "Design 46" },
  { src: "/47.jpg", alt: "Design 47" },
  { src: "/48.jpg", alt: "Design 48" },
  { src: "/49.jpg", alt: "Design 49" },
  { src: "/50.jpg", alt: "Design 50" },
  { src: "/51.png", alt: "Design 51" },
  { src: "/52.png", alt: "Design 52" },
  { src: "/53.jpg", alt: "Design 53" },
];

const Design = () => {
  return (
    <div
      className="p-4 design-gallery"
      style={{
        columnCount: 2,
        columnGap: '1rem',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          style={{
            width: '100%',
            maxWidth: '320px',
            marginBottom: '1rem',
            borderRadius: '0.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'block',
            breakInside: 'avoid',
          }}
          className="design-img"
        />
      ))}
      <style>
        {`
          @media (min-width: 1024px) {
            .design-gallery {
              column-count: 4 !important;
            }
            .design-img {
              max-width: 220px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Design