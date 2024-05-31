import ServiceHero from "@/components/common/service-hero";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 w-screen">
			<div className="inline-block text-center justify-center w-full">
				{children}
			</div>
		</section>
	);
}
