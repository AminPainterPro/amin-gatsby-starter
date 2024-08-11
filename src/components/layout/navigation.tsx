import React, { FC, useState } from 'react';
import { Link } from 'gatsby';

import { Button } from 'shadcn/button';
import { Icon } from 'shadcn/icon';
import { Sheet, SheetClose, SheetContent } from 'shadcn/sheet';
import { contacts, navigationLinks } from 'utils/data';
import logoImg from 'images/icon.png';

const Navigation: FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <nav className='saturate-180 backdrop-filter-backdrop sticky top-0 z-50 flex items-center justify-between border-b-[1px] bg-white bg-opacity-75 p-4 px-10 py-4 backdrop-blur-md backdrop-filter'>
        <Link to='/'>
          <img src={logoImg} alt='LOGO' className='w-36' />
        </Link>

        <ul className='flex gap-10 capitalize lg:hidden'>
          {navigationLinks.map((navLink, idx) => (
            <li key={idx}>
              <Link
                className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-lg after:bg-primary after:transition-transform after:will-change-transform after:content-[""] hover:after:scale-x-100'
                activeClassName='after:scale-x-100'
                to={navLink.href}
                partiallyActive={navLink.partiallyActive}>
                {navLink.text}
              </Link>
            </li>
          ))}
        </ul>

        <a href={`tel:${contacts[0].text}`} className='lg:hidden'>
          <Button endIcon={<Icon name='Phone' />}>Get in touch</Button>
        </a>

        <button className='hidden lg:block' onClick={() => setIsMobileNavOpen(true)}>
          <Icon name='Menu' />
        </button>
      </nav>

      <Sheet open={isMobileNavOpen} onOpenChange={() => setIsMobileNavOpen(false)}>
        <SheetContent side='top'>
          <ul className='mt-8 text-center text-xl capitalize'>
            {navigationLinks.map((navlink, idx) => (
              <li key={idx}>
                <SheetClose asChild>
                  <Link
                    to={navlink.href}
                    className='block py-2'
                    activeClassName='text-primary'
                    partiallyActive={navlink.partiallyActive}>
                    {navlink.text}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navigation;
