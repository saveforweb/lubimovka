function Frame(props) {
    const { id } = props;

    return (
        <iframe
            className="video-iframe__embed"
            src={`https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    )
}

export default Frame;