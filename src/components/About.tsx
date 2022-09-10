import { CardAbout } from '../miniComponents/CardAbout';
import './style/style-about.css'
import infoCardAbout from '../data/infoCardAbout'
import infoCardPeson from '../data/infoPerson'
import { useEffect, useState } from 'react';
import { CardPerson } from '../miniComponents/CardPerson';

interface IInfoCardAbout {
  title: string;
  describe: string;
  icon: string;
}

interface IInfoCardPerson {
  name: string;
  describe: string;
  image: string;
}

export const About = () => {

  const [listInfoCardAbout, setListInfoCardAbout] = useState<IInfoCardAbout[]>([])
  const [listCardPerson, setListCardPerson] = useState<IInfoCardPerson[]>([])

  useEffect(() => {

    const dataPerson = infoCardPeson.map(item => {
      return item;
    });

    const dataAbout = infoCardAbout.map(info => {
      return info;
    });

    setListCardPerson(dataPerson);
    setListInfoCardAbout(dataAbout);

  }, [])

  return (
    <div>
      <section id="sobre" className="section-about">
        <h1 className="title-section">SOBRE</h1>
        <div className="sobre-container">


          <div className="historia">
            <h3>História</h3>
            <p>
              Fundada em 2008 pelos proprietários Alberto Oliveira e Siluana Maciel, a Marmoraria Decore se tornou
              referência em Luís Eduardo Magalhães. Foi uma das primeiras marmorarias da cidade, com diferentes métodos de
              produção e montagem.
              Revolucionamos o ramo da marmoraria por empresas terceiras, somos a MARMORARIA DECORE
            </p>
          </div>

          <div className="container-box-down">
            {
              listInfoCardAbout.map((item, index) => {
                return <CardAbout key={index} title={item.title} describe={item.describe} icon={item.icon} />
              })
            }

          </div>
          
          <div className="container-about-person">
            {
              listCardPerson.map((item, index) => {
                return <CardPerson key={index} name={item.name} describe={item.describe} image={item.image}/>
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
}