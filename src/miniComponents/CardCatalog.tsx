import './style/style-cardCatalog.css'

interface ICardCatalogProps {
  title: string;
  image: string;
}

export const CardCatalog = ({ title, image }: ICardCatalogProps) => {

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`
        }}
        className="item-catalogo"
      >
        <h1 id={`${title}-title`} className="item-title">{title}</h1>
      </div>
    </>
  );
}