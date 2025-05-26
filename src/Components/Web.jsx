import React from 'react'

const web = [
  {
    img: '/screen.jpg',
    alt: 'Screen design '
  },
  {
    img: '/web  page design.png',
    alt: 'Web page design '
  }
];

const Web = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {web.map((item, idx) => (
        <img
          key={idx}
          src={item.img}
          alt={item.alt}
          className="rounded-xl shadow-lg max-w-md w-full object-cover transition-transform duration-200 hover:scale-105"
        />
      ))}
    </div>
  );
}

export default Web