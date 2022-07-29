const Card = ({ title, image, price }) => {
  return (
    <div className="flex flex-col items-center bg-[#f5fafb] m-0.5 rounded-lg w-32 p-0.5">
      <span className="text-xs font-bold text-black">{title}</span>
      <img className=" w-full h-20" src={image} alt="" />
      <span className="text-xs font-bold text-black">{price}</span>
    </div>
  );
};
export default Card;
