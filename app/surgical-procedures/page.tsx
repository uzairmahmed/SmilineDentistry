import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import ImageCard from "@/components/common/image-card";

import heroimage from '../../assets/images/figmaadobestock_722965563_preview1.png'
import card1image from '../../assets/icons/toothcracked.png'
import card2image from '../../assets/icons/pliers.png'
import card3image from '../../assets/icons/screw.png'
import section1image from '../../assets/images/figmaadobestock_720403667_preview1.png'
import section2image from '../../assets/images/figmaadobestock_720403667_preview1.png'
import section3image from '../../assets/images/figmaadobestock_720403667_preview1.png'
import cosmeticImage from '../../assets/images/figmaadobestock_393338639_preview1.png'
import IconCard from "@/components/common/icon-card";
import Timeline from "@/components/common/timeline";

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Dental Surgical Procedures</h1>
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
				<div className="flex flex-col gap-10">
					<h1 className={title({ size: 'md', alignment: 'center' })}>Learn more about our different surgical procedures.</h1>
					<div className="grid grid-cols-3 gap-10">
						<IconCard bg_color={'primary'} txt_color={'background'} image={card1image}
							header_text={'Root Canal Treatment'}
						/>
						<IconCard bg_color={'secondary'} txt_color={'background'} image={card2image}
							header_text={'Extractions'}
						/>
						<IconCard bg_color={'default'} txt_color={'background'} image={card3image}
							header_text={'Implants'}
						/>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row items-center w-full gap-20">
					<div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mr-10 rounded-full">
						<Image src={section1image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
						<div className='bubble absolute w-32 h-32 z-10 top-32 -left-10 bg-primary rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-10 -bottom-24 -right-10 bg-primary rounded-full ' data-speed="0.1"></div>
					</div>
					<div className="flex flex-col w-1/2 justify-center text-left">
						<h1 className={title({ size: 'md', alignment: 'left', color: 'primary' })}>Root Canal Treatment</h1>
						<h1 className={paragraph({ size: 'lg' })}>Root canal treatment, also known as endodontic treatment, is a dental procedure designed to remove infected or damaged tissue from the inside of a tooth. This tissue, known as the pulp, contains nerves and blood vessels that can become infected due to decay, cracks, trauma, or repeated dental procedures.
							<br />
							<br />
							Without treatment, this infection can spread to the surrounding teeth and gums, causing pain, swelling, and even tooth loss.
							<br />
							<br />
							During root canal treatment, our dental team will remove the infected or damaged pulp, clean and disinfect the inside of the tooth, and fill it with a biocompatible material to help strengthen and protect the tooth. In most cases, a dental crown will be placed over the treated tooth to restore its shape, function, and appearance.
						</h1>
						<Button variant="solid" color="primary" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</div>
				</div>
				<div className="flex flex-col gap-10">
					<h1 className={title({ size: 'md', alignment: 'center', color: 'primary' })}>Root Canal Procedure</h1>
					<Timeline
						colortheme='primary'
						numItems={5}
						listofItems={[
							"Consultation to determine if a root canal is necessary.",
							"Procedure begins with numbing the affected tooth and surrounded area using local anesthesua.",
							"Create small hole and remove damaged/infected pulp from inside the tooth.",
							"Clean and shape inside of tooth and a temporary filling may be placed.",
							"Crown or other restorations may be suggested and regular cleanings and checkups."
						]} />
				</div>


				<div className="flex flex-col lg:flex-row items-center w-full gap-20">
					<div className="flex flex-col w-1/2 justify-center text-left">
						<h1 className={title({ size: 'md', alignment: 'left', color: 'secondary' })}>Extractions</h1>
						<h1 className={paragraph({ size: 'lg' })}>Sometimes, a tooth may need to be removed due to decay, damage, or overcrowding. At Smiline Family Dentistry in Milton, Ontario, we offer gentle and effective extraction services to remove teeth that are causing problems.</h1>
						<Button variant="solid" color="secondary" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</div>
					<div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mr-10 rounded-full">
						<Image src={section2image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
						<div className='bubble absolute w-32 h-32 z-10 top-32 -left-10 bg-secondary rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-10 -bottom-24 -right-10 bg-secondary rounded-full ' data-speed="0.1"></div>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row items-center w-full gap-20">
					<div className="flex flex-col p-20 rounded-3xl bg-secondary">
						<h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>Wisdom Teeth Extraction</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>Wisdom teeth, also known as third molars, often need to be removed due to impaction or other issues. At Smiline Family Dentistry in Milton, Ontario, we offer expert wisdom teeth removal services to ensure a smooth and comfortable procedure.</h1>
					</div>
					<div className="flex flex-col p-20 rounded-3xl bg-secondary">
						<h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>Post-Operation</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>After your Invisalign treatment is complete, you will need to wear a retainer to ensure that your teeth do not shift back to their original position. It's also important to maintain good oral hygiene habits by brushing and flossing regularly.</h1>
					</div>
				</div>

				<div className="flex flex-col gap-10">
					<h1 className={title({ size: 'md', alignment: 'center', color: 'secondary' })}>Extraction Procedure</h1>
					<Timeline
						colortheme='secondary'
						numItems={5}
						listofItems={[
							"Consultation to determine if an extraction is necessary.",
							"Procedure begins with numbing the affected tooth and surrounded area using local anesthesia.",
							"Tooth will be loosened and removed.",
							"If necessary, a small stitch will be placed to help heal the area.",
							"Crown or other restoratiuons may be suggested and regular cleanings and checkups."
						]} />
				</div>

				<div className="flex flex-col lg:flex-row items-center w-full gap-20">
					<div className="flex flex-col w-1/2 justify-center text-left">
						<h1 className={title({ size: 'md', alignment: 'left' })}>Implant Treatment</h1>
						<h1 className={paragraph({ size: 'lg' })}>Dental implants are a popular and effective way to replace missing teeth. They consist of a small titanium post that is surgically implanted into the jawbone, which serves as a replacement for the tooth root. Once the implant has fused with the jawbone, a custom-made dental crown is attached to the top of the post, creating a natural-looking replacement tooth.</h1>
						<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</div>
					<div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mr-10 rounded-full">
						<Image src={section3image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
						<div className='bubble absolute w-32 h-32 z-10 top-32 -left-10 bg-default rounded-full ' data-speed="0.1"></div>
						<div className='bubble absolute w-20 h-20 z-10 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0.1"></div>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row items-center w-full rounded-3xl bg-default p-20 gap-10">
					<div className="flex flex-col">
						<h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>Benefits of Dental Implants</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>There are several benefits to choosing dental implants as a tooth replacement option, including:</h1>
					</div>
					<div className="flex flex-col">
						<ul>
							<li className="list-disc text-background"><h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>
								Improved appearance: Dental implants look and feel like natural teeth, providing a natural-looking smile.
							</h1></li>
							<li className="list-disc text-background"><h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>
								Improved function: Dental implants function like natural teeth, allowing you to eat and speak with confidence.
							</h1></li>
							<li className="list-disc text-background"><h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>
								Improved oral health: Dental implants can help prevent bone loss in the jaw and maintain the overall health of your mouth.
							</h1></li>
						</ul>
				</div>
			</div>

			<div className="flex flex-col gap-10">
				<h1 className={title({ size: 'md', alignment: 'center' })}>Root Canal Procedure</h1>
				<Timeline
					colortheme='default'
					numItems={5}
					listofItems={[
						"Consultation to determine if an implant is necessary.",
						"Procedure begins with numbing the affected tooth and surrounded area using local anesthesia.",
						"Titanium post is surgically implanted into the jawbone. Followed by a several month healing period.",
						"Attachment of the abutment: Once the implant has fused with the jawbone, an abutment is attached to the top of the post.",
						"Placement of the crown: Finally, a custom-made dental crown is attached to the abutment, creating a natural-looking replacement tooth."
					]} />
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

		</div >
	);
}