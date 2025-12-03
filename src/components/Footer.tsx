import { Sparkles } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#0A0E27]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-white">AstroPulse</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Персональный астрологический анализ и нумерологическая карта
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4 text-sm">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Карта Рождения
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Нумерология
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Предсказания
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4 text-sm">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white mb-4 text-sm">Правовая информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Условия использования
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Отказ от ответственности
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              © {currentYear} AstroPulse. Все права защищены.
            </p>
            <p className="text-slate-500 text-xs text-center sm:text-right">
              Создано с ✨ для вашего самопознания
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
