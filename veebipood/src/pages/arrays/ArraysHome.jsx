import { Link } from "react-router-dom"

function ArraysHome() {
  return (
    <div>
      <Link to="/autod">
        <button className="nupp">Autod</button>
      </Link>

      <Link to="/esindused">
        <button className="nupp">Esindused</button>
      </Link>

       <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Link to="/kasutajad">
        <button className="nupp">Kasutajad</button>
      </Link>

      <Link to="/tootajad">
        <button className="nupp">Töötajad</button>
      </Link>

      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>
    </div>
  )
}

export default ArraysHome