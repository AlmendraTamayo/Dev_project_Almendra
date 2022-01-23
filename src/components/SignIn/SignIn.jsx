import React from 'react';
import { cta } from '../../helpers/button-cta'
import { loginConGoogle } from "../../firebase/firebase";
import google_icon from '../../assets/google-icon.svg'

import ButtonImg from '../ButtonImg/ButtonImg';

import './signIn.css';

function SignIn() {


	return (
		<section className='signIn'>
			<h1 className='signIn__h1'>
				LOREM 
				<br></br> 
				IPSUM DOLOR
			</h1>

			<p className='signIn__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			
			<ButtonImg 
				alt='google logo'
				classNameBtn='google-button'
				classNameImg='google-img'
				cta={ cta.signIn }
				handle={ loginConGoogle } 
				img={ google_icon }
			/> 
		</section>      
	)
};

export default SignIn;