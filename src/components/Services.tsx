const services = [
  {
    title: 'Консультация и замеры',
    description: 'Выезд специалиста, обмерный план и обсуждение вашего проекта',
    price: '5 000 ₽',
  },
  {
    title: 'Эскизный проект',
    description: 'Планировочные решения, стилистика и концепция будущего интерьера',
    price: '15 000 ₽',
  },
  {
    title: 'Дизайн-проект',
    description: 'Полный комплект рабочей документации для строителей и подрядчиков',
    price: '1 500 ₽/м²',
  },
  {
    title: 'Авторский надзор',
    description: 'Контроль реализации проекта на всех этапах ремонта',
    price: '15 000 ₽',
  },
  {
    title: 'Подбор мебели и материалов',
    description: 'Комплектация проекта: мебель, свет, декор, отделочные материалы',
    price: '5 000 ₽',
  },
  {
    title: '3D-визуализация',
    description: 'Фотореалистичные рендеры интерьера до начала ремонта',
    price: '10 000 ₽',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-8 overflow-hidden bg-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Услуги</p>
          <h2 className="text-white text-4xl font-light">
            <span className="italic font-medium">Всё,</span> что нужно для вашего интерьера
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-black/40 backdrop-blur-sm p-8 hover:bg-black/60 transition-colors duration-300 group"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-white text-lg font-light mb-3 group-hover:text-white/90 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>
                <p className="text-white text-xl font-light tracking-tight">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}