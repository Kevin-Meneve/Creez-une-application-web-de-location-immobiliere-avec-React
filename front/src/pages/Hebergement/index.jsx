import React from 'react';
import {useState, useEffect} from 'react';
import {useParams } from "react-router-dom";
import Carroussel from '../../components/Carroussel'
import InfoHebergement from '../../components/InfoHebergement'
import { Navigate } from 'react-router-dom';

function Hebergement() {  

  const { id } = useParams();
  const [hebergement, setHebergement] = useState([]);
  const [isFound , setIsFound] = useState(false);
  const [dataHaveLoaded, setDataHaveLoaded] = useState(false);


  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      data.forEach(element => {
        if(element.id === id){
          setIsFound(true)
          setHebergement(element)
        }
      })
    })
    .then(()=> {
      setDataHaveLoaded(true)
    }, [])
  });

  return (
    <main>
      { dataHaveLoaded ? 
          isFound ?
            <main>
              <Carroussel pictures = {hebergement.pictures}/>
              <InfoHebergement />
            </main>
          :
            <Navigate to="/404" />
        :
        <p>Loading</p>
      } 
    </main>
  );
}

export default Hebergement;