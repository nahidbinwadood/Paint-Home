// import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

const Banner = () => {
  // const navigation = useNavigation();
  // if (navigation.state === "loading") return <Loader />;
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Genius Landscape Painting",
      des: "Nature's poetry on canvas strokes whispering tales of sunsets  with meticulous brilliance.",
    },
    {
      img: "https://images.unsplash.com/photo-1580136579395-4bbb9ffdc4ca?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Glorious Oil Painting",
      des: "Luminescent hues dance on the canvas of history unfurling in every stroke a masterpiece incarnate.",
    },
    {
      img: "https://wallpaperset.com/w/full/4/d/0/282511.jpg",
      title: "Awesome Portrait Drawing",
      des: "Eyes that speak souls in graphite or charcoal, a testament to skill and reverence for humanity",
    },
    {
      img: "https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cartoon Drawing",
      des: "Playful lines breathe life into whimsical characters through vibrant hues world of imagination unleashed",
    },
    {
      img: "https://wallpapers.com/images/hd/anime-scenery-digital-art-iin5oh9ey9ummwb4.jpg",
      title: "Beautiful Portrait",
      des: "Elegance immortalized each stroke a testament to grace and capturing the essence of souls in timeless beauty.",
    },
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="mt-8 container mx-auto rounded-xl px-6 md:px-0 "
    >
      <h2 className="raleway mt-12  text-2xl md:text-4xl text-center font-bold pb-8">
        Art of Drawing
      </h2>
      <div>
        <h1
          className="raleway text-xl md:text-4xl text-center font-bold pb-8"
          style={{ paddingTop: "rem", margin: "auto 0", fontWeight: "normal" }}
        >
          {`We are offering`}{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Landscape Painting",
                "Watercolor Painting",
                "Portrait Painting",
                "Cartoon Drawing",
                "And Many More !",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={65}
              deleteSpeed={70}
              delaySpeed={1300}
            />
          </span>
        </h1>
      </div>
      {/* <p className="w-2/3 mx-auto inter text-center mb-12 text-lg">Delve into the captivating world of drawing, where lines and shapes converge to create infinite possibilities. Explore the art of observation, perspective, and composition as you breathe life into your sketches. From intricate details to bold strokes, drawing is a journey of self-expression and discovery.</p> */}
      <div
        className="px-6 md:px-0 container raleway mx-auto rounded-xl  w-full h-60 sm:h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
        style={{
          backgroundImage: `url(${
            currentSlider === 0
              ? sliders[sliders.length - 1].img
              : sliders[currentSlider - 1].img
          })`,
        }}
      >
        {/* arrow */}
        <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        {/* text container here */}
        <div className="w-1/2 px-8 left-0  absolute drop-shadow-lg text-white rounded-lg">
          <h1 className="lg:text-3xl font-bold pp mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-xs pp sm:text-sm md:text-base lg:text-lg">
            {sliders[currentSlider].des}
          </p>
        </div>
        {/* slider container */}
        <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
          <div
            className="ease-linear duration-300 flex gap-4 items-center"
            style={{
              transform: `translateX(-${
                currentSlider * (isSmallScreen ? 98 : 200)
              }px)`,
            }}
          >
            {/* sliders */}
            {sliders.map((slide, inx) => (
              <img
                key={inx}
                src={slide.img}
                className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
                  currentSlider - 1 === inx ? "scale-0" : "scale-100 delay-500"
                } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                alt={slide.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
