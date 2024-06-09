import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import ImageCard from "@/components/common/image-card";

import heroimage from '../../assets/images/adobestock_656058193_preview2.png'
import section1image from '../../assets/images/adobestock_513383707_preview1.png'
import section2image from '../../assets/images/adobestock_474781498_preview2.png'
import section3image from '../../assets/images/adobestock_531330525_preview1.png'
import IconCard from "@/components/common/icon-card";
import Timeline from "@/components/common/timeline";
import PicText from "@/components/common/pic-text";
import ImageRibbonCard from "@/components/common/image-ribbon-card";
import GreenCircleCard from "@/components/common/green-circle-card";

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				div_side={'left'}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Children's Dentistry</h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>At Smiline Dentistry, we understand the importance of providing gentle and compassionate dental care for children.</h1>
						<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</div>
				}
				bubbles={
					<>
						<div className='bubble absolute w-32 h-32 z-10 -top-8 -right-6 bg-white rounded-full ' data-speed="0"></div>
						<div className='bubble absolute w-36 h-36 z-10 -top-10 right-20 bg-white rounded-full ' data-speed="0"></div>
						<div className='bubble absolute w-36 h-36 z-10 -top-16 right-40 bg-white rounded-full ' data-speed="0"></div>
						<div className='bubble absolute w-10 h-10 z-10 -top-20 right-20 bg-white rounded-full ' data-speed="0"></div>
						<div className='bubble absolute w-10 h-10 z-10 top-20 -right-20 bg-white rounded-full ' data-speed="0"></div>

						<div className='bubble absolute w-32 h-32 z-10 top-16 -left-24 bg-secondary rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-20 -top-10 -left-10 bg-secondary rounded-full ' data-speed="0.2"></div>
						<div className='bubble absolute w-10 h-10 z-20 -bottom-28 -right-16 bg-secondary rounded-full ' data-speed="0.3"></div>
						<div className='bubble absolute w-20 h-20 z-10 -bottom-36 -right-32 bg-default rounded-full ' data-speed="0.2"></div>
						<div className='bubble absolute w-20 h-20 z-10 -top-32 -left-20 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-40 h-40 z-10 -bottom-24 -right-10 bg-secondary rounded-full ' data-speed="0.3"></div>
						<div className='bubble absolute w-32 h-32 z-10 -top-20 left-6 bg-primary rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-32 h-32 z-10 -bottom-36 right-6 bg-primary rounded-full ' data-speed="0.2"></div>
					</>
				}
			/>
			<div className={pagecontent()}>

				{/* <div className='bubble absolute w-16 h-16 z-10 top-32 right-8 bg-primary rounded-full ' data-speed="0.1"></div>
					<div className='bubble absolute w-28 h-28 z-10 bottom-20 left-10 bg-primary rounded-full ' data-speed="0.1"></div>
					<div className='bubble absolute w-12 h-12 z-10 top-14 left-14 bg-default rounded-full ' data-speed="0.1"></div>
					<div className='bubble absolute w-20 h-20 z-10 bottom-5 -left-12 bg-default rounded-full ' data-speed="0.1"></div>
					<div className='bubble absolute w-14 h-14 z-10 bottom-10 left-20 bg-secondary rounded-full ' data-speed="0.1"></div>
					<div className='bubble absolute w-20 h-20 z-10 -bottom-0 right-12 bg-secondary rounded-full ' data-speed="0.1"></div> */}
				<PicText image={''} hasCustomImage={true}
					customImageDiv={
						<div className="w-full h-full bg-left bg-contain mask-style z-20" style={{ backgroundImage: "url('/blorbimgs/image.png')" }}></div>
					}
					inside={<>
						<h1 className={title({ size: 'md', alignment: 'left', color: 'default' })}>Creating Positive Dental Experiences for Children</h1>
						<h1 className={paragraph({ size: 'lg' })}>At Smiline Family Dentistry, we believe that a positive dental experience can help children develop good oral hygiene habits and alleviate any dental anxiety they may have. Our dental team is trained to provide gentle and compassionate care to children, and we strive to make each visit a positive experience.
						</h1>
						<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</>} />

				<ImageRibbonCard image={section2image} inside={
					<>
						<div className='bubble absolute w-32 h-32 z-20 top-32 -right-24 bg-primary rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-12 h-12 z-20 top-20 right-24 bg-secondary rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-32 h-32 z-0 -bottom-24 -left-24 bg-primary rounded-full ' data-speed="0.1"></div>
						<h1 className={title({ size: 'lg', alignment: 'left', color: 'background' })}>Children's Dentistry Services</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>
							<ul className="list-disc list-outside">
								<li>
									Dental exams and cleanings: Regular dental checkups are essential for maintaining good oral health. During your child's dental exam, our dental team will evaluate their teeth and gums and provide a gentle cleaning to remove any buildup of plaque or tartar.
								</li>
								<li>
									Dental sealants: Dental sealants are a protective coating that can be applied to your child's molars to help prevent cavities and decay.
								</li>
							</ul>
						</h1>
					</>
				} />

				<GreenCircleCard header={"Other Child Services"}
					text={
						<ul className="list-disc list-outside">
							<li>
								Fluoride treatments: Fluoride is a mineral that can help strengthen tooth enamel and prevent cavities. We offer fluoride treatments to help keep your child's teeth strong and healthy.
							</li>
							<li>
								Orthodontics: We offer orthodontic services for children to help correct issues such as misaligned teeth or bite problems.
							</li>
						</ul>

					}
					image={section3image}
				/>
			</div>

		</div >
	);
}