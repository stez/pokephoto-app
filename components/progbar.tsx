import Image from "next/image"
import loadingPic from '../public/pikachu.gif'

export default function Progbar() {
  return (
    <div>
        <div className="z-40 fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center sm:items-center justify-center min-h-full p-4 text-center sm:p-0"> 
                <div className="relative bg-pokemon-dark rounded-lg p-4 overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                    <div className="flex flex-row items-center justify-center">
                    <Image src={loadingPic}
                        height={50}
                        width={50}
                        alt="loading image"
                        priority
                        />
                    <div className="font-bold text-xl text-center px-4 text-pokemon-secondary">
                        Loading..
                    </div>
                    <Image src={loadingPic}
                        height={50}
                        width={50}
                        alt="loading image"
                        priority
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}