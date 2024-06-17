import { contact_metadata } from "@/components/metadata";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = contact_metadata

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "white" },
	],
}

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
