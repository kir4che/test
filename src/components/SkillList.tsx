import { useTranslation } from 'react-i18next';

import Title from '@/components/Title';

const SkillList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id='skill' className='pt-6 mx-auto'>
      <Title text={t('skill.title')} />
      <p className='mb-2 font-light text-center'>{t('skill.subtitle')}</p>
      <p className='mb-5 text-sm text-center'>{t('skill.tip')}</p>
      <div className='py-5 bg-pink-300 rounded-lg'>
        <div className='max-w-screen-md py-5 mx-auto space-y-4 bg-white rounded-xl'>
          {['frontend', 'backend', 'languages', 'others'].map((category) => (
            <ul key={category} className='flex flex-wrap items-center justify-center gap-y-4'>
              {Object.entries(t(`skill.${category}`, { returnObjects: true }) as Record<string, { name: string; level: string }>).map(([key, skill]) => (
                <li key={key} className='flex w-24 flex-col gap-1.5 items-center'>
                  <div className={skill.level ? 'tooltip text-left tooltip-bottom before:whitespace-pre-wrap before:py-2 before:px-3.5 before:leading-6' : ''} data-tip={skill.level || ''}>
                    <img src={`https://img.icons8.com/color/100/${key}.png`} alt={skill.name} className='w-12 h-12' />
                  </div>
                  <span className='text-sm'>{skill.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillList;
