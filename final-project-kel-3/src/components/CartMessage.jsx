import { correct } from "../utils/images";

const CartMessage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-black bg-opacity-70 py-30 rounded-md">
      <div className="flex items-center justify-center mb-4">
        <img src={correct} alt="" className="w-[45px] h-[45px]" />
      </div>
      <h6 className="text-white font-roboto">
        Barang telah ditambahkan ke dalam keranjang
      </h6>
    </div>
  );
};

export default CartMessage;
