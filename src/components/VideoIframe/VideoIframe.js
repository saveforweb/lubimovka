import { useState } from "react";
import Frame from "./Frame";
import Preview from "./Preview";

function VideoIframe(props) {
    const { id } = props;
    const [isVisibleFrame, setIsVisibleFrame ] = useState(false);

    function handleClickPreview() {
        setIsVisibleFrame(true);
    }

    return (
        <div className="video-iframe">
            {!isVisibleFrame ? <Preview id={id} onCLick={handleClickPreview}/> : <Frame id={id} />}  
        </div>
    )
}

export default VideoIframe;