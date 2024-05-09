'use client';
import Image from 'next/image';

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="navbar">
      <div className="title">{children}</div>
      <div className="nav-icons">
        <Image alt="menu" src="/menu.svg" width={24} height={24} />
      </div>
    </div>
  );
}
