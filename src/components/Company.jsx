import { useState } from 'react';

function Company() {

    const [openIndex, setOpenIndex] = useState(0);
    const handleToggle = (index) => { setOpenIndex(openIndex === index ? null : index); };

    return (
        <>
            <div className='container flex flex-col my-4 gap-4'>

                {/* 1 collapse */}
                <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
                    <input
                        type="checkbox"
                        checked={openIndex === 0}
                        onChange={() => handleToggle(0)} // Toggle qilish
                    />
                    <div className="collapse-title text-xl font-medium">
                        Политика конфедициальности
                    </div>
                    <div className="collapse-content company-style">
                        <h2>1. Общие положения</h2>

                        <p>
                            Настоящим в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» от 27.07.2006 года Вы подтверждаете свое согласие на обработку интернет-магазином Mebel.ru персональных данных: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, передачу исключительно в целях продажи программного обеспечения на Ваше имя, как это описано ниже, блокирование, обезличивание, уничтожение.

                            Мы сохраняем конфиденциальность любой предоставляемой и получаемой от Вас информации и защиту персональных данных от всевозможных видов мошенничества. Все полученные данные используются в строгом соответствии с законом.
                        </p>

                        <h2>2. Тип сохраняемой информации</h2>

                        <p>Вся информация, предоставленная Пользователем при регистрации либо во время совершения покупки: e-mail, ФИО, номер телефона, адрес доставки.

                            Также мы сохраняем данные, автоматически передающиеся при посещении сайта: IP-адрес, информация о браузере, продолжительности пребывания на сайте, адрес сайта, с которого был осуществлен переход и т. д.</p>

                        <h2>3. Использование полученной информации</h2>

                        <p> Полученные от Пользователя сведения используются для предоставления услуг: регистрации, оформления заказа, осуществления доставки и т. д. Также мы используем телефон и адрес электронной почты для информирования о статусе заказа, новых акциях и предложениях.

                            Информация также может быть использована для улучшения качества работы сайта, оценки его удобства и пользы, анализа эффективности продуктов и услуг, а также для осуществления акций, конкурсов (при условии Вашего участия в них).</p>

                        <h2>4. Политика защиты персональных данных</h2>

                        <p>Mebel.ru принимает все необходимые организационные и технические меры для защиты персональной информации от случайного и мошеннического доступа, уничтожения, изменения или других неправомерных действий.

                            Мы гарантируем конфиденциальность и защиту персональных данных от третьих лиц. Доступ к персональным данным предоставляется только тем сервисам и партнерам, которым она необходима для осуществления операций (оформления заказа, доставки, e-mail подписки). Все эти лица выполняют обязательства по сохранению конфиденциальных данных и могут подвергаться взысканиям за нарушение обязательств, вплоть до увольнения и уголовного преследования.

                            Передача персональных данных третьим лицам также может осуществляться в случаях, предусмотренных законодательством РФ, например, при передаче бизнеса. Новый владелец при этом берет на себя обязательства по защите полученной информации. Также передача данных возможна для пресечения мошенничества.

                            При переходе из нашего интернет-магазина на другие источники компания не несет ответственности за конфиденциальность представленных на этих ресурсах данных.</p>

                        <h2>5. Безопасность платежей</h2>

                        <p> Безопасность платежей обеспечивается с помощью Банка-эквайера, функционирующего на основе современных протоколов и технологий, разработанных международными платежными системами Visa International и MasterCard Worldwide (3D-Secure: Verified by VISA, MasterCard SecureCode). Обработка полученных конфиденциальных данных Держателя карты производится в процессинговом центре Банка-эквайера, сертифицированном по стандарту PCI DSS. Безопасность передаваемой информации обеспечивается с помощью современных протоколов обеспечения безопасности в сети Интернет.</p>

                        <h2>6. Меры по защите информации</h2>

                        <p>Цель представленной на сайте информации — информирование покупателя о деятельности интернет-магазинов, товарах и услугах, а также помощь в работе с сайтом.

                            Все содержимое сайта является собственностью Mebel.ru и защищено законодательно. Пользователи вправе использовать информацию, представленную на сайте, в личных и некоммерческих целях. Запрещено любое использование информации в коммерческих целях.

                            Мы оставляем за собой право на изменение, удаление или другую работу с информацией, представленной на сайте, а также на ограничение доступа к сайту.

                            Компания не несет ответственности за сведения, представленные покупателями на сайте в общедоступной форме.

                            Мебель. ру оставляет за собой право на изменение Политики конфиденциальности для дальнейшего совершенствования системы безопасности в соответствии с действующим законодательством.</p>

                        <h2>7. Срок действия и отзыв согласия</h2>

                        <p> Срок действия согласия является неограниченным. Вы можете в любой момент отозвать настоящее согласие, направив письменное уведомления на адрес ООО «Мебель.Ру»: ул. Дорожная, д. 30, корп. 1, кв. 195, г. Москва, Российская Федерация, 117535 с пометкой «Отзыв согласия на обработку персональных данных».

                            Обращаем ваше внимание, что отзыв согласия на обработку персональных данных влечёт за собой удаление Вашей учётной записи с Интернет-сайта Mebel.ru, а также уничтожение записей, содержащих ваши персональные данные, в системах обработки персональных данных интернет-магазина Mebel.ru, что может сделать невозможным пользование интернет-сервисами и интернет-магазином Mebel.ru.

                            Настоящее согласие действует в течение всего периода хранения персональных данных, если иное не предусмотрено законодательством Российской Федерации.</p>
                    </div>
                </div>

                {/* 2 collapse */}
                <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
                    <input
                        type="checkbox"
                        checked={openIndex === 1}
                        onChange={() => handleToggle(1)} // Toggle qilish
                    />
                    <div className="collapse-title text-xl font-medium">
                        О компании
                    </div>
                    <div className="collapse-content">
                        <h2 className='text-center text-[14] text-xl'>Реквизиты</h2>
                        <p className='pb-3'>ООО «Мебель.ру»</p>
                        <p className='pb-3'>ИНН 7726459710</p>
                        <p className='pb-3'>КПП 772601001</p>
                        <p className='pb-3'>ОГРН 1197746674069</p>
                        <p className='pb-3'>Адрес места нахождения: 117535, г. Москва, ул. Дорожная, д.30, корп.1, кв.195</p>
                        <p className='pb-3'>Почтовый адрес: 117535, г. Москва, ул. Дорожная, д.30, корп.1, кв.195</p>
                        <p className='pb-3'>Расчетный счет: 40702810133030000257</p>
                        <p className='pb-3'>Наименование Банка: ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО) БИК Банка 044525411</p>
                        <p className='pb-3'>Корреспондентский счёт: 30101810145250000411</p>
                    </div>
                </div>


                {/* 3 collapse */}
                <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
                    <input
                        type="checkbox"
                        checked={openIndex === 2}
                        onChange={() => handleToggle(2)} // Toggle qilish
                    />
                    <div className="collapse-title text-xl font-medium">
                        Доставка
                    </div>
                    <div className="collapse-content">
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>

                {/* 4 collapse */}
                <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
                    <input
                        type="checkbox"
                        checked={openIndex === 3}
                        onChange={() => handleToggle(3)} // Toggle qilish
                    />
                    <div className="collapse-title text-xl font-medium">
                        Оплата
                    </div>
                    <div className="collapse-content">
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>

                {/* 5 collapse */}
                <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
                    <input
                        type="checkbox"
                        checked={openIndex === 4}
                        onChange={() => handleToggle(4)} // Toggle qilish
                    />
                    <div className="collapse-title text-xl font-medium">
                        Гарантия
                    </div>
                    <div className="collapse-content">
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        <p>tabindex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Company