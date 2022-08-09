import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";

import userPost from "../public/qua.jpg";
import userRE from "../public/userRE.jpeg";
import imageRE from "../public/imageRE.jpeg";

const Recommendations = ({ author }) => {
  return (
    <div className="h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]">
      <div className="flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full">
        Get unlimited access
      </div>

      <div className="flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full hover:border-black">
        <AiOutlineSearch />
        <input
          className="border-none outline-none bg-none w-full"
          placeholder="Search..."
          type="text"
        />
      </div>

      <div className="my-[2rem]">
        <div className="h-[5rem] w-[5rem] rounded-full overflow-hidden">
          <Image src={userPost} width={100} height={100} />
        </div>
        <div className="font-semibold mb-[.2rem] mt-[1rem]">
          Dr. David Ludwig
        </div>
        <div className="text-[#787878]">5.4K Followers</div>
        <div className="text-[#787878] my-3">
          Physician, Nutrition Researcher, and Public Health Advocate. #1 NY
          Times bestselling author ofALWAYS HUNGRY? and ALWAYS DELICIOUS
        </div>
        <div className="flex gap-[.6rem] my-[1rem]">
          <button className="bg-[#1a8917] opacity-100 font-normal text-white rounded-full px-[.6rem] py-[.4rem] text-sm">
            Follow
          </button>
          <button className="bg-[#1a8917] opacity-100 text-white rounded-full px-[.6rem] py-[.4rem] text-sm">
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>

      <div className="">
        <div className="">More from Medium</div>
        <div className="">
          <div className="flex items-center justify-between cursor-pointer my-[1rem]">
            <div className="flex-[4]">
              <div className="flex items-center gap-[.6rem]">
                <div className="rounded-full overflow-hidden h-[2rem] w-[2rem]">
                  <Image src={userRE} width={100} height={100} />
                </div>
                <div className="text-sm">Robert Roy Britt</div>
              </div>
              <div className="font-bold">
                The Smells of Nature Promote Joy and Relaxation, When Scientific
                Paradigms Collide
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center h-[4rem] w-[4rem]">
              <Image
                className="object-cover"
                src={imageRE}
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
