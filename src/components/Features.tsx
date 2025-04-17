import Card from './Card';
import Image from 'next/image';

const features = [
  {
    title: 'Modern Technologies',
    description: 'Built with Next.js 15 and React 19 for a seamless developer and user experience.',
    icon: '/window.svg',
  },
  {
    title: 'Responsive Design',
    description: 'Fully responsive interface that works perfectly on desktop, tablet, and mobile devices.',
    icon: '/globe.svg',
  },
  {
    title: 'Dark Mode Support',
    description: 'Automatic light and dark mode detection with customized UI for both preferences.',
    icon: '/file.svg',
  },
  {
    title: 'Accessibility',
    description: 'Designed with accessibility in mind, following WCAG guidelines for all users.',
    icon: '/vercel.svg',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our application is built with the latest web technologies and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full flex flex-col items-center text-center">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full mb-6">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}