export default function Header(props) {
    const { children } = props;
    return (
        <div className="header">
            <div className="main-menu">
                {children}
                <ul className="main-menu-ul">
                    <li className="main-menu-li-links">
                        <a className="header-social-links" href="">Афиша</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links" href="">Библиотека</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links" href="">Проекты</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links" href="">История</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links" href="">Блог</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links" href="">Новости</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links" href="">О фестивале</a>
                    </li>
                    <li className="main-menu-li-links">
                        <a className="header-social-links" href="">Контакты</a>
                    </li>
                </ul>

            </div>
            <div className="social-links-menu">
                <ul className="main-menu-ul-social">
                    <li className="main-menu-li-social">
                        <a className="header-social-links" href="">Fb</a>
                    </li>
                    <li className="main-menu-li-social">
                        <a className="header-social-links" href="">inst</a>
                    </li>
                    <li className="main-menu-li-social">
                        <a className="header-social-links" href="">YTube</a>
                    </li>
                    <li className="main-menu-li-social">
                        <a className="header-social-links" href="">Tlgrm</a>
                    </li>
                    <li className="main-menu-li-social">
                        <a className="header-social-links" href="">Vk</a>
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