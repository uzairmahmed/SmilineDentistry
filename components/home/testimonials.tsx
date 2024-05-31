import { Button } from '@nextui-org/button';
import React from 'react';
import { button, subtitle, title } from '../primitives';
import TestimonialGrid from '../common/testimonial-grid';

const Testimonials = () => {
    const testimonials = [
        {
            text: "No waiting time, excellent professional dentist, very helpful assistant doing the polishing etc. Definitely the best dentist, definitely recommend Dr. Asra. I am her patient for over two years. Excellent overall service.",
            name: "Hasan Sherwani",
            rating: 5
        },
        {
            text: "Dr. Asra has been my dentist for about 2-3 years now. Whether it was a routine cleaning, getting a nightguard to getting my wisdom teeth removed, each procedure was easy-going without any complications and Dr. Asra is a very reassuring dentist, always giving me the most feasible solutions. 100% recommend for any dental needs.",
            name: "Samreen Ali",
            rating: 5
        },
        {
            text: "I am terrified of dentists I had such  bad experience with a Dr. before but this office was AMAZING. Starting at the front desk to the assistant and the Dr. I loved the work and how professional and atentive they were. Thank you to the whole staff.",
            name: "Joana Silva-Machado",
            rating: 5
        },
        {
            text: "I love my dentist she is so nice and very caring! I got my first filling today and it was a breeze but only because she made me feel so comfortable. I suggest anyone that cares about there dental health but is also nervous about it go here. Best dentist I’ve ever been to. 😃😃😃",
            name: "Matthew Wallace",
            rating: 5
        },
        {
            text: "Dr. Asra is a phenomenal and incredibly knowledgeable dentist - the best one I’ve ever gone to! She never pushes any treatments on you like many other dentists do and she takes the time to explain everything thoroughly including all treatment options. She’s understanding and takes into account your level of comfort with each procedure. Always a pleasant experience coming here - I look forward to every appointment!",
            name: "Travi",
            rating: 5
        }
    ]
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-full px-5'>
                <h1 className={title({ size: 'sm', color:'primary', fullWidth: true })}>What Our Patients Say</h1>
                <h1 className={subtitle({ fullWidth: true })}>Discover the Smiles We've Transformed and the Stories Behind Them</h1>
            </div>
            <TestimonialGrid testimonials={testimonials} />

            <Button className={button()} size='lg' color="primary">
                Leave a review
            </Button>

        </div>
    );
}

export default Testimonials;
