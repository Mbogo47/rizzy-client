
const ReviewsCont = ({p, img, name, text}) => {
  return (
    <div className=" swiper-slide slide">
      <p>{p}</p>
      <div className="user">
        <img src={img} alt="" />
        <div className="info">
          <h3>{name}</h3>
          <span>{text}</span>
        </div>
      </div>
      </div>
  )
}

export default ReviewsCont