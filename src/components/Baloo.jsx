import Image from 'next/image'
import baloo from '@/images/baloo.png'

function toggleBaloo() {
    document.getElementById('baloo-container').classList.toggle('invisible');
    document.getElementById('sneaky-baloo').classList.toggle('top-full');
}

export function Baloo() {
    return (
        <div onClick={toggleBaloo} id="baloo-container" className="z-30 invisible fixed mt-6 inset-0 grid place-items-center h-screen">
        <div id="sneaky-baloo" className="absolute top-0 top-full duration-1000 ease-in-out transition-all">
        <Image
              src={baloo}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className=""
            />
        </div>
      </div>
    )
}
