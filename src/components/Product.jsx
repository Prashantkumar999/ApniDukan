import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="w-60 h-80 bg-white rounded-lg shadow-md flex flex-col p-4 relative items-center xl:hover:scale-110 transition-all duration-200">
      <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      <p className="w-40 text-gray-600 font-normal text-[10px] text-left">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-40 object-contain mb-4"
      />
      <div className="flex justify-between items-center  absolute bottom-2 left-4 right-4">
        <p className="text-green-600 font-semibold">${post.price}</p>
        {cart.some((p) => p.id === post.id) ? (
          <button className="bg-red-500 px-3 py-2 rounded-md font-semibold text-white sm:w-[65%] w-[50%] sm:text-[1rem] text-[.7rem]" onClick={removeFromCart}>Remove Item</button>
        ) : (
          <button className="bg-green-500 px-3 py-2 rounded-md font-semibold text-white sm:w-[65%] w-[50%] sm:text-[1rem] text-[.7rem]" onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;