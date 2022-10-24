export default function Header(props) {
    const { children } = props;
    return (
        <div className="header">
            {children}
            <div className="main-menu">

                <ul className="main-menu-ul">
                    <li className="main-menu-li-links">
                        <a className="header-social-links header-menu-links header-links-visable" href="https://lubimovka.art/events">Афиша</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links header-menu-links header-links-visable" href="https://lubimovka.art/library">Библиотека</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links header-menu-links header-links-visable" href="https://lubimovka.art/projects">Проекты</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links header-menu-links header-links-visable" href="https://lubimovka.art/history">История</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links header-menu-links header-links-visable" href="https://lubimovka.art/blog">Блог</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links header-menu-links header-links-visable" href="https://lubimovka.art/news">Новости</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links header-menu-links header-links-visable" href="https://lubimovka.art/about-us">О фестивале</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links header-menu-links header-links-visable" href="https://lubimovka.art/contacts">Контакты</a>
                    </li>
                </ul>

            </div>
            <div className="social-links-menu">
                <ul className="main-menu-ul-social">
                    <li className="main-menu-li-social">
                        <a className="header-social-links  header-links-visable" href="https://www.facebook.com/festival.lubimovka/">fb</a>
                    </li>
                    <li className="main-menu-li-social">
                        <a className="header-social-links  header-links-visable" href="https://www.instagram.com/lubimovka/">inst</a>
                    </li>
                    <li className="main-menu-li-social">
                        <a className="header-social-links  header-links-visable" href="https://www.youtube.com/channel/UCDZ1HTzBVBxm_vw6tV7C3lg">ytube</a>
                    </li>
                    <li className="main-menu-li-social">
                        <a className="header-social-links  header-links-visable" href="https://t.me/lubimovka">tlgrm</a>
                    </li>
                    <li className="main-menu-li-social">
                        <a className="header-social-links  header-links-visable" href="https://vk.com/festival.lubimovka">vk</a>
                    </li>
                </ul>
            </div>
            <div className="support-link">
                <button className="header-plus" type="button"></button>
                <p className="support-link-text">ПОДДЕРЖАТЬ</p>
            </div>
        </div>
    )
}