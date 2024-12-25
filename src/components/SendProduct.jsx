import { http } from "../services/telegramApi";
import { chatId } from "../services/telegramApi";
import { useState } from "react";

function SendProduct({ product }) {
  const [loading, setLoading] = useState(false);
  const sendProduct = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const message = `ID: ${product.id} \nProduct: ${product.title}`;
      const response = await http.post(
        "/sendPhoto",
        {
          chat_id: chatId,
          caption: message,
          photo: product.images_product[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      // document.getElementById('subscribe').showModal()
      // setEmail({ email: "" })
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert(error);
      setLoading(false);
    }
  };
  return (
    <>
      <button
        onClick={sendProduct}
        className="btn btn-sm w-full bg-maincolor bg-opacity-20 hover:bg-maincolor border-0 hover:bg-opacity-35 text-maincolor"
      >
        Оставить заявку
      </button>
    </>
  );
}

export default SendProduct;
