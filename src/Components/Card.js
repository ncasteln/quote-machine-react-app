const Card = (props) => {
  return (
    <figure className="card">
      <h1 className="card__title">Quote of the day</h1>
      <blockquote className="card__text"
        id={props.id}>
        <p>{props.text}</p>
      </blockquote>
      <figcaption className="card__author" id="author">{props.author}</figcaption>
      <small>Quote #{props.id}</small>
      <button className="card__button" 
        type="button" 
        onClick={props.handleClick}
        style={{ backgroundColor: props.color }}>
        New quote
      </button>
    </figure>
  )
};

export default Card;