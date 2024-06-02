import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import heroimage from '../../assets/images/image14.png'
import { Button } from "@nextui-org/button";
import profileimage from '../../assets/images/asra.png'
import assc1 from '../../assets/other-logos/image19.png'
import assc2 from '../../assets/other-logos/image20.png'
import assc3 from '../../assets/other-logos/image21.png'

import Image from "next/image";
import { RiGraduationCapFill } from "react-icons/ri";

export default function AboutPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Smiline Family Dentistry</h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>At Smiline Family Dentistry in Milton, we are committed to providing the highest quality of care to meet the dental needs of every member of your family. We aim to provide you with optimal oral health care and give you a reason to smile with confidence.</h1>

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
				<div className="flex w-full justify-center py-16">
					<div className='absolute object-cover w-screen h-[700px] z-0 bg-default'></div>
					<div className="relative flex flex-col lg:flex-row w-full z-10 justify-center h-[700px]">
						{/* <div> */}

						<div className="flex w-[24px] h-full bg-background z-10 ">
							<div className="flex w-full h-full bg-default z-10 rounded-r-3xl">
							</div>
						</div>
						<div className="relative flex flex-col w-5/12 bg-background p-20 gap-5 justify-center items-center">
							<h1 className={title({ size: 'lg', alignment: 'center', color: 'default' })}>Dr. Asra Ahmed</h1>
							<h1 className={subtitle({ size: 'md', alignment: 'center', color: 'default', margin: 'none' })}>BDS, M.Sc</h1>
							<div className="relative w-[50px] h-[50px] lg:w-[250px] lg:h-[250px] bg-black rounded-full">
								<Image src={profileimage} alt="woman flossing" fill={true} className="rounded-full object-cover z-20" />
								<div className='bubble absolute w-32 h-32 z-10 top-24 -left-16 bg-secondary rounded-full ' data-speed="0.1"></div>
								<div className='bubble absolute w-20 h-20 z-10 -bottom-24 -right-10 bg-secondary rounded-full ' data-speed="0.1"></div>
							</div>
							<Button variant="solid" color="default" fullWidth={false} size='lg' radius='full' className='mt-8'>
								Reach Out
							</Button>
						</div>
						<div className="flex w-[24px] h-full bg-background z-10 ">
							<div className="flex w-full h-full bg-default z-10 rounded-l-3xl">
							</div>
						</div>
						{/* </div> */}
						<div className="flex flex-col w-6/12 pl-20 py-20 gap-5">
							{/* <div className='bubble absolute w-32 h-32 z-20 top-32 -right-24 bg-secondary rounded-full ' data-speed="0.1"></div> */}
							{/* <div className='bubble absolute w-14 h-14 z-20 top-20 right-24 bg-secondary rounded-full ' data-speed="0.1"></div> */}
							{/* <div className='bubble absolute w-32 h-32 z-0 -bottom-48 -left-24 bg-secondary rounded-full ' data-speed="0.1"></div> */}

							<h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>More about Smiline Dentistry</h1>
							<h1 className={paragraph({ size: 'md', color: 'background', alignment: 'left' })}>
								Dr. Asra Ahmed has over ten years of experience in the field of dentistry, she believes in providing high quality innovative dental care to all her patients.
								<br /><br />
								After graduating from dental school, Dr. Asra's dedication towards oral health care enabled her to continue her studies at University of Manitoba where she graduated with a Master's Degree in Oral Biology. A firm believer in continuous learning, she went on to complete continuing education programs in Invisalign, FastBraces, 3D Impression Techniques, and Root Canal Treatments.
								<br /><br />
								With the goal of giving her patients a reason to smile with confidence she established her practice, Smiline Family Dentistry in Milton, where patients of all ages and emergencies are always welcome.
							</h1>
						</div>

					</div>
				</div>

				<div className="flex w-full justify-center py-16" >
					<div className="grid grid-cols-3 gap-5">
						<div className="flex flex-col w-full h-full rounded-3xl bg-foreground py-10 px-12 align-middle justify-center items-center gap-5">
							<div className="w-20 h-20 p-5 bg-background rounded-full">
								<RiGraduationCapFill className="w-full h-full text-foreground" />
							</div>
							<h1 className={title({ color: 'background', size: 'md', alignment: 'left' })}>Education</h1>
							<h1 className={paragraph({ color: 'background', size: 'sm', alignment: 'left' })}>
								<ul className="list-disc list-outside"><li>Bachelor's of Dental Surgery</li><li>University of Manitoba (M.Sc)</li></ul>
							</h1>
						</div>
						<div className="flex flex-col col-span-2 w-full h-full rounded-3xl bg-foreground py-10 px-20 align-middle justify-center items-center gap-10">
							<h1 className={title({ color: 'background', size: 'md', alignment: 'left' })}>Professional Associations</h1>
							<div className="grid grid-cols-3 w-full align-middle items-center gap-2">
								<div className="flex flex-col h-full items-center">
									<div className="relative w-20 h-20 bg-white rounded-full">
										<Image src={assc3} alt="woman flossing" fill={true} className="p-3 rounded-full object-cover z-20" />
									</div>
									<h1 className={paragraph({ color: 'background', size: 'sm', alignment: 'center' })}>Ontario Dental Association</h1>
								</div>
								<div className="flex flex-col h-full items-center">
									<div className="relative w-20 h-20 bg-white rounded-full">
										<Image src={assc1} alt="woman flossing" fill={true} className="p-3 rounded-full object-cover z-20" />
									</div>
									<h1 className={paragraph({ color: 'background', size: 'sm', alignment: 'center' })}>Royal College of Dental Surgeons of Ontario</h1>
								</div>
								<div className="flex flex-col h-full items-center">
									<div className="relative w-20 h-20 bg-white rounded-full">
										<Image src={assc2} alt="woman flossing" fill={true} className="p-3 rounded-full object-cover z-20" />
									</div>
									<h1 className={paragraph({ color: 'background', size: 'sm', alignment: 'center' })}>Canadian Dental Association</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
