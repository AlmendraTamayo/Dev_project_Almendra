import React from 'react';
import PropTypes from 'prop-types';
import { logout } from "../../firebase/firebase";
import { useNavigate, useParams } from 'react-router-dom';
import back from '../../assets/back.svg'
import logoutIcon from '../../assets/logout-icon.svg'

import ButtonImg from '../ButtonImg/ButtonImg';
import Avatar from '../Avatar/Avatar';

import './headerProfile.css'

function HeaderProfile({ 
	color,
	cta, 
	nickname, 
	src
	}) {


	const navigate = useNavigate();
	const { authorUid } = useParams();

	//Navegación a página previa:
	const goBack =() => {
		navigate(-1);
	};

	//Deriva a "/" cuando el usuario cierra sesión en la app:
	const userLogout = () => {
		logout();
		navigate('/');
	};

  return (
		<header className='header-profile'>
			<section className='header-profile__nav'>
				<div>
					<img 
						src={ back } 
						alt='back icon'
						onClick={ goBack } 
					/>

					<p>{ nickname }</p>
				</div>

				{!authorUid &&  
					<ButtonImg 
						cta={ cta } 
						handle={ userLogout } 
						classNameBtn='button__logout'
						classNameImg='button__logout-img'
						img={logoutIcon }
					/>
				}
			</section>

			<section className='header-profile__hero'>
				<Avatar 
					src={ src } 
					borderColor={ color }
					classNameImg='avatar__profile'
				/>
				<p style={{background: `${ color }`}}>{ nickname }</p>
			</section>
		</header>
  );
}
  
export default HeaderProfile;

HeaderProfile.propTypes = {
  nickname: PropTypes.string.isRequired
};
