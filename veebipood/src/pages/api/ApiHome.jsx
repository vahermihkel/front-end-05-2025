import { Link } from "react-router-dom"

function ApiHome() {
  return (
    <div>
      <Link to="/cars">
        <button className="nupp">Cars</button>
      </Link>

      <Link to="/countries">
        <button className="nupp">Countries</button>
      </Link>

       <Link to="/tarnija1">
        <button className="nupp">Tarnija1</button>
      </Link>

      <Link to="/tarnija2">
        <button className="nupp">Tarnija2</button>
      </Link>

      <Link to="/tarnija3">
        <button className="nupp">Tarnija3</button>
      </Link>

      <Link to="/vocabulary">
        <button className="nupp">Vocabulary</button>
      </Link>

      <Link to="/parcelmachines">
        <button className="nupp">Pakiautomaadid</button>
      </Link>
    </div>
  )
}

export default ApiHome