import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Link from 'next/link'
import { media } from 'utils/media';
import Logo_night from './Logo';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Company',
    items: [
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Cookies Policy', href: '/cookies-policy' },
    ],
  },
  {
    title: 'Product',
    items: [
      { title: 'Features', href: '/features' },
      { title: 'Something', href: '/something' },
      { title: 'Something else', href: '/something-else' },
      { title: 'And something else', href: '/and-something-else' },
    ],
  },
  {
    title: 'Knowledge',
    items: [
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Help Center', href: '/help-center' },
    ],
  },
  {
    title: 'Something',
    items: [
      { title: 'Features2', href: '/features2' },
      { title: 'Something2', href: '/something2' },
      { title: 'Something else2', href: '/something-else2' },
      { title: 'And something else2', href: '/and-something-else2' },
    ],
  },
];

export default function Footer() {
  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full text-white md:px-24 lg:px-8 bg-black">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 items-center">
        <div className="sm:col-span-2">

          <div className=" lg:max-w-sm flex justify-center items-center">
          

          
          </div>
        </div>
        <div className="  text-sm">
          <p className="text-3xl font-bold text-left tracking-wide ">
            Support und Kontakt
          </p>

          <div className="flex text-2xl">
            <p className="mr-1 ">Email:</p>
            <Link
              href="mailto:admin@mietplace.ch"
              aria-label="Email"
              
            >
              support@neptoon.ch
            </Link>
          </div>

          <div className="flex text-2xl">
            <p className="mr-1 ">Telefon:</p>
            <Link
              href="mailto:admin@mietplace.ch"
              aria-label="Tel."
            >
              +41 76 470 9900
            </Link>
          </div>

        </div>
        <div>

          <div className="flex items-center justify-center mt-1 space-x-3">
            <Link
              href="/"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 text-white">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </Link>
            <Link
              href="/"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-10 text-white">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </Link>
            <Link
              href="/"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 text-white">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </Link>
          </div>
          <p className="mt-4  ">

          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5  border-t lg:flex-row">
        <p className="text-2xl ">
          © Copyright 2023 neptoon.ch All rights reserved.
        </p>
        <p className="text-2xl ">

          <span role="img" aria-label="dog">Made with  ❤️&nbsp;&nbsp;in Liestal </span>
        </p>
        <ul className="flex flex-col mb-3 space-y-2 md:justify-center  lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
          <div className="text-2xl  transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <Link
                href="/privacy-policy"
              >Datenschutz</Link>
            </div >
          </li>
          <li>
            <div className="text-2xl  transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <Link
                href="/impressum"
              >Impressum</Link>
            </div >
        </li>
      </ul>
    </div>
    </div >
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
