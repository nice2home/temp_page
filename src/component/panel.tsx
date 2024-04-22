import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Panel({ images }: { images: string[] }) {
    return (
        <div className="bg-white h-80 rounded-3xl border border-slate-300 border-collapse shadow-md overflow-hidden flex flex-col justify-stretch">
            <div className="grow bg-green-300">
                {/* <ImageGallery className="h-full" items={images} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} infinite={true} showBullets={true} showNav={false} useWindowKeyDown={false}/> */}
                <Splide options={{ rewind: true, cover: true, height: '240px' }} aria-label="React Splide Example">
                    {images.map((image, index) => (
                        <SplideSlide key={index}>
                            <img className='h-full bg-cover' src={image} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <div className='h-20 px-4 py-2 flex flex-col cursor-pointer' onClick={()=>'a'}>
                <div className='w-full overflow-hidden whitespace-nowrap text-ellipsi text-[10pt] pb-1'>
                Yiman's Room in New York, NY, USA
                </div>
                <div className="flex flex-row gap-4">
                    <div className='grow overflow-hidden whitespace-nowrap'>
                        <p className="text-[8pt] text-slate-700">
                            Jun 20 - Aug 30 <br />
                            3 bed 1 bath
                        </p>
                    </div>
                    <div className='text-right text-[8pt] flex items-end'>$1870/month</div>
                </div>
            </div>
        </div>
    );
}
