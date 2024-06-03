import { Spacer } from "@nextui-org/spacer";

import Hero from "@/components/home/hero";
import OurServices from "@/components/home/our-services";
import FeaturesOne from "@/components/home/features-one";
import FeaturesTwo from "@/components/home/features-two";
import Testimonials from "@/components/home/testimonials";
import ContactUs from "@/components/home/contact-us";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import ServiceHero from "@/components/common/service-hero";
import { Button } from "@nextui-org/button";
import heroimage from '../assets/images/1000_F_420249849_qMOY6cE7ojERSxItVrsAJomqZ9bC3H2j.jpg'
import section1image from '../assets/images/image13.png'
import section2image from '../assets/images/adobestock_730499892_preview1.png'
import section3image from '../assets/images/1000_F_420249849_qMOY6cE7ojERSxItVrsAJomqZ9bC3H2j.jpg'
import Image from "next/image";
import { RiCalendarEventFill, RiShakeHandsFill, RiToothFill } from "react-icons/ri";
import TimingGrid from "@/components/common/timing-grid";
import { Chip } from "@nextui-org/react";

export default function Home() {
	const weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
	const month = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

	function isCurrentHour(hourDot: number) {
		const today = new Date()
		const currentHour = (today.getHours() + 24) % 12 || 12

		if (currentHour === hourDot) {
			return true
		} else {
			return false
		}
	}

	return (
		<section className="flex flex-col items-center justify-center gap-4 w-screen">
			<div className="inline-block text-center justify-center w-full">
				<main className="flex flex-col h-full w-full">
					{/* <Hero /> */}
					{/* <Spacer y={48} /> */}
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
						<OurServices />

						<div className="flex flex-col lg:flex-row items-center w-full mt-28 gap-20">
							<div className="relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] mr-10 rounded-full">
								<Image src={section1image} alt="itero" fill={true} className="rounded-full object-cover z-20" />
								<div className='bubble absolute w-32 h-32 z-10 top-32 -left-10 bg-default rounded-full ' data-speed="0.1"></div>
								<div className='bubble absolute w-20 h-20 z-10 -bottom-24 -right-10 bg-default rounded-full ' data-speed="0.1"></div>
							</div>
							<div className="flex flex-col w-1/2 justify-center text-left">
								<h1 className={title({ size: 'md', alignment: 'left' })}>The Cosmetic Dentistry Consultation</h1>
								<h1 className={paragraph({ size: 'lg' })}>During your cosmetic dentistry consultation at Smiline Family Dentistry in Milton, Ontario, Dr. Asra Ahmed will discuss your aesthetic concerns and goals, and recommend the best cosmetic dentistry services to achieve your ideal smile. Our cosmetic dentist will work with you to develop a personalized treatment plan that meets your unique needs and preferences.</h1>
								<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
									Book an Appointment
								</Button>
							</div>
						</div>

						<div className="flex w-full justify-center py-16">
							<img src={section2image.src} className='absolute object-cover w-screen h-[600px] z-0' />
							<div className="flex w-full z-10 justify-center align-middle h-[600px]">
								<div className="relative grid grid-cols-3 w-full h-1/2 self-center gap-16">
									<div className='bubble absolute w-32 h-32 z-20 top-32 -right-24 bg-secondary rounded-full ' data-speed="0.1"></div>
									<div className='bubble absolute w-14 h-14 z-20 top-20 right-24 bg-secondary rounded-full ' data-speed="0.1"></div>
									<div className='bubble absolute w-32 h-32 z-0 -bottom-48 -left-24 bg-secondary rounded-full ' data-speed="0.1"></div>

									<div className={`flex flex-col px-16 py-16 rounded-3xl bg-default items-center text-center gap-10`}>
										<RiShakeHandsFill className='w-16 h-16 text-background' />
										<h1 className={subtitle({ size: 'md', color: 'background' })}>Accepting new patients and families</h1>
									</div>
									<div className={`flex flex-col px-16 py-16 rounded-3xl bg-default items-center text-center gap-10`}>
										<RiToothFill className='w-16 h-16 text-background' />
										<h1 className={subtitle({ size: 'md', color: 'background' })}>Direct Billing to all insurance Providers</h1>
									</div>
									<div className={`flex flex-col px-16 py-16 rounded-3xl bg-default items-center text-center gap-10`}>
										<RiCalendarEventFill className='w-16 h-16 text-background' />
										<h1 className={subtitle({ size: 'md', color: 'background' })}>Open on Saturdays and Sundays</h1>
									</div>
								</div>
							</div>
						</div>

						<Testimonials />

						<ContactUs />

						<div className="flex w-full justify-center">
							<div className='absolute object-cover w-[40vw] h-[800px] left-0 z-0 bg-default'></div>
							<div className="w-full flex flex-row h-[800px] bg-opacity-50 z-10 ">
								<div className="flex flex-col w-1/2 h-full py-20 px-20 bg-default rounded-r-3xl">
									<h1 className={title({ size: 'md', fullWidth: true, alignment: 'left', color: 'background' })}>Hours of Operation</h1>
									<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left', })}>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. ipsum dolor sit amet consectetur adipiscing elit Ut et.</h1>
									<TimingGrid />
								</div>

								<div className="flex flex-col w-1/2 h-full py-20 px-20 justify-center items-center gap-2">
									<h1 className={subtitle({ size: 'lg', color: 'default', alignment: 'center', })}>TODAY</h1>
									<div className="h-64 w-64">
										<div className="relative flex w-full h-full rounded-full border-2 border-default items-center justify-center">
											<div className={`hour-12 absolute w-4 h-4 ${isCurrentHour(12) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
											<div className={`hour-1  absolute w-4 h-4 ${isCurrentHour(1) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
											<div className={`hour-2  absolute w-4 h-4 ${isCurrentHour(2) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
											<div className={`hour-3  absolute w-4 h-4 ${isCurrentHour(3) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
											<div className={`hour-4  absolute w-4 h-4 ${isCurrentHour(4) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
											<div className={`hour-5  absolute w-4 h-4 ${isCurrentHour(5) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
											<div className={`hour-6  absolute w-4 h-4 ${isCurrentHour(6) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
											<div className={`hour-7  absolute w-4 h-4 ${isCurrentHour(7) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
											<div className={`hour-8  absolute w-4 h-4 ${isCurrentHour(8) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
											<div className={`hour-9  absolute w-4 h-4 ${isCurrentHour(9) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
											<div className={`hour-10 absolute w-4 h-4 ${isCurrentHour(10) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>
											<div className={`hour-11 absolute w-4 h-4 ${isCurrentHour(11) ? 'bg-secondary' : 'bg-default'} rounded-full -translate-x-1/2 -translate-y-1/2`}></div>

											<div className="flex flex-col w-5/12 h-5/12 bg-default rounded-3xl">
												<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'center', fullWidth: true })}>{weekday[new Date().getDay()]}</h1>
												<div className="flex flex-col w-auto h-full bg-background rounded-3xl border-2 border-default pb-5">
													<h1 className={subtitle({ size: 'md', color: 'default', alignment: 'center', fullWidth: true })}>{month[new Date().getMonth()]}</h1>
													<h1 className={title({ size: 'lg', color: 'default', alignment: 'center', fullWidth: true })}>{new Date().getDate()}</h1>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</section>


	);
}
