import "./Page404.css";

/**
 * Page404 component.
 *
 * Displays a 404 error message indicating that the requested page does not exist.
 * Includes a link for the user to return to the homepage.
 *
 * @component
 * @returns {JSX.Element} The rendered `Page404` component with an error message and homepage link.
 *
 * @example
 * <Page404 />
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
