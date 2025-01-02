'use client'

// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
import { Download } from 'lucide-react'
import Image from 'next/image'
import ProductButton from './ProductButton'
import calendar1 from '../../../assets/moana_products/calender/calendar-1.png'
import calendar2 from '../../../assets/moana_products/calender/calendar-2.png'

import calendar3 from '../../../assets/moana_products/calender/calendar-3.png'
import { handleDownload } from '../actions/dowloadfile'

export default function CalenderSection() {
  return (
    <div className=" ">
      <div className="mx-auto max-w-7xl grid gap-[40px] md:grid-cols-12 relative">
         <Image
                                src={calendar3.src}
                                alt="Starfish decoration"
                               
                                width={150}
                                height={100}
                                className="absolute z-30 bottom-0 -right-[30px] "
                               
                              />
        {/* {new column} */}
        <div></div>
        {/* Left Column - Info Section */}
        <div className="p-6 bg-white/80 backdrop-blur shadow-xl col-span-4">
           <Image
                                src={calendar2.src}
                                alt="Starfish decoration"
                               
                                width={150}
                                height={100}
                                className="absolute z-20 -top-[20px] -left-[70px] "
                               
                              />
        
                 <Image
                                src={calendar1.src}
                                alt="Starfish decoration"
                               
                                fill
                                className="object-cover  "
                                priority
                              />
        </div>
       

        {/* Right Column - Planner Section */}
        <div className="space-y-8 col-span-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-sky-600 mb-4">
            2025 Calendar
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-sky-500 italic mb-6">
            A Year of Courage and Adventure 
            </h2>
            <p className="text-gray-600">
            Start your year inspired by the fearless spirit of Moana! The Moana 2025 Calendar is a perfect way to add a splash of tropical charm and motivation to every month. Featuring vibrant artwork and iconic moments from the beloved Disney movie, this calendar will help you stay organized while reminding you to chase your dreams

            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-sky-500 italic mb-4">
              Why It&apos;s Special
            </h3>
            <p className="text-gray-600">
            Let Moana guide you through 2025 with her unwavering determination and adventurous spirit! This calendar isn’t just about keeping track of days – it’s about celebrating the courage to dream big and the magic of discovery.
            </p>
          </div>
        
          <ProductButton icon={<Download size={20} />} filled={true} process={()=>handleDownload("1Dnf49PbsbyEq2oMQViWah8ySD09XhuvAARbz1T-PnxE","moana-weekly-planner")} children={'Download pdf'}/>
        </div>
        {/* {new column} */}
        <div></div>
      </div>
    </div>
  )
}
