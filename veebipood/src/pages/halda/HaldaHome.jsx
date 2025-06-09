import { Link } from "react-router-dom"

function HaldaHome() {
  return (
    <div>
      <Link to="/halda-autod">
        <button className="nupp">Halda Autod</button>
      </Link>

      <Link to="/halda-esindused">
        <button className="nupp">Halda Esindused</button>
      </Link>

       <Link to="/halda-hinnad">
        <button className="nupp">Halda Hinnad</button>
      </Link>

      <Link to="/halda-kasutajad">
        <button className="nupp">Halda Kasutajad</button>
      </Link>

      <Link to="/halda-tootajad">
        <button className="nupp">Halda Töötajad</button>
      </Link>

      <Link to="/halda-tooted">
        <button className="nupp">Halda Tooted</button>
      </Link>
    </div>
  )
}

export default HaldaHome