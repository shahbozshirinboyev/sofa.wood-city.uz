import { useState } from "react";
import { http } from "../services/telegramApi";
import { chatId } from "../services/telegramApi";

function OrderOneClick({ product }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('pedding')

  const order = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const message = `Купить в 1 клик`;
      const response = await http.post("/sendMessage", {
        chat_id: chatId,
        text: message,
      });
      console.log(response);
      setLoading(false);
      setStatus('done')
    } catch (error) {
      console.log(error);
      alert(error);
      setLoading(false);
    }
  };
  return (
    <>
      { status === "pedding" && <button onClick={order} className="btn btn-sm w-full my-2">
        { !loading && <span>Купить в 1 клик</span>}
        { loading && <span className="flex gap-2 items-center">
        <span className="loading loading-spinner loading-sm"></span>
        <span>Отправка...</span>
        </span>}
      </button>}
      {status === "done" && <button className="btn btn-sm w-full my-2 bg-maincolor text-white border-0 hover:bg-maincolor hover:text-white cursor-not-allowed">
        <span>Мы свяжемся с вами</span>
      </button>}
    </>
  );
}

export default OrderOneClick;
