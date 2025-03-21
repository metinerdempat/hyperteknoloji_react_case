import { FAQS } from '@/constants';
import { MessageCircleReply, ShieldQuestion } from 'lucide-react';
import { FC } from 'react';

type Props = {};

const Faqs: FC<Props> = ({}) => {
  return (
    <div>
      <h2 className="font-bold text-xl text-blue-300">Frequently Asked Questions</h2>
      <ul className="mt-5 grid grid-cols-12 gap-5">
        {FAQS.map((faq) => (
          <li key={faq.id} className="col-span-12 lg:col-span-6 bg-white p-5 shadow-md rounded-md">
            <h6 className="flex items-center font-medium gap-1.5">
              <ShieldQuestion size={18} color="#000" />
              <span>{faq.question}</span>
            </h6>
            <p className="flex items-center gap-1.5 pl-2 mt-2 text-sm">
              <MessageCircleReply size={18} className="shrink-0" />
              <span>{faq.answer}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faqs;
