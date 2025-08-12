import { services_metadata } from "@/components/metadata";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = services_metadata;

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "white" },
	],
}

export default function ServicesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center w-screen gap-4">
			<div className="justify-center inline-block w-full text-center">
				{children}
			</div>
		</section>
	);
}
