import HeaderBanner from "@/components/Header";
import Slider from "@/components/Slider";
import Image from 'next/image';
import MapAndFooter from '@/components/Footer';
import ContactUsSection from '@/components/ContactUs';
import CompanyShowcase from '@/components/BasicComponent';
import ChatWidget from "@/components/ChatSupport";
import CervicalCancerPage from "@/components/Information";
import TeamSection from "@/components/Team";
export default function Home() {
  return (
    <main className="min-h-screen grainy-dark ">
     <Slider/>
    <HeaderBanner/>
   
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <CervicalCancerPage/>
        <CompanyShowcase />
        <TeamSection/>
        <ContactUsSection />
        <MapAndFooter />
        <ChatWidget/>
      </div>
    </main>
  );
}
