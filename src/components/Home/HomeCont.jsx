
const HomeCont = ({text, heading, button}) => {
  return (
        <div className="content">
            <span>{text}</span>
            <h3>{heading}</h3>
            <a href="#" className="btn">
            {button}
            </a>
        </div>
                        
  )
}

export default HomeCont