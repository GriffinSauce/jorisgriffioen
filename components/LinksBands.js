import theme from '../theme';
import { darken } from 'polished';

export default () => (
  <>
    <nav>
      <a className="cs" target="_blank" href="https://www.coralsprings.nl/">
        <img alt="Coral Springs" src="logo-coralsprings.svg" />
        <div className="description">
          <span>Coral Springs - pop punk</span>
        </div>
      </a>
      <a className="la" target="_blank" href="https://www.leftalive.nl/">
        <img alt="Left Alive" src="logo-leftalive.svg" />
        <div className="description">
          <span>Left Alive - pop punk</span>
        </div>
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
        flex-basis: 100%;
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid ${theme.color4};
        transition: box-shadow 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      a:hover {
        box-shadow: inset 0 0 0 4px ${theme.color4};
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
        background-image: url('/vid-cs.webp');
      }
      a.la {
        background-image: url('/vid-la.webp');
      }

      .description {
        position: relative;
        display: inline-block;
        margin-top: 10px;
        font-style: italic;
      }

      .description::before {
        position: absolute;
        z-index: 0;
        display: block;
        top: -6px;
        left: -10px;
        right: -10px;
        bottom: -6px;
        content: '';
        transform: skewX(-8deg);
        background: linear-gradient(
          135deg,
          ${darken(0.35, theme.color5)},
          ${darken(0.4, theme.color1)}
        );
      }
      .description span {
        position: relative;
        z-index: 1;
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
