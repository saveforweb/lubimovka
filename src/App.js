import MainTitle from './components/MainTitle/MainTitle';
import SmallLogo from './components/SmallLogo/SmallLogo';
import About from './components/About/About';
import VideoIframe from './components/VideoIframe/VideoIframe';
import SmallButton from './components/SmallButton/SmallButton';

function App() {
  return (
    <>
      <SmallLogo />
      <SmallButton text='ПРОЕКТЫ'/>
      <MainTitle text='Любимовка. Ещё' />
      <About />
      <VideoIframe id="4JS70KB9GS0"/>
    </>
  );
}

export default App;
