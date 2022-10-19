import RegularTitle from "../RegularTitle/RegularTitle";
import RegularText from "../RegularText/RegularText";
import VideoIframe from "../VideoIframe/VideoIframe"

function VideoBlock() {
    return (
        <section className="video-block">
            <div className="video-block__container">
                <RegularTitle text="Заголовок блока с видео" />
                <div className="video-block__content">
                    <VideoIframe id="4JS70KB9GS0" />
                    <RegularText>
                        Из этого следует два вывода: с одной стороны, искусство не должно быть равно реальности, потому что иначе оно не будет искусством, с другой стороны – оно должно быть все-таки подобно реальности, иначе мы ничего не поймем, не подключимся и не распознаем замыслы автора. Мне нравится такое определение, что один из видов эстетики – это, грубо говоря, "понимание" чего-то. Если нам нечего понимать, то мы не получим ни удовольствия, ни какого-то чувства, ничего. А для того, чтобы что-то понять, нам должно быть представлено что-то, что не равно само себе. То есть нам показывают или говорят что-то, а мы понимаем, что там есть что-то еще. Вот мы смотрим на античную статую и понимаем, что это – статуя, но похожа на человека. Если она будет абсолютно такая же как человек, как восковая фигура, то мы поймем, что это уже не искусство. Искусство для того, чтобы люди догадались, домыслили, дочувствовали что-то.
                    </RegularText>
                </div>
            </div>
        </section>
    )
}

export default VideoBlock;