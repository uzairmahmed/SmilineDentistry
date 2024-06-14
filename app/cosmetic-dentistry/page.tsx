import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import { Button } from "@nextui-org/button";

import heroimage from '../../assets/images/figmaadobestock_333548204_preview1.png'
import card1image from '../../assets/images/figmaadobestock_265971927_preview1.png'
import card2image from '../../assets/images/figmaadobestock_297258856_preview1.png'
import card3image from '../../assets/images/figmaadobestock_126591916_preview1.png'
import cosmeticImage from '../../assets/images/figmaadobestock_601012084_preview1.png'
import PicText from "@/components/common/pic-text";
import GreenCircleCard from "@/components/common/green-circle-card";
import CardRibbon from "@/components/common/card-ribbon";

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				div_side={'left'}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Cosmetic Dentistry</h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>With cosmetic dental treatments, you’ll have a reason to smile with confidence.</h1>
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
					<CardRibbon
						image1={card1image} header1={"Whitening"}
						text1={'Achieving a dazzling, white smile is a desire for many. Our team at Smiline Family Dentistry offer solutions for whiter, brighter smiles.'}
						image2={card2image} header2={"Crowns"}
						text2={'Dental crowns cover damaged or discolored teeth, improving both appearance and function for a healthier, more confident smile.'}
						image3={card3image} header3={"Verneers"}
						text3={'Dental veneers help to enhance the appearance of teeth by correcting imperfections like discoloration, chips, or gaps, for a stunning smile transformation.'}
					/>
				</div>

				<PicText image={cosmeticImage} inside={
					<>
						<h1 className={title({ size: 'md', alignment: 'left' })}>The Cosmetic Dentistry Consultation</h1>
						<h1 className={paragraph({ size: 'lg' })}>At Smiline Family Dentistry, our cosmetic dentistry consultations are personalized experiences. Our skilled doctors listen attentively 
						to your concerns and desires, understanding your smile goals. <br /><br /> During the consultation, we conduct a thorough examination, discussing various cosmetic services like dental 
						veneers or teeth whitening. We explain treatment options, ensuring you're fully informed. With our expertise and your input, together we create a tailored plan for achieving 
						the smile of your dreams. </h1>
						<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
							Book an Appointment
						</Button>
					</>
				} />

				<GreenCircleCard
					header="Maintaining your smile"
					image={cosmeticImage}
					text="After your professional teeth cleaning, it's important to maintain good oral hygiene habits to keep your teeth and gums healthy. This includes brushing and flossing regularly, using mouthwash, and visiting for regular dental checkups. Regular teeth cleanings can help prevent oral health issues and keep your smile looking its best."
				/>

			</div>

		</div>
	);
}