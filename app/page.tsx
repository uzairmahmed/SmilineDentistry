import {Spacer} from "@nextui-org/spacer";

import Hero from "@/components/home/hero";
import OurServices from "@/components/home/our-services";
import FeaturesOne from "@/components/home/features-one";
import FeaturesTwo from "@/components/home/features-two";
import Testimonials from "@/components/home/testimonials";
import ContactUs from "@/components/home/contact-us";

export default function Home() {
	return (
		<main className="flex flex-col max-w-6xl px-10">
			<Hero />
			<Spacer y={48} />
			<OurServices />
			<Spacer y={48} />
			<FeaturesOne />
			<Spacer y={48} />
			<OurServices />
			<Spacer y={48} />
			<FeaturesTwo />
			<Spacer y={48} />
			<Testimonials />
			<Spacer y={48} />
			<ContactUs />
		</main>
	);
}
