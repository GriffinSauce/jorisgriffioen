import { forwardRef } from 'react';
import Link from 'next/link';
import {
  BsMusicNoteBeamed,
  BsInstagram,
  BsTwitter,
  BsGithub,
} from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { GoTools } from 'react-icons/go';

const Anchor = forwardRef(({ children, ...props }, ref) => {
  return (
    <a
      {...props}
      ref={ref}
      rel="noopener noreferrer"
      className="flex-col gap-2 py-6 text-lg flex-center"
    >
      {children}
    </a>
  );
});

const Icon = ({ src, alt }) => <img className="w-8" alt={alt} src={src} />;

const Links = () => (
  <>
    <nav className="grid grid-cols-3 sm:grid-cols-6">
      <Anchor target="_blank" href="https://github.com/GriffinSauce">
        <BsGithub className="text-3xl" />
        <div>Github</div>
      </Anchor>
      <Anchor target="_blank" href="https://twitter.com/jorisgriffioen">
        <BsTwitter className="text-3xl" />
        <div>Twitter</div>
      </Anchor>
      <Anchor target="_blank" href="https://linkedin.com/in/jorisgriffioen/">
        <FaLinkedin className="text-3xl" />
        <div>LinkedIn</div>
      </Anchor>
      <Anchor target="_blank" href="https://instagram.com/jorisgriffioen">
        <BsInstagram className="text-3xl" />
        <div>Instagram</div>
      </Anchor>
      <Anchor href="#music">
        <BsMusicNoteBeamed className="text-3xl" />
        <span>Music</span>
      </Anchor>
      <Anchor href="#projects">
        <GoTools className="text-3xl" />
        <span>Projects</span>
      </Anchor>
    </nav>
  </>
);

export default Links;
