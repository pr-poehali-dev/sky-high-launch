import { useState } from 'react'
import Icon from '@/components/ui/icon'

interface LeadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://functions.poehali.dev/b899a35c-e892-4c41-8fa5-b24cc9b774d6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message })
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setName('')
        setPhone('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md bg-neutral-950 border border-white/10 rounded-2xl p-8"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" size={24} className="text-white" />
            </div>
            <h2 className="text-white text-xl font-light mb-2">Заявка отправлена!</h2>
            <p className="text-white/50 text-sm">Мы свяжемся с вами в ближайшее время</p>
            <button
              onClick={onClose}
              className="mt-6 px-8 py-3 rounded-full bg-white text-black text-xs font-normal hover:bg-white/90 transition-all"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-white text-xl font-light mb-1">Обсудить проект</h2>
            <p className="text-white/40 text-xs mb-6">Оставьте заявку — мы свяжемся с вами</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Расскажите о вашем проекте"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-xs">Что-то пошло не так. Попробуйте ещё раз.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 rounded-full bg-white text-black text-xs font-normal hover:bg-white/90 transition-all disabled:opacity-50 cursor-pointer"
              >
                {status === 'loading' ? 'Отправляю...' : 'Отправить заявку'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
