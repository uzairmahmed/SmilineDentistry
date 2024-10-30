import ServiceHero from "@/components/common/service-hero";
import { button, pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import heroimage from '../../assets/images/AdobeStock_722965563.jpg'
import Image from "next/image";

import cleaning from '../../assets/images/AdobeStock_255770347.jpg'
import children from '../../assets/images/AdobeStock_656058193.jpg'
import screening from '../../assets/images/AdobeStock_372286534.jpg'
import whitening from '../../assets/images/AdobeStock_265971927.jpg'
import crowns from '../../assets/images/AdobeStock_297258856.jpg'
import verneers from '../../assets/images/AdobeStock_333548204.jpg'
import rootcanal from '../../assets/images/AdobeStock_393338639.jpg'
import implants from '../../assets/images/AdobeStock_720403667.jpg'
import extractions from '../../assets/images/AdobeStock_297258856.jpg'
import invisalign from '../../assets/images/diana-polekhina-fmB7IdFjhTM-unsplash.jpg'
import fastbraces from '../../assets/images/FastbracesHero.png'
import impressions from '../../assets/images/AdobeStock_175504582.jpg'
import xrays from '../../assets/images/AdobeStock_372286534.jpg'
import mouthguards from '../../assets/images/AdobeStock_226202899.jpg'
import nightguards from '../../assets/images/AdobeStock_399803335.jpg'
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function ServicesPage() {
	const sections = [
		{
			name: "Preventative Dentistry",
			subtitle: 'Preventative dental care at Smiline Family focuses on maintaining your oral health through regular cleanings, check-ups, and early detection to keep your smile strong and healthy.',
			id: "preventative",
		}, {
			name: "Cosmetic Dentistry",
			subtitle: "With cosmetic dental treatments, you'll have a reason to smile with confidence.",
			id: "cosmetic",
			url: '/cosmetic-dentistry'
		}, {
			name: "Dental Surgical Procedures",
			subtitle: 'Oral surgery includes procedures involving teeth, gums, jaw, and nearby structures such as extractions, implants, grafts, and jaw surgeries.',
			id: "surgical",
			url: '/surgical-procedures'
		}, {
			name: "Orthodontics",
			subtitle: 'At Smiline Family, our orthodontic treatments, including Invisalign and Fastbraces, help straighten your teeth and improve your bite for a healthier, more confident smile.',
			id: "orthodontics",
		}, {
			name: "Dental Scans",
			subtitle: 'Advanced dental scans, including X-rays and iTero, provide precise diagnostics for comprehensive care.',
			id: "scans",
			url: '/dental-scans'
		}, {
			name: "Dental Appliances",
			subtitle: 'Mouth guards provide essential protection for teeth and gums during sports and prevent damage from nighttime grinding.',
			id: "appliances",
			url: '/mouthguards'
		},
	]
	const services = [
		{
			name: "Dental Cleaning",
			picture: cleaning,
			page: 'preventative',
			url: '/dental-cleaning'
		}, {
			name: "Children's Dentistry",
			picture: children,
			url: '/childrens-dentistry',
			page: 'preventative',
		}, {
			name: "Dental Screening",
			picture: screening,
			url: '/dental-screening',
			page: 'preventative',
		}, {
			name: "Teeth Whitening",
			picture: whitening,
			url: '/cosmetic-dentistry',
			page: 'cosmetic',
		}, {
			name: "Crowns",
			picture: crowns,
			url: '/cosmetic-dentistry',
			page: 'cosmetic',
		}, {
			name: "Verneers",
			picture: verneers,
			url: '/cosmetic-dentistry',
			page: 'cosmetic',
		}, {
			name: "Root Canal Treatment",
			picture: rootcanal,
			url: '/surgical-procedures',
			page: 'surgical',
		}, {
			name: "Dental Implants",
			picture: implants,
			url: '/surgical-procedures',
			page: 'surgical',
		}, {
			name: "Dental Extractions",
			picture: extractions,
			url: '/surgical-procedures',
			page: 'surgical',
		}, {
			name: "Invisalign",
			picture: invisalign,
			url: '/invisalign',
			page: 'orthodontics',
		}, {
			name: "Fastbraces",
			picture: fastbraces,
			url: '/fastbraces',
			page: 'orthodontics',
		}, {
			name: "Dental Impressions",
			picture: impressions,
			url: '/dental-scans',
			page: 'scans',
		}, {
			name: "X-Rays",
			picture: xrays,
			url: '/dental-scans',
			page: 'scans',
		}, {
			name: "Sports Mouthguards",
			picture: mouthguards,
			url: '/mouthguards',
			page: 'appliances',
		}, {
			name: "Nightguards",
			picture: nightguards,
			url: '/mouthguards',
			page: 'appliances',
		},
	]

	return (
		<div className="flex flex-col h-full w-full">
			<div className='relative h-[50vh] lg:h-[40vh] overflow-x-clip'>
				<Image alt='hero' src={heroimage} fill={true} className='object-cover' />
				<div className={`
                absolute flex flex-col

				ml-auto mr-auto left-0 right-0
				-bottom-28 lg:-bottom-28

                w-auto lg:w-1/3 max-w-[500px] 
                gap-3
            `}>
					<div className='relative flex flex-col items-center lg:items-start p-12 lg:p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>All Services</h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>Explore our range of dental services designed to keep your smile healthy and bright.</h1>

					</div>
				</div>
			</div>
			<div className="mt-20"></div>
			<div className={pagecontent()}>
				{sections.map((section) => (
					<div key={section.name} className="flex flex-col w-full gap-5 p-5">
						<div className="flex flex-col md:flex-row justify-between">
							<div className="flex flex-col justify-start">
								<h1 className={title({ size: 'md', alignment: 'left', color: 'default' })}>{section.name}</h1>
								<h1 className={subtitle({ size: 'md', alignment: 'left', color: 'foreground' })}>{section.subtitle}</h1>
							</div>
							{section.url && <Button
								className={button()}
								size='md'
								href={section.url}
								as={Link}
								color="default"
								variant="solid"
							>
								View
							</Button>
							}
						</div>
						<div className='grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-3 gap-5 w-full'>
							{services.filter((service) => (service.page === section.id)).map((service) => (
								<Link key={service.name} href={service.url}>
									<div className="flex flex-col h-60 bg-white hover:bg-default-50 hover:shadow-sm rounded-3xl hover:underline decoration-default transition-all">
										<div className="flex w-full h-5/6 relative ">
											<Image alt='service' src={service.picture} fill={true} className='object-cover rounded-t-3xl' />
										</div>
										<div className="p-5">
											<h1 className={subtitle({ size: 'md', alignment: 'left', color: 'default' })}>{service.name}</h1>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
