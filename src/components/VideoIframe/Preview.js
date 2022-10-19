function Preview(props) {
    const { id, onCLick } = props;


    return (
        <>
            <div className="video-iframe__block" onClick={onCLick}>
                <picture>
                    <source srcSet={`https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`} type="image/webp" />
                    <img className="video-iframe__media" src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="" />
                </picture>
                <button className="video-iframe__button" aria-label='Запустить видео'>
                    <svg
                        viewBox="0 0 64 64"
                        fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="video-iframe__icon">
                        <rect
                            rx="32"
                            className="video-iframe__icon-circle" />
                        <path
                            d="M41 31.4999L26.75 39.7272L26.75 31.4999L26.75 23.2727L41 31.4999Z"
                            className="video-iframe__icon-triangle" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Preview;