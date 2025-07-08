import { Link } from 'react-router-dom'

function AdminHome() {
  return (
    <div>
      <Link to="/admin/add-product"><button>Add product</button></Link>
      <Link to="/admin/maintain-categories"><button>Maintain categories</button></Link>
      <Link to="/admin/maintain-products"><button>Maintain products</button></Link>
      <Link to="/admin/maintain-shops"><button>Maintain shops</button></Link>
    </div>
  )
}

export default AdminHome