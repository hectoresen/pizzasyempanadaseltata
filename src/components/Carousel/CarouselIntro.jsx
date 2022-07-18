import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselIntro.scss';

const CarouselIntro = () => {

const slides = [
  {
    title: "Empanadas y empanadillas",
    subtitle: "Enteras o porciones",
    image:
      "https://scontent.fvgo1-1.fna.fbcdn.net/v/t39.30808-6/209290430_169364441919154_6614498174943569325_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=bNY1KLxHbnwAX9TEKtZ&tn=k-ozwcOQz76gndu6&_nc_ht=scontent.fvgo1-1.fna&oh=00_AT_b2p7_y5PbYzpD4Ddv69hVrVk2mhNZOleqndR9PTzl7A&oe=62DA217E"
  },
  {
    title: "Pizzas",
    subtitle: "Enteras o porciones",
    image:
      "https://scontent.fvgo1-1.fna.fbcdn.net/v/t39.30808-6/208312047_169364428585822_6699304822989092132_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=XD5MPX5uLCcAX9vuZhI&_nc_ht=scontent.fvgo1-1.fna&oh=00_AT8WJwoeUBK5vJE6nEscbjqlhTawyLP2ksbpT8adbsk_nQ&oe=62DAC3DE"
  },
  {
    title: "Postres",
    subtitle: "100% caseros",
    image:
      "https://scontent.fvgo1-1.fna.fbcdn.net/v/t39.30808-6/258071648_262454845943446_5449838944429126748_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=LF2s1AlnMxkAX_-Rbua&_nc_ht=scontent.fvgo1-1.fna&oh=00_AT9K9sKJuxxqRAAEwwaCbD1zuYMh6sO4AQRxKXe5obb5-g&oe=62DB2777"
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