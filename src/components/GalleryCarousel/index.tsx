"use client";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const GalleryCarousel: React.FC = () => {
  return (
    <div className="w-full">
      <LightGallery
        speed={500}
        download={false}
        plugins={[lgZoom]}
        mode="lg-fade"
      >
        <a
          href="/images/first-car.jpg"
          className="inline-flex max-w-[15%] w-full mr-2"
        >
          <Image
            width={250}
            height={300}
            alt="img1"
            src="/images/first-car.jpg"
            className="min-h-[300px]   w-full object-cover"
          />
        </a>
        <a
          href="/images/second-car.jpg"
          className="inline-flex max-h-[300px] h-full  max-w-[65%] w-full mr-2"
        >
          <Image
            width={450}
            height={300}
            alt="img1"
            src="/images/second-car.jpg"
            className="min-h-[300px] w-full object-cover "
          />
        </a>
        <a
          href="/images/first-car.jpg"
          className="inline-flex max-w-[15%] w-full "
        >
          <Image
            width={250}
            height={300}
            alt="img1"
            src="/images/first-car.jpg"
            className="min-h-[300px]   w-full object-cover"
          />
        </a>
      </LightGallery>
    </div>
  );
};
export default GalleryCarousel;
