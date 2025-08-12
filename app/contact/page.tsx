"use client"
import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import heroimage from '../../assets/images/SmilineExterior.jpg'
import TimingGrid from "@/components/common/timing-grid";
import ContactFormStandalone from "@/components/common/contact-form-standalone";
import { MailIcon, MapIcon, PhoneIcon } from "@/components/common/icons";

export default function BlogPage() {
	return (
		<div className="flex flex-col w-full h-full">

			<ServiceHero
				image={heroimage}
				div_side={'right'}
				main_section={
					<div className='relative z-20 flex flex-col items-center p-12 bg-white lg:items-start lg:p-16 rounded-3xl'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Contact Us</h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>Ready to transform your smile? Reach out and let's start the conversation.</h1>
					</div>
				}
				bubbles={
					<>
						<div className='absolute z-10 w-32 h-32 rounded-full bubble bottom-16 -left-24 bg-default ' data-speed="0"></div>
						<div className='absolute z-20 w-20 h-20 rounded-full bubble -top-10 -right-10 bg-default ' data-speed="0"></div>
						<div className='absolute z-10 w-12 h-12 rounded-full bubble bottom-10 -right-20 bg-default ' data-speed="0"></div>
						<div className='absolute z-10 w-40 h-40 rounded-full bubble -bottom-24 -right-10 bg-default ' data-speed="0"></div>
					</>
				}
			/>
			<div className={pagecontent()}>
				<div className="grid w-full grid-cols-1 grid-rows-3 gap-10 px-2 lg:grid-rows-1 lg:grid-cols-3 lg:px-0">
					<div className="flex flex-col items-center justify-center gap-5 py-20 align-middle bg-secondary rounded-3xl">
						<MailIcon className='w-12 h-12 text-white' />
						<h1 className={subtitle({ size: 'sm', color: 'background', alignment: 'center' })}>
							contact@smilinedentistry.ca
						</h1>
					</div>
					<div className="flex flex-col items-center justify-center gap-5 py-20 align-middle bg-secondary rounded-3xl">
						<PhoneIcon className='w-12 h-12 text-white' />
						<h1 className={subtitle({ size: 'sm', color: 'background', alignment: 'center' })}>
						(905) 405-1786
						</h1>
					</div>
					<div className="flex flex-col items-center justify-center gap-5 py-20 align-middle bg-secondary rounded-3xl">
						<MapIcon className='w-12 h-12 text-white' />
						<h1 className={subtitle({ size: 'sm', color: 'background', alignment: 'center' })}>
						885 Main Street E. <br />Milton, ON L9T5A7
						</h1>
					</div>
				</div>
				<div className="flex flex-col gap-20 px-2 lg:flex-row lg:px-0">
					<div className="flex flex-col w-full p-10 bg-white rounded-3xl lg:p-20 lg:w-1/2">
						<h1 className={title({ size: 'md', fullWidth: true, alignment: 'left', color: 'primary' })}>Contact Us</h1>
						<h1 className={paragraph({ size: 'lg', color: 'primary', alignment: 'left', })}>Leave us a message, and we'll get back to you as soon as possible.</h1>
						<ContactFormStandalone />
					</div>

					<div className="flex flex-col w-full h-full py-20 pl-10 pr-5 lg:w-1/2 lg:p-20 bg-default rounded-3xl">
						<h1 className={title({ size: 'md', fullWidth: true, alignment: 'left', color: 'background' })}>Hours of Operation</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left', })}>Conveniently serving your needs with flexible scheduling for your busy lifestyle. Open on evenings and weekends to serve you better.</h1>
						<TimingGrid />
					</div>
				</div>
			</div>
		</div>
	);
}
