import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/sign-in">How it Works</FooterLink>
                            <FooterLink to="/sign-in">Testimonials</FooterLink>
                            <FooterLink to="/sign-in">Careers</FooterLink>
                            <FooterLink to="/sign-in">Investors</FooterLink>
                            <FooterLink to="/sign-in">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/sign-in">How it Works</FooterLink>
                            <FooterLink to="/sign-in">Testimonials</FooterLink>
                            <FooterLink to="/sign-in">Careers</FooterLink>
                            <FooterLink to="/sign-in">Investors</FooterLink>
                            <FooterLink to="/sign-in">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/sign-in">How it Works</FooterLink>
                            <FooterLink to="/sign-in">Testimonials</FooterLink>
                            <FooterLink to="/sign-in">Careers</FooterLink>
                            <FooterLink to="/sign-in">Investors</FooterLink>
                            <FooterLink to="/sign-in">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/sign-in">How it Works</FooterLink>
                            <FooterLink to="/sign-in">Testimonials</FooterLink>
                            <FooterLink to="/sign-in">Careers</FooterLink>
                            <FooterLink to="/sign-in">Investors</FooterLink>
                            <FooterLink to="/sign-in">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            NVLeads
                        </SocialLogo>
                        <WebsiteRights>
                            NVLeads {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>            
        </FooterContainer>
    )
}

export default Footer
