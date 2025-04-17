import Button from './Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Modern Web Application with Next.js
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Built with the latest web technologies including Next.js 15, React 19, 
              and Tailwind CSS for a responsive, fast, and accessible experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 dark:from-purple-800/20 dark:to-blue-800/20 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={180}
                height={180}
                className="dark:invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}