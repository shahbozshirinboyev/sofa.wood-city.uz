import CustomSlider from "../components/slider/CustomSlider";
import { useState, useEffect } from "react";

function HomePage() {
  const images = [
    {
      imgURL: "../../public/home_slider/slider-1.jpg",
      imgAlt: "Slider IMG 1",
    },
    {
      imgURL: "../../public/home_slider/slider-2.jpg",
      imgAlt: "Slider IMG 2",
    },
    {
      imgURL: "../../public/home_slider/slider-3.jpg",
      imgAlt: "Slider IMG 3",
    },
    {
      imgURL: "../../public/home_slider/slider-4.jpg",
      imgAlt: "Slider IMG 4",
    },
  ];

  return (
    <>
      <CustomSlider>
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.imgURL}
              alt={image.imgAlt}
              className="h-[280px] md:h-[400px] lg:h-[500px] object-cover"
            />
          );
        })}
      </CustomSlider>

      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          veniam, consectetur dolores magnam odit, fugit maiores praesentium
          minima quidem minus deserunt tempora cupiditate assumenda voluptas
          vero error nulla corrupti molestias ab tenetur voluptate quis
          provident unde aperiam. Explicabo laborum deleniti corrupti et omnis
          itaque pariatur. Sequi facere laborum est nisi dolore provident
          sapiente laboriosam iste aspernatur itaque? Numquam id eligendi culpa
          ducimus? Consequatur aspernatur animi quisquam impedit. Accusamus
          laboriosam consequatur iusto eligendi fugiat possimus! Fugiat,
          expedita. Impedit blanditiis repellat culpa? Hic illo perferendis
          libero quidem consectetur delectus recusandae quisquam cum beatae
          incidunt impedit suscipit, quia at nisi sed labore voluptatem numquam
          et odit maxime placeat eaque expedita iusto. Corrupti, modi velit!
          Delectus eum possimus autem quasi expedita animi officia totam labore
          nihil dolor dolores culpa itaque facere consequuntur ea, officiis
          reprehenderit dolorum blanditiis dolorem! Consequuntur tempora
          deleniti eius magnam omnis tenetur soluta aliquid mollitia dignissimos
          vitae cum accusamus, nobis incidunt ratione ducimus minima minus
          neque. Maiores similique corrupti debitis, ullam eaque saepe sapiente
          eligendi eos tempora quisquam quas, obcaecati alias facilis, harum
          itaque repudiandae odio mollitia id laudantium recusandae quaerat
          nihil soluta. Ducimus voluptatum maiores non dignissimos corrupti
          natus, reprehenderit laboriosam similique architecto totam id
          consectetur. Eaque porro quas ullam maiores voluptatum. Est dolore
          nobis odio deserunt fugiat veritatis nihil placeat quibusdam, sit enim
          porro suscipit, laudantium, vel atque quae autem quam amet? Aut cumque
          laboriosam repellendus omnis perferendis deleniti minima aperiam
          voluptatum corrupti vitae illo, corporis quia dolorum magnam optio
          explicabo. Beatae reprehenderit optio dignissimos rem. Incidunt
          repudiandae minus harum fuga? Quod doloremque deserunt temporibus
          laudantium explicabo. Explicabo laborum sint atque, culpa minima sit
          ut suscipit eum neque ipsam non eveniet architecto, expedita labore
          veritatis, officia consequatur rem doloribus numquam nam. In,
          accusantium nisi! Optio labore, sit sed doloribus possimus reiciendis
          explicabo error fugiat veniam, laborum tempora sequi quia? Ratione
          consequuntur accusantium ea laudantium cumque porro aperiam vitae
          dignissimos at. Autem, ducimus animi corporis ratione, dolore dicta
          harum reprehenderit, itaque delectus provident maiores. Alias corporis
          doloremque voluptas quod optio quibusdam deleniti non voluptatum,
          debitis saepe rerum assumenda sequi tenetur officia molestiae
          repudiandae cupiditate architecto accusantium culpa unde eos?
          Repellendus ut nostrum deserunt nam voluptate, sint magnam dolores
          quae tempora ea aspernatur provident eaque illo ducimus vero, odio
          quod sequi? Laborum dolore ratione corrupti neque quasi mollitia
          expedita voluptatem exercitationem odit rem rerum repellendus quidem
          facere sapiente, iure itaque fugit fuga. Rem id impedit alias. Error,
          ab. Maiores, eos quidem. Magni quis voluptatem non dicta quidem error
          porro facere modi veniam animi nulla, reiciendis, ullam hic. Nihil
          tempore officia qui itaque eligendi sunt tenetur voluptate nemo, unde
          delectus rem sed sint officiis id aliquam quam debitis expedita
          suscipit, facilis perferendis optio cumque in quas et. Excepturi iste
          modi nisi et iure eius perspiciatis dolorem nobis aut beatae
          doloremque officiis tempora nostrum numquam minus quibusdam ipsam esse
          ad, maiores vero in error, obcaecati inventore! Corrupti sit autem
          nihil rerum, natus optio molestias eaque delectus cumque odio, saepe
          architecto exercitationem ut facilis minus. Doloribus voluptatibus
          illo architecto id, quidem molestias quae iste!
        </p>
      </div>
    </>
  );
}

export default HomePage;
