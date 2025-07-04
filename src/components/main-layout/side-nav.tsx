
import { NavLink } from "react-router"
import { navLinks } from "../../_helpers/nav-link"


const SideNav = () => {
  return (
    <nav >
      {navLinks.map((val, i) => {
        return <div key={i}>

          {!val.children ?
            <NavLink
              to={{
                pathname: val?.path
              }}
              className={({ isActive }) =>
                isActive ? "nav-link active-nav-link" : "nav-link inactive-nav-link"
              }
            >
              {val?.label}
            </NavLink>
            :
            <>
              Children</>
          }


        </div>
      })}
    </nav>
  )
}

export default SideNav