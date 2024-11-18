import { useTranslation } from 'react-i18next';

import Title from '@/components/Title';

const About: React.FC = () => {
  const { t } = useTranslation();

	return (
    <div id='about' className='relative max-w-screen-md px-8 pt-16 pb-12 mx-auto lg:px-0'>
      <Title style='md:mx-0' text={t('about.title')} />
      <div className='flex flex-col justify-between gap-8 md:flex-row'>
        <div className='order-2 grow md:order-none'>
          <p
            className='mb-6 leading-8 md:mb-12'
            dangerouslySetInnerHTML={{
              __html: t('about.description').replace(/\n/g, '<br />')
            }}
          />
          <div className='space-y-3'>
            <p className='text-xs text-pink-600'>{t('about.hobby.title')}</p>
            <ul className='flex flex-wrap items-center gap-2'>
              {(t(`about.hobby.content`, { returnObjects: true }) as string[]).map((skill, index) => (
                <li key={index} className='px-2.5 py-1 rounded-full bg-pink-200 text-xs font-light'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='order-1 mx-auto md:order-none'>
          <img src='assets/images/molly.jpg' alt='About' className='transition duration-300 transform rounded-md w-80 hover:scale-105 hover:rotate-3 md:w-full' />
        </div>
        <p className='absolute font-bold tracking-wider text-pink-600 bottom-32 md:top-52 -left-2 md:-left-24 text-9xl opacity-20 -rotate-6'>
          {t('about.mbti')}
        </p>
      </div>
    </div>
	);
};

export default About;
