import React from 'react';
import Banner from '../../components/Banner';
import imageImport from '../../assets/image_Home.png';
import AllHebergement from '../../components/AllHebergement.jsx';

function Home() {  
  return (
    <main>
      <Banner link_image={imageImport}  text="Chez vous, partout et ailleurs" pageName="home"/>
      <AllHebergement />
    </main>
  );
}

export default Home;
