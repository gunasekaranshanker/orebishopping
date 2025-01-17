import React from "react";
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteItem, drecreaseQuantity, increaseQuantity } from "../../redux/orebiSlice";



const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      {/* Left Section */}
      <div className="flex col-span-5 md:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={() => dispatch(deleteItem(item._id))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <img className="w-32 h-32" src={item.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold">{item.name}</h1>
      </div>

      {/* Right Section */}
      <div className="col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 md:px-0 gap-6 md:gap-0">
        {/* Price Section */}
        <div className="flex w-1/3 items-center text-lg font-semibold">
          ${item.price}
        </div>

        {/* Quantity Section */}
        <div className="w-1/3 flex items-center gap-6 text-lg">
          <span
            onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            -
          </span>
          <p>{item.quantity}</p>
          <span
            onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            +
          </span>
        </div>

        {/* Total Section */}
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>₹{item.quantity * item.price}</p>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemCard;
