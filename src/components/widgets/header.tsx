import { Logo } from '@/components/widgets/logo';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between p-5 lg:px-0 lg:py-5">
        <section>
          <Logo />
        </section>
        <section>
          <ul className="hidden items-center gap-x-8 lg:flex">
            <li>
              <Link
                href={'/'}
                className="relative text-white transition-colors duration-300 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-full before:rounded-full before:bg-white before:transition-all before:duration-300"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href={'/'}
                className="relative text-white transition-colors duration-300 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href={'/'}
                className="relative text-white transition-colors duration-300 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Catalogo
              </Link>
            </li>
            <li>
              <Link
                href={'/'}
                className="relative text-white transition-colors duration-300 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Contacto
              </Link>
            </li>
          </ul>
          <button className="relative lg:hidden">
            <span className="absolute -top-4 right-0 h-0.5 w-8 bg-white" />
            <span className="absolute -top-2 right-0 h-0.5 w-8 bg-white" />
            <span className="absolute -top-0 right-0 h-0.5 w-8 bg-white" />
          </button>
        </section>
      </div>
    </header>
  );
};
