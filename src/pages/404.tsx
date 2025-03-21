import { FC } from 'react';
import { useNavigate } from 'react-router';
type Props = {};

const NotFoundPage: FC<Props> = ({}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <section className="grid place-items-center w-full min-h-[500px]">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl font-bold text-center text-gray-800">404 - Page Not Found</h1>
        <p className="text-center text-gray-600">The page you are looking for does not exist.</p>
        <button type="button" onClick={goBack} className="py-2.5 px-6 rounded-md bg-blue-400 text-white">
          Go Back
        </button>
      </div>
    </section>
  );
};

export default NotFoundPage;
