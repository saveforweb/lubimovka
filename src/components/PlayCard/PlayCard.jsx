import {PlayCover} from "../PlayCover/PlayCover";
import {PlayTitle} from "../PlayTitle/PlayTitle";
import {PlayInfo} from "../PlayInfo/PlayInfo";

export const PlayCard = ({ title, author, city, year }) => {
    return (
        <>
            <PlayCover>
                <PlayTitle
                    text={title}
                />
            </PlayCover>
            <PlayInfo
                author={author}
                city={city}
                year={year}
            />
        </>
    )};
