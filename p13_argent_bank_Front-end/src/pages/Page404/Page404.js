import "./Page404.css";

/**
 * Error404 is a component that displays a 404 error message to the user.
 * It includes a `Link` component to allow the user to return to the homepage.
 * @return {ReactElement} The JS markup for the Error404 component
 */

const Page404 = () => {
  return (
    <>
      <div className="container-error404">
        <h1 className="title-error404">404</h1>
        <h2 className="description-error404">
          La page que vous demandez n'existe pas
        </h2>
        <a className="link-home" href="/">
          <p>Retourner sur la page d'accueil</p>
        </a>
      </div>
    </>
  );
};

export default Page404;
