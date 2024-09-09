"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { FormProvider } from "@/hooks/useFormContext";
import useParallax from "@/hooks/useParallax";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter();
	useParallax();
	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>
				<FormProvider>
					{children}
				</FormProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}
