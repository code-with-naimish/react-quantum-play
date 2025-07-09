
const PrimaryBtn = (props: {
  onclick?: () => void
  title: string
}) => {
  return (
    <button onClick={props.onclick} className="px-8 py-2 text-lg font-medium  rounded-full bg-gradient-to-l from-purple-500 to-fuchsia-500 text-white" >
      {props.title}
    </button>
  )
}

export default PrimaryBtn