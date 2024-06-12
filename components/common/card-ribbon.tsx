import React from 'react';
import { title } from '../primitives';
import ImageCard from './image-card';

interface CardRibbonProps {
    image1: any;
    header1: any;
    text1: any;
    image2: any;
    header2: any;
    text2: any;
    image3: any;
    header3: any;
    text3: any;
}

const CardRibbon: React.FC<CardRibbonProps> = ({ image1, header1, text1, image2, header2, text2, image3, header3, text3 }) => {
    return (
        <div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-10 mt-10">
            <ImageCard bg_color={'foreground'} txt_color={'background'} image={image1}
                header_text={header1}
                desc_text={text1}
            />
            <ImageCard bg_color={'foreground'} txt_color={'background'} image={image2}
                header_text={header2}
                desc_text={text2}
            />
            <ImageCard bg_color={'foreground'} txt_color={'background'} image={image3}
                header_text={header3}
                desc_text={text3}
            />
        </div>
    )
}

export default CardRibbon;
