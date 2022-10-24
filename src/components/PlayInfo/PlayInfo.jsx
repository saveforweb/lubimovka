export const PlayInfo = ({ author, city, year }) => {
    return (
        <div className="play-info">
            <div className="play-author-container">
                <h7 className="play-author">{author}</h7>
            </div>
            <div className="play-city-container">
                <p className="play-city">{city}</p>
                <p className="play-year">{year}</p>
            </div>
        </div>
    )};
