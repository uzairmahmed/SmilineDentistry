import { Button } from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import React from 'react';
import { button, subtitle, title } from '../primitives';
import TestimonialGrid from '../common/testimonial-grid';

const Testimonials = () => {
    const testimonials = [
        {
            text: "Very nice staff and Doctor is amazing I had filling and after week i was not feeling good about that (my mistake i didnt care as she mentioned)went back to her and she did check up and fix it and later follow up with me (which surprised me because I never got call from any denist after any procedure )",
            name: "Saima Hussain",
            rating: 5
        },
        {
            text: "Dr. Asra is a phenomenal and incredibly knowledgeable dentist - the best one I've ever gone to! She never pushes any treatments on you like many other dentists do and she takes the time to explain everything thoroughly including all treatment options. She's understanding and takes into account your level of comfort with each procedure. Always a pleasant experience coming here - I look forward to every appointment!",
            name: "Travi",
            rating: 5
        },
        {
            text: "I am terrified of dentists I had such  bad experience with a Dr. before but this office was AMAZING. Starting at the front desk to the assistant and the Dr. I loved the work and how professional and atentive they were. Thank you to the whole staff.",
            name: "Joana Silva-Machado",
            rating: 5
        },
        {
            text: "I love my dentist she is so nice and very caring! I got my first filling today and it was a breeze but only because she made me feel so comfortable. I suggest anyone that cares about there dental health but is also nervous about it go here. Best dentist I've ever been to. 😃😃😃",
            name: "Matthew Wallace",
            rating: 5
        }
    ]
    return (
        <div className='flex flex-col items-center justify-center p-10 lg:p-0'>
            <div className='w-full px-5'>
                <h1 className={title({ size: 'sm', color: 'primary', fullWidth: true })}>What Our Patients Say</h1>
                <h1 className={subtitle({ fullWidth: true })}>Discover the Smiles We've Transformed and the Stories Behind Them</h1>
            </div>
            <TestimonialGrid testimonials={testimonials} />
            <Button
            className={button()}
            size='lg'
                href="https://g.page/r/CZ4bE3loLRemEAE/review"
                as={Link}
                color="primary"
                showAnchorIcon={true}
                variant="solid"
            >
                Leave a review
            </Button>

        </div>
    );
}

export default Testimonials;
