function Preview(props) {
    const { id, onCLick } = props;


    return (
        <>
            <a className="video-iframe__link" target="_blank" onClick={onCLick}>
                <picture>
                    <source srcSet={`https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`} type="image/webp" />
                    <img className="video-iframe__media" src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="" />
                </picture>
            </a>
            <button className="video-iframe__button" aria-label='Запустить видео' onClick={onCLick}></button>
        </>
    )
}

export default Preview;