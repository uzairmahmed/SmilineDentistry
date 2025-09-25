import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import PicText from "@/components/common/pic-text";
import GreenCircleCard from "@/components/common/green-circle-card";
import TextHeaderSection from "@/components/common/text-header-section";
import ContactFormButton from "@/components/common/contact-form-button";
import ImageRibbonCard from "@/components/common/image-ribbon-card";

import heroimage from '../../assets/images/AdobeStock_531330525.jpg';
import section1image from '../../assets/images/AdobeStock_474781498.jpg';
import section2image from '../../assets/images/AdobeStock_560698304.jpg';
import section3image from '../../assets/images/AdobeStock_393338639.jpg';
import section4image from '../../assets/images/AdobeStock_420249849_Hero.jpg';

export default function CdcpPage(): JSX.Element {
	return (
		<div className="flex flex-col w-full h-full">
			<ServiceHero
				image={heroimage}
				div_side={'right'}
				main_section={
					<div className="relative z-20 flex flex-col items-center p-12 bg-white lg:items-start lg:p-16 rounded-3xl">
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Canadian Dental Care Plan (CDCP)</h1>
						<h2 className={subtitle({ size: 'md', alignment: 'left' })}>
							Affordable dental care for eligible Canadians — learn if you qualify and how we can help you access care at little or no cost.
						</h2>
						<ContactFormButton />
					</div>
				}
				bubbles={
					<>
						<div className="absolute z-10 w-32 h-32 rounded-full bubble top-16 -right-24 bg-secondary " data-speed="0"></div>
						<div className="absolute z-20 w-20 h-20 rounded-full bubble -bottom-10 -right-10 bg-secondary " data-speed="0"></div>
					</>
				}
			/>

			<div className={pagecontent()}>
				<TextHeaderSection
					header="What is the Canadian Dental Care Plan (CDCP)?"
					text="The Canadian Dental Care Plan (CDCP) is a federal program that helps eligible Canadians receive essential dental services at reduced cost—or in some cases, free. It’s administered through Sun Life and accepted by participating dental clinics like ours."
				/>

				<PicText
					image={section1image}
					inside={
						<>
							<h3 className={title({ size: 'md', alignment: 'left', color: 'primary' })}>Who qualifies for CDCP?</h3>
							<h4 className={paragraph({ size: 'lg' })}>
								You may qualify if you:
							</h4>
							<ul className="ml-6 list-disc list-outside text-foreground"> 
								<li>Do not have private or workplace dental insurance</li>
								<li>Have an adjusted household net income under <strong>$90,000</strong></li>
								<li>Are a Canadian resident for tax purposes and filed last year’s taxes</li>
							</ul>

							<h4 className={paragraph({ size: 'lg' }) + " mt-4"}>
								Priority groups were rolled out first (for example: children, seniors 65+, and people with a Disability Tax Credit). The program is expanding — check your eligibility on the official government site or ask our front desk for help.
							</h4>

							<ContactFormButton />
						</>
					}
				/>

				<section className="mx-6 my-8 lg:mx-0">
					<h3 className={title({ size: 'md', alignment: 'left' })}>How much does CDCP cover?</h3>
					<p className={paragraph({ size: 'lg' }) + " mt-2"}>
						Coverage depends on household income. The CDCP pays up to its own fee schedule — if our clinic’s fees exceed that schedule, you may be responsible for the difference. We will always confirm costs before treatment.
					</p>

					<div className="mt-6 overflow-x-auto">
						<table className="w-full text-left border-collapse table-auto">
							<thead className="rounded-t-lg bg-default">
								<tr className="">
									<th className="px-4 py-3">Household Income</th>
									<th className="px-4 py-3">CDCP pays</th>
									<th className="px-4 py-3">Patient pays</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-t-2 text-foreground">
									<td className="px-4 py-3">$0 – $69,999</td>
									<td className="px-4 py-3">100% of eligible CDCP fees</td>
									<td className="px-4 py-3">0%</td>
								</tr>
								<tr className="border-t-2 text-foreground">
									<td className="px-4 py-3">$70,000 – $79,999</td>
									<td className="px-4 py-3">60% of eligible CDCP fees</td>
									<td className="px-4 py-3">40%</td>
								</tr>
								<tr className="border-t-2 text-foreground">
									<td className="px-4 py-3">$80,000 – $89,999</td>
									<td className="px-4 py-3">40% of eligible CDCP fees</td>
									<td className="px-4 py-3">60%</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				<GreenCircleCard
					header="Services commonly covered"
					image={section2image}
					text={
						<ul className="ml-6 list-disc list-outside">
							<li>Preventive care: exams, cleanings, and X‑rays</li>
							<li>Restorative care: fillings, crowns (some may require preauthorization)</li>
							<li>Endodontics: root canals (where eligible)</li>
							<li>Extractions and basic oral surgery</li>
							<li>Prosthodontics: partials or dentures (may require preauthorization)</li>
						</ul>
					}
				/>

				<PicText
					image={section3image}
					inside={
						<>
							<h3 className={title({ size: 'md', alignment: 'left', color: 'secondary' })}>How CDCP works at our clinic</h3>
							<p className={paragraph({ size: 'lg' })}>
								We are a participating CDCP provider. Once you have your Sun Life member card, book an appointment and bring your card and a government ID. We submit claims directly to Sun Life — meaning less paperwork for you and less out‑of‑pocket expense at your visit.
							</p>

							<h4 className={paragraph({ size: 'md' }) + " mt-4"}>What to bring to your appointment</h4>
							<ul className="ml-6 list-disc list-outside text-foreground">
								<li>Sun Life CDCP member card (once received)</li>
								<li>Government-issued photo ID</li>
								<li>Any relevant medical/dental history or recent X‑rays</li>
							</ul>

							<ContactFormButton />
						</>
					}
				/>

				<ImageRibbonCard image={section4image} inside={
					<>
						<h1 className={title({ size: 'lg', alignment: 'left', color: 'background' })}>Questions about CDCP?</h1>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>
							Contact us — our team is happy to help you check eligibility, walk through the application process, and book your first appointment.
							<br />
							<br />
							Alternatively, you can visit the official <a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html" className="underline text-secondary">CDCP website</a> for more information.
						</h1>
					</>
				} />

			</div>
		</div>
	);
}