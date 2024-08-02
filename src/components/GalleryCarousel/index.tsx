"use client";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { imagesT } from "@/@types/gallery";

type GalleryCarouselProps = {
  images: imagesT[];
};

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images }) => {
  return (
    <div className="w-full">
      <LightGallery
        speed={500}
        download={false}
        plugins={[lgZoom]}
        mode="lg-fade"
      >
        {images.map(({ id, src, title }) => (
          <a
            key={id}
            href={src}
            className={`inline-flex ${
              parseInt(id) % 2 === 0 ? "max-w-[45%]" : "max-w-[25%]"
            }  w-full mr-2`}
          >
            <Image
              width={parseInt(id) % 2 === 0 ? 450 : 350}
              height={300}
              alt={title}
              src={src}
              className="min-h-[300px] max-h-[300px]   w-full object-cover"
            />
          </a>
        ))}

        {/* <a
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
        </a> */}
      </LightGallery>
    </div>
  );
};
export default GalleryCarousel;
