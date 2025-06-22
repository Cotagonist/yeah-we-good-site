import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-center items-center py-10">
      <Image
        src="/logo.png"
        alt="Logo"
        width={240}
        height={0}
        className="h-auto max-h-16"
      />
    </header>
  );
}
