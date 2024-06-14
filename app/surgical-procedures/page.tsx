import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import { Button } from "@nextui-org/button";

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
import PicText from "@/components/common/pic-text";
import GreenCircleCard from "@/components/common/green-circle-card";
import SplitCard from "@/components/common/card";

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				div_side={'right'}
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
					<div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-10 mx-10 lg:mx-0">
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

				<PicText image={section1image} inside={
					<>
						<h1 className={title({ size: 'md', alignment: 'left', color: 'primary' })}>Root Canal Treatment</h1>
						<h1 className={paragraph({ size: 'lg' })}>
							If you're experiencing deep decay or tooth pain which is due to a severely infected or decayed - root canal treatment,
							is a vital procedure designed to save the affected tooth. The treatment involves removing the damaged or infected pulp
							from the inside of the tooth. The tooth's interior is then meticulously cleaned, disinfected, and shaped before being
							filled and sealed to prevent further infection.
							<br /><br />
							A crown or filling is typically placed on the treated tooth to restore its strength and functionality. Root canal
							treatment alleviates pain, prevents the spread of infection, and preserves the natural tooth, which is often preferable
							to extraction. This procedure is crucial for maintaining oral health and can save teeth that might otherwise be lost,
							ensuring patients can maintain their natural smile and optimal chewing ability.
						</h1>
						<Button variant="solid" color="primary" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</>
				} />

				<div className="flex flex-col gap-10">
					<h1 className={title({ size: 'md', alignment: 'center', color: 'primary' })}>Root Canal Procedure</h1>
					<Timeline
						colortheme='primary'
						numItems={5}
						listofItems={[
							"Diagnosis and Preparation: Dentist examines tooth, takes X-rays, and administers local anesthesia to numb the area.",
							"Pulp Removal: A small opening is made, and the infected or damaged pulp is removed.",
							"Cleaning and shaping: The tooth's interior is meticulously cleaned and shaped to prepare for the filling.",
							"Filling and Sealing: The cleaned canals are filled and the opening is sealed.",
							"Final Restoration: A permanent filling and later crown is placed to restore the tooth's strength and function."
						]} />
				</div>

				<PicText image={section2image} inside={
					<>
						<h1 className={title({ size: 'md', alignment: 'left', color: 'secondary' })}>Extractions</h1>
						<h1 className={paragraph({ size: 'lg' })}>Tooth extractions are typically done to address various dental issues, including severe tooth decay, infection, crowding, and damage from trauma. It is also necessary for impacted wisdom teeth or to make space for orthodontic treatment. Removing the problematic tooth helps prevent further infection, alleviates pain, and improves overall oral health. </h1>
						<Button variant="solid" color="secondary" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</>
				} />

				<SplitCard bgcolor={'secondary'}
					left={<>
						<h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>Wisdom Teeth Extraction</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>Wisdom tooth removal is necessary for impacted, painful, or misaligned teeth. This procedure can cause anxiety, but our expert team at Smiline Dentistry ensures a comfortable, stress-free experience with expert care and personalized support. We prioritize patient comfort, using advanced techniques to make the process as smooth as possible. </h1>
					</>}
					right={<>
						<h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>Post-Operation</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>After extractions, our team provides thorough post-op instructions, including guidelines for pain management, oral hygiene, and dietary restrictions. We take the time to explain these instructions, ensuring optimal healing and recovery.</h1>
					</>}
					separated={true}
				/>

				{/* <div className="flex flex-col gap-10">
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
				</div> */}

				<PicText image={section3image} inside={
					<>
						<h1 className={title({ size: 'md', alignment: 'left' })}>Implant Treatment</h1>
						<h1 className={paragraph({ size: 'lg' })}>Dental implants are a popular and effective way to replace missing teeth. They consist of a small titanium post that is surgically implanted into the jawbone, which serves as a replacement for the tooth root. Once the implant has fused with the jawbone, a custom-made dental crown is attached to the top of the post, creating a natural-looking replacement tooth.</h1>
						<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</>
				} />

				<SplitCard bgcolor={'default'}
					left={<>
						<h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>Benefits of Dental Implants</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>There are several benefits to choosing dental implants as a tooth replacement option, including:</h1>
					</>}
					right={<>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>
							<ul className="list-disc list-outside">
								<li>
									Improved appearance: Dental implants look and feel like natural teeth, providing a natural-looking smile.
								</li>
								<li>
									Improved function: Dental implants function like natural teeth, allowing you to eat and speak with confidence.
								</li>
								<li>
									Improved oral health: Dental implants can help prevent bone loss in the jaw and maintain the overall health of your mouth.
								</li>
							</ul>
						</h1>
					</>}
					separated={false}
				/>

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
							"Placement of the crown: Finally, a custom-made dental crown is attached to the abutment, creating a natural-looking replacement tooth.",
						]} />
				</div>

				<GreenCircleCard
					header="Maintaining your smile"
					image={cosmeticImage}
					text="After your professional teeth cleaning, it's important to maintain good oral hygiene habits to keep your teeth and gums healthy. This includes brushing and flossing regularly, using mouthwash, and visiting for regular dental checkups. Regular teeth cleanings can help prevent oral health issues and keep your smile looking its best."
				/>
			</div>

		</div >
	);
}