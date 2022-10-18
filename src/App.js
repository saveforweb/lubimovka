import MainTitle from './components/MainTitle/MainTitle';
import RegularTitle from './components/RegularTitle/RegularTitle';
import RegularText from './components/RegularText/RegularText';

function App() {
  return (
    <>
      <MainTitle text='Любимовка. Ещё' />
      <RegularTitle text='О проекте' />
      <RegularText
        text='За первый сезон проекта организаторы провели 17 мероприятий вместе с режиссёрами и актёрами московских театров: Театра.doc, Театрального Центра им. Вс. Мейерхольда, Гоголь-центра, Электротеатра «Станиславский», Ленкома.'
      />
    </>
  );
}

export default App;
