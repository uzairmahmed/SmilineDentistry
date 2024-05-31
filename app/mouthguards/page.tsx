import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import Image from "next/image";
import { Button } from "@nextui-org/button";

import heroimage from '../../assets/images/figmaadobestock_333548204_preview1.png'
import section1image from '../../assets/images/figmaadobestock_265971927_preview1.png'
import section2image from '../../assets/images/figmaadobestock_126591916_preview1.png'
import section3image from '../../assets/images/figmaadobestock_601012084_preview1.png'
import cosmeticImage from '../../assets/images/figmaadobestock_413893760_preview1.png'

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Mouthguards</h1>
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
					<div>
						<h1 className={title({ size: 'md', alignment: 'center' })}>Learn more about our different surgical procedures.</h1>
						<div className="flex flex-col gap-10 mt-10">
							<div className="flex flex-row relative gap-5 justify-end">
								<div className="absolute top-1/2 left-0 -translate-y-1/2">
									<div className="flex relative w-72 h-72">
										<Image src={section1image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
									</div>
								</div>
								<div className="flex flex-col bg-default p-10 align-middle justify-center w-11/12 self-end rounded-3xl text-left pl-56 pr-16">
									<h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>Sports Mouth guard</h1>
									<h1 className={paragraph({ size: 'md', alignment: 'left', color: 'background' })}>If you or your child participates in sports, a custom-fitted sports mouthguard can help prevent dental injuries, such as broken or knocked-out teeth, as well as protect against concussions. Our sports mouthguards are designed to fit snugly over your teeth, providing maximum protection while allowing you to breathe and speak comfortably.<br /><br /></h1>
								</div>
							</div>

							<div className="flex flex-row relative gap-5 justify-start">
								<div className="absolute top-1/2 right-0 -translate-y-1/2">
									<div className="flex relative w-72 h-72">
										<Image src={section2image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
									</div>
								</div>
								<div className="flex flex-col bg-default p-10 align-middle justify-center w-11/12 self-end rounded-3xl text-left pr-56 pl-16">
									<h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>Night Guard</h1>
									<h1 className={paragraph({ size: 'md', alignment: 'left', color: 'background' })}>if you grind or clench your teeth during sleep, a custom-fitted nightguard can help protect your teeth and jaw from the harmful effects of bruxism, such as worn-down teeth, headaches, and jaw pain. Our nightguards are made from durable, high-quality materials and are designed to fit comfortably over your teeth, providing maximum protection while you sleep.</h1>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row items-center w-full mt-28 gap-20">
						<div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mr-10 rounded-full">
							<Image src={section3image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
							<div className='bubble absolute w-32 h-32 z-10 top-32 -left-10 bg-default rounded-full ' data-speed="0.1"></div>
							<div className='bubble absolute w-20 h-20 z-10 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0.1"></div>
						</div>
						<div className="flex flex-col w-1/2 justify-center text-left">
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

							<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
								Book an Appointment
							</Button>
						</div>
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
			</div>
		</div >
	);
}