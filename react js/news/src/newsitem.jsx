import React from "react";

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block"
      style={{ maxWidth: "345px", margin: "43px" }}  
    >
      <img src={src} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title" style={{ marginBottom: "15px" }}>{title}</h5>
        <p className="card-text" style={{ marginBottom: "20px" }}>{description}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default Newsitem;
