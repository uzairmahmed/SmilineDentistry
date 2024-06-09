import React from 'react';

interface BeforeAfterProps {
    image1: any;
    image2: any;
    text1: any;
    text2: any;
    bubble: any
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ image1, image2, text1, text2, bubble }) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-10 relative justify-center">
                <div className="flex flex-col">
                    <div className="relative self-center w-[300px] h-[200px] lg:w-[500px] lg:h-[300px] rounded-3xl">
                        {image1}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="relative self-center w-[300px] h-[200px] lg:w-[500px] lg:h-[300px] rounded-3xl">
                        {image2}
                    </div>
                </div>

                {bubble}
            </div>

            <div className="flex flex-row gap-10 mt-5">
                <div className="flex flex-col  w-[300px] lg:w-[500px]">
                    {text1}
                </div>
                <div className="flex flex-col  w-[300px] lg:w-[500px] ">
                    {text2}
                </div>
            </div>
        </div>

    );
}

export default BeforeAfter;
