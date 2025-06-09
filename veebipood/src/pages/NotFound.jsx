import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>Lehte ei leitud</h2>
      <h3>Mine tagasi avalehele: <Link to="/">Avalehele</Link> </h3>
    </div>
  )
}

export default NotFound