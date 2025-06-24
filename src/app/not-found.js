"use client";
import { Link } from "@/i18n/navigation";
export default function NotFound() {
  return (
    <div>
      <section className="notFound">
        <div className="container notFound__container">
          <div className="notFound__top-box">
            <p className="notFound__number-text">4</p>
            <img className="notFound__middle-image" src="" alt="" />
            <p className="notFound__number-text">4</p>
          </div>
          <div className="notFound__bottom-box">
            <p className="notFound__bottom-title">Ooops! Page Not Found</p>
            <p className="notFound__bottom-text">
              Looks like you've wandered off the map — even our camel can't find
              this place. Let’s head back and continue the journey!
            </p>
            <Link to="/">
              <button className="notFound__bottom-button">
                <i className="notFound__bottom-icon fa-solid fa-house fa-beat-fade fa-xs ms-4"></i>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
