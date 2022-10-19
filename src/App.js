import MainTitle from './components/MainTitle/MainTitle';
import SmallLogo from './components/SmallLogo/SmallLogo';
import About from './components/About/About';
import SmallButton from './components/SmallButton/SmallButton';

function App() {
  return (
    <>
      <SmallLogo />
      <SmallButton text='ПРОЕКТЫ'/>
      <MainTitle text='Любимовка. Ещё' />
      <About />
    </>
  );
}

export default App;
