import { ImPhone, ImTwitter, ImGithub } from 'react-icons/im';
import Link from 'next/link';
import Newsletter from '../misc/newsletter';

export default function Footer() {

  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
  }

  return (
    <footer className="bg-gray-800" style={bg}>
      <Newsletter />
      <div className="container mx-auto flex justify-center py-8">
        <div className="py-8">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}><ImPhone className="text-gray-300 hover:text-white cursor-pointer" size={24} /></Link>
            <Link href={"https://twitter.com/DevRojas"} target={"_blank"} rel={"noopener noreferrer"}><ImTwitter className="text-gray-300 hover:text-white cursor-pointer" size={24} /></Link>
            <Link href={"https://github.com/omondi8399"} target={"_blank"} rel={"noopener noreferrer"}><ImGithub className="text-gray-300 hover:text-white cursor-pointer" size={24} /></Link>
          </div>

          <p className='py-2 text-gray-400 text-center'>@ 2023. All rights reserved.</p>
          <p className='text-gray-400 text-center'> Welcome to ChainChronicles </p>
          <p className='text-gray-400 text-center'> Location: Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  )
}
