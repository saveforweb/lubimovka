function Photo(props) {
    return (
        <img className="photo"
            alt="Фото из жизни театрального фестиваля"
            src={props.image}
        />
    )
}

export default Photo;
