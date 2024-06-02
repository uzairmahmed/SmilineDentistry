import ServiceHero from "@/components/common/service-hero";
import FeaturesOne from "@/components/home/features-one";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import image1 from '../../assets/images/figmaadobestock_560698304_preview1.png';
import Image from "next/image";
import { Button } from "@nextui-org/button";
import ImageCard from "@/components/common/image-card";

import heroimage from '../../assets/images/figmaadobestock_372286534_preview1.png'
import section2image from '../../assets/images/adobestock_730499892_preview1.png'
import section3image from '../../assets/images/figmaadobestock_413893760_preview1.png'
import iteroimage from '../../assets/images/adobestock_601012084_preview1.png'

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Dental Screening</h1>
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
				<div className="flex flex-col lg:flex-row items-center w-full mt-28 gap-20">
					<div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mr-10 rounded-full">
						<Image src={iteroimage} alt="itero" fill={true} className="rounded-full object-cover z-20" />
						<div className='bubble absolute w-32 h-32 z-10 top-32 -left-10 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-10 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0.1"></div>
					</div>
					<div className="flex flex-col w-1/2 justify-center text-left">
						<h1 className={title({ size: 'md', alignment: 'left' })}>Why Oral Cancer Screening is Important</h1>
						<h1 className={paragraph({ size: 'lg' })}>Oral cancer can affect anyone, regardless of age or gender. Early detection is key to successful treatment and can significantly improve the chances of recovery. Oral cancer screening is a painless and non-invasive way to detect early signs of the disease, such as white or red patches in the mouth or lips, sores that won't heal, or lumps or bumps in the mouth or neck.</h1>

						<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</div>
				</div>

				<div className="flex w-full justify-center py-16">
					<img src={section2image.src} className='absolute object-cover w-screen h-[700px]  z-0' />
					<div className="flex w-full z-10 justify-end ">
						<div className="relative flex flex-col w-5/12 bg-default mt-72 p-20 rounded-3xl gap-5">
							<div className='bubble absolute w-32 h-32 z-20 top-32 -right-24 bg-secondary rounded-full ' data-speed="0.1"></div>
							<div className='bubble absolute w-14 h-14 z-20 top-20 right-24 bg-secondary rounded-full ' data-speed="0.1"></div>
							<div className='bubble absolute w-32 h-32 z-0 -bottom-48 -left-24 bg-secondary rounded-full ' data-speed="0.1"></div>

							<h1 className={title({ size: 'lg', alignment: 'left', color: 'background' })}>Our Oral Cancer Screening Process</h1>
							<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>
								At Smiline Family Dentistry, our oral cancer screening process is quick, painless, and non-invasive. During your regular dental check-up, we will perform a visual and physical examination of your mouth and neck to check for any signs of cancer. We may also use specialized equipment, such as a VELscope, to help identify areas of concern.
							</h1>
						</div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row items-center w-full mt-28 justify-between bg-primary px-20 rounded-3xl">
					<div className="flex flex-col w-1/3 justify-center text-left">
						<h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>Maintaining your smile</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background' })}>After your professional teeth cleaning, it's important to maintain good oral hygiene habits to keep your teeth and gums healthy. This includes brushing and flossing regularly, using mouthwash, and visiting for regular dental checkups. Regular teeth cleanings can help prevent oral health issues and keep your smile looking its best.</h1>
					</div>
					<div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mr-10 rounded-full">
						<Image src={section3image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
						<div className='bubble absolute w-48 h-48 z-10 top-48 right-0 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-10 top-80 -right-48 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-10 -bottom-48 -left-10 bg-default rounded-full ' data-speed="0.1"></div>
					</div>
				</div>

			</div>

		</div>
	);
}