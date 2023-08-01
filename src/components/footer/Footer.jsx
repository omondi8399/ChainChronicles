import { ImPhone, ImTwitter, ImGithub } from 'react-icons/im';
import Link from 'next/link';
import Image from 'next/image';
import Newsletter from '../misc/newsletter';
import ChainChron from "../../../public/images/ChainChron.png";

export default function Footer() {

  return (
    <footer className="bg-gray-800">
      <Newsletter />
      <div className="container mx-auto flex justify-center py-2">
        <div className="py-2">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}><ImPhone className="text-gray-300 hover:text-white cursor-pointer" size={24} /></Link>
            <Link href={"https://twitter.com/DevRojas"} target={"_blank"} rel={"noopener noreferrer"}><ImTwitter className="text-gray-300 hover:text-white cursor-pointer" size={24} /></Link>
            <Link href={"https://github.com/omondi8399"} target={"_blank"} rel={"noopener noreferrer"}><ImGithub className="text-gray-300 hover:text-white cursor-pointer" size={24} /></Link>
          </div>

          <p className='py-2 text-white text-center'>@ 2023. All rights reserved.</p>
          <p className='text-white text-center'> Welcome to ChainChronicles </p>
          <p className='text-white text-center'> Location: Nairobi, Kenya</p>
          <Image
            src={ChainChron}
            alt="logo"
            width="150"
            height="150"
            className="py-6 mx-auto"
          />
        </div>
      </div>
    </footer>
  )
}
