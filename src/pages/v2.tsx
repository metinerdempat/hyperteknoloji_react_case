import { FC } from 'react';

type Props = {};

const Version2Page: FC<Props> = ({}) => {
  return (
    <div className="py-20 flex flex-col items-center">
      <a href="https://hyperteknoloji.com" title='Hyper Teknoloji'>
        <img src="/hyper_teknoloji_logo.webp" alt="Hyper Teknoloji Logo" width={200} height={80} />
      </a>
      <h1 className="mt-6 text-3xl font-bold">Version 2 will be deployed on 23.03.2025</h1>
      <p className="mt-4">All my respect to the Hyper Teknoloji</p>
    </div>
  );
};

export default Version2Page;
