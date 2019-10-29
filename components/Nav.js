import theme from '../theme';

export default () => (
  <>
    <nav>
      <a target="_blank" href="https://github.com/GriffinSauce">
        <img src="icon-github.svg" />
        <div>Github</div>
      </a>
      <a target="_blank" href="https://twitter.com/jorisgriffioen">
        <img src="icon-twitter.svg" />
        <div>Twitter</div>
      </a>
      <a target="_blank" href="https://linkedin.com/in/jorisgriffioen/">
        <img src="icon-linkedin.svg" />
        <div>LinkedIn</div>
      </a>
      <a target="_blank" href="https://instagram.com/jorisjgriffioen">
        <img src="icon-instagram.svg" />
        <div>Instagram</div>
      </a>
      <a
        className="large cs"
        target="_blank"
        href="https://www.coralsprings.nl/"
      >
        <img src="icon-coralsprings.svg" />
        <div>Coral Springs - pop punk</div>
      </a>
      <a className="large la" target="_blank" href="https://www.leftalive.nl/">
        <img src="icon-leftalive.svg" />
        <div>Left Alive - pop punk</div>
      </a>
    </nav>
    <style jsx>{`
      nav {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 300px;
      }

      a {
        display: block;
        margin: 0 0 20px 0;
        padding: 20px 0;
        flex-basis: calc(50% - 10px);
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid ${theme.color4};
        transition: box-shadow 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      a.large {
        flex-basis: 100%;
      }

      a:hover {
        box-shadow: inset 0 0 0 3px ${theme.color4};
      }

      a img {
        width: 50px;
      }

      a.large img {
        margin: 15px 0;
        width: calc(100% - 60px);
      }

      a.cs,
      a.la {
        background-position: 50% 50%;
        background-size: cover;
      }
      a.cs:hover {
        background-image: url('/vid-cs.webp');
      }
      a.la:hover {
        background-image: url('/vid-la.webp');
      }

      @media (min-width: 992px) {
        nav {
          width: 600px;
        }

        nav a {
          flex-basis: calc(25% - 15px);
        }

        nav a.large {
          flex-basis: calc(50% - 10px);
        }
      }
    `}</style>
    <style jsx global>{`
      /* preload hack */
      body::after {
        position: absolute;
        width: 0;
        height: 0;
        overflow: hidden;
        z-index: -1;
        content: url('/vid-cs.webp') url('/vid-la.webp');
      }
    `}</style>
  </>
);
