import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Title from '@/components/Title';

const Contact: React.FC = () => {
  const { t } = useTranslation();

	return (
		<div id='contact' className='px-4 py-12 bg-center bg-no-repeat bg-cover md:py-20 bg-wave'>
			<Title text={t('contact.title')} />
      <p
        className='mb-10 font-light leading-7 text-center'
        dangerouslySetInnerHTML={{
          __html: t('contact.subtitle').replace(/\n/g, '<br />')
        }}
      />
      <Link
        to={`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${t('common.mail')}`}
        target='_blank'
        className="relative block w-full py-3 mx-auto overflow-hidden font-medium tracking-widest text-center text-pink-600 bg-white border-2 border-pink-600 rounded-full xs:w-56 group"
      >
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-pink-600 group-hover:w-full ease"/>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-pink-600 group-hover:w-full ease"/>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-600 group-hover:h-full ease"/>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-600 group-hover:h-full ease"/>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-pink-600 opacity-0 group-hover:opacity-100"/>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
        {t('contact.button')}
        </span>
      </Link>
		</div>
	);
};

export default Contact;
