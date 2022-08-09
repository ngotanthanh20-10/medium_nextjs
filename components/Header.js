import Image from "next/image";
const styles = {};

const Header = () => {
  return (
    <div className="flex justify-center gap-10 p-5 bg-[#fcc017]">
      <div className="max-w-7xl flex-1 flex justify-between gap-10">
        <div className="flex items-center">
          <Image
            className="cursor-pointer object-contain"
            src="/logo.png"
            alt=""
            height={40}
            width={200}
          />
        </div>

        <div className="flex cursor-pointer items-center space-x-5">
          <div>Our Story</div>
          <div>Membership</div>
          <div>Sign in</div>
          <div className="bg-black text-white py-2 px-4 rounded-full">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
