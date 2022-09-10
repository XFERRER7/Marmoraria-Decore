import { CardCatalog } from '../miniComponents/CardCatalog';
import './style/style-catalog.css'
import infoCardCatalog from '../data/infoCardCatalog'
import { useEffect, useState } from 'react';

interface IInfoCardCatalog {
  title: string;
  image: string;
}

export const Catalog = () => {

  const [listInfoCardCatalog, setListInfoCardCatalog] = useState<IInfoCardCatalog[]>([])

  useEffect(() => {

    const dataCatlog = infoCardCatalog.map(item => {
      return item;
    });

    setListInfoCardCatalog(dataCatlog);

  }, [])


  return (
    <div id="catalogo">
      <h1 className="title-section">CATÁLOGO</h1>

      <div className="container-catalogo">
        {
          listInfoCardCatalog.map((item, index) => {
            return <CardCatalog key={index} title={item.title} image={item.image}/>
          })
        }
      </div>
    </div>
  );
}