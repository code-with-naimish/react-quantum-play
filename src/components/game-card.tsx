import type { GameModel } from "../_models/game.model"
import { Link } from "react-router";
import { LuLaptopMinimal } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";

const GameCard = (props: {
  val: GameModel
}

) => {
  console.log(props);

  const isPcGame = props?.val?.platform === 'PC (Windows)'

  return (
    <Link className="group" to={`/detail/${props?.val?.id}`}>
      <div className="aspect-video rounded-lg relative overflow-hidden mb-3">
        <div className="absolute inset-0 bg-gradient-to-r  from-transparent via-black/20 to-black/70 "></div>
        <img className=" w-full h-full object-cover" src={props?.val?.thumbnail} alt={props?.val?.title} />
        <div title="Genre" className="absolute top-2 right-2">
          <p className="bg-fuchsia-500/30 border border-fuchsia-500/60 text-white text-xs px-2 py-1 leading-none font-medium rounded-4xl">{props?.val?.genre}</p>
        </div>

      </div>
      <div>

        <p className="md:text-lg text-base font-medium  mb-3 flex items-center gap-2 group-hover:text-fuchsia-500 transition-all duration-300">
          <div className="w-6 h-6 flex-none text-sm rounded-full flex items-center justify-center   bg-fuchsia-500/30 text-white border border-fuchsia-500/60">
            {isPcGame ? <LuLaptopMinimal title="PC Game" /> : <CiGlobe title="Browser Game" />}
          </div>
          <span>{props?.val?.title}</span>

        </p>
        <p className="text-sm text-white/70">{props?.val?.short_description}</p>
      </div>
    </Link>
  )
}

export default GameCard

// Link to={`/detail/props.val.id`}