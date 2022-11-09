export const BakeryItem = ({index, name, description, price, image, clickFunc}) => {

  return (
    <div key={index} className="bakery-item">
      <img alt={description} className="bakery-image" src={image}/>
      <div className="item-info">
        <h3>
          {name}
        </h3>
        <div className="item-description">
          <i>{description}</i>
        </div>
        <b className="price">${price}</b>
        <button className="add-button" onClick={() => clickFunc(index)}>Add to cart</button>
      </div>
    </div>
  )
}