import Image from "next/image";
const styles = {};

const Header = () => {
  return (
    <div>
      <div>
        <div className="w-28">
          <Image
            src="https://cutewallpaper.org/24/medium-logo-png/medium-logo-download-vector.png"
            alt=""
            objectFit="content"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
