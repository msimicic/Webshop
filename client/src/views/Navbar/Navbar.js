import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Navbar() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:3001/api/categories"
        );

        setCategories(response.data);
      } catch (error) {
        console.error("Greška prilikom dohvaćanja podataka s API-a:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary pe-5">
        <div className="container-fluid">
          <div className="navbar-brand">Webshop</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse pe-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </li>
            </ul>
            <form className="d-flex m-auto pe-5" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="category-container d-flex justify-content-evenly">
        {categories.map((category, category_id) => (
          <button
            className="category-button btn btn-danger p-2 mt-3"
            onClick={() => navigate(`/categories/${category_id + 1}`)}
            key={category_id}
          >
            {category.category_name}
          </button>
        ))}
      </div>
    </>
  );
}

export default Navbar;
