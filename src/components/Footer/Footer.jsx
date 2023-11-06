import React from 'react';
import './Footer.styled.css';
import Preferences from './BenefitsList';
import FooterMenu from './FooterMenu';
import LogoFooter from './LogoFooter';
import SubscribeForm from './SubscribeFormFooter';
import SocialFooter from './SocialFooter';
import DownFooter from './DownFooter';

export const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="MainBox">
        <div className="DescriptionWrapper">
          <LogoFooter />
          <Preferences />
        </div>
        <div className="MenuBox">
          <FooterMenu />
        </div>
        <div className="FormBox">
          <SubscribeForm />
        </div>
      </div>

      <SocialFooter />

      <DownFooter></DownFooter>
    </div>
  );
};

export default Footer;
