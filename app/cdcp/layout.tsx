export default function CDCPLayout({
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
