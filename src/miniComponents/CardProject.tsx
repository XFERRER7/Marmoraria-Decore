import './style/style-cardProject.css'

interface ICardProjectProps {
  image: string;
  describe: string;
}

export const CardProject = ({image, describe}: ICardProjectProps) => {

  return (
    <>

      <div className="card-main">
        <img src={image} id="card-img-project"/>
        <p className="descricao-card">{describe}</p>
      </div>

    </>
  );
}