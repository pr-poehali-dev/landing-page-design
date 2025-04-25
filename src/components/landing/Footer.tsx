
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Компания</h3>
            <div className="text-2xl font-bold">LOGO</div>
            <p className="text-gray-400">
              Создаем инновационные решения для вашего бизнеса с 2010 года.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Веб-разработка</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Мобильные приложения</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Дизайн</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Консалтинг</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Компания</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Команда</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Карьера</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Подписка</h3>
            <p className="text-gray-400">Подпишитесь на нашу рассылку, чтобы быть в курсе последних новостей</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="w-full px-4 py-2 rounded-l-md focus:outline-none bg-gray-800 text-white"
              />
              <button className="px-4 py-2 bg-indigo-600 rounded-r-md hover:bg-indigo-700 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2023 Компания. Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
