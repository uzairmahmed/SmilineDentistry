import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import Image from "next/image";
import { Button } from "@nextui-org/button";

import heroimage from '../../assets/heroimages/FastbracesHero.png'
import invisalignAligner from '../../assets/images/image8.png'
import section1image from '../../assets/images/image9.png'
import iteroimage from '../../assets/images/figmaadobestock_175504582_preview1.png'
import invisalignbox from '../../assets/images/436508977_465908395983601_4226690687482878619_n1.png'

import after from '../../assets/before_afters/invisalign_after.png'
import before from '../../assets/before_afters/invlisalign_before.png'

import after1 from '../../assets/before_afters/98-78395-AFTER.png'
import before1 from '../../assets/before_afters/98-78395-BEFORE.png'

import after2 from '../../assets/before_afters/113-100216-AFTER.png'
import before2 from '../../assets/before_afters/113-100216-BEFORE.png'

import after3 from '../../assets/before_afters/152-8020-AFTER.png'
import before3 from '../../assets/before_afters/152-8020-BEFORE.png'


import iteropractice from '../../assets/other-logos/IteroPractice.png'
import fastbraceslogo from '../../assets/other-logos/a_fastbraces_logo_purple_r.png'
import BigTimeline from "@/components/common/bigTimeline";
import TextHeaderSection from "@/components/common/text-header-section";
import PicText from "@/components/common/pic-text";
import BeforeAfter from "@/components/common/before-after";

