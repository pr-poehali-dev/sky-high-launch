export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-light">Концепция</div>
        <nav className="flex gap-8">
          <a
            href="#portfolio"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Портфолио
          </a>
          <a
            href="#services"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Услуги
          </a>
        </nav>
      </div>
    </header>
  )
}