import Image from "next/image";
import userPost from "../public/qua.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import banner from "../public/banner1.jpeg";

const ArticleMain = () => {
  return (
    <div className="flex items-center justify-center flex-[3] border-l border-r">
      <div className="h-screen w-full p-[2rem]">
        <div className="flex justify-between items-center mt-[2.2rem] mb-[1.2rem]">
          <div className="flex gap-[1rem]">
            <div className="h-[3rem] w-[3rem] grid center rounded-full overflow-hidden">
              <Image className="object-cover" src={userPost} />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div>Dr. David Ludwig</div>
              <div className="flex gap-[.2rem] text-[#787878]">
                <span>Aug 3 · 7 min read ·</span>
                <span className="flex items-center gap-[.2rem] text-[#1a8917]">
                  <AiFillPlayCircle /> Listen
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-[1rem] text-[#787878] cursor-pointer">
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className="w-[.5rem]" />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className="grid overflow-hidden mb-[2rem]">
          <div className="flex flex-col gap-[1rem]">
            <Image className="object-cover" src={banner} />
          </div>
          <div className="text-[32px] font-bold leading-10 mt-[.6em] -mb-[.27em] -tracking-[0.016em]">
            When Scientific Paradigms Collide
          </div>
          <h4>
            <div className="text-[22px] text-[#787878] leading-7 mt-[.6em] -mb-[.27em] -tracking-[0.016em]">
              What if overeating doesn’t make you fat?
            </div>
            <div>
              This post expands upon, and was modified from, an opinion article
              in The Washington Post
            </div>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
