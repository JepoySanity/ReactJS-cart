import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="bg-base-300">
      <div className="container mx-auto">
        <div className="navbar bg-base-300">
          <div className="flex-1">
            <Link to="/" className="normal-case text-xl">
              Cartify
            </Link>
          </div>
          <div className="flex-none gap-8">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search Products"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <FaShoppingCart size={35} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
