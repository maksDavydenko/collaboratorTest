import LogoImg from '../../media/Logo.svg';
import './Logo.sass';

export const Logo = () => {
  return (
    <a href='#' className='logo'>
        <img src={LogoImg} alt='Logo'/>
    </a>
  );
}
