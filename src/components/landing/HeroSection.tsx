
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-start space-y-6 md:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
            Инновационные решения для вашего бизнеса
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Мы создаем передовые продукты, которые помогают компаниям расти и развиваться в цифровую эпоху.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 hover-scale">
              Начать сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Инновационные решения" 
            className="w-full max-w-md rounded-xl shadow-2xl hover-scale"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white dark:to-background"></div>
    </div>
  );
};

export default HeroSection;
