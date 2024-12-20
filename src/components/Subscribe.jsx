import { NavLink } from "react-router-dom";
import { http, chatId } from "../services/telegramApi";
import { useState } from "react";

function Subscribe() {
    const [email, setEmail] = useState({ email: "" });
    const handleInput = (e) => {
        const { name, value } = e.target;
        setEmail((prevData) => ({ ...prevData, [name]: value, }));
    };

    const subscribe = async (e) => {
        e.preventDefault();
        try {
            const message = `Новый подписчик оставил нам свой email, чтобы быть в курсе новостей Wood-City.Uz. \nEmail: ${email.email}`;
            const response = await http.post("/sendMessage", {
                chat_id: chatId,
                text: message,
            });
            console.log(response);
            document.getElementById('subscribe').showModal()
            setEmail({ email: "" })
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="bg-maincolor">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 py-3">
                    <div className="text-white">
                        <h2 className="font-semibold">
                            Подпишись и узнай раньше всех о скидках, акциях, распродажах и полезных статьях
                        </h2>
                        <p className="text-[12px]">
                            Подписываясь я соглашаюсь с <NavLink to="/company" className="underline cursor-pointer">условиями обработки персональных данных</NavLink>
                        </p>
                    </div>

                    <div>
                        <form className="flex py-2" onSubmit={subscribe}>
                            <input
                                required
                                type="email"
                                name="email"
                                value={email.email}
                                onChange={handleInput}
                                placeholder="Ваш E-mail"
                                className="text-white outline-none border rounded bg-transparent placeholder:text-white py-1 px-2 w-full"
                            />
                            <button className="px-6 md:px-8 py-1 rounded text-maincolor bg-white ml-2 flex justify-center items-center font-semibold hover:text-maincolor transition-all duration-300">
                                Подписаться
                            </button>
                        </form>
                    </div>
                </div>
            </div>


            <dialog id="subscribe" className="modal">
                <div className="modal-box p-8">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 flex justify-center items-center text-maincolor hover:bg-opacity-25 hover:bg-maincolor">✕</button>
                    </form>

                    <p className="py-4 mb-4 font-medium text-maincolor">Ваша заявка принята.</p>
                    <button onClick={() => { document.getElementById('subscribe').close() }} className="btn border-0 w-full font-bold bg-maincolor hover:bg-maincolor text-white">Хорошо</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default Subscribe;