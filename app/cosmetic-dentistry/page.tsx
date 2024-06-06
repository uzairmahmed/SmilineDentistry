import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import ImageCard from "@/components/common/image-card";

import heroimage from '../../assets/images/figmaadobestock_333548204_preview1.png'
import card1image from '../../assets/images/figmaadobestock_265971927_preview1.png'
import card2image from '../../assets/images/figmaadobestock_297258856_preview1.png'
import card3image from '../../assets/images/figmaadobestock_126591916_preview1.png'
import cosmeticImage from '../../assets/images/figmaadobestock_601012084_preview1.png'

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				div_side={'left'}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Cosmetic Dentistry</h1>
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
					<h1 className={title({ size: 'md', alignment: 'center' })}>Learn more about our different cosmetic dentistry services.</h1>
					<div className="grid grid-cols-3 gap-10 mt-10">
						<ImageCard bg_color={'default'} txt_color={'background'} image={card1image}
							header_text={'Whitening'}
							desc_text={'Our professional teeth whitening services can help remove stains and discoloration to leave your smile looking brighter and fresher.'}
						/>
						<ImageCard bg_color={'default'} txt_color={'background'} image={card2image}
							header_text={'Crowns'}
							desc_text={'Dental crowns can be used to cover damaged or discolored teeth, improving their appearance and restoring their function.'}
						/>
						<ImageCard bg_color={'default'} txt_color={'background'} image={card3image}
							header_text={'Verneers'}
							desc_text={'Dental veneers are thin, custom-made shells that are placed over the front of your teeth to improve their appearance.'}
						/>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row items-center w-full mt-28 gap-20">
					<div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mr-10 rounded-full">
						<Image src={cosmeticImage} alt="itero" fill={true} className="rounded-full object-cover z-20" />
						<div className='bubble absolute w-32 h-32 z-10 top-32 -left-10 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-10 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0.1"></div>
					</div>
					<div className="flex flex-col w-1/2 justify-center text-left">
						<h1 className={title({ size: 'md', alignment: 'left' })}>The Cosmetic Dentistry Consultation</h1>
						<h1 className={paragraph({ size: 'lg' })}>During your cosmetic dentistry consultation at Smiline Family Dentistry in Milton, Ontario, Dr. Asra Ahmed will discuss your aesthetic concerns and goals, and recommend the best cosmetic dentistry services to achieve your ideal smile. Our cosmetic dentist will work with you to develop a personalized treatment plan that meets your unique needs and preferences.</h1>
						<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row items-center w-full mt-28 justify-between bg-primary px-20 rounded-3xl">
					<div className="flex flex-col w-1/3 justify-center text-left">
						<h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>Maintaining your smile</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background' })}>After your professional teeth cleaning, it's important to maintain good oral hygiene habits to keep your teeth and gums healthy. This includes brushing and flossing regularly, using mouthwash, and visiting for regular dental checkups. Regular teeth cleanings can help prevent oral health issues and keep your smile looking its best.</h1>
					</div>
					<div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mr-10 rounded-full">
						<Image src={cosmeticImage} alt="itero" fill={true} className="rounded-full object-cover z-20" />
						<div className='bubble absolute w-48 h-48 z-10 top-48 right-0 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-10 top-80 -right-48 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-10 -bottom-48 -left-10 bg-default rounded-full ' data-speed="0.1"></div>
					</div>
				</div>

			</div>

		</div>
	);
}