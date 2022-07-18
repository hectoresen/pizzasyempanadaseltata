import { CarouselIntro, Header, Menu } from './components';
import './App.scss';

function App() {
  return (
    <div className="eltata">
      <header className='eltata__header'>
        <Header />
      </header>
      <main className='eltata__content'>
        <section className='eltata__content-carousel'>
          <CarouselIntro />
        </section>
        <section className='eltata__content-menu'>
          <Menu />
        </section>
      </main>

    </div>
  );
}

export default App;
