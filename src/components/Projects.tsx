import { CardProject } from '../miniComponents/CardProject';
import './style/style-projects.css'
import infoCardProjects from '../data/infoCardProject'


export const Projects = () => {

  return (
    <section id="section-a" className="section-a">
      <h1 id="section-a-h1" className="title-section">PROJETOS</h1>
      <div className="container-cards-main">
        {
          infoCardProjects.map((item, index) => {
            return <CardProject key={index} image={item.image} describe={item.describe}/>
          })
        }
      </div>

    </section>

  );
}