import './style/style-cardPerson.css'

interface ICardPersonProps {
  name: string;
  describe: string;
  image: string;
}

export const CardPerson = ({name, describe, image}: ICardPersonProps) => {

  return (
    <>
      <div className="about-person">
        <h4>{name}</h4>
        <img src={image} className="img-person" id="person-1"/>
        <p className="p-about-person">{describe}</p>
      </div>
    </>
  );
}