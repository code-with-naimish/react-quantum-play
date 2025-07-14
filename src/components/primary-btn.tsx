
const PrimaryBtn = (props: {
  onClick?: () => void
  title: string
}) => {
  return (
    <button onClick={props.onClick} className="cursor-pointer hover:opacity-90 transition-all duration-300 px-4 md:py-1.5 py-2  text-sm font-medium  rounded-md bg-gradient-to-l from-purple-500 to-fuchsia-500 text-white" >
      {props.title}
    </button>
  )
}

export default PrimaryBtn