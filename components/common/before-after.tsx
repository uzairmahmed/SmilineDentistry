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
        <div className="relative grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 grid-flow-col w-full gap-10 lg:gap-0">
            <div className="grid grid-rows-2 lg:grid-rows-4 lg:flex-row relative justify-center items-center">
                <div className="row-span-1 lg:row-span-3 flex flex-col">
                    <div className="relative self-center w-[300px] h-[170px] lg:w-[400px] lg:h-[200px] xl:w-[500px] xl:h-[250px] rounded-3xl">
                        {image1}
                    </div>
                </div>
                <div className="row-span-1 flex flex-col w-[300px] lg:w-[500px]">
                    {text1}
                </div>
            </div>
            <div className="grid grid-rows-2 lg:grid-rows-4 lg:flex-row relative justify-center items-center z-10">
                <div className="row-span-1 lg:row-span-3 flex flex-col">
                    <div className="relative self-center w-[300px] h-[170px] lg:w-[400px] lg:h-[200px] xl:w-[500px] xl:h-[250px] rounded-3xl">
                        {image2}
                    </div>
                </div>
                <div className="row-span-1 flex flex-col w-[300px] lg:w-[500px]">
                    {text2}
                </div>
            </div>
            {bubble}
        </div >

    );
}

export default BeforeAfter;
