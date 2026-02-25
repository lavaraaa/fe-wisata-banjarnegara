import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import Banner1 from '../../../assets/banner/1.jpg';
import Banner2 from '../../../assets/banner/2.jpg';
// import Banner3 from '../../../assets/banner/3.jpg';
// import Banner4 from '../../../assets/banner/4.png';
// import Banner5 from '../../../assets/banner/5.png';
// import Banner6 from '../../../assets/banner/10.png';
// import gambar from '../../assets/pngtree-tourists-travel-tourist-guide-person-picture-image_8727144.png';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const bannerImages = [Banner1, Banner2];

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 992);
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  return (
    <main
      className="my-3 mx-auto"
      style={{
        width: '100%',
        maxWidth: '1180px',
        paddingLeft: isDesktop ? '32px' : '12px',
        paddingRight: isDesktop ? '32px' : '12px',
      }}
    >
      {/* BANNER */}
      <section id="banner" className="my-1">
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows={true}
          autoPlay={true}
          interval={5000}
          transitionTime={500}
          showStatus={false}
          swipeable={true}
          emulateTouch
        >
          {isDesktop
            ? chunkArray(bannerImages, 2).map((group, index) => (
                <div key={index} className="row">
                  {group.map((img, idx) => (
                    <div className="col-lg-6" key={idx}>
                      <div
                        style={{
                          width: '100%',
                          height: 'auto',
                          overflow: 'hidden',
                          borderRadius: '10px'
                        }}
                      >
                        <img
                          src={img}
                          alt={`Banner ${index * 2 + idx + 1}`}
                          className="w-100 h-100"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : bannerImages.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Banner ${index + 1}`}
                    className="w-100 h-100"
                    style={{ objectFit: 'contain',
                      borderRadius: '10px'
                     }}
                  />
                </div>
              ))}
        </Carousel>
      </section>

{/* <section className="my-4">
  <div className="container">
    <div
      className="row align-items-center justify-content-center"
      style={{
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        padding: '10px',
        borderRadius: '10px',
        maxWidth: '1250px',
        margin: '0 auto'
      }}
    >
      Gambar di kiri
      <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
        <img
          src={gambar}
          alt="Description"
          className="img-fluid rounded-3"
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '200px',
          }}
        />
      </div>

      Deskripsi di kanan
      <div className="col-12 col-md-6 text-center text-md-start">
        <h5><b>Temukan Keindahan Wisata Kami</b></h5>
        <p>
          Jelajahi tempat-tempat wisata terbaik di Kabupaten Banjarnegara. Dapatkan pengalaman
          yang tak terlupakan dengan berbagai pilihan tempat wisata yang dapat
          memanjakan mata dan hati. Nikmati perjalanan yang penuh kenangan!
        </p>
        <button
          className="btn btn-primary"
          style={{
            backgroundColor: '#015E78',
            color: 'white',
          }}
          onClick={() => navigate('/daftarwisata')}
        >
          Lihat lebih banyak
        </button>
      </div>
    </div>
  </div>
</section> */}

     
    </main>
  );
};

export default Home;
