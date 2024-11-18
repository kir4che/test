import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SocialBtn from '@/components/SocialBtn';
import LangMenu from '@/components/LangMenu';

const Header: React.FC = () => {
  const { t } = useTranslation();

  const navList = [
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'skill', label: t('nav.skill') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

	return (
      <header className="navbar sticky top-0 z-20 bg-white px-4 lg:px-6 py-2.5">
        <div className="navbar-start">
          <Link to='/' className='flex items-center'>
						<img src='src/assets/images/logo.png' className='h-8' alt='Logo' />
						<span className='text-xl font-semibold text-nowrap'>{t('common.name')}</span>
					</Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="space-x-8 menu menu-horizontal">
            {navList.map((item) => (
              <li key={item.id} className='font-medium cursor-pointer hover:text-pink-600' onClick={() => handleScrollTo(item.id)}>{item.label}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-4 navbar-end">
          <SocialBtn />
          <LangMenu />
        </div>
      </header>
	);
};

export default Header;
