import {
  BsMusicNoteBeamed,
  BsInstagram,
  BsTwitter,
  BsGithub,
} from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { GoTools } from 'react-icons/go';

const Anchor = ({ children, ...props }) => (
  <a
    {...props}
    rel="noopener noreferrer"
    className="flex-col gap-2 py-6 text-lg flex-center"
  >
    {children}
  </a>
);

const Links = () => (
  <nav className="grid grid-cols-3 sm:grid-cols-6">
    <Anchor target="_blank" href="https://github.com/GriffinSauce">
      <BsGithub className="text-3xl" />
      <span>Github</span>
    </Anchor>
    <Anchor target="_blank" href="https://twitter.com/jorisgriffioen">
      <BsTwitter className="text-3xl" />
      <span>Twitter</span>
    </Anchor>
    <Anchor target="_blank" href="https://linkedin.com/in/jorisgriffioen/">
      <FaLinkedin className="text-3xl" />
      <span>LinkedIn</span>
    </Anchor>
    <Anchor target="_blank" href="https://instagram.com/jorisgriffioen">
      <BsInstagram className="text-3xl" />
      <span>Instagram</span>
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
);

export default Links;
