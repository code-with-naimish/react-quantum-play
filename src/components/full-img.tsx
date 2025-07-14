import { useState } from "react"

const FullImg = (props: {
  src: string,
  alt: string,
}) => {
  const [error, setError] = useState<boolean>(false);
  const imgSrc = error ? "/img-placeholder.svg" : (!props?.src || props?.src?.trim().length === 0 ? "/img-placeholder.svg" : props?.src)

  return (
    <img
      loading="lazy"
      onError={() => setError(true)}
      className=" w-full h-full object-cover bg-slate-900 " src={imgSrc} alt={props?.alt} />
  )
}

export default FullImg