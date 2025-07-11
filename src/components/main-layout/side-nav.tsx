
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
              <span className="!pl-4 nav-link border-transparent !text-xs opacity-60 ">{val.label}</span>

              {val.children.map((val2, i2) => {
                return <NavLink key={i2}
                  to={{
                    pathname: val2?.path
                  }}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav-link " : "nav-link inactive-nav-link "
                  }
                >
                  {val2?.label}
                </NavLink>
              })}

            </>
          }


        </div>
      })}
    </nav>
  )
}

export default SideNav