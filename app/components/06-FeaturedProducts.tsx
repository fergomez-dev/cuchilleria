import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Cuchillo Criollo Clásico",
    category: "Cuchillos criollos",
    price: "$85.000",
    image: "/images/products/producto-1.jpg",
  },
  {
    name: "Cuchillo Parrillero Premium",
    category: "Cuchillos parrilleros",
    price: "$72.000",
    image: "/images/products/producto-2.jpg",
  },
  {
    name: "Facón Criollo",
    category: "Facones",
    price: "$120.000",
    image: "/images/products/producto-3.jpg",
  },
  {
    name: "Cuchillo Artesanal",
    category: "Cuchillos",
    price: "$95.000",
    image: "/images/products/producto-4.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-[var(--background-light)]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Selección
            </p>

            <h2 className="text-4xl font-semibold text-[var(--primary)] sm:text-5xl">
              Productos destacados
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--foreground)]/60">
              Una selección de nuestros productos para descubrir la
              colección.
            </p>
          </div>

          <Link
            href="/cuchillos"
            className="text-xs font-semibold uppercase tracking-wider text-[var(--secondary)] transition hover:text-[var(--accent)]"
          >
            Ver todos →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.name}
              href="/producto"
              className="group"
            >
              <div className="relative aspect-square overflow-hidden bg-[var(--background-dark)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--accent)]">
                  {product.category}
                </p>

                <h3 className="mt-1 text-base font-semibold text-[var(--primary)]">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-[var(--secondary)]">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
