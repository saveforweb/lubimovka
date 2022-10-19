import MainTitle from './components/MainTitle/MainTitle';
import SmallLogo from './components/SmallLogo/SmallLogo';
import About from './components/About/About';
import SmallButton from './components/SmallButton/SmallButton';
import HeaderText from './components/HeaderText/HeaderText';
import HeaderPhoto from './components/HeaderPhoto/HeaderPhoto';
import VideoBlock from './components/VideoBlock/VideoBlock';

function App() {
  return (
    <>
      <SmallLogo />
      <SmallButton text='ПРОЕКТЫ'/>
      <MainTitle text='Любимовка. Ещё' />
      <HeaderText text='Межсезонные читки и обсуждение пьес из списка отмеченных отборщиками Любимовки.' />
      <HeaderPhoto/>
      <About />
      <VideoBlock />
    </>
  );
}

export default App;
