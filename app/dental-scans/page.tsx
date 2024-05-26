import ServiceHero from "@/components/common/service-hero";
import FeaturesOne from "@/components/home/features-one";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import image1 from '../../assets/images/figmaadobestock_560698304_preview1.png';
import Image from "next/image";
import { Button } from "@nextui-org/button";
import ImageCard from "@/components/common/image-card";

import heroimage from '../../assets/images/figmaadobestock_372286534_preview1.png'
import card1image from '../../assets/images/figmaadobestock_435596284_preview1.png'
import card2image from '../../assets/images/figmaadobestock_171096185_preview1.png'
import card3image from '../../assets/images/figmaadobestock_601235100_preview1.png'
import iteroimage from '../../assets/images/figmaadobestock_175504582_preview1.png'
import iteropractice from '../../assets/other-logos/IteroPractice.png'
import invisalignprovider from '../../assets/other-logos/InvisalignProvider.png'

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Dental Scans</h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</h1>
						<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
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
					<div className="grid grid-cols-3 gap-10 mt-10">
						<ImageCard bg_color={'foreground'} txt_color={'background'} image={card1image}
							header_text={'Bitewing X-rays'}
							desc_text={'Lorem ipsum dolor sit amet consectetur. Pellentesque nisl lacus duis nulla nulla'}
						/>
						<ImageCard bg_color={'foreground'} txt_color={'background'} image={card2image}
							header_text={'Panoramic X-rays'}
							desc_text={'Lorem ipsum dolor sit amet consectetur. Pellentesque nisl lacus duis nulla nulla'}
						/>
						<ImageCard bg_color={'foreground'} txt_color={'background'} image={card3image}
							header_text={'Digital Impressions'}
							desc_text={'Lorem ipsum dolor sit amet consectetur. Pellentesque nisl lacus duis nulla nulla'}
						/>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row items-center w-full mt-28 gap-20">
					<div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mr-10 rounded-full">
						<Image src={iteroimage} alt="itero" fill={true} className="rounded-full object-cover z-20" />
						<div className='bubble absolute w-32 h-32 z-10 top-32 -left-10 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-10 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0.1"></div>
					</div>
					<div className="flex flex-col w-1/2 justify-center text-left">
						<h1 className={title({ size: 'md', alignment: 'left' })}>Digital Impression through Invisalign Consultation</h1>
						<h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Non ac fermentum scelerisque tempus. Diam sit diam lectus ornare morbi mauris. Posuere at pellentesque pellentesque arcu. A malesuada arcu nunc in. Lorem ipsum dolor sit amet consectetur. Non ac fermentum scelerisque tempus. Diam sit diam lectus ornare morbi mauris. Posuere at pellentesque pellentesque arcu. A malesuada arcu nunc in.Lorem ipsum dolor sit amet consectetur. Non ac fermentum scelerisque tempus. Diam sit diam </h1>

						<div className="grid grid-cols-2 w-1/2 self-center">
							<div className="relative h-full">
								<Image src={invisalignprovider} fill={true} alt="invisalign provider logo" className="object-scale-down"/>
							</div>
							<div className="relative h-full">
								<Image src={iteropractice} alt="itero digital practice logo" className="object-scale-down"/>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
	);
}