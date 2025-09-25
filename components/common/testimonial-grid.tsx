import React from 'react';
import { title, subtitle, paragraph } from "@/components/primitives";
import { StarFillIcon, StarLineIcon } from './icons';

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
            icons.push(<StarFillIcon key={index}/>)
        }
        for (let index = 0; index < 5-stars; index++) {
            icons.push(<StarLineIcon key={index}/>)
        }

        return icons
 
    }
    return (
        <div className='grid grid-cols-1 gap-10 my-10 lg:grid-cols-2'>
            {testimonials.map((testimonial, index) => (
                <div key={index} className='flex flex-col p-10 bg-white md:p-16 rounded-3xl'>
                    <h1 className={paragraph({ size: 'sm' })}>
                        "{testimonial.text}"
                    </h1>
                    <h1 className={
                        subtitle({ size: 'sm', alignment: 'right' })
                    }>
                        - {testimonial.name}
                    </h1>

                    <div className='flex flex-row justify-end text-xl text-primary'>
                        {renderstars(testimonial.rating)}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TestimonialGrid;
