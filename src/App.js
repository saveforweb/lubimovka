import MainTitle from './components/MainTitle/MainTitle';
import SmallLogo from './components/SmallLogo/SmallLogo';
import About from './components/About/About';
import SmallButton from './components/SmallButton/SmallButton';
import HeaderText from './components/HeaderText/HeaderText';
import HeaderPhoto from './components/HeaderPhoto/HeaderPhoto';
import Header from './components/Header/Header';
import VideoIframe from './components/VideoIframe/VideoIframe';
import VideoBlock from './components/VideoBlock/VideoBlock';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';

function App() {
  return (
    <>
      <Header>
        <SmallLogo />
      </Header>
      <SmallButton text='ПРОЕКТЫ' />
      <MainTitle text='Любимовка. Ещё' />
      <HeaderText text='Межсезонные читки и обсуждение пьес из списка отмеченных отборщиками Любимовки.' />
      <HeaderPhoto />
      <About />
      <VideoBlock />
      <PhotoGrid />
    </>
  );
}

export default App;
