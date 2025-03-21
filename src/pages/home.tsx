import Faqs from '@/components/faqs';
import Brands from '@/components/brands';
import AnimatedLink from '@/components/animated-link';
import { FC } from 'react';

type Props = {};

const Home: FC<Props> = ({}) => {
  return (
    <section className="app-container">
      <div className="mt-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pb-4">
          <h2 className="text-4xl font-bold text-center  text-white">Featured Products</h2>
          <AnimatedLink text="Let’s Shop" href="/" className='text-blue-400' />
        </div>

        <img
          src="/hero.png"
          alt="Hero Image"
          className="w-6xl h-[450px] object-fill rounded-xs grayscale-50"
        />
      </div>

      <div className="mt-12">
        <Faqs />
      </div>

      <div className="mt-16">
        <Brands />
      </div>
    </section>
  );
};

export default Home;
