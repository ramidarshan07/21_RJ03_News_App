const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="card shadow-lg h-100 custom-card">
      <img src={src} className="card-img-top" alt="news" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-danger">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-warning text-white mt-2"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
