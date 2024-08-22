import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import heroimage from '../../assets/images/SmilineReception.png'
import profileimage from '../../assets/images/asra.png'
import defaultimage from '../../assets/profiles/default.png'

import Image from "next/image";
import { RiGraduationCapFill } from "react-icons/ri";
import FullProfileCard from "@/components/common/full-profile-card";

export default function AboutPage() {
	const team = [
		{
			name: "DR. JUNAID AHMED",
			position: 'Associate Dentist',
			picture: defaultimage
		}, {
			name: "UZMA JATOI",
			position: 'Hygenist',
			picture: defaultimage
		}, {
			name: "GURPREET BHAMRAH",
			position: 'Office Manager',
			picture: defaultimage
		}, {
			name: "HINA AHMAR",
			position: 'Dental Assistant',
			picture: defaultimage
		}, {
			name: "SYEDA MUBARIKA",
			position: 'Dental Assistant',
			picture: defaultimage
		}, {
			name: "AQLEEMA REHAMAN",
			position: 'Dental Assistant',
			picture: defaultimage
		},
	]
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				div_side={'left'}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-12 lg:p-16 z-20 rounded-3xl bg-white'>
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
				<div className="flex">
					<FullProfileCard header={"Dr. Asra Ahmed"}
						subheader="BDS, M.SC"
						text={"Dr. Asra Ahmed has over ten years of experience in the field of dentistry, she believes in providing high quality innovative dental care to all her patients. After graduating from dental school, Dr. Asra's dedication towards oral health care enabled her to continue her studies at University of Manitoba where she graduated with a Master's Degree in Oral Biology. A firm believer in continuous learning, she went on to complete continuing education programs in Invisalign, FastBraces, 3D Impression Techniques, and Root Canal Treatments. With the goal of giving her patients a reason to smile with confidence she established her practice, Smiline Family Dentistry in Milton, where patients of all ages and emergencies are always welcome."}
						image={profileimage} />
				</div>

				<div className="flex flex-col lg:flex-row w-full gap-10 px-2 lg:px-0">
					<div className="flex flex-col bg-default p-10 rounded-xl items-center w-full">
						<div className="w-20 h-20 p-5 rounded-full">
							<RiGraduationCapFill className="w-full h-full text-background" />
						</div>
						<h1 className={title({ color: 'background', size: 'sm', alignment: 'center' })}>Education</h1>
						<h1 className={paragraph({ color: 'background', size: 'sm', alignment: 'center' })}>
							<ul className="list-disc list-inside"><li>Bachelor's of Dental Surgery</li><li>University of Manitoba (M.Sc)</li></ul>
						</h1>
					</div>

					<div className="flex flex-col bg-default p-10 rounded-xl items-center w-full">
						<div className="w-20 h-20 p-5 rounded-full">
							<RiGraduationCapFill className="w-full h-full text-background" />
						</div>
						<h1 className={title({ color: 'background', size: 'sm', alignment: 'center' })}>Professional Associations</h1>
						<h1 className={paragraph({ color: 'background', size: 'sm', alignment: 'center' })}>
							<ul className="list-disc list-inside"><li>Ontario Dental Association</li><li>Royal College of Dental Surgeons of Ontario</li><li>Canadian Dental Association</li></ul>
						</h1>
					</div>
				</div>

				<div className="flex flex-col gap-10">
				<h1 className={title({ size: 'md', alignment: 'center' })}>Meet our team</h1>
					<div className="flex flex-wrap w-full justify-between gap-10 px-2 lg:px-0">
						{team.map((member) => (
							<div className="flex flex-col bg-white rounded-2xl gap-5 p-5 items-center flex-1 basis-[30%]">
								<div className="relative w-[200px] h-[200px]">
									<Image src={member.picture} alt="itero" fill={true} className="rounded-3xl object-cover" />
								</div>
								<div className="gap-2">
									<h1 className={title({ color: 'default', size: 'sm', alignment: 'center' })}>{member.name}</h1>
									<h1 className={paragraph({ color: 'default', size: 'sm', alignment: 'center' })}>{member.position}</h1>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
