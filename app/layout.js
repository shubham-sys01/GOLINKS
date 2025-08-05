import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "GoLink - Shorten url generator",
  description: "golink can generate a short url for a long and huge and disturbing and annoying and and and the list never end use now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
