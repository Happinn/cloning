import { Inconsolata } from "next/font/google";
import "./globals.css";
import CompleteHeader from "./components/CompleteHeader";

const inter = Inconsolata({ 
  subsets: ["latin"], 
  weight: ['600'] });

export const metadata = {
  title: "cloning gmail",
  description: "User interface of Gmail clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='grid grid-cols-[1fr_3fr] gap-6'>
        
        <CompleteHeader />       
        {children}
        </div>
       </body>
    </html>
  );
}
