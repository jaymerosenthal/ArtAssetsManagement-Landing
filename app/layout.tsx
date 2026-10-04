import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata={title:"JAYME ROSENTHAL & CO. — Art Assets Management",description:"Primary-market fine-art publishing and Pre-War & Post-War secondary-market art advisory.",};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}