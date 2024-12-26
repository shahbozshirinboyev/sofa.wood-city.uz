import { http } from "../services/telegramApi";
import { chatId } from "../services/telegramApi";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import toast, { Toaster } from "react-hot-toast";

function SendProduct({ product }) {
  const [loading, setLoading] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const sendProduct = async (e) => {
    setLoading(true);
    e.preventDefault();
    if(phoneValue.length > 11){}else{
      setLoading(false);
      return toast.error("Номер телефона введен неверно.")
    }
    try {
      const message = `Product: ${product.title}\nPrice: ${product.price} сум\nName: ${nameValue} \nPhone: +${phoneValue} \n\nID: ${product.id}`;

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
         setLoading(false);
        setNameValue("");
        setPhoneValue("998");
        document.getElementById(`order_${product.id}`).close();
        toast.success('Заявка успешно отправлена.')
    } catch (error) {
      console.log(error);
      alert(error);
      setLoading(false);
    }
  };
  return (
    <>
      <button
        onClick={()=>{document.getElementById(`order_${product.id}`).showModal();}}
        className="btn btn-sm w-full bg-maincolor bg-opacity-20 hover:bg-maincolor border-0 hover:bg-opacity-35 text-maincolor"
      >
        Оставить заявку
      </button>

       {/* Order Modal Start */}
       <dialog id={`order_${product.id}`} className="modal">
        <Toaster />
                {/* <Toaster /> */}
                <div className="modal-box w-11/12 max-w-xl p-0 ">
                  {/* Modal header Start */}
                  <form
                    method="dialog"
                    className="border-b-[2px] border-base-200 h-[60px] grid grid-cols-2 items-center px-[24px] bg-custom-green-10"
                  >
                    <span className="text-custom-green-dark font-bold">
                      Оставить заявку
                    </span>
                    <div className="text-end">
                      <button className="btn btn-sm border-0 btn-circle text-custom-green-dark bg-custom-green-10 hover:bg-custom-green-30">
                        {" "}
                        ✕{" "}
                      </button>
                    </div>
                  </form>
                  {/* Modal header End */}

                  <div className="p-4">
                    <div className="px-6 mb-4">
                      <p className="font-bold">Ваш заказ:</p>

                      <div className="flex gap-8 p-2">
                        <div className="flex items-center justify-center">
                          {" "}
                          <img
                            className="w-[100px] h-auto object-cover"
                            src={product.images_product[0]}
                            alt=""
                          />{" "}
                        </div>

                        <div className="">
                          <p className="font-bold text-[14px] line-clamp-1">{product.title}</p>
                          <p className="font-bold text-[13px] opacity-70">
                            {product.price} сум
                          </p>
                          <p className="text-[12px]">
                            <span className="font-semibold">Размер:</span>{" "}
                            <span>{product.width} x {product.length} x {product.height} см</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <p className="text-center py-4 font-bold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px]">Заказать обратный звонок</p> */}

                    <form action="" className="px-6" onSubmit={sendProduct}>
                      <label className="form-control w-full mb-2">
                        <div className="label">
                          <span className="label-text">Ваше имя:</span>
                          {/* <span className="label-text-alt">Top Right label</span> */}
                        </div>
                        <input
                          value={nameValue}
                          onChange={(e) => setNameValue(e.target.value)}
                          type="text"
                          required
                          placeholder="Ваше имя"
                          className="input input-bordered w-full"
                          style={{
                            borderRadius: ".25rem",
                            height: "45px",
                            fontSize: "16px",
                          }}
                        />
                      </label>

                      <label className="form-control w-full mb-2">
                        <div className="label">
                          <span className="label-text">
                            Ваше номер телефона:
                          </span>
                          {/* <span className="label-text-alt">Top Right label</span> */}
                        </div>
                        <PhoneInput
                          value={phoneValue}
                          onChange={setPhoneValue}
                          country={"uz"}
                          onlyCountries={["uz", "kz", "kg", "tj", "tm"]}
                          masks={{
                            uz: "(..) ...-..-..", // O'zbekiston
                            kz: "(...) ...-..-..", // Qozog'iston
                            kg: "(..) ...-..-..", // Qirg'iziston
                            tj: "(..) ...-..-..", // Tojikiston
                            tm: "(..) ..-..-..", // Turkmaniston
                          }}
                          inputClass="input input-bordered w-full"
                          inputStyle={{
                            width: "100%",
                            height: "45px",
                            border: "1px solid #ccc",
                            borderRadius: ".25rem",
                            transition: "border-color 0.2s",
                            fontSize: "16px",
                          }}
                          inputProps={{ name: "phone", required: true }}
                        />
                      </label>

                      <p className="py-2 text-start text-[12px] lg:text-[14px]">
                        Специалист компании свяжется с вами в ближайшее время, а
                        на вашу почту будет отправлена презентация проекта для
                        ознакомления
                      </p>

                      <button className="btn my-4 w-full">
                        {!loading && <span>Отправить</span>}
                        {loading && <span className="flex justify-center items-center gap-2">
                          <span className="loading loading-spinner loading-sm"></span>
                          <span>Отправка...</span>
                        </span>}
                        </button>
                    </form>
                  </div>
                </div>
                {/* Outside close section start */}
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
                {/* Outside close section end */}
              </dialog>
              {/* Order Modal End */}
    </>
  );
}

export default SendProduct;
