import PhotoGrid from '../PhotoGrid/PhotoGrid';
import RegularTitle from '../RegularTitle/RegularTitle';

function PhotoBlock(text) {

    return (
        <section className='photo-block'>
            <div className='photo-block__regular-title'>
                <RegularTitle text='Заголовок блока с фотографиями' />
            </div>
            <PhotoGrid />
        </section>

    )
}

export default PhotoBlock;