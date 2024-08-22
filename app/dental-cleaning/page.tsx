import ServiceHero from "@/components/common/service-hero";
import { pagecontent, paragraph, subtitle, title } from "@/components/primitives";
import image1 from '../../assets/images/AdobeStock_560698304.jpeg';
import heroimage from '../../assets/images/AdobeStock_255770347.jpeg'
import cosmeticImage from '../../assets/images/AdobeStock_601012084.jpeg'
import TextHeaderSection from "@/components/common/text-header-section";
import PicText from "@/components/common/pic-text";
import GreenCircleCard from "@/components/common/green-circle-card";
import SplitCard from "@/components/common/card";
import ContactFormButton from "@/components/common/contact-form-button";

export default function CleaningPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero
				image={heroimage}
				div_side={'right'}
				main_section={
					<div className='relative flex flex-col items-center lg:items-start p-12 lg:p-16 z-20 rounded-3xl bg-white'>
						<h1 className={title({ size: 'lg', fullWidth: true, alignment: 'left' })}>Dental Cleaning</h1>
						<h1 className={subtitle({ size: 'md', alignment: 'left' })}>Smiline Family offers professional teeth cleaning services to help you maintain optimal oral health</h1>
						<ContactFormButton />
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

				<TextHeaderSection
					header="What is the dental cleaning?"
					text="Regular dental cleanings are a fundamental part of maintaining optimal oral health. During a professional cleaning, dental plaque and tartar is removed which regular brushing and flossing alone cannot reach. This process helps prevent gum disease and tooth decay, ensuring your teeth and gums remain healthy and strong.
					Our goal is to ensure you understand your oral health status and the recommended procedures. We will discuss the benefits, risks, and alternatives for each treatment, allowing you to make informed decisions about your care. We provide personalized advice on maintaining your oral hygiene at home."
				/>

				<SplitCard bgcolor={'default'} separated={false}
					left={<>
						<h1 className={title({ size: 'md', alignment: 'left', color: 'background' })}>What happens at a dental cleaning appointment?</h1>
						<br /><br />
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>Our dental team will do a comprehensive examination of your teeth, gums, and mouth. We check for signs of tooth decay, gum disease, and other oral health issues</h1>
					</>}
					right={<>
						<h1 className={paragraph({ size: 'lg', color: 'background', alignment: 'left' })}>
							X-rays may be taken to provide a detailed view of your dental needs along with professional dental cleaning to remove plaque and calculus. 
							Including demonstration for proper brushing and flossing techniques, dietary recommendations, and tips for managing any specific oral health concerns you may have. 
							<br /><br />
							Depending on your needs, we may apply a fluoride treatment to strengthen your teeth and help prevent cavities.
						</h1>
					</>}
				/>

				<PicText image={image1} inside={
					<>
						<h1 className={title({ size: 'md', alignment: 'left' })}>Why is regular dental cleaning important?</h1>
						<h1 className={paragraph({ size: 'lg' })}>Regular dental cleaning is crucial for maintaining oral health and preventing issues like cavities and gum disease. Here's why it matters:
							<ul className="list-disc list-outside py-5">
								<li><span className="font-medium">Removes Plaque and Tartar:</span> Cleanings eliminate build-up that brushing alone can't reach.</li>
								<li><span className="font-medium">Early Detection:</span> Helps identify early signs of oral problems before they become severe.</li>
								<li><span className="font-medium">Reduces Systemic Disease Risks:</span> Linked to better management of diabetes, heart disease, and other systemic conditions.</li>
								<li><span className="font-medium">Supports Overall Well-Being:</span> Maintaining a healthy mouth contributes to overall health and prevents serious health complications.</li>
							</ul>
							By prioritizing regular dental cleanings, you protect your oral health and enhance your overall well-being.
						</h1>
					</>
				} />

				<GreenCircleCard
					header="Maintaining your smile"
					image={cosmeticImage}
					text="To keep your smile bright post-cleaning, brush twice daily with fluoride toothpaste, floss regularly, and use an antibacterial mouthwash. Avoid staining foods and drinks, stay hydrated, and eat a balanced diet. Schedule regular dental check-ups and follow your dentist's advice for personalized oral care."
				/>


			</div>

		</div>
	);
}