import React from "react";
import img from "./images/josie-main.jpeg";

const Home = () => {
  return (
    <div>
      <article>
        <img
          src={img}
          alt="a photo of josie"
          width="278px"
          height="260px"
        ></img>
      </article>
      <article>
        <p>
          I'm baby kitsch man braid yuccie put a bird on it you probably haven't
          heard of them leggings selvage twee art party drinking vinegar. Palo
          santo shaman before they sold out put a bird on it microdosing tote
          bag, stumptown leggings hashtag bespoke paleo. Tousled shabby chic
          viral adaptogen pug affogato. Tacos sriracha freegan DIY. Wolf tote
          bag post-ironic, shaman taiyaki lumbersexual authentic lyft keffiyeh
          keytar. Ugh single-origin coffee godard master cleanse jianbing. JOMO
          sus street art, hashtag fingerstache YOLO gatekeep slow-carb
          lumbersexual green juice keffiyeh heirloom. 90's craft beer marxism
          meh echo park prism.
        </p>
      </article>
    </div>
  );
};

export default Home;
