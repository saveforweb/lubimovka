import RegularTitle from "../RegularTitle/RegularTitle";
import RegularText from "../RegularText/RegularText";

function About(props) {
    const { text } = props;
    return (
        <section className="about">
            <div className="about__content">
                <RegularTitle text='О проекте' />
                <RegularText
                    text='За первый сезон проекта организаторы провели 17 мероприятий вместе с режиссёрами и актёрами московских театров: Театра.doc, Театрального Центра им. Вс. Мейерхольда, Гоголь-центра, Электротеатра «Станиславский», Ленкома.'
                />
            </div>
        </section>
    )
}

export default About;