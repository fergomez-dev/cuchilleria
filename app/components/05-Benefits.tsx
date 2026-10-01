import { FaAward, FaTruck, FaCreditCard, FaComments } from "react-icons/fa";

const benefits = [
  {
    icon: <FaAward />,
    title: "Calidad seleccionada",
    text: "Productos elegidos por su calidad, terminación y durabilidad.",
  },
  {
    icon: <FaTruck />,
    title: "Envíos a todo el país",
    text: "Recibí tu pedido estés donde estés.",
  },
  {
    icon: <FaCreditCard />,
    title: "Todos los medios de pago",
    text: "Elegí la forma de pago que más te convenga.",
  },
  {
    icon: <FaComments />,
    title: "Atención personalizada",
    text: "Te ayudamos a encontrar el producto indicado.",
  },
];

export default function Benefits() {
  return (
    <section className="border-y border-[var(--background-dark)] bg-[var(--background-light)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[var(--background-dark)] px-6 py-8 sm:grid-cols-2 sm:divide-y-0 md:grid-cols-4 md:divide-x md:py-10">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex items-center gap-4 px-4 py-5 text-center sm:justify-center md:flex-col md:px-6 md:py-2"
          >
            <div className="shrink-0 text-xl text-[var(--accent)]">
              {benefit.icon}
            </div>

            <div className="text-left md:text-center">
              <h3 className="text-base font-semibold text-[var(--primary)]">
                {benefit.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-[var(--foreground)]/60">
                {benefit.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
