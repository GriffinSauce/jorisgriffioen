import theme from '../theme';
import { darken } from 'polished';

export default () => (
  <>
    <nav>
      <a className="cs" target="_blank" href="https://www.coralsprings.nl/">
        <img alt="Coral Springs" src="logo-coralsprings.svg" />
        <div className="description">Coral Springs - pop punk</div>
      </a>
      <a className="la" target="_blank" href="https://www.leftalive.nl/">
        <img alt="Left Alive" src="logo-leftalive.svg" />
        <div className="description">Left Alive - pop punk</div>
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
        position: relative;
        margin: 0 0 20px 0;
        padding: 18px 0;
        flex-basis: 100%;
        border: 1px solid ${theme.color4};
      }

      a:before {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 1;
        transition: box-shadow 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      a:hover:before {
        box-shadow: inset 0 0 0 4px ${theme.color4};
      }

      a img,
      a .description {
        position: relative;
        z-index: 2;
      }

      a img {
        margin: 15px 0;
        width: calc(100% - 60px);
      }

      a.la img {
        margin: 20px 0;
      }

      a.cs,
      a.la {
        background-position: 50% 50%;
        background-size: cover;
      }
      a.cs {
        background-position: top;
        background-image: url('/vid-cs.webp');
      }
      a.la {
        background-position: top;
        background-image: url('/vid-la.webp');
      }

      .description {
        position: relative;
        display: inline-block;
        margin-top: 8px;
        font-size: 1.05rem;
        padding: 6px 10px;
        content: '';
        background: linear-gradient(
          135deg,
          ${darken(0.35, theme.color5)},
          ${darken(0.4, theme.color1)}
        );
        transform: skewX(-8deg);
      }

      @media (min-width: 992px) {
        nav {
          width: 600px;
        }

        a {
          flex-basis: calc(50% - 10px);
        }
      }
    `}</style>
  </>
);
