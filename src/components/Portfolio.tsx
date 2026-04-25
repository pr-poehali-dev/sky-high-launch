const projects = [
  {
    id: 1,
    title: 'Светлая гостиная',
    category: 'Жилой интерьер',
    image: 'https://cdn.poehali.dev/projects/ace57787-a4cf-4535-a1ea-06384da66318/files/35433f83-c9e9-4a12-9a04-496bdde23e35.jpg',
  },
  {
    id: 2,
    title: 'Минималистичная спальня',
    category: 'Жилой интерьер',
    image: 'https://cdn.poehali.dev/projects/ace57787-a4cf-4535-a1ea-06384da66318/files/82b1ce99-f6fe-4fe5-9045-d858ced0c499.jpg',
  },
  {
    id: 3,
    title: 'Кухня-столовая',
    category: 'Жилой интерьер',
    image: 'https://cdn.poehali.dev/projects/ace57787-a4cf-4535-a1ea-06384da66318/files/f1536183-8e8e-4a3a-b0ff-1659d0810bbb.jpg',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-8 overflow-hidden bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Наши работы</p>
          <h2 className="text-white text-4xl font-light">
            <span className="italic font-medium">Проекты,</span> которыми мы гордимся
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">{project.category}</p>
                <h3 className="text-white text-lg font-light">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}