import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  project: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div key={project}>
      <div className='px-8 mb-2 lg:hidden'>
        <p className='text-sm text-pink-700'>{t(`projects.${project}.subtitle`)}</p>
        <h3 className='text-xl leading-10'>{t(`projects.${project}.title`)}</h3>
      </div>
      <div className='flex flex-col max-w-screen-xl gap-4 px-8 lg:gap-8 lg:flex-row'>
        <div>
          <img
            src={`../../public/assets/images/${project}.png`}
            alt={project}
            className='lg:max-w-screen-sm mb-2.5 rounded-md shadow'
          />
          <ul className='flex flex-wrap gap-x-2.5'>
            {(t(`projects.${project}.techStack`, { returnObjects: true }) as string[]).map(
              (item: string, index: number) => (
                <li key={index} className='text-sm text-pink-600'>
                  #{item}
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <div className='hidden mb-2 lg:block'>
            <p className='text-sm text-pink-700'>{t(`projects.${project}.subtitle`)}</p>
            <h3 className='text-xl leading-10'>{t(`projects.${project}.title`)}</h3>
          </div>
          <div>
            <p
              className='leading-8'
              dangerouslySetInnerHTML={{
                __html: t(`projects.${project}.description`).replace(/\n/g, '<br />')
              }}
            />
            <ul className='pl-4 mt-2 leading-8 list-disc'>
              {(t(`projects.${project}.features`, { returnObjects: true }) as string[]).map(
                (item: string, index: number) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
          <div className='flex justify-end gap-2.5 mt-8'>
            {['website', 'demoVideo', 'github'].map((linkType) => {
              const linkData = t(`projects.${project}.${linkType}`);
              if (!linkData) return null;

              return (
                <Link
                  key={linkType}
                  to={linkData}
                  target='_blank'
                  className={`px-4 py-2 text-sm tracking-wide ${
                    linkType === 'website' ? 'text-white bg-pink-700' : 'text-pink-700 bg-white border border-pink-700'
                  } rounded-md`}
                >
                  {t(`projects.${linkType}`)} {project === 'stocklight' && linkType === 'github' && ' (FE)'}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
