import { OrderItem } from '../OrderItem/OrderItem';

export function OrderList({ serverCart, localCart, gameBoardsByCart }) {
  return (
    <div>
      {localCart.map((product, index) => {
        return (
          <OrderItem
            product={product}
            key={product.id}
            productInCartId={serverCart && serverCart[index]?.productInCartId}
            productCode={
              gameBoardsByCart && gameBoardsByCart[index]?.productCode
            }
          />
        );
      })}
    </div>
  );
}
