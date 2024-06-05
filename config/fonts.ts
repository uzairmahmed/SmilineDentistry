import { Fira_Code as FontMono, Quicksand as FontSans, Sacramento as FontCursive } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontCursive = FontCursive({
  subsets: ["latin"],
  weight:'400',
  variable: "--font-cursive",
})