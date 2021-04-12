import css from "./App.module.css";
import "./App.css";

function App() {
  return (
    <div className={css.root}>
      <div className={css.devImage}></div>
      <div className={css.container}>
        <h1 className={css.header}>
          Hi, I'm <span className={css.highlight}>Mani 👓</span>
        </h1>
        <p>
          Mobile and Front End Developer | UI UX | Web Designer | Foodie | Tech
          Enthusiastic | Developer #DBS | Proud Indian
        </p>
        <div className="iconsSocial">
          <a target="_blank" href="https://github.com/immnk" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/manimnk"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            target="_blank"
            href="https://stackoverflow.com/story/manikantamnk"
            rel="noreferrer"
          >
            <i className="fab fa-stack-overflow"></i>
          </a>
          <a target="_blank" href="https://dev.to/immnk" rel="noreferrer">
            <i className="fab fa-dev"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/manikantatankala"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
