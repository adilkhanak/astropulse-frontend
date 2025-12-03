import { Sparkles } from 'lucide-react';

interface HeaderProps {
  variant?: 'default' | 'simple';
}

export function Header({ variant = 'default' }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E27]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-white text-lg sm:text-xl font-medium">AstroPulse</span>
          </div>

          {variant === 'default' && (
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Карта Рождения
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Нумерология
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
              >
                О нас
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
