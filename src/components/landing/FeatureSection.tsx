
import { CheckCircle, BarChart, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="h-10 w-10 text-indigo-500" />,
    title: "Высокое качество",
    description: "Мы гарантируем высочайшее качество всех наших продуктов и услуг."
  },
  {
    icon: <BarChart className="h-10 w-10 text-indigo-500" />,
    title: "Аналитика",
    description: "Получайте подробные отчеты и аналитику в реальном времени."
  },
  {
    icon: <Globe className="h-10 w-10 text-indigo-500" />,
    title: "Глобальное присутствие",
    description: "Работаем с клиентами по всему миру, предоставляя круглосуточную поддержку."
  },
  {
    icon: <Shield className="h-10 w-10 text-indigo-500" />,
    title: "Безопасность",
    description: "Ваши данные защищены с использованием передовых технологий шифрования."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Почему клиенты выбирают именно нас? Мы предлагаем комплексные решения для любых задач.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover-scale"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
