export const CartItem = ({count, name, price}) => {
  return (
    <>
      {count ? (
        <div className="cart-item">
          <p>{count}x</p>
          <b>{name}</b>
          <p>${price}</p>
        </div>
      ) : <></>}
    </>
  )
}