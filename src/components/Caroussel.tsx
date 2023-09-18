import  { useState } from 'react';


interface CarouselItem {
    id: number;
    title: string;
    img: string;
}

const Carousel: React.FC = () => {
    const [activeItem, setActiveItem] = useState<number>(0);

    const data: CarouselItem[] = [
        {
            id: 1,
            title: 'Image 1',
            img: 'https://picsum.photos/600/400?random=1'
        },
        {
            id: 2,
            title: 'Image 2',
            img: 'https://picsum.photos/600/400?random=2'
        },
        {
            id: 3,
            title: 'Image 3',
            img: 'https://picsum.photos/600/400?random=3'
        },
        {
            id: 4,
            title: 'Image 4',
            img: 'https://picsum.photos/600/400?random=4'
        }
    ];

    const handleClick = (type: 'prev' | 'next') => {
        const totalItems = data.length - 1;
        if (type === 'prev') {
            setActiveItem(activeItem === 0 ? totalItems : activeItem - 1);
        } else if (type === 'next') {
            setActiveItem(activeItem === totalItems ? 0 : activeItem + 1);
        }
    };

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${activeItem * 100}%)` }}>
                {data.map((item: CarouselItem) => (
                    <div className="carousel-item" key={item.id}>
                        <img src={item.img} alt={item.title} />
                        {/*<div className="carousel-caption">
                            <h3>{item.title}</h3>
                        </div>*/}
                    </div>
                ))}
            </div>
            <button className="carousel-control prev" onClick={() => handleClick('prev')}>
                &#60;
            </button>
            <button className="carousel-control next" onClick={() => handleClick('next')}>
                &#62;
            </button>
        </div>
    );
};

export default Carousel;
