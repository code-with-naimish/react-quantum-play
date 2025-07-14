
const OutlineBtn = (props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void
  title: string,
  disabled?: boolean
}) => {
  return (
    <button onClick={props.onClick} disabled={props.disabled} className="disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-xs font-medium px-4 py-1.5 rounded-md border border-purple-500/40 " >
      {props.title}
    </button>
  )
}

export default OutlineBtn