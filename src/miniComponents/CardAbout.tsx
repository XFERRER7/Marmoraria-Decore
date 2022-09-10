import './style/style-cardAbout.css'

interface ICardAboutProps {
  title: string;
  describe: string;
  icon: string;
}

export const CardAbout = ({title, describe, icon}: ICardAboutProps) => {

  return (
    <>
      <div className="box-content">
        <i className={`fa-solid fa-${icon} icone`}></i>
        <h3>{title}</h3>
        <p>{describe}</p>
      </div>
    </>
  );
}