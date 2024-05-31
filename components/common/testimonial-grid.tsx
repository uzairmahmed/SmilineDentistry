import React from 'react';
import { RiStarFill, RiStarHalfFill, RiStarHalfLine, RiStarHalfSFill, RiStarHalfSLine, RiStarLine, RiStarSFill, RiStarSLine, RiToothFill } from "react-icons/ri";
import { title, subtitle, paragraph } from "@/components/primitives";

interface Testimonial {
    text: string;
    name: string;
    rating: number;
}

interface TestimonialGridProps {
    testimonials: Testimonial[];
}
const TestimonialGrid: React.FC<TestimonialGridProps> = ({ testimonials }) => {
    const renderstars = (stars:number) => {
        let icons = []
        
        for (let index = 0; index < stars; index++) {
            icons.push(<RiStarFill />)
        }
        for (let index = 0; index < 5-stars; index++) {
            icons.push(<RiStarLine/>)
        }

        return icons
 
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-10'>
            {testimonials.map((testimonial) => (
                <div className='flex flex-col px-16 py-16 rounded-3xl bg-white'>
                    <h1 className={paragraph({ size: 'sm' })}>
                        "{testimonial.text}"
                    </h1>
                    <h1 className={
                        subtitle({ size: 'sm', alignment: 'right' })
                    }>
                        - {testimonial.name}
                    </h1>

                    <div className='flex flex-row justify-end text-primary text-xl'>
                        {renderstars(testimonial.rating)}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TestimonialGrid;
