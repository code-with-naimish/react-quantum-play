
import { NavLink } from "react-router"
import { navLinks } from "../../_helpers/nav-link"


const SideNav = (
  props: {
    onClickNav: () => void
  }
) => {
  const onClickNav = () => {
    if (window.innerWidth <= 768) {
      props.onClickNav()
    }
  }
  return (
    <nav className="px-4">
      {navLinks.map((val, i) => {
        return <div key={i}>

          {!val.children ?
            <NavLink
              onClick={onClickNav}
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
              <span className="!pl-2 nav-link border-transparent !text-sm opacity-60 ">{val.label}</span>

              {val.children.map((val2, i2) => {
                return <NavLink onClick={onClickNav} key={i2}
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