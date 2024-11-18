import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Title from '@/components/Title';

import LocationIcon from '@/assets/icons/location.svg?react';
import ShareIcon from '@/assets/icons/share.svg?react';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id='experience' className='max-w-screen-md px-4 py-4 mx-auto md:py-12 xs:px-8 lg:px-0'>
      <Title style='mb-6' text={t('experience.title')} />
      <div className='space-y-4'>
        {['25sprout', 'mrhost'].map((key) => (
          <div key={key} className="rounded-md collapse collapse-arrow">
            <input type="radio" name="my-accordion-1" defaultChecked={key === '25sprout'} />
            <div className="flex flex-wrap items-center justify-between font-medium tracking-wide text-white bg-pink-500 collapse-title rounded-t-md">
              <span>{t(`experience.${key}.position`)}</span>
              <span className='text-sm'>{t(`experience.${key}.date`)}</span>
            </div>
            <div className="py-3 space-y-4 border-2 border-pink-500 collapse-content rounded-b-md">
              <div className='flex items-center justify-between gap-4 text-sm'>
                <div className='flex items-center gap-1'>
                  <img src={`src/assets/images/${key}.png`} alt={key} className='w-10' />
                  <LocationIcon className='w-5 h-5' />
                  <p>{t(`experience.${key}.location`)}</p>
                </div>
                <Link
                  to={t(`experience.${key}.link`)}
                  target='_blank'
                  className='flex items-center gap-1 hover:text-pink-600'
                  rel='noreferrer'
                >
                  <ShareIcon className='w-6 h-6' />
                  {t(`experience.${key}.title`)}
                </Link>
              </div>
              <ul className='pl-5 leading-7 list-disc'>
                {(t(`experience.${key}.content`, { returnObjects: true }) as string[]).map((item, index) => (
                  Array.isArray(item) ? (
                    <ul key={index} className='pl-5 list-disc'>
                      {item.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  ) : (
                    <li key={index}>{item}</li>
                  )
                ))}
              </ul>
              <ul className='flex flex-wrap items-center gap-2'>
                {(t(`experience.${key}.skills`, { returnObjects: true }) as string[]).map((skill, index) => (
                  <li key={index} className='px-3 py-1 text-xs font-light tracking-wide bg-pink-200 rounded-full'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
