import { CarouselIntro, Cart, Header, MakeOrder, Menu, WhereWeAre } from './components';
import './App.scss';

function App() {
  return (
    <div className="eltata">
      <Cart />
      <header className='eltata__header'>
        <Header />
      </header>
      <main className='eltata__content'>
        <section className='eltata__content-carousel'>
          <CarouselIntro />
        </section>
        <section className='eltata__content-menu' id='eltata__content-menu'>
          <Menu />
        </section>
        <section className='eltata__content-makeorder'>
          <MakeOrder />
        </section>
        <section className='eltata__content-whereweare'>
          <WhereWeAre />
        </section>
      </main>

    </div>
  );
}

export default App;
