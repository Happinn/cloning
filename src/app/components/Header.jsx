import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Navbar from "./Navbar";
import { FaPen } from "react-icons/fa";
import { RiInboxFill } from "react-icons/ri";;
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { RiSendPlane2Line } from "react-icons/ri";
import { GrDocument } from "react-icons/gr";
import { MdExpandMore } from "react-icons/md";
import style from './header.module.css'


export default function Header() {

  return (


    <div className="bg-gray-100 h-screen">


     <div className="flex space-x-2 items-center p-8">
        <Link href='/'>
        <RxHamburgerMenu className="text-3xl"/>
        </Link>

        <Link href='/'>
        <Image src='/googlemail.png' alt="gmail" width={70} height={70}/>    
        </Link>
     </div>
     
        <nav>
            <ul className={style.header}>
                <Navbar title="compose" icon = { FaPen }/>
                <Navbar title="inbox" icon = { RiInboxFill }/>
                <Navbar title="starred" icon = { FaRegStar } />
                <Navbar title="snoozed" icon = { FaRegClock } />
                <Navbar title="sent" icon = { RiSendPlane2Line }/>
                <Navbar title="drafts" icon = { GrDocument } />
                <Navbar title="more" icon = { MdExpandMore } />
              
            </ul>
        </nav>
    </div>
    
  )
}

