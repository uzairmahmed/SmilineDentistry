import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";

import heroimage from '../../assets/images/AdobeStock_372286534.jpg'
import section2image from '../../assets/images/AdobeStock_730499892.jpg'
import section3image from '../../assets/images/AdobeStock_413893760.jpg'
import iteroimage from '../../assets/images/AdobeStock_601012084.jpg'
import PicText from "@/components/common/pic-text";
import ImageRibbonCard from "@/components/common/image-ribbon-card";
import GreenCircleCard from "@/components/common/green-circle-card";
import ContactFormButton from "@/components/common/contact-form-button";

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				div_side={'right'}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-12 lg:p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Dental Screening</h1>
						{/* <h1 className={subtitle({ size: 'md', alignment: 'left' })}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</h1> */}
						<ContactFormButton />
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

				<PicText image={iteroimage} inside={
					<>
						<h1 className={title({ size: 'md', alignment: 'left' })}>Why is Oral Cancer Screening Important</h1>
						<h1 className={paragraph({ size: 'lg' })}>Dental cancer screenings are crucial for early detection of oral cancers.
							During these exams, dentists inspect your mouth, throat, and tongue for abnormal lesions or growths. Early diagnosis
							significantly improves treatment outcomes. Regular screenings, combined with good oral hygiene, are vital for
							maintaining overall health and catching potential issues early. </h1>
					</>
				} />

				<ImageRibbonCard image={section2image} inside={
					<>
						<h1 className={title({ size: 'lg', alignment: 'left', color: 'background' })}>Our Oral Cancer Screening Process</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>
							Our oral cancer screening process includes a thorough examination of your mouth, throat, and tongue for any signs of
							abnormalities. We use advanced tools to identify any lesion. The screening is quick, painless, and essential for
							early detection. Regular screenings help ensure prompt treatment and better outcomes.
						</h1>
					</>
				} />
				<GreenCircleCard header={"Maintaining your smile"}
					text={"After your professional teeth cleaning, it's important to maintain good oral hygiene habits to keep your teeth and gums healthy. This includes brushing and flossing regularly, using mouthwash, and visiting for regular dental checkups. Regular teeth cleanings can help prevent oral health issues and keep your smile looking its best."}
					image={section3image} />
			</div>
		</div>
	);
}