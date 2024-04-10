import { OrderItem } from '../OrderItem/OrderItem';

export function OrderList({ serverCart, localCart, gameBoardsByCart }) {
  console.log('LOCALCART -->', localCart);
  console.log('SERVERCART -->', serverCart);
  console.log('GAMES -->', gameBoardsByCart);
  return (
    <div>
      {localCart.map((product, index) => (
        <OrderItem
          product={product}
          key={product.id}
          productInCartId={serverCart && serverCart[index]?.productInCartId}
          productCode={gameBoardsByCart && gameBoardsByCart[index]?.productCode}
        />
      ))}
    </div>
  );
}
