import Image from 'next/image';

const aspectRatio = 97 / 82;

const Logo = ({ width = 100 }) => (
  <Image
    src="/logo.svg"
    alt=""
    width={width}
    height={width / aspectRatio}
    style={{
      maxWidth: '100%',
      height: 'auto',
    }}
  />
);

export default Logo;
