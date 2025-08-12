import OurServices from "@/components/home/our-services";
import Testimonials from "@/components/home/testimonials";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import section1image from '../assets/images/SmilineOperatory.jpg'
import section2image from '../assets/images/AdobeStock_730499892.jpg'
import TimingGrid from "@/components/common/timing-grid";
import HomepageHero from "@/components/common/homepage-hero";
import PicText from "@/components/common/pic-text";
import ImageRibbon from "@/components/common/image-ribbon";
import TimeClock from "@/components/common/time-clock";
import ImageRibbonCard from "@/components/common/image-ribbon-card";
import ContactFormButton from "@/components/common/contact-form-button";
import TextText from "@/components/common/text-text";
import InsuranceGrid from "@/components/common/insurance-grid";
import { CalendarEventIcon, MailIcon, MapIcon, PhoneIcon, ShakeHandsIcon, ToothIcon } from "@/components/common/icons";

export default function Home() {

	return (
		<section className="flex flex-col items-center justify-center w-screen gap-4">
			<div className="justify-center inline-block w-full text-center">
				<main className="flex flex-col w-full h-full">
					{/* <Hero /> */}
					{/* <Spacer y={48} /> */}
					<HomepageHero />
					<div className={pagecontent()}>
						<div className="flex flex-col items-center w-5/6 gap-2 mt-0 lg:flex-col lg:gap-2 ">
							<div className={`flex flex-col w-full px-10 lg:p-0 lg:w-full justify-center text-left`}>
								<h1 className={subtitle({ size: 'md', color: 'default', alignment: 'center' })}>
									<span className="font-semibold">At Smiline Dentistry, we want you to feel confident about your smile.</span><br />
								</h1>
							</div>
							<div className={`flex flex-col w-full px-10 md:p-0 md:w-full  align-middle justify-center text-center md:text-left`}>
								<h1 className={paragraph({ size: 'md', color: 'default' })}>
									We are here to support you every step of the way, setting ourselves apart through our core values.
								</h1>
								<h1 className={paragraph({ size: 'md', color: 'default' })}>
									<ul className="list-none md:list-disc md:list-outside md:gap-0">
										<li className="mb-5 md:mb-0"><span className="font-semibold">Compassionate Team</span> <br className="block md:hidden" /> We care deeply about our patients and their well-being.</li>
										<li className="mb-5 md:mb-0"><span className="font-semibold">Exceptional Service</span> <br className="block md:hidden" /> We are committed to providing the highest quality dental care.</li>
										<li className="mb-5 md:mb-0"><span className="font-semibold">Enjoyable Experience</span> <br className="block md:hidden" /> We strive to make every visit pleasant and stress-free.</li>
									</ul>
								</h1>
							</div>
						</div>

						<OurServices />



						<PicText image={section1image} inside={
							<>
								<h1 className={title({ size: 'md', alignment: 'left' })}>More about Smiline Dentistry</h1>
								<h1 className={paragraph({ size: 'lg' })}>We are committed to providing outstanding dental care with a personal touch. Our skilled team of dentists and hygienists offer comprehensive services,
									including preventive care, advanced restorative treatments, and cosmetic dentistry to enhance your smile. Utilizing cutting-edge technology, we ensure precise diagnostics and effective treatments.
									<br /><br />
									Our office is designed with your comfort in mind, offering a warm and welcoming atmosphere. Whether you need routine check-ups, dental implants, Invisalign, or emergency care, we prioritize your
									oral health and overall well-being. Trust us for a gentle, caring, and professional dental experience. Visit Smiline Family Dentistry and let us help you achieve and maintain a healthy, beautiful smile. </h1>
								<br />
								<ContactFormButton />
							</>}
						/>

						<InsuranceGrid />

						<ImageRibbon image={section2image} inside={
							<>
								<div className={`flex flex-col px-16 py-16 rounded-3xl bg-default items-center text-center gap-10`}>
									<CalendarEventIcon className='w-16 h-16 text-background' />
									<h1 className={subtitle({ size: 'md', color: 'background' })}>Open on Saturdays and Sundays</h1>
								</div>
								<div className={`flex flex-col px-16 py-16 rounded-3xl bg-default items-center text-center gap-10`}>
									<ShakeHandsIcon className='w-16 h-16 text-background' />
									<h1 className={subtitle({ size: 'md', color: 'background' })}>Accepting new patients and families</h1>
								</div>
								<div className={`flex flex-col px-16 py-16 rounded-3xl bg-default items-center text-center gap-10`}>
									<ToothIcon className='w-16 h-16 text-background' />
									<h1 className={subtitle({ size: 'md', color: 'background' })}>Direct Billing to all insurance Providers</h1>
								</div>
							</>}
						/>

						<Testimonials />

						{/* <ContactUs /> */}

						<div className="flex justify-center w-full">
							<div className='hidden lg:flex lg:absolute object-cover w-[40vw] h-[800px] left-0 z-0 bg-default'></div>
							<div className="w-full flex flex-col lg:flex-row h-full lg:h-[800px] bg-opacity-50 z-10 mr-5 lg:mr-0">
								<div className="flex flex-col w-full h-full py-20 pl-10 pr-5 lg:w-1/2 lg:p-20 bg-default rounded-3xl lg:rounded-r-3xl">
									<h1 className={title({ size: 'md', fullWidth: true, alignment: 'left', color: 'background' })}>Hours of Operation</h1>
									<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left', })}>Conveniently serving your needs with flexible scheduling for your busy lifestyle. Open on evenings and weekends to serve you better.</h1>
									<TimingGrid />
								</div>
								<div className="flex flex-col items-center justify-center w-full h-full gap-2 p-10 lg:w-1/2 lg:p-20">
									<h1 className={subtitle({ size: 'lg', color: 'default', alignment: 'center', })}>TODAY</h1>
									<TimeClock />
								</div >
							</div>

						</div>

						<ImageRibbonCard image={section2image} inside={<>
							<div className='absolute z-20 w-32 h-32 rounded-full bubble -top-16 -right-16 bg-secondary ' data-speed="0"></div>
							<div className='absolute z-20 rounded-full bubble w-14 h-14 -top-20 right-20 bg-secondary ' data-speed="0"></div>
							<div className='absolute w-32 h-32 rounded-full bubble -z-10 -bottom-16 -left-16 bg-secondary ' data-speed="0"></div>

							<h1 className={title({ size: 'lg', alignment: 'left', color: 'background' })}>Get in Touch</h1>
							<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>
								Ready to transform your smile? Reach out and let's start the conversation.
							</h1>

							<div className="">
								<div className="flex flex-col items-center justify-center w-full gap-5 align-middle sm:flex-row">
									<MailIcon className='text-white w-9 h-9' />
									<h1 className={subtitle({ size: 'sm', color: 'background', alignment: 'left' })}>
										contact@smilinedentistry.ca
									</h1>
								</div>
								<div className="flex flex-col items-center justify-center w-full gap-5 align-middle sm:flex-row">
									<PhoneIcon className='text-white w-9 h-9' />
									<h1 className={subtitle({ size: 'sm', color: 'background', alignment: 'left' })}>
										(905) 405-1786
									</h1>
								</div>
								<div className="flex flex-col items-center justify-center w-full gap-5 align-middle sm:flex-row">
									<MapIcon className='text-white w-9 h-9' />
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
