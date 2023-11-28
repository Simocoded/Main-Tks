import React, { useCallback, useEffect,useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import { slideTexts, imageByIndex } from "./imageByIndex";
import SplitType from 'split-type';
import gsap from "gsap";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  let app = useRef(null);
  let content = useRef(null);
  let tl = gsap.timeline({delay: .8});

  const onButtonClick = useCallback((emblaApi) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  );

  useEffect(() => {
    const contentP = content.children;
    const headlineFirst = content.children[0]
    gsap.to(app, 0, {css: {visibility: 'visible'}})

    console.log(headlineFirst)

    tl.from(headlineFirst, { duration: 1, y: 20, opacity: 0, ease:"power3.easeOut", delay: .7}, 'Start')
  }, [tl])
  
  

  return (
    <div className='embla invisible' ref={el => app = el}>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__number'>
                <span>{index + 1}</span>
              </div>
              <img
                className='embla__slide__img'
                src={imageByIndex(index)}
                alt='Your alt text'
              />

              <div className='embla__slide__text absolute top-10 left-7' ref={el => content = el}>
                <p className='text-6xl lg:text-8xl text-white font-bold mytext'>{slideTexts[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
