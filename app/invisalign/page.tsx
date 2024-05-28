import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import ImageCard from "@/components/common/image-card";

import heroimage from '../../assets/images/figmaadobestock_722965563_preview1.png'
import card1image from '../../assets/icons/toothcracked.png'
import card2image from '../../assets/icons/pliers.png'
import card3image from '../../assets/icons/screw.png'
import section1image from '../../assets/images/image9.png'
import iteroimage from '../../assets/images/figmaadobestock_175504582_preview1.png'
import invisalignbox from '../../assets/images/436508977_465908395983601_4226690687482878619_n1.png'
import after from '../../assets/images/after.png'
import before from '../../assets/images/before.png'
import IconCard from "@/components/common/icon-card";
import Timeline from "@/components/common/timeline";

import iteropractice from '../../assets/other-logos/IteroPractice.png'
import invisalignprovider from '../../assets/other-logos/InvisalignProvider.png'
import BigTimeline from "@/components/common/bigTimeline";

export default function InvisalignPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Invisalign</h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>Transform Your Smile with Invisalign®, The Clear Path to Straighter Teeth.</h1>
						<div className="grid grid-cols-2 w-1/2 self-start">
							<div className="relative h-full">
								<Image src={invisalignprovider} fill={true} alt="invisalign provider logo" className="object-scale-down" />
							</div>
							<div className="relative h-full">
								<Image src={iteropractice} alt="itero digital practice logo" className="object-scale-down" />
							</div>
						</div>
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
					<h1 className={title({ size: 'md', alignment: 'center' })}>What is Invisalign?</h1>
					<h1 className={paragraph({ size: 'lg' })}>Invisalign is a popular orthodontic treatment that uses clear, removable aligners to straighten teeth. These aligners are custom-made for each patient using our state-of-the-art Itero 3D imaging tool. Unlike traditional braces, Invisalign aligners are virtually invisible and can be easily removed for eating, brushing, and flossing.</h1>
				</div>

				<div className="flex flex-col lg:flex-row items-center w-full gap-20">
					<div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mr-10 rounded-full">
						<Image src={section1image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
						<div className='bubble absolute w-32 h-32 z-10 top-32 -left-10 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-10 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0.1"></div>
					</div>
					<div className="flex flex-col w-1/2 justify-center text-left">
						<h1 className={title({ size: 'md', alignment: 'left', color: 'default' })}>Why Choose Invisalign?</h1>
						<h1 className={paragraph({ size: 'lg' })}>Invisalign is a popular orthodontic treatment that uses clear, removable aligners to straighten teeth.
							<br />
							<br />
							<ul className="list-disc list-inside">
								<li>
									Invisalign Aligners are custom made for each patient.
								</li><li>
									Our Itero 3D imaging tool allows us to non-invasively take a full scan of your teeth.
								</li><li>
									More points
								</li><li>
									Even More points
								</li></ul>
							<br />
							<br />
							These aligners are custom-made for each patient using our state-of-the-art Itero 3D imaging tool. Unlike traditional braces, Invisalign aligners are virtually invisible and can be easily removed for eating, brushing, and flossing.
						</h1>
						<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</div>
				</div>
				<div className="flex flex-col gap-10">
					<h1 className={title({ size: 'md', alignment: 'center', color: 'default' })}>Root Canal Procedure</h1>
					<BigTimeline
						colortheme='default'
						numItems={5}
						listofItems={[
							{
								title: "Consultation to determine if an extraction is necessary.",
								desc: "The Invisalign treatment process begins with a consultation with Dr. Asra Ahmed at Smiline Family Dentistry in Milton, Ontario."
							},
							{
								title: "Scanning your teeth",
								desc: "Dr. Ahmed will use the Itero 3D imaging tool to create a digital model of your teeth and jaw."
							},
							{
								title: "Creating a Plan",
								desc: "Your digital model is used to create a custom treatment plan that outlines the movement of your teeth and the length of your treatment."
							},
							{
								title: "Ordering Your Aligners",
								desc: "Once your treatment plan is created, your custom Invisalign aligners will be made to order based on your digital model."
							},
							{
								title: "Using your Aligners",
								desc: "You will wear each set of aligners for 1-2 weeks before switching to the next set. This gradual movement of your teeth ensures that they move into their desired position over time. You will need to visit our office periodically during your treatment to ensure that your teeth are moving as planned."
							},
						]} />
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
								<Image src={invisalignprovider} fill={true} alt="invisalign provider logo" className="object-scale-down" />
							</div>
							<div className="relative h-full">
								<Image src={iteropractice} alt="itero digital practice logo" className="object-scale-down" />
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center w-full mt-28 gap-20">
					<h1 className={title({ size: 'md', alignment: 'center' })}>Experience the Difference</h1>
					<div className="flex ">
						<div className="flex flex-col">
							<div className="relative self-center w-[300px] h-[200px] lg:w-[500px] lg:h-[300px] mr-10 mb-10 rounded-3xl">
								<Image src={before} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />
							</div>
							<h1 className={title({ size: 'md', alignment: 'center' })}>Before</h1>
							<h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1>
						</div>
						<div className="flex flex-col">
							<div className="relative self-center w-[300px] h-[200px] lg:w-[500px] lg:h-[300px] mr-10 mb-10 rounded-3xl">
								<Image src={after} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />
							</div>
							<h1 className={title({ size: 'md', alignment: 'center' })}>After</h1>
							<h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1>
						</div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row items-center w-full mt-28 gap-20">
					<div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mr-10 rounded-full">
						<Image src={invisalignbox} alt="itero" fill={true} className="object-cover z-20" />
						<div className='bubble absolute w-32 h-32 z-10 top-32 -left-10 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-10 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0.1"></div>
					</div>
					<div className="flex flex-col w-1/2 justify-center text-center">
						<h1 className={title({ size: 'md', alignment: 'center' })}>Get a Quote</h1>
						<h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. Aenean arcu facilisi nisi elit lectus cursus dapibus. Quis feugiat ipsum gravida condimentum rhoncus. Sem egestas massa vulputate egestas proin donec vestibulum.</h1>
						<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</div>
				</div>
			</div>

		</div >
	);
}