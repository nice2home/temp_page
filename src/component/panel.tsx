import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Panel({images}: {images: string[]}) {
    return (
        <div className="bg-white h-72 rounded-3xl border border-slate-300 border-collapse shadow-md overflow-hidden flex flex-col justify-stretch">
            <div className="h-52">
                {/* <ImageGallery className="h-full" items={images} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} infinite={true} showBullets={true} showNav={false} useWindowKeyDown={false}/> */}
                <Splide options={{ rewind: true, height: '13rem' }} aria-label="React Splide Example">
                    {images.map((image, index) => (
                        <SplideSlide key={index}>
                            <img className='w-full h-full' src={image}/>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <div className="grow p-4">info</div>
        </div>
    );
}
