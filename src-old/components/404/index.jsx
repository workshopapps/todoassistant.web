import ErrorImg from "../../assets/404-page.svg";
import "./errorMain.scss";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";

const ErrorMain = () => {
  return (
    <Layout>
      <main className="error_main">
        <section className="error_main-one">
          <div>
            <p className="error_text-one">OOOps!</p>
            <p className="error_text-two">Page not found</p>
            <p className="error_text-three">
              This page doesn't exist, we suggest you go back to home.
            </p>
          </div>
          <Link to="/" className="error_btn">
            Back to home
          </Link>
        </section>
        <section className="error_main-two">
          <img src={ErrorImg} alt="error img" className="error_img" />
        </section>
      </main>
    </Layout>
  );
};

export default ErrorMain;
