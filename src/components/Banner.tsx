import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Banner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='flex items-center justify-center px-8 gap-12 lg:gap-20 ml-0 py-16 md:py-20 bg-pink-100 rounded-s-[5rem] md:ml-20'>
      <img src='../../public/assets/images/banner.png' alt='banner' className='hidden w-64 lg:w-72 md:block'/>
      <div className='flex flex-col items-center text-center md:items-start md:text-left '>
        <span className='inline-block w-fit mb-2.5 py-1 px-3 bg-pink-500 text-sm text-white rounded-full rounded-bl-none'>{t('banner.heading')}</span>
        <h1 className='mb-6 text-6xl font-bold font-rubikDoodleShadow'>{t('banner.name')}</h1>
        <p className='mb-10 text-sm leading-7 opacity-80'>{t('banner.description')}</p>
        <div className='w-fit'>
          <Link to='mailto:mollydcxxiii@gmail.com' className='relative z-10 text-xl font-medium tracking-wide'>
            {t('common.mail')}
          </Link>
          <hr className='relative w-full border-4 border-pink-300 bottom-2'/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
