import { FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-[var(--background-light)]">
      {/* Desktop */}
      <div className="mx-auto hidden max-w-7xl items-center gap-10 px-6 py-6 md:flex">
        <div className="shrink-0">
          <p className="font-[var(--font-title)] text-3xl font-semibold leading-none">
            FEDERAL
          </p>

          <p className="font-[var(--font-title)] text-lg tracking-[0.25em]">
            CUCHILLOS
          </p>
        </div>

        <div className="flex flex-1 items-center rounded-sm border border-[var(--background-dark)] bg-white px-4">
          <FaSearch className="mr-3 text-[var(--secondary)]" />

          <input
            type="text"
            placeholder="Buscar productos..."
            className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        <button className="flex items-center gap-2 text-[var(--primary)]">
          <FaShoppingBag className="text-xl" />

          <span className="text-sm font-medium">
            Mi pedido
          </span>
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <button
            aria-label="Abrir menú"
            className="text-xl text-[var(--primary)]"
          >
            <FaBars />
          </button>

          <div className="text-center">
            <p className="font-[var(--font-title)] text-2xl font-semibold leading-none">
              FEDERAL
            </p>

            <p className="font-[var(--font-title)] text-xs tracking-[0.2em]">
              CUCHILLOS
            </p>
          </div>

          <button
            aria-label="Abrir pedido"
            className="text-xl text-[var(--primary)]"
          >
            <FaShoppingBag />
          </button>
        </div>

        <div className="px-4 pb-4">
          <div className="flex items-center rounded-sm border border-[var(--background-dark)] bg-white px-4">
            <FaSearch className="mr-3 text-[var(--secondary)]" />

            <input
              type="text"
              placeholder="Buscar productos..."
              className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
}