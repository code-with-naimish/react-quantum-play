import { NavLink } from 'react-router';


const MenuLink = (props: {
  val2: {
    path: string
    label: string
  }
}) => {
  return (
    <NavLink
      to={{
        pathname: props?.val2?.path
      }}
      className={({ isActive }) =>
        isActive ? "rounded-2xl font-medium px-4 py-3 bg-gradient-to-tl from-indigo-500 to-fuchsia-500 block" : "font-medium block px-4 py-3 "
      }
    >
      {props?.val2?.label}
    </NavLink>
  )
}

export default MenuLink