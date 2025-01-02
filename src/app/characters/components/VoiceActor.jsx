import Image from 'next/image'
import React from 'react'

import GradientText from '@/app/components/GradientText';
const VoiceActor = ({actors}) => {

  return (
    <main className=' mt-[40px]'>
       <GradientText className={"font-bold text-3xl font-subrayada mb-[20px] text-center"} heading={2}>
           Voice Actors
          </GradientText>
      <div className=' w-full grid-cols-3 grid gap-20'>
        {actors.map((actor)=>
       (
        <div className='  flex flex-col gap-2 justify-center items-center '>
            <Image
                         src={actor.image}
                         alt="Moana Adventure Doll"
                         layout="responsive"
                         width={100}
                         height={50} // Ad
                         className="object-contain "
                        
                       />
                       <p>{actor.title}</p>
                       <p>{actor.description}</p>

        </div>
       )
        )}

      </div>
    </main>
  )
}

export default VoiceActor