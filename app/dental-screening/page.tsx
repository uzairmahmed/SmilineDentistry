import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import { Button } from "@nextui-org/button";

import heroimage from '../../assets/images/figmaadobestock_372286534_preview1.png'
import section2image from '../../assets/images/adobestock_730499892_preview1.png'
import section3image from '../../assets/images/figmaadobestock_413893760_preview1.png'
import iteroimage from '../../assets/images/adobestock_601012084_preview1.png'
import PicText from "@/components/common/pic-text";
import ImageRibbonCard from "@/components/common/image-ribbon-card";
import GreenCircleCard from "@/components/common/green-circle-card";

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				div_side={'right'}
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

				<PicText image={iteroimage} inside={
					<>
						<h1 className={title({ size: 'md', alignment: 'left' })}>Why Oral Cancer Screening is Important</h1>
						<h1 className={paragraph({ size: 'lg' })}>Oral cancer can affect anyone, regardless of age or gender. Early detection is key to successful treatment and can significantly improve the chances of recovery. Oral cancer screening is a painless and non-invasive way to detect early signs of the disease, such as white or red patches in the mouth or lips, sores that won't heal, or lumps or bumps in the mouth or neck.</h1>
					</>
				} />

				<ImageRibbonCard image={section2image} inside={
					<>
						<h1 className={title({ size: 'lg', alignment: 'left', color: 'background' })}>Our Oral Cancer Screening Process</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>
							At Smiline Family Dentistry, our oral cancer screening process is quick, painless, and non-invasive. During your regular dental check-up, we will perform a visual and physical examination of your mouth and neck to check for any signs of cancer. We may also use specialized equipment, such as a VELscope, to help identify areas of concern.
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