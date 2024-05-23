import ServiceHero from "@/components/common/service-hero";
import FeaturesOne from "@/components/home/features-one";
import { title } from "@/components/primitives";

export default function BlogPage() {
	return (
		<div className="flex flex-col h-full w-full">
			<ServiceHero />
			<FeaturesOne />
			<FeaturesOne />
			<FeaturesOne />
			
		</div>
	);
}
