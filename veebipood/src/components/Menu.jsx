import { Link } from "react-router-dom";

function Menu() {

  return (
    <div>
      <Link to="/">
        <img className="pilt" src="https://i0.wp.com/accelerista.com/wp-content/uploads/2018/06/nobe.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button className="nupp">Kinkekaardid</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Link to="/kalkulaator">
        <button className="nupp">Kalkulaator</button>
      </Link>

      <Link to="/arrays-home">
        <button className="nupp">Arrays</button>
      </Link>

      <Link to="/halda-home">
        <button className="nupp">Halda</button>
      </Link>

    </div>
  )
}

export default Menu