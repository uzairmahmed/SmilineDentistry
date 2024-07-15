import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import Image from "next/image";
import { Button } from "@nextui-org/button";

import heroimage from '../../assets/images/AdobeStock_248639029.jpeg'
import section1image from '../../assets/images/AdobeStock_226202899.jpeg'
import section2image from '../../assets/images/AdobeStock_399803335.jpeg'
import section3image from '../../assets/images/AdobeStock_601012084.jpeg'
import cosmeticImage from '../../assets/images/AdobeStock_413893760.jpeg'
import PicText from "@/components/common/pic-text";
import PicTextRibbon from "@/components/common/pic-text-ribbon";
import GreenCircleCard from "@/components/common/green-circle-card";
import ContactFormButton from "@/components/common/contact-form-button";

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				div_side={'left'}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Mouthguards</h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>Mouth guards provide essential protection for teeth and gums during sports and prevent damage from nighttime grinding.</h1>
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
				<div className="flex flex-col gap-10">
					<div>
						<h1 className={title({ size: 'md', alignment: 'center' })}>Learn more about our different surgical procedures.</h1>
						<div className="flex flex-col gap-10 mt-10">
							<PicTextRibbon imagefirst={true} image={section1image} header={"Sports Mouth guard"}
								text={"If you or your child participates in sports, a custom-fitted sports mouthguard can help \
								prevent dental injuries, such as broken or knocked-out teeth, as well as protect against concussions. \
								Our sports mouthguards are designed to fit snugly over your teeth, providing maximum protection while \
								allowing you to breathe and speak comfortably."}
							/>
							<PicTextRibbon imagefirst={false} image={section2image} header={"Night Guard"}
								text={"If you grind or clench your teeth during sleep, a custom-fitted nightguard can help protect \
								your teeth and jaw from the harmful effects of bruxism, such as worn-down teeth, headaches, and jaw \
								pain. Our nightguards are made from durable, high-quality materials and are designed to fit \
								comfortably over your teeth, providing maximum protection while you sleep."}
							/>
						</div>
					</div>

					<PicText image={section3image} inside={
						<>
							<h1 className={title({ size: 'md', alignment: 'left' })}>The Benefits of Custom-Fitted Dental Appliances</h1>
							<h1 className={paragraph({ size: 'lg' })}>Custom-fitted dental appliances offer several benefits over store-bought or over-the-counter options, including:
								<br />
								<br />
								<ul className="list-disc list-outside">
									<li>
										Enhanced protection: Custom-fitted appliances are designed to fit your teeth and mouth perfectly, providing maximum protection against damage and injury.
									</li>
									<li>
										Comfort: Custom-fitted appliances are made from high-quality materials and are designed to fit comfortably in your mouth, so you can wear them for extended periods without discomfort.
									</li>
									<li>
										Durability: Custom-fitted appliances are made from durable, high-quality materials, ensuring that they will last for many years with proper care and maintenance.
									</li>
								</ul></h1>

								<ContactFormButton />
						</>
					} />

					<GreenCircleCard header={"Maintaining your smile"}
						text={"After your professional teeth cleaning, it's important to maintain good oral hygiene habits to keep your teeth and gums healthy. This includes brushing and flossing regularly, using mouthwash, and visiting for regular dental checkups. Regular teeth cleanings can help prevent oral health issues and keep your smile looking its best."}
						image={cosmeticImage} />


				</div>
			</div>
		</div >
	);
}