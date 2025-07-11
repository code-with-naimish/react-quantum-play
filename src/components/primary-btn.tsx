
const PrimaryBtn = (props: {
  onclick?: () => void
  title: string
}) => {
  return (
    <button onClick={props.onclick} className="cursor-pointer hover:opacity-90 transition-all duration-300 px-5 py-2 text-base font-medium  rounded-full bg-gradient-to-l from-purple-500 to-fuchsia-500 text-white" >
      {props.title}
    </button>
  )
}

export default PrimaryBtn