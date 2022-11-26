import React, {
  useState,
  useEffect
} from "react";

function SliderComponent() {
  const [SliderPointer, setSliderPointer] = useState<number>(0);

  useEffect(() => {
    const pointer = SliderPointer;
    const widthScreen = document.body.clientWidth;

    (document.getElementById('slider-transform-img') as HTMLDivElement).style.transform = `translateX(-${pointer * widthScreen}px)`;

    console.log(pointer);
  }, [SliderPointer]);

  return (
    <div className="relative overflow-hidden">
      <input onChange={() => setSliderPointer(0)} type="radio" name="slider-pointer" id="slider-pointer_1" defaultChecked />
      <input onChange={() => setSliderPointer(1)} type="radio" name="slider-pointer" id="slider-pointer_2" />
      <input onChange={() => setSliderPointer(2)} type="radio" name="slider-pointer" id="slider-pointer_3" />
      <input onChange={() => setSliderPointer(3)} type="radio" name="slider-pointer" id="slider-pointer_4" />

      <div id="slider-transform-img" className="flex">
        <img src="http://gtech.ac.th/img/slider/slider1.jpg" alt="slider-1" />
        <img src="http://gtech.ac.th/img/slider/slider2.jpg" alt="slider-1" />
        <img src="http://gtech.ac.th/img/slider/slider3.jpg" alt="slider-1" />
        <img src="http://gtech.ac.th/img/slider/slider4.jpg" alt="slider-1" />
      </div>

      <div className="absolute bottom-3 left-[50%] translate-x-[-50%]">
        <label htmlFor="slider-pointer_1">1</label>
        <label htmlFor="slider-pointer_2">2</label>
        <label htmlFor="slider-pointer_3">3</label>
        <label htmlFor="slider-pointer_4">4</label>
      </div>
    </div>
  )
}

export default SliderComponent
