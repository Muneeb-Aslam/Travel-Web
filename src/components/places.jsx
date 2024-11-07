import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import four from "../assets/4.jpg";
import six from "../assets/6.jpg";
import twel from "../assets/11.jpg";
import thre from "../assets/12.jpg";
import fou from "../assets/13.jpg";
import fiv from "../assets/14.jpg";
import sixth from "../assets/15.jpg";

const Places = () => {
  return (
    <section className="bg-white py-8 md:py-20 px-6 md:px-12">
      <h3 className="text-black text-xl sm:text-2xl md:text-4xl font-bold pb-2">
        Popular Places to Visit
      </h3>
      <hr className="w-full bg-gray-200" />
      <CCarousel controls indicators className="pt-6">
        <CCarouselItem>
          <CImage
            className="d-block w-100  object-contain"
            src={twel}
            alt="slide 3"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100  object-contain"
            src={thre}
            alt="slide 3"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100  object-contain"
            src={one}
            alt="slide 1"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100  object-contain"
            src={two}
            alt="slide 2"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100  object-contain"
            src={four}
            alt="slide 1"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100  object-contain"
            src={six}
            alt="slide 3"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100  object-contain"
            src={fou}
            alt="slide 3"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100  object-contain"
            src={fiv}
            alt="slide 3"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100  object-contain"
            src={sixth}
            alt="slide 3"
          />
        </CCarouselItem>
      </CCarousel>
    </section>
  );
};

export default Places;
