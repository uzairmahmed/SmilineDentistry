import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import Image from "next/image";

import heroimage from '../../assets/images/AdobeStock_372286534.jpeg'
import card1image from '../../assets/images/AdobeStock_435596284.jpeg'
import card2image from '../../assets/images/AdobeStock_171096185.jpeg'
import card3image from '../../assets/images/AdobeStock_601012084.jpeg'
import iteroimage from '../../assets/images/AdobeStock_175504582.jpeg'
import iteropractice from '../../assets/logos/itero.png'
import invisalignprovider from '../../assets/logos/invisalign.png'
import PicText from "@/components/common/pic-text";
import CardRibbon from "@/components/common/card-ribbon";
import ContactFormButton from "@/components/common/contact-form-button";

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				div_side={'left'}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Dental Scans</h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</h1>
						<ContactFormButton />
					</div>
				}
				bubbles={
					<>
						<div className='bubble absolute w-32 h-32 z-10 bottom-16 -left-24 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-20 -top-10 -right-10 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-12 h-12 z-10 bottom-10 -right-20 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-40 h-40 z-10 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0.1"></div>
					</>
				}
			/>
			<div className={pagecontent()}>

				<div>
					<h1 className={title({ size: 'md', alignment: 'center' })}>Learn more about out different dental imaging services.</h1>
					<CardRibbon
						image1={card1image} header1={"Bitewing X-rays"}
						text1={'Lorem ipsum dolor sit amet consectetur. Pellentesque nisl lacus duis nulla nulla'}
						image2={card2image} header2={"Panoramic X-rays"}
						text2={'Lorem ipsum dolor sit amet consectetur. Pellentesque nisl lacus duis nulla nulla'}
						image3={card3image} header3={"Digital Impressions"}
						text3={'Lorem ipsum dolor sit amet consectetur. Pellentesque nisl lacus duis nulla nulla'}
					/>
				</div>

				<PicText image={iteroimage} inside={
					<>
						<h1 className={title({ size: 'md', alignment: 'left' })}>Digital Impression through Invisalign Consultation</h1>
						<h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Non ac fermentum scelerisque tempus. Diam sit diam lectus ornare morbi mauris. Posuere at pellentesque pellentesque arcu. A malesuada arcu nunc in. Lorem ipsum dolor sit amet consectetur. Non ac fermentum scelerisque tempus. Diam sit diam lectus ornare morbi mauris. Posuere at pellentesque pellentesque arcu. A malesuada arcu nunc in.Lorem ipsum dolor sit amet consectetur. Non ac fermentum scelerisque tempus. Diam sit diam </h1>

						<div className="grid grid-cols-2 w-1/2 self-center">
							<div className="relative h-full">
								<Image src={invisalignprovider} fill={true} alt="invisalign provider logo" className="object-scale-down" />
							</div>
							<div className="relative h-full">
								<Image src={iteropractice} alt="itero digital practice logo" className="object-scale-down" />
							</div>
						</div>
					</>
				} />
			</div>

		</div>
	);
}