import OurServices from "@/components/home/our-services";
import Testimonials from "@/components/home/testimonials";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import section1image from '../assets/images/image13.png'
import section2image from '../assets/images/adobestock_730499892_preview1.png'
import { RiCalendarEventFill, RiMailFill, RiMapFill, RiPhoneFill, RiShakeHandsFill, RiToothFill } from "react-icons/ri";
import TimingGrid from "@/components/common/timing-grid";
import HomepageHero from "@/components/common/homepage-hero";
import PicText from "@/components/common/pic-text";
import ImageRibbon from "@/components/common/image-ribbon";
import TimeClock from "@/components/common/time-clock";
import ImageRibbonCard from "@/components/common/image-ribbon-card";

export default function Home() {

	return (
		<section className="flex flex-col items-center justify-center gap-4 w-screen">
			<div className="inline-block text-center justify-center w-full">
				<main className="flex flex-col h-full w-full">
					{/* <Hero /> */}
					{/* <Spacer y={48} /> */}
					<HomepageHero />
					<div className={pagecontent()}>
						<OurServices />

						<PicText image={section1image} inside={
							<>
								<h1 className={title({ size: 'md', alignment: 'left' })}>The Cosmetic Dentistry Consultation</h1>
								<h1 className={paragraph({ size: 'lg' })}>During your cosmetic dentistry consultation at Smiline Family Dentistry in Milton, Ontario, Dr. Asra Ahmed will discuss your aesthetic concerns and goals, and recommend the best cosmetic dentistry services to achieve your ideal smile. Our cosmetic dentist will work with you to develop a personalized treatment plan that meets your unique needs and preferences.</h1>
								<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
									Book an Appointment
								</Button>
							</>}
						/>

						<ImageRibbon type="fullwidth" image={section2image} inside={
							<>
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
							</>}
						/>

						<Testimonials />

						{/* <ContactUs /> */}

						<div className="flex w-full justify-center">
							<div className='hidden lg:flex lg:absolute object-cover w-[40vw] h-[800px] left-0 z-0 bg-default'></div>
							<div className="w-full flex flex-col lg:flex-row h-full lg:h-[800px] bg-opacity-50 z-10 mr-5 lg:mr-0">
								<div className="flex flex-col w-full lg:w-1/2 h-full pl-10 pr-5 py-20 lg:p-20 bg-default rounded-r-3xl">
									<h1 className={title({ size: 'md', fullWidth: true, alignment: 'left', color: 'background' })}>Hours of Operation</h1>
									<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left', })}>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. ipsum dolor sit amet consectetur adipiscing elit Ut et.</h1>
									<TimingGrid />
								</div>

								<div className="flex flex-col w-full lg:w-1/2 h-full p-10 lg:p-20 justify-center items-center gap-2">
									<h1 className={subtitle({ size: 'lg', color: 'default', alignment: 'center', })}>TODAY</h1>
									<TimeClock />
								</div >
							</div>
						</div>

						<ImageRibbonCard image={section2image} inside={<>
							{/* <div className='bubble absolute w-32 h-32 z-20 top-32 -right-24 bg-secondary rounded-full ' data-speed="0.1"></div> */}
							{/* <div className='bubble absolute w-14 h-14 z-20 top-20 right-24 bg-secondary rounded-full ' data-speed="0.1"></div> */}
							{/* <div className='bubble absolute w-32 h-32 z-0 -bottom-48 -left-24 bg-secondary rounded-full ' data-speed="0.1"></div> */}

							<h1 className={title({ size: 'lg', alignment: 'left', color: 'background' })}>Get in Touch</h1>
							<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>
								Ready to transform your smile? Reach out and let's start the conversation.
							</h1>

							<div className="">
								<div className="flex flex-col sm:flex-row w-full align-middle justify-center items-center gap-5">
									<RiMailFill className='w-9 h-9 text-white' />
									<h1 className={subtitle({ size: 'sm', color: 'background', alignment: 'left' })}>
										contact@smilinedentistry.ca
									</h1>
								</div>
								<div className="flex flex-col sm:flex-row  w-full align-middle justify-center items-center gap-5">
									<RiPhoneFill className='w-9 h-9 text-white' />
									<h1 className={subtitle({ size: 'sm', color: 'background', alignment: 'left' })}>
										(905) 405-1786
									</h1>
								</div>
								<div className="flex flex-col sm:flex-row  w-full align-middle justify-center items-center gap-5">
									<RiMapFill className='w-9 h-9 text-white' />
									<h1 className={subtitle({ size: 'sm', color: 'background', alignment: 'left' })}>
										885 Main Street E. <br />Milton, ON L9T5A7
									</h1>
								</div>
							</div>
						</>} />

					</div>
				</main>
			</div>
		</section>


	);
}
