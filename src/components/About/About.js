import RegularTitle from "../RegularTitle/RegularTitle";
import RegularText from "../RegularText/RegularText";

function About() {
    return (
        <section className="about">
            <div className="about__container">
                <RegularTitle text='О проекте' />
                <div className="about__content">
                    <RegularText>
                        За первый сезон проекта организаторы провели 17 мероприятий вместе с режиссёрами и актёрами московских театров: Театра.doc, Театрального Центра им. Вс. Мейерхольда, Гоголь-центра, Электротеатра «Станиславский», Ленкома.
                    </RegularText>
                </div>
            </div>
        </section>
    )
}

export default About;