import React from "react";
import "../EventCard/eventCard.css";
import CommonSection from "../../UI/CommonSection/CommonSection";
import { Link } from "react-router-dom";
const EventCard = ({ event }) => {
  return (
    <div className="containerX">
      <article className="card">
        <img
          src={event.previewImage}
          alt="Event Preview Image"
          style={{ borderRadius: "20px" }}
        />

        <div className="content">
          <div className="card-header">
            <div className="card-type">{event.type}</div>
            <div className="latest-article">{event.latestArticle}</div>
          </div>
          <div className="card-content">
            <h2>{event.title}</h2>
            <p>{event.content}</p>
          </div>
          <div className="blog-preview__bottom">
            <div className="blog-author">
              <img src={event.author.image} alt="Avatar" />
              <div className="blog-author__name">
                <div className="blog-author__name">{event.author.name}</div>
              </div>
            </div>
            <Link
              className="go-to-article-button"
              to={event.link}
              title="New Event"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default EventCard;
