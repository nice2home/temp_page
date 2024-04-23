import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface HouseCardProps {
    owner: string;
    loc: "San Francisco, CA" | "Sunnyvale, CA" | "Sacramento, CA" | "Santa Clara, CA";
    images: string[];
    date_range: string;
    type: "Studio" | "1 bed 1 bath" | "2 bed 1 bath" | "3 bed 2 bath" | "4 bed 2 bath";
    price: number;
    frequency: "month" | "week";
    id: string;
};

export type { HouseCardProps };

export default function Panel({ owner, loc, images, date_range, type, price, frequency, id }: HouseCardProps) {
    // funtion to handle click event
    const handleClick = () => {
        // jump to url on current page
        window.open("post/" + id, "_self");
    };

    return (
        <div className="bg-white h-80 rounded-3xl border border-slate-300 border-collapse shadow-md hover:shadow-xl overflow-hidden flex flex-col justify-stretch transition duration-300 ease-in-out">
            <div className="grow">
                <Splide options={{ rewind: true, cover: true, height: '240px' }} aria-label="React Splide Example">
                    {images.map((image, index) => (
                        <SplideSlide key={index}>
                            <img className='h-full bg-cover' src={image} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <div className='h-20 px-4 py-2 flex flex-col cursor-pointer' onClick={handleClick}>
                <div className='w-full overflow-hidden whitespace-nowrap text-ellipsi text-[10pt] pb-1'>
                    {owner}&#39;s Room in {loc}
                </div>
                <div className="flex flex-row gap-4">
                    <div className='grow overflow-hidden whitespace-nowrap'>
                        <p className="text-[8pt] text-slate-700">
                            {date_range} <br />
                            {type}
                        </p>
                    </div>
                    <div className='text-right text-[8pt] flex items-end'>${price}/{frequency}</div>
                </div>
            </div>
        </div>
    );
}
