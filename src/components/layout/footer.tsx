import React, { FC } from 'react';
import { Link } from 'gatsby';

import { contacts, navigationLinks, socials } from 'utils/data';
import { Icon } from 'shadcn/icon';
import { Typography } from 'shadcn/typography';
import { Separator } from 'shadcn/separator';
import logoImg from 'images/icon.png';

const Footer: FC = () => (
  <footer className='bg-gray-800 py-12 text-gray-300'>
    <div className='container space-y-6'>
      <div className='grid grid-cols-4 gap-10 justify-items-center lg:grid-cols-none lg:justify-items-start'>
        <Link to='/' className='self-center'>
          <img src={logoImg} alt='LOGO' className='w-60 lg:mx-auto lg:mt-10' />
        </Link>

        <div>
          <Typography className='text-white mb-6'>quick links</Typography>
          <ul className='flex flex-col gap-y-4 gap-x-8 capitalize lg:flex-row sm:flex-col'>
            {[...navigationLinks.slice(1), { text: 'Privacy policy', href: '/privacy-policy' }].map(
              (navLink, idx) => (
                <li key={idx}>
                  <Link to={navLink.href}>{navLink.text}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <Typography className='text-white mb-6'>contact</Typography>
          <ul className='flex flex-col gap-y-4 gap-x-8 lg:flex-row sm:flex-col'>
            {contacts.map((contact, idx) => (
              <li key={idx}>
                <a href={contact.link} target='_blank' rel='noreferrer' className='flex gap-2'>
                  <Icon name={contact.icon as any} className='shrink-0' />
                  <span>{contact.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Typography className='text-white mb-6'>Social</Typography>
          <ul className='flex flex-col gap-y-4 gap-x-8 lg:flex-row sm:flex-col'>
            {socials.map((social, idx) => (
              <li key={idx}>
                <a href={social.link} target='_blank' rel='noreferrer' className='flex gap-2'>
                  <Icon name={social.icon as any} className='shrink-0' />
                  <span>{social.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className='bg-gray-500' />

      <div className='flex gap-4 justify-between md:flex-col'>
        <span>&copy; {new Date().getFullYear()} Copyright. All rights reserved.</span>
        <span>
          Developed by{' '}
          <a
            className='underline'
            href='https://aminpainter.netlify.app'
            rel='noreferrer'
            target='_blank'>
            Mohammed Amin Painter
          </a>
          .
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
