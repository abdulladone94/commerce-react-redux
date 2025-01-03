import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity } from "../store/cartSlice";

const CartItem = (props) => {
  //   eslint-disable-next-line react/prop-types
  const { productId, itemQuentity } = props.item;
  const [detail, setDetail] = useState([]);

  const products = useSelector((state) => state.cart.ferchProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
    console.log(findDetail);
  }, [productId, products]);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        itemQuentity: itemQuentity - 1,
      })
    );
    console.log(productId);
    console.log(itemQuentity);
  };
  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        itemQuentity: itemQuentity + 1,
      })
    );
  };
  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={detail.image} alt="product" className="w-8 md:w-12" />
      <h3 className="text-sm">{detail.name}</h3>
      <p>${detail.price * itemQuentity}</p>
      <div className="w-20 flex justify-between gap-2">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{itemQuentity}</span>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
