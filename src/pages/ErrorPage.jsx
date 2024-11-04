// react router dom
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-screen justify-center p-10 md:p-24">
        <div className="flex items-end lg:items-center justify-center">
          <img src="/favicon/error.svg" alt="Error" />
        </div>
        <div className="flex flex-col justify-start lg:justify-center gap-4 xl:mr-[200px]">
          <h1 className="font-bold text-[20px]">Что-то пошло не так...</h1>
          <h2 className="text-[14px]">
            Системе не удается распознать ссылку. Введите заново или повторно
            вставьте адрес ссылки на страницу в окне браузера, чтобы убедиться в
            том, что ссылка указана правильно.
          </h2>
          <p className="text-[14px]">
            Если страница по-прежнему не будет найдена, попробуйте перейти на
            нее с главной страницы.
          </p>
          <button
            onClick={handleGoHome}
            className="border w-[120px] px-2 py-1 rounded-md font-bold bg-sky-500 text-white hover:bg-sky-50 hover:text-sky-500 border-transparent transition-all duration-300"
          >
            Главная
          </button>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
