import React from "react";
import { About, Portfolio } from './index'
import img from "./images/josie-main.jpeg";

const Home = () => {
  return (
    <div className="homePage">
          <article className="homeContent">
            <h1>Josie Parker</h1>
        <p>
          {/* I'm baby kitsch man braid yuccie put a bird on it you probably haven't
          heard of them leggings selvage twee art party drinking vinegar. Palo
          santo shaman before they sold out put a bird on it microdosing tote
          bag, stumptown leggings hashtag bespoke paleo. Tousled shabby chic
          viral adaptogen pug affogato. Tacos sriracha freegan DIY. Wolf tote
          bag post-ironic, shaman taiyaki lumbersexual authentic lyft keffiyeh
          keytar. Ugh single-origin coffee godard master cleanse jianbing. JOMO
          sus street art, hashtag fingerstache YOLO gatekeep slow-carb
          lumbersexual green juice keffiyeh heirloom. 90's craft beer marxism
          meh echo park prism. */}
          An aspiring fullstack developer
        </p>
      </article>
      {/* <article className="homePhoto">
        <h1 id="first">Josie Parker</h1> */}
        {/* <img
          src={img}
          alt="a photo of josie"
        ></img> */}
        {/* <h1 id="last">Parker</h1> */}
      {/* </article> */}
      {/* <About/>
      <Portfolio/> */}
      <div id="about-section">
        <About/>
      </div>
      <div id="folio-section">
        <Portfolio/>
      </div>
    </div>
  );
};

export default Home;
