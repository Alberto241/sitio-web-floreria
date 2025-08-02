import Link from 'next/link';

export const Logo = () => {
  return (
    <Link
      href={'/'}
      className="flex items-center text-lg font-black uppercase text-white"
    >
      <span className="mr-px flex h-4 w-4 items-center justify-center rounded bg-white text-black">
        S
      </span>
      lider
    </Link>
  );
};
