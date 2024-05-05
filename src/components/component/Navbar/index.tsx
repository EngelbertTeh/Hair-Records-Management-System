import Image from 'next/image';

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    // <div className="flex p-2">
    //   <div className="flex-1 p-2 text-center relative"> {children}</div>
    //   <Image
    //     className="absolute p-2 right-0 "
    //     alt="menu"
    //     src="/menu.svg"
    //     width={35}
    //     height={35}
    //   />
    // </div>
    <div className="navbar">
      <div className="title"> {children}</div>
      <div className="abs-container">
        <Image
          alt="menu"
          src="/menu.svg"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
