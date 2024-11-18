import { useTranslation } from 'react-i18next';
import ProjectCard from '@/components/ProjectCard';
import Title from '@/components/Title';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id='projects' className='pt-16 pb-8 mx-auto lg:py-24 bg-beige-50'>
      <Title style='mb-8' text={t('projects.title')} />
      <div className='mx-auto space-y-16 w-fit'>
        {['stocklight', 'mern-ec-website'].map((project) => (
          <ProjectCard key={project} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
