// prop called children 
function Card({ children, reverse }) {
  return (
  // Why this is a div?
  // that's the point which I don't get. 

  <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

export default Card;