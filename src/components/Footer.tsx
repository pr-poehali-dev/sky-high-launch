export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950 border-t border-white/10 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-white text-sm uppercase tracking-widest font-light mb-4">Концепция</p>
            <p className="text-white/40 text-sm leading-relaxed">
              Студия дизайна интерьера. Создаём пространства, которые вдохновляют жить.
            </p>
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Контакты</p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+79770765679"
                className="text-white/70 text-sm hover:text-white transition-colors"
              >
                +7 (977) 076-56-79
              </a>
              <a
                href="mailto:pinkmilk002@gmail.com"
                className="text-white/70 text-sm hover:text-white transition-colors"
              >
                pinkmilk002@gmail.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Мы в соцсетях</p>
            <a
              href="https://vk.com/conceptstudi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.71-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.558c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.408 4 7.932c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.491-.085.745-.576.745z"/>
              </svg>
              ВКонтакте
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">© 2024 Студия «Концепция». Все права защищены.</p>
          <p className="text-white/20 text-xs">Москва</p>
        </div>
      </div>
    </footer>
  )
}