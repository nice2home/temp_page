import Panel from "./panel";
import type { HouseCardProps } from "./panel";


// generate mock data of type HouseCardProps
const mockData: HouseCardProps[] = [
    {
      owner: "John",
      loc: "San Francisco, CA",
      images: ["house/1.jpg", "house/13.jpg"],
      date_range: "Apr 14, 2024 - Jun 14, 2024",
      type: "Studio",
      price: 2000,
      frequency: "month",
    },
    {
      owner: "Jane",
      loc: "Sunnyvale, CA",
      images: ["house/2.jpg", "house/14.jpg"],
      date_range: "May 14, 2024 - Aug 14, 2024",
      type: "1 bed 1 bath",
      price: 2500,
      frequency: "month",
    },
    {
      owner: "Michael",
      loc: "Sacramento, CA",
      images: ["house/3.jpg", "house/15.jpg"],
      date_range: "Jun 14, 2024 - Sep 14, 2024",
      type: "2 bed 1 bath",
      price: 3000,
      frequency: "month",
    },
    {
      owner: "Emily",
      loc: "Santa Clara, CA",
      images: ["house/4.jpg", "house/16.jpg"],
      date_range: "Jul 14, 2024 - Oct 14, 2024",
      type: "3 bed 2 bath",
      price: 4000,
      frequency: "month",
    },
    {
      owner: "David",
      loc: "San Francisco, CA",
      images: ["house/5.jpg", "house/17.jpg"],
      date_range: "Aug 14, 2024 - Nov 14, 2024",
      type: "4 bed 2 bath",
      price: 5000,
      frequency: "week",
    },
    {
      owner: "Sarah",
      loc: "Sunnyvale, CA",
      images: ["house/6.jpg", "house/18.jpg"],
      date_range: "Sep 14, 2024 - Dec 14, 2024",
      type: "Studio",
      price: 2200,
      frequency: "month",
    },
    {
      owner: "Daniel",
      loc: "Sacramento, CA",
      images: ["house/7.jpg", "house/19.jpg"],
      date_range: "Oct 14, 2024 - Jan 14, 2025",
      type: "2 bed 1 bath",
      price: 2800,
      frequency: "month",
    },
    {
      owner: "Olivia",
      loc: "Santa Clara, CA",
      images: ["house/8.jpg", "house/13.jpg"],
      date_range: "Nov 14, 2024 - Feb 14, 2025",
      type: "1 bed 1 bath",
      price: 2400,
      frequency: "month",
    },
    {
      owner: "William",
      loc: "San Francisco, CA",
      images: ["house/9.jpg", "house/13.jpg"],
      date_range: "Dec 14, 2024 - Mar 14, 2025",
      type: "3 bed 2 bath",
      price: 4200,
      frequency: "month",
    },
    {
      owner: "Sophia",
      loc: "Sunnyvale, CA",
      images: ["house/10.jpg", "house/13.jpg"],
      date_range: "Jan 14, 2024 - Apr 14, 2025",
      type: "4 bed 2 bath",
      price: 4800,
      frequency: "month",
    },
    {
      owner: "Ethan",
      loc: "Sacramento, CA",
      images: ["house/11.jpg", "house/13.jpg"],
      date_range: "Feb 14, 2024 - May 14, 2025",
      type: "Studio",
      price: 2300,
      frequency: "month",
    },
    {
      owner: "Ava",
      loc: "Santa Clara, CA",
      images: ["house/12.jpg", "house/13.jpg"],
      date_range: "Mar 14, 2024 - Jun 14, 2025",
      type: "1 bed 1 bath",
      price: 2600,
      frequency: "month",
    }
  ];
  


export default function MockHousing() {
    return <>
        {mockData.map((data, index) => (
            <Panel key={index} {...data} />)
        )}
    </>
}