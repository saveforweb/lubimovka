import Photo from '../Photo/Photo';

import photo1 from './Photo1.jpg';
import photo2 from './Photo2.jpg';
import photo3 from './Photo3.jpg';
import photo4 from './Photo4.jpg';
import photo5 from './Photo5.jpg';
import photo6 from './Photo6.jpg';
import photo7 from './Photo7.jpg';
import photo8 from './Photo8.jpg';

function PhotoGrid() {
    return (
        <div className='photo-grid'>
            <Photo image={photo1} />
            <Photo image={photo2} />
            <Photo image={photo3} />
            <Photo image={photo4} />
            <Photo image={photo5} />
            <Photo image={photo6} />
            <Photo image={photo7} />
            <Photo image={photo8} />
        </div>
    )
}

export default PhotoGrid;