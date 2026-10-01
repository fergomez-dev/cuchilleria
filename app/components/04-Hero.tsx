import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-10 lg:gap-16 lg:py-16">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Federal Cuchillos
          </p>

          <h1 className="text-5xl font-semibold leading-[0.95] text-[var(--primary)] sm:text-6xl lg:text-7xl">
            El arte de elegir
            <br />
            un buen cuchillo
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--foreground)]/70 sm:text-base">
            Piezas seleccionadas para quienes valoran la calidad,
            el diseño y la tradición.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/cuchillos"
              className="bg-[var(--primary)] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[var(--secondary)]"
            >
              Ver cuchillos
            </Link>

            <Link
              href="/ofertas"
              className="border border-[var(--primary)] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
            >
              Ver ofertas
            </Link>
          </div>
        </div>

        <div className="relative mx-auto h-[360px] w-full max-w-lg overflow-hidden bg-[var(--background-dark)] sm:h-[440px]">
          <Image
            src="/images/hero/cuchillo-hero.jpg"
            alt="Cuchillo Federal Cuchillos"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}