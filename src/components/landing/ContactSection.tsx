
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            У вас есть вопросы? Наша команда готова помочь вам в любое время.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Имя</label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="example@mail.ru" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Тема</label>
                <Input id="subject" placeholder="Тема вашего сообщения" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
                <Textarea id="message" placeholder="Введите ваше сообщение" rows={5} />
              </div>
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-indigo-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">info@company.ru</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-indigo-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-gray-600 dark:text-gray-400">+7 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-indigo-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-gray-600 dark:text-gray-400">Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Часы работы</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Понедельник - Пятница:</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Суббота:</span>
                  <span>10:00 - 15:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Воскресенье:</span>
                  <span>Выходной</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
