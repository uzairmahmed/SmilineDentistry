import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import Image from "next/image";

import heroimage from '../../assets/images/FastbracesHero.png'
import section1image from '../../assets/images/diana-polekhina-fmB7IdFjhTM-unsplash.jpg'
import fastbraceslogo from '../../assets/logos/fastbraces.png'

import after1 from '../../assets/before_afters/98-78395-AFTER.jpg'
import before1 from '../../assets/before_afters/98-78395-BEFORE.jpg'
import after2 from '../../assets/before_afters/113-100216-AFTER.jpg'
import before2 from '../../assets/before_afters/113-100216-BEFORE.jpg'
import after3 from '../../assets/before_afters/152-8020-AFTER.jpg'
import before3 from '../../assets/before_afters/152-8020-BEFORE.jpg'

import BigTimeline from "@/components/common/bigTimeline";
import TextHeaderSection from "@/components/common/text-header-section";
import PicText from "@/components/common/pic-text";
import BeforeAfter from "@/components/common/before-after";
import ContactFormButton from "@/components/common/contact-form-button";

export default function InvisalignPage() {
	return (
		<div className="relative flex flex-col h-full w-full">
			{/* <Image src={invisalignAligner} width={1000} height={1000} alt="invisalign provider logo" className="absolute object-scale-down" /> */}
			<ServiceHero
				image={heroimage}
				div_side={'left'}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-12 lg:p-16 z-20 rounded-3xl bg-white'>
						<div className="relative w-24 h-24 mb-8">
							<Image src={fastbraceslogo} fill={true} alt="invisalign provider logo" className="object-scale-down" />
						</div>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left', color: 'primary' })}>Fast Braces® </h1>
						<h1 className={title({ size: 'sm', fullWidth: true, alignment: 'left', color: 'primary' })}>At Smiline Family Dentistry </h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>Fastbraces® technology speeds up tooth alignment, reducing treatment times compared to other orthodontic systems. Fastbraces® is a fast and effective orthodontic option. </h1>
						<ContactFormButton />
					</div>
				}
				bubbles={
					<>
						<div className='bubble absolute w-32 h-32 z-10 bottom-16 -left-24 bg-primary rounded-full ' data-speed="0"></div>
						<div className='bubble absolute w-20 h-20 z-20 -top-10 -right-10 bg-primary rounded-full ' data-speed="0"></div>
						<div className='bubble absolute w-12 h-12 z-10 bottom-10 -right-20 bg-primary rounded-full ' data-speed="0"></div>
						<div className='bubble absolute w-40 h-40 z-10 -bottom-24 -right-10 bg-primary rounded-full ' data-speed="0"></div>
					</>
				}
			/>
			<div className={pagecontent()}>

				<TextHeaderSection header="What are Fastbraces?"
					text="Fastbraces® employs a revolutionary technology that significantly accelerates the alignment of teeth, leading to notably shorter treatment durations compared to the average timelines reported for other orthodontic braces systems. Traditional braces often require lengthy treatment periods to achieve the desired alignment, but Fastbraces® technology streamlines this process. This innovative approach not only enhances the efficiency of tooth movement but also improves patient experience by reducing the overall time spent wearing braces. By utilizing advanced methods, Fastbraces® offers a quicker and more effective solution for those seeking orthodontic treatment, setting a new standard in the field of dental care."
				/>

				<PicText image={section1image}
					inside={
						<>
							<h1 className={title({ size: 'md', alignment: 'left', color: 'default' })}>Why Choose FastBraces?</h1>
							<h1 className={paragraph({ size: 'lg' })}>
								<ul className="list-decimal list-outside">
									<li>
										<span className="font-semibold">Faster Treatment:</span> One of the greatest advantages of Fastbraces® is the faster teeth straightening treatment. This advanced technology allows most patients to complete treatment in under a year, with many finishing in just a few months.
									</li>
									<li>
										<span className="font-semibold">More Comfortable:</span> The continual pressure from Fastbraces® wire system is gentler than traditional braces, reducing painful post-visit side effects.
									</li>
									<li>
										<span className="font-semibold">Effective and Safe:</span> Fastbraces® employs a unique triangular bracket design enabling faster movement of tooth roots right from the start, unlike traditional braces where this is done in two steps.
									</li>
									<li>
										<span className="font-semibold">Affordable:</span> The reduced treatment time and fewer adjustment visits with Fastbraces® make it a cost-effective option.
									</li>
								</ul >
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
								key: 'invisalign-1',
								title: "Scheduling a Consultation",
								desc: "The fastbraces treatment would first start with consultation with Dr. Asra Ahmed."
							},{
								key: 'invisalign-2',
								title: "Scanning your teeth",
								desc: "Dr. Asra will use the Itero 3D imaging tool to create a digital model of your teeth and jaw."
							},{
								key: 'invisalign-3',
								title: "Creating a Plan",
								desc: "Your digital model is used to create a custom treatment plan that outlines the movement of your teeth and the length of your treatment."
							},{
								key: 'invisalign-4',
								title: "Attaching your brackets",
								desc: "Brackets are placed on your teeth along with a wire"
							},{
								key: 'invisalign-5',
								title: "Adjustments",
								desc: "During your treatment, you visit our office regularly for adjustments, gradually moving your teeth closer to their ideal position."
							},{
								key: 'invisalign-6',
								title: "At-Home Care",
								desc: "To protect your brackets, avoid sticky or hard foods. Brush your teeth thoroughly for two minutes after each meal. Use special flossing tools to clean around brackets and wires. Consistent brushing and flossing are crucial for dental health."
							},{
								key: 'invisalign-7',
								title: "Removal of brackets",
								desc: "At completion of treatment brackets are removed and fixed retainer is placed."
							},
						]} />
				</div>

				<div className="flex flex-col items-center w-full gap-20">
					<h1 className={title({ size: 'md', alignment: 'center' })}>See the Results</h1>
					<BeforeAfter
						image1={<Image src={before1} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />}
						image2={<Image src={after1} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />}
						text1={
							<>
								<h1 className={title({ size: 'md', alignment: 'center' })}>Before</h1>
								{/* <h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1> */}
							</>
						}
						text2={
							<>
								<h1 className={title({ size: 'md', alignment: 'center' })}>After</h1>
								{/* <h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1> */}
							</>
						}
						bubble={
							<div className="absolute flex flex-col w-36 h-36 bg-default z-20 rounded-full top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center">
								<h1 className={title({ size: 'lg', color: 'background' })}>98</h1>
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
								{/* <h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1> */}
							</>
						}
						text2={
							<>
								<h1 className={title({ size: 'md', alignment: 'center' })}>After</h1>
								{/* <h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1> */}
							</>
						}
						bubble={
							<div className="absolute flex flex-col w-36 h-36 bg-default z-20 rounded-full top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center">
								<h1 className={title({ size: 'lg', color: 'background' })}>113</h1>
								<h1 className={subtitle({ size: 'md', color: 'background', margin: 'none' })}>days</h1>
							</div>
						}
					/>
					<BeforeAfter
						image1={<Image src={before3} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />}
						image2={<Image src={after3} alt="itero" fill={true} className="object-cover z-20 rounded-3xl" />}
						text1={
							<>
								<h1 className={title({ size: 'md', alignment: 'center' })}>Before</h1>
								{/* <h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1> */}
							</>
						}
						text2={
							<>
								<h1 className={title({ size: 'md', alignment: 'center' })}>After</h1>
								{/* <h1 className={paragraph({ size: 'lg' })}>Lorem ipsum dolor sit amet consectetur. Sed viverra vestibulum velit rhoncus erat sagittis molestie cursus. </h1> */}
							</>
						}
						bubble={
							<div className="absolute hidden lg:flex flex-col w-36 h-36 bg-default z-20 rounded-full top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center">
								<h1 className={title({ size: 'lg', color: 'background' })}>152</h1>
								<h1 className={subtitle({ size: 'md', color: 'background', margin: 'none' })}>days</h1>
							</div>
						}
					/>
				</div>

				<PicText image={null} inside={
					<>
						<h1 className={title({ size: 'md', alignment: 'center' })}>Get a Quote for Your Perfect Smile</h1>
						<h1 className={paragraph({ size: 'lg' })}>Ready to experience the speed and efficiency of Fastbraces? At Smiline Dentistry, we're here to make your orthodontic journey quick and effective. Visit our clinic or give us a call to learn more about how Fastbraces can transform your smile. Let us provide you with a personalized quote and guide you through your options for a straighter smile, faster than ever.</h1>
						<ContactFormButton />
					</>
				} />
			</div>

		</div >
	);
}