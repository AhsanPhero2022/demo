import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border border-3 p-2 ">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className=" font-bold text-xl">
            CsCorner
          </a>
        </div>
        <div className="flex-1 gap-4">
          <Link to="/" className="btn btn-neutral normal-case text-xl">
            Home
          </Link>
          <Link to="/" className="btn btn-neutral normal-case text-xl">
            About
          </Link>
          <Link
            to="/addProducts"
            className="btn btn-neutral normal-case text-xl"
          >
            Add Products
          </Link>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>

          <div>
            <Link to="/cart">
              <svg
                width="46"
                height="46"
                fill="none"
                stroke="#e65b5b"
                className="round "
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.25 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
                <path d="M18.75 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
                <path d="M2.25 3.75h3L7.5 16.5h12"></path>
                <path d="M7.5 13.5h11.692a.375.375 0 0 0 .369-.301l1.35-6.75a.376.376 0 0 0-.37-.449H6"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
