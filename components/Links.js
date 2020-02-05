import theme from '../theme';

export default () => (
  <>
    <nav>
      <a target="_blank" href="https://github.com/GriffinSauce">
        <img alt="github" src="icon-github.svg" />
        <div>Github</div>
      </a>
      <a target="_blank" href="https://twitter.com/jorisgriffioen">
        <img alt="twitter" src="icon-twitter.svg" />
        <div>Twitter</div>
      </a>
      <a target="_blank" href="https://linkedin.com/in/jorisgriffioen/">
        <img alt="linkedin" src="icon-linkedin.svg" />
        <div>LinkedIn</div>
      </a>
      <a target="_blank" href="https://instagram.com/jorisgriffioen">
        <img alt="instagram" src="icon-instagram.svg" />
        <div>Instagram</div>
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

      a:hover {
        box-shadow: inset 0 0 0 4px ${theme.color4};
      }

      a img {
        width: 50px;
      }

      @media (min-width: 992px) {
        nav {
          width: 600px;
        }

        a {
          flex-basis: calc(25% - 15px);
        }
      }
    `}</style>
  </>
);
