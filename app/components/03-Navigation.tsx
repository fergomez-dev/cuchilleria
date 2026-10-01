import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav className="hidden border-t border-[var(--background-dark)] bg-[var(--primary)] md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6">
        <Link
          href="/"
          className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[var(--secondary)]"
        >
          Inicio
        </Link>

        <div className="group relative">
          <button className="flex items-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[var(--secondary)]">
            Cuchillos
            <FaChevronDown className="text-[9px]" />
          </button>

          <div className="invisible absolute left-0 top-full z-50 min-w-52 translate-y-2 bg-[var(--background-light)] opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              href="/cuchillos"
              className="block px-5 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--background-dark)]"
            >
              Todos los cuchillos
            </Link>

            <Link
              href="/cuchillos/criollos"
              className="block px-5 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--background-dark)]"
            >
              Cuchillos criollos
            </Link>

            <Link
              href="/cuchillos/parrilleros"
              className="block px-5 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--background-dark)]"
            >
              Cuchillos parrilleros
            </Link>

            <Link
              href="/cuchillos/facones"
              className="block px-5 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--background-dark)]"
            >
              Facones
            </Link>
          </div>
        </div>

        <div className="group relative">
          <button className="flex items-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[var(--secondary)]">
            Accesorios
            <FaChevronDown className="text-[9px]" />
          </button>

          <div className="invisible absolute left-0 top-full z-50 min-w-52 translate-y-2 bg-[var(--background-light)] opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              href="/accesorios"
              className="block px-5 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--background-dark)]"
            >
              Todos los accesorios
            </Link>

            <Link
              href="/accesorios/chairas"
              className="block px-5 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--background-dark)]"
            >
              Chairas
            </Link>

            <Link
              href="/accesorios/fundas"
              className="block px-5 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--background-dark)]"
            >
              Fundas
            </Link>
          </div>
        </div>

        <Link
          href="/ofertas"
          className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[var(--secondary)]"
        >
          Ofertas
        </Link>

        <Link
          href="/nosotros"
          className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[var(--secondary)]"
        >
          Nosotros
        </Link>
      </div>
    </nav>
  );
}