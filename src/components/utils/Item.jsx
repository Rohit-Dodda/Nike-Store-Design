import { useDispatch } from "react-redux";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart } from "../../app/CartSlice";

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, title, rating, text, img, color, shadow, price };

    dispatch(setAddItemToCart(item));
  };
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h1 className="text-slate-100 font-extrabold filter text-xl drop-shadow-xl">
            {title}
          </h1>
          <p className="mt-2 text-slate-200 font-medium drop-shadow-md">
            {text}
          </p>

          <div className="flex items-center justify-between w-28 my-2">
            <h1 className="text-slate-200 text-sm font-medium">${price}</h1>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button type='button' className="bg-white/20 blur-effect-theme button-theme p-0.5 shadow rounded-lg ">
              <HeartIcon className="icon-style" />
            </button>
            <button
              type="button"
              className="rounded-lg bg-white/20 blur-effect-theme text-sm text-slate-100 button-theme p-0.5 shadow"
              onClick={() => onAddToCart()}
           >
              {btn}
            </button>
          </div>
        </div>

        <div
          className={`flex items-center ${
            ifExists ? "absolute top-5 right-1" : "justify-center"
          }`}
        >
          <img
            src={img}
            alt={title}
            className={`rounded-md transitions-theme hover:-rotate-12 ${
              ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                : "h-36 w-64"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
