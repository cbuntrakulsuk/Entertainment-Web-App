"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Autoplay from "embla-carousel-autoplay";

const Slider = (props: { cards: JSX.Element[] }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ playOnInit: true, delay: 5000 }),
    WheelGesturesPlugin({ forceWheelAxis: "x" }),
  ]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">{props.cards[0]}</div>
        <div className="embla__slide">{props.cards[1]}</div>
        <div className="embla__slide">{props.cards[2]}</div>
        <div className="embla__slide">{props.cards[3]}</div>
        <div className="embla__slide" id="last-Slide">
          {props.cards[4]}
        </div>
      </div>
    </div>
  );
};

export default Slider;
