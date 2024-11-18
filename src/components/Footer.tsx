import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

	return (
		<footer className='py-2 pr-2 align-middle bg-pink-500'>
			<p className='text-xs font-light text-right text-white'>Copyright © Molly Su ({t('common.name')}) All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;
