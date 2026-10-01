import Image from "next/image";
import Link from "next/link";

export default function Offers() {
  return (
    <section className="bg-[var(--primary)]">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 md:grid-cols-2 md:px-10 md:py-20">
        <div className="relative min-h-[320px] overflow-hidden bg-[var(--secondary)] md:min-h-[420px]">
          <Image
            src="/images/offers/oferta.jpg"
            alt="Ofertas Federal Cuchillos"
            fill
            className="object-cover"
          />

          <div className="absolute left-5 top-5 bg-[var(--accent)] px-4 py-2">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Ofertas
            </span>
          </div>
        </div>

        <div className="max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Oportunidades
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Encontrá tu próximo cuchillo
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
            Descubrí productos seleccionados con precios especiales por
            tiempo limitado.
          </p>

          <Link
            href="/ofertas"
            className="mt-8 inline-block bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] transition hover:bg-[var(--accent)] hover:text-white"
          >
            Ver ofertas
          </Link>
        </div>
      </div>
    </section>
  );
}
