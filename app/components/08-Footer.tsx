import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--background-light)]">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Marca */}
          <div className="md:col-span-2">
            <p className="font-[var(--font-title)] text-3xl font-semibold leading-none text-[var(--primary)]">
              FEDERAL
            </p>

            <p className="mt-1 font-[var(--font-title)] text-lg tracking-[0.25em] text-[var(--primary)]">
              CUCHILLOS
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--foreground)]/60">
              Cuchillos y accesorios seleccionados para quienes valoran
              la calidad, el diseño y la tradición.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-sm text-white transition hover:bg-[var(--secondary)]"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-sm text-white transition hover:bg-[var(--secondary)]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-sm text-white transition hover:bg-[var(--secondary)]"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
              Navegación
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--foreground)]/60">
              <Link href="/" className="transition hover:text-[var(--secondary)]">
                Inicio
              </Link>

              <Link
                href="/cuchillos"
                className="transition hover:text-[var(--secondary)]"
              >
                Cuchillos
              </Link>

              <Link
                href="/accesorios"
                className="transition hover:text-[var(--secondary)]"
              >
                Accesorios
              </Link>

              <Link
                href="/ofertas"
                className="transition hover:text-[var(--secondary)]"
              >
                Ofertas
              </Link>

              <Link
                href="/nosotros"
                className="transition hover:text-[var(--secondary)]"
              >
                Nosotros
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
              Contacto
            </h3>

            <div className="mt-5 space-y-3 text-sm leading-6 text-[var(--foreground)]/60">
              <p>Federal, Entre Ríos</p>

              <p>Atención personalizada</p>

              <p>Consultas por WhatsApp</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--background-dark)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-[var(--foreground)]/50 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>
            © 2026 Federal Cuchillos. Todos los derechos reservados.
          </p>

          <p>
            Diseño y desarrollo web
          </p>
        </div>
      </div>
    </footer>
  );
}
