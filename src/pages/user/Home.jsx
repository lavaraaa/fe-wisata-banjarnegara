import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import CategoryCard from '../../components/common/cardComponents/CategoryCard';
import BannerCarrousel from '../../components/userComponents/homeComponents/BannerCarrousel';
import SearchBar from '../../components/userComponents/homeComponents/SearchBar';
import TombolWisataLainnya from '../../components/userComponents/homeComponents/TombolWisataLainnya';
import BaruDitambahkan from '../../components/userComponents/homeComponents/BaruDitambahkan';
import SistemRekomendasi from '../../components/SistemRekomendasi/SistemRekomendasi';

const Home = () => {
const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
const [loading, setLoading] = useState(true);
const navigate = useNavigate();

useEffect(() => {
const handleResize = () => { setIsDesktop(window.innerWidth >= 992);};
window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);
}, []);

useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300); // 1 detik
    return () => clearTimeout(timer);
  }, []);

if (loading) {
  return <Loading />;}

return (
<>
<BannerCarrousel />
<SearchBar/>

<main
  className="my-3 mx-auto"
  style={{ width: '100%',maxWidth: '1180px', 
  paddingLeft: isDesktop ? '32px' : '12px', 
  paddingRight: isDesktop ? '32px' : '12px'}}>
  <SistemRekomendasi/>
<div className="text-center mb-3 mt-2"><TombolWisataLainnya/> </div>

<section className="my-4">
  <h5 className="text-left mb-3">
    <b style={{fontSize:'clamp(16px, 2.5vw, 20px)'}}> Berdasarkan Kategori</b>
  </h5>
  <CategoryCard />
</section>
        
<BaruDitambahkan/>
  
<div className="text-center mb-3 mt-2"><TombolWisataLainnya/> </div>

</main>
</>
);
};

export default Home;