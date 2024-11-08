import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import Image from "next/image";

import heroimage from '../../assets/images/Black.png'
import invisalignAligner from '../../assets/images/InvisalignHero.png'
import section1image from '../../assets/images/diana-polekhina-fmB7IdFjhTM-unsplash.jpg'
import iteroimage from '../../assets/images/AdobeStock_175504582.jpg'
import invisalignbox from '../../assets/images/InvisalignBox.png'
import iteropractice from '../../assets/logos/itero.png'
import invisalignprovider from '../../assets/logos/invisalign.png'

import after from '../../assets/before_afters/invisalign_after.jpg'
import before from '../../assets/before_afters/invlisalign_before.jpg'

import BigTimeline from "@/components/common/bigTimeline";
import TextHeaderSection from "@/components/common/text-header-section";
import PicText from "@/components/common/pic-text";
import BeforeAfter from "@/components/common/before-after";
import ContactFormButton from "@/components/common/contact-form-button";

export default function InvisalignPage() {
	return (
		<div className="relative flex flex-col h-full w-full">
			<div className="absolute w-screen h-screen">
				<div className="relative w-full h-3/4 lg:h-full">
					<Image src={invisalignAligner} fill={true} alt="invisalign provider logo" className="absolute object-cover z-10 mix-blend-luminosity opacity-80" />
				</div>
			</div>
			<ServiceHero
				div_side={'left'}
				image={heroimage}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-12 lg:p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Invisalign</h1>
						<h1 className={title({ size: 'sm', fullWidth: true, alignment: 'left' })}>At Smiline Family Dentistry </h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>Transform Your Smile with Invisalign®, The Clear Path to Straighter Teeth.</h1>
						<div className="grid grid-cols-2 w-1/2 self-start">
							<div className="relative h-full">
								<Image src={invisalignprovider} fill={true} alt="invisalign provider logo" className="object-scale-down" />
							</div>
							<div className="relative h-full">
								<Image src={iteropractice} alt="itero digital practice logo" className="object-scale-down" />
							</div>
						</div>
						<ContactFormButton />
					</div>
				}
				bubbles={
					<>
						<div className='bubble absolute w-32 h-32 z-10 bottom-16 -left-24 bg-default rounded-full ' data-speed="0"></div>
						<div className='bubble absolute w-20 h-20 z-20 -top-10 -right-10 bg-default rounded-full ' data-speed="0"></div>
						<div className='bubble absolute w-12 h-12 z-10 bottom-10 -right-20 bg-default rounded-full ' data-speed="0"></div>
						<div className='bubble absolute w-40 h-40 z-10 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0"></div>
					</>
				}
			/>
			<div className={pagecontent()}>
				<TextHeaderSection header="What is Invisalign?"
					text="Invisalign is a popular orthodontic treatment that uses clear, removable aligners to straighten teeth. These aligners are custom-made for each patient using our state-of-the-art Itero 3D imaging tool. Unlike traditional braces, Invisalign aligners are virtually invisible and can be easily removed for eating, brushing, and flossing."
				/>

				<PicText image={section1image} inside={
					<>
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
						<ContactFormButton />
					</>
				} />

				<div className="flex flex-col gap-10">
					<h1 className={title({ size: 'md', alignment: 'center', color: 'default' })}>Root Canal Procedure</h1>
					<BigTimeline
						colortheme='default'
						numItems={5}
						listofItems={[
							{
								key: 'rct-1',
								title: "Consultation to determine if an extraction is necessary.",
								desc: "The Invisalign treatment process begins with a consultation with Dr. Asra Ahmed at Smiline Family Dentistry in Milton, Ontario."
							},
							{
								key: 'rct-2',
								title: "Scanning your teeth",
								desc: "Dr. Ahmed will use the Itero 3D imaging tool to create a digital model of your teeth and jaw."
							},
							{
								key: 'rct-3',
								title: "Creating a Plan",
								desc: "Your digital model is used to create a custom treatment plan that outlines the movement of your teeth and the length of your treatment."
							},
							{
								key: 'rct-4',
								title: "Ordering Your Aligners",
								desc: "Once your treatment plan is created, your custom Invisalign aligners will be made to order based on your digital model."
							},
							{
								key: 'rct-5',
								title: "Using your Aligners",
								desc: "You will wear each set of aligners for 1-2 weeks before switching to the next set. This gradual movement of your teeth ensures that they move into their desired position over time. You will need to visit our office periodically during your treatment to ensure that your teeth are moving as planned."
							},
						]} />
				</div>

				<PicText image={iteroimage} inside={
					<>
						<h1 className={title({ size: 'md', alignment: 'left' })}>Invisalign Consultations with iTero Digital Impressions</h1>
						<h1 className={paragraph({ size: 'lg' })}>At Smiline Dentistry, we make your Invisalign consultations even more seamless by using the advanced iTero scanner for dental impressions. This cutting-edge technology eliminates the need for traditional molds, providing a quick, comfortable, and accurate 3D image of your teeth. With iTero, we can visualize your treatment plan on the spot, allowing us to tailor the perfect Invisalign solution for your smile.</h1>

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
				<div className="flex flex-col items-center w-full mt-28 gap-20">
					<h1 className={title({ size: 'md', alignment: 'center' })}>See the Results</h1>
					<BeforeAfter
						image1={<Image src={before} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />}
						image2={<Image src={after} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />}
						text1={
							<>
								<h1 className={title({ size: 'md', alignment: 'center' })}>Before</h1>
							</>
						}
						text2={
							<>
								<h1 className={title({ size: 'md', alignment: 'center' })}>After</h1>
							</>
						}
						bubble={
							<></>
						}
					/>
				</div>

				<PicText image={invisalignbox} inside={
					<>
						<h1 className={title({ size: 'md', alignment: 'center' })}>Get a Quote for Your Perfect Smile</h1>
						<h1 className={paragraph({ size: 'lg' })}>Thinking about straightening your teeth with the precision and comfort of Invisalign? At Smiline Dentistry, we’ve got you covered. Whether you're new to Invisalign or want to learn more about how it works, visit our clinic or call us today. We’ll help you with a personalized quote and show you how easy it is to get started on your Invisalign journey towards the perfect smile.</h1>
						<ContactFormButton />
					</>
				} />
			</div>

		</div >
	);
}