export default function InvisalignPage() {
	return (
		<div className="relative flex flex-col h-full w-full">
			{/* <Image src={invisalignAligner} width={1000} height={1000} alt="invisalign provider logo" className="absolute object-scale-down" /> */}
			<ServiceHero
				image={heroimage}
				div_side={'left'}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<div className="relative w-24 h-24 mb-8">
							<Image src={fastbraceslogo} fill={true} alt="invisalign provider logo" className="object-scale-down" />
						</div>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left', color: 'primary' })}>Fast Braces® </h1>
						<h1 className={title({ size: 'sm', fullWidth: true, alignment: 'left', color: 'primary' })}>At Smiline Family Dentistry </h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>Transform Your Smile with Fast Braces®, Less Time. Less Expense. More Smile.</h1>
						<Button variant="solid" color="primary" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</div>
				}
				bubbles={
					<>
						<div className='bubble absolute w-32 h-32 z-10 bottom-16 -left-24 bg-primary rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-20 -top-10 -right-10 bg-primary rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-12 h-12 z-10 bottom-10 -right-20 bg-primary rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-40 h-40 z-10 -bottom-24 -right-10 bg-primary rounded-full ' data-speed="0.1"></div>
					</>
				}
			/>
			<div className={pagecontent()}>

				<TextHeaderSection header="What are Fastbraces?"
					text="Fastbraces are an advanced triangular bracket and wire system that work to straighten teeth in a unique way. Unlike traditional braces that move teeth in two stages, Fastbraces use a patented design to move teeth in a single stage. This allows for a faster treatment time and can result in a more comfortable and affordable orthodontic experience."
				/>

				<PicText image={section1image}
					inside={
						<>
							<h1 className={title({ size: 'md', alignment: 'left', color: 'default' })}>Why Choose FastBraces?</h1>
							<h1 className={paragraph({ size: 'lg' })}>
								Fastbraces offer several benefits over traditional braces. One of the main benefits is their short treatment time. While traditional braces can take up to 2-3 years to straighten teeth, Fastbraces can typically achieve the same results in just a few months to a year. This can save you time and money in the long run. <br /> <br />Fastbraces are also more comfortable than traditional braces. Because they use a lower amount of force to move teeth, patients experience less discomfort during the treatment process. In addition, Fastbraces can correct a wide range of orthodontic issues, including crooked teeth, gaps, and crowding.
							</h1>
							<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
								Book an Appointment
							</Button>
						</>
					} />

				<div className="flex flex-col gap-10">
					<h1 className={title({ size: 'md', alignment: 'center', color: 'default' })}>Root Canal Procedure</h1>
					<BigTimeline
						colortheme='default'
						numItems={5}
						listofItems={[
							{
								key: 'invisalign-1',
								title: "Scheduling a Consultation",
								desc: "The Invisalign treatment process begins with a consultation with Dr. Asra Ahmed at Smiline Family Dentistry in Milton, Ontario."
							},
							{
								key: 'invisalign-2',
								title: "Scanning your teeth",
								desc: "Dr. Ahmed will use the Itero 3D imaging tool to create a digital model of your teeth and jaw."
							},
							{
								key: 'invisalign-3',
								title: "Creating a Plan",
								desc: "Your digital model is used to create a custom treatment plan that outlines the movement of your teeth and the length of your treatment."
							},
							{
								key: 'invisalign-4',
								title: "Ordering Your Aligners",
								desc: "Once your treatment plan is created, your custom Invisalign aligners will be made to order based on your digital model."
							},
							{
								key: 'invisalign-5',
								title: "Using and Maintaining your Braces",
								desc: "You will wear each set of aligners for 1-2 weeks before switching to the next set. This gradual movement of your teeth ensures that they move into their desired position over time. You will need to visit our office periodically during your treatment to ensure that your teeth are moving as planned."
							},
						]} />
				</div>

				<div className="flex flex-col items-center w-full mt-28 gap-20">
					<h1 className={title({ size: 'md', alignment: 'center' })}>See the Results</h1>
					<BeforeAfter
						image1={<Image src={before1} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />}
						image2={<Image src={after1} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />}
						text1={
							<>
								<h1 className={title({ size: 'md', alignment: 'center' })}>Before</h1>
								<h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1>
							</>
						}
						text2={
							<>
								<h1 className={title({ size: 'md', alignment: 'center' })}>After</h1>
								<h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1>
							</>
						}
						bubble={
							<div className="absolute flex flex-col w-36 h-36 bg-default z-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center">
								<h1 className={title({ size: 'lg', color: 'background' })}>98</h1>
								<h1 className={subtitle({ size: 'md', color: 'background', margin: 'none' })}>days</h1>
							</div>
						}
					/>
					<BeforeAfter
						image1={<Image src={before1} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />}
						image2={<Image src={after1} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />}
						text1={
							<>
								<h1 className={title({ size: 'md', alignment: 'center' })}>Before</h1>
								<h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1>
							</>
						}
						text2={
							<>
								<h1 className={title({ size: 'md', alignment: 'center' })}>After</h1>
								<h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1>
							</>
						}
						bubble={
							<div className="absolute flex flex-col w-36 h-36 bg-default z-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center">
								<h1 className={title({ size: 'lg', color: 'background' })}>113</h1>
								<h1 className={subtitle({ size: 'md', color: 'background', margin: 'none' })}>days</h1>
							</div>
						}
					/>
					<BeforeAfter
						image1={<Image src={before2} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />}
						image2={<Image src={after2} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />}
						text1={
							<>
								<h1 className={title({ size: 'md', alignment: 'center' })}>Before</h1>
								<h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1>
							</>
						}
						text2={
							<>
								<h1 className={title({ size: 'md', alignment: 'center' })}>After</h1>
								<h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1>
							</>
						}
						bubble={
							<div className="absolute flex flex-col w-36 h-36 bg-default z-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center">
								<h1 className={title({ size: 'lg', color: 'background' })}>152</h1>
								<h1 className={subtitle({ size: 'md', color: 'background', margin: 'none' })}>days</h1>
							</div>
						}
					/>
				</div>

				<PicText image={<></>} inside={
					<>
						<h1 className={title({ size: 'md', alignment: 'center' })}>Get a Quote</h1>
						<h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. Aenean arcu facilisi nisi elit lectus cursus dapibus. Quis feugiat ipsum gravida condimentum rhoncus. Sem egestas massa vulputate egestas proin donec vestibulum.</h1>
						<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</>
				} />
			</div>

		</div >
	);
}