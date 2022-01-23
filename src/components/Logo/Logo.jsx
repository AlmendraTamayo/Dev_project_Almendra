import React from 'react';
import image_log from '../../assets/dev-united-logo.svg'
import name_log from '../../assets/dev-united-naming.svg'
import { useNavigate } from "react-router-dom";

import './logo.css';

function Logo({
	classNameContainer,
	classNameLogo,
	classNameNaming
}) {

	const navigate = useNavigate();

	const goHome = () => navigate( '/' );


	return (
		<div className={`logo ${ classNameContainer }`} onClick={ goHome }>
			<img 
				alt='Dev-United logo' 
				className={ classNameLogo }
				src= {image_log}
			/>
			<img 
				alt='Dev-United naming' 
				className={ classNameNaming }
				src={name_log}
			/>
		</div>
	)
}

export default Logo;
