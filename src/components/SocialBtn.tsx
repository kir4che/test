import { Link } from 'react-router-dom';

import LinkedinIcon from '../../public/assets/icons/linkedin.svg?react';
import GithubIcon from '../../public/assets/icons/github.svg?react';
import BlogIcon from '../../public/assets/icons/blog.svg?react';
import InstagramIcon from '../../public/assets/icons/instagram.svg?react';

const SocialBtn: React.FC = () => {
  const socialList = [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/mollysu/', icon: LinkedinIcon },
    { name: 'github', url: 'https://github.com/kir4che/', icon: GithubIcon },
    { name: 'blog', url: 'https://kir4che.com/', icon: BlogIcon },
    { name: 'instagram', url: 'https://www.instagram.com/kir4che/', icon: InstagramIcon },
  ];

  return (
    <div className='flex justify-center space-x-3'>
      {socialList.map((social, index) => (
        <Link to={social.url} key={index} target='_blank'>
          <social.icon className='text-pink-500 fill-current w-7 h-7 hover:text-pink-600 hover:scale-105 hover:-translate-y-1' />
          </Link>
      ))}
    </div>
  );
};

export default SocialBtn;
