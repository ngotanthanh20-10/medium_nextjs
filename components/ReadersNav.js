import Image from "next/image";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/Ri";
import { BsPencilSquare } from "react-icons/bs";
import icon from "../public/icon.png";
import userImg from "../public/user.jpg";

const ReadersNav = () => {
  return (
    <div className="w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]">
      <Link href="/">
        <div className="cursor-pointer">
          <Image src={icon} />
        </div>
      </Link>

      <div className="flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]">
        <HiOutlineHome className="cursor-pointer" />
        <FiBell className="cursor-pointer" />
        <BiBookmarks className="cursor-pointer" />
        <RiArticleLine className="cursor-pointer" />
        <div className="border-b" />
        <BsPencilSquare className="cursor-pointer" />
      </div>

      <div className="object-cover cursor-pointer">
        <Image
          className="w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center"
          src={userImg}
        />
      </div>
    </div>
  );
};

export default ReadersNav;
