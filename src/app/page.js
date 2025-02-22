import HeaderBanner from "@/components/Header";
import Slider from "@/components/Slider";
import Image from 'next/image';
import MapAndFooter from '@/components/Map';
import ContactUsSection from '@/components/ContactUs';
import CompanyShowcase from '@/components/BasicComponent';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
    <HeaderBanner/>
    <Slider/>
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
    

{/*        
        <section className="py-10">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Planned Products</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
        
            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
              <Image
                src="/th (1) (1).jpeg.jpg"
                alt="ColpAI"
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">ColpAI</h3>
            </div>

           
            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
              <Image
                src="/blob-c5f0534.png"
                alt="3D Printed Colposcopic Attachment"
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                3D Printed Colposcopic Attachment
              </h3>
            </div>

            
            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
              <Image
                src="/wearable_device.jpg"
                alt="3D Printed Wearable Devices"
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                3D Printed Wearable Devices
              </h3>
            </div>
          </div>
        </section> */}

    

        
        <CompanyShowcase />
        <ContactUsSection />
        <MapAndFooter />
        <Footer/>
      </div>
    </main>
  );
}
