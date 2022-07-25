import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselIntro.scss';

const CarouselIntro = () => {

const slides = [
  {
    title: "Empanadas y empanadillas",
    subtitle: "Enteras o porciones",
    image:
      "https://cdn.discordapp.com/attachments/964479986855706624/1001133578282868807/209290430_169364441919154_6614498174943569325_n.jpg"
  },
  {
    title: "Pizzas",
    subtitle: "Enteras o porciones",
    image:
      "https://media.discordapp.net/attachments/964479986855706624/1001130394504134826/294085913_421775336678062_6956343524878210492_n.jpg?width=1013&height=1013"
  },
  {
    title: "Postres",
    subtitle: "100% caseros",
    image:
      "https://cdn.discordapp.com/attachments/964479986855706624/1001133577972502619/210115506_169364425252489_8581609915645560438_n.jpg"
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h5 className="slideSubtitle">{slide.subtitle}</h5>
        </div>
      </div>
    </div>
  );
}

const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return <div className='carousel-container'>
                <div className="slides">
                  <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

                  {[...slides, ...slides, ...slides].map((slide, i) => {
                    let offset = slides.length + (state.slideIndex - i);
                    return <Slide slide={slide} offset={offset} key={i} />;
                  })}
                  <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
                </div>
          </div>
}

export default CarouselIntro;