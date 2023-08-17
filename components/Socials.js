// links
import Link from "next/link";

//Icon
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiPinterestLine, 
  RiDribbbleLine,
} from "react-icons/ri";


const Socials = () => {
  return <div className="flex items-center gap-x-5 text text-lg">
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiInstagramLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiWhatsappLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiDribbbleLine />
    </Link>
   
  </div>;
};

export default Socials;
