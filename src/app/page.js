import HeaderBanner from "@/components/Header";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <HeaderBanner/>
      <Slider/>
    </div>
  );
}
