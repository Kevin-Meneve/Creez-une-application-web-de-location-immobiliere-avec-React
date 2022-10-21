import React from 'react';
import Banner from '../../components/Banner';
import imageImport from '../../assets/image_Home.png';


function Home() {
  return (
    <main>
      <Banner link_image={imageImport}  text="Chez vous, partout et ailleurs"/>
    </main>
  );
}

export default Home;
