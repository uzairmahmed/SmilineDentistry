import ServiceHero from "@/components/common/service-hero";
import FeaturesOne from "@/components/home/features-one";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import image1 from '../../assets/images/figmaadobestock_560698304_preview1.png';
import Image from "next/image";
import { Button } from "@nextui-org/button";
import heroimage from '../../assets/images/figmaadobestock_255770347_preview1.png'

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Dental Cleaning</h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>Smiline Family offers professional teeth cleaning services to help you maintain optimal oral health</h1>
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
				<div className="flex flex-col mt-28 justify-center w-1/2">
					<h1 className={title({ size: 'md', alignment: 'center' })}>Dental Cleaning Process</h1>
					<h1 className={paragraph({ size: 'lg' })}>Professional teeth cleaning is an essential part of maintaining good oral hygiene. During a cleaning, a dental hygienist will remove plaque and tartar buildup from your teeth and gums, which can help prevent cavities, gum disease, and other oral health issues. Once your teeth are clean, our hygienist will polish your teeth to remove surface stains and leave your smile looking bright and fresh.</h1>
				</div>

				<div className="flex flex-col lg:flex-row items-center w-full mt-28 ">
					{/* <div className="relative w-[500px] h-[500px] mr-10 bg-black rounded-full"> */}
					<div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mr-10 bg-black rounded-full">
						<Image src={image1} alt="woman flossing" fill={true} className="rounded-full object-cover z-20" />
						<div className='bubble absolute w-32 h-32 z-10 top-32 -left-10 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-10 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0.1"></div>
					</div>
					<div className="flex flex-col w-1/2 justify-center text-left">
						<h1 className={title({ size: 'md', alignment: 'left' })}>Maintaining your smile</h1>
						<h1 className={paragraph({ size: 'lg' })}>After your professional teeth cleaning, it's important to maintain good oral hygiene habits to keep your teeth and gums healthy. This includes brushing and flossing regularly, using mouthwash, and visiting for regular dental checkups. Regular teeth cleanings can help prevent oral health issues and keep your smile looking its best.</h1>
					</div>
				</div>
			</div>

		</div>
	);
}