import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";

const PostCard = () => {
  return (
    <Link href={`/post/1`}>
      <div className="flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer">
        <div className="flex-[2.5] flex flex-col ">
          <div className="flex gap-[.4rem] items-center">
            <div className="grid place-items-center rounded-full overflow-hidden h-[2rem] w-[2rem]">
              <Image
                className="object-cover"
                src="/author.jpg"
                width={40}
                height={40}
              />
            </div>
            <div className="font-semibold">Dr. David Ludwig</div>
          </div>
          <h1 className="font-bold text-2xl">
            When Scientific Paradigms Collide
          </h1>
          <div className="text-[#787878]">
            What if overeating doesn’t make you fat?
          </div>
          <div className="flex items-center justify-between text-[#787878]">
            <span className="my-2 text-[.8rem]">
              Aug 3 · 7 min read ·{" "}
              <span className="bg-[#f2f3f2] px-1.5 rounded-full">Obesity</span>
            </span>
            <span className="">
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>
        <div>
          <Image src="/thum.jpeg" height={134} width={200} />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
