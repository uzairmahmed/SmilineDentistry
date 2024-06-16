"use client"
import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import heroimage from '../../assets/images/SmilineExterior.png'
import { RiMailFill, RiMapFill, RiPhoneFill } from "react-icons/ri";
import TimingGrid from "@/components/common/timing-grid";
import ContactFormStandalone from "@/components/common/contact-form-standalone";

export default function BlogPage() {
	return (
		<div className="flex flex-col h-full w-full">

			<ServiceHero
				image={heroimage}
				div_side={'left'}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Contact Us</h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>Ready to transform your smile? Reach out and let's start the conversation.</h1>
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
				<div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-10 w-full">
					<div className="flex flex-col py-20 items-center justify-center align-middle bg-secondary rounded-3xl gap-5">
						<RiMailFill className='w-12 h-12 text-white' />
						<h1 className={subtitle({ size: 'sm', color: 'background', alignment: 'center' })}>
							contact@smilinedentistry.ca
						</h1>
					</div>
					<div className="flex flex-col py-20 items-center justify-center align-middle bg-secondary rounded-3xl gap-5">
						<RiPhoneFill className='w-12 h-12 text-white' />
						<h1 className={subtitle({ size: 'sm', color: 'background', alignment: 'center' })}>
						(905) 405-1786
						</h1>
					</div>
					<div className="flex flex-col py-20 items-center justify-center align-middle bg-secondary rounded-3xl gap-5">
						<RiMapFill className='w-12 h-12 text-white' />
						<h1 className={subtitle({ size: 'sm', color: 'background', alignment: 'center' })}>
						885 Main Street E. <br />Milton, ON L9T5A7
						</h1>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row gap-20">
					<div className="flex flex-col bg-white rounded-3xl p-20 w-full lg:w-1/2">
						<h1 className={title({ size: 'md', fullWidth: true, alignment: 'left', color: 'primary' })}>Contact Us</h1>
						<h1 className={paragraph({ size: 'lg', color: 'primary', alignment: 'left', })}>Leave us a message, and we'll get back to you as soon as possible.</h1>
						<ContactFormStandalone />
					</div>

					<div className="flex flex-col w-full lg:w-1/2 h-full pl-10 pr-5 py-20 lg:p-20 bg-default rounded-3xl">
						<h1 className={title({ size: 'md', fullWidth: true, alignment: 'left', color: 'background' })}>Hours of Operation</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left', })}>Conveniently serving your needs with flexible scheduling for your busy lifestyle. Open on evenings and weekends to serve you better.</h1>
						<TimingGrid />
					</div>
				</div>
			</div>
		</div>
	);
}
