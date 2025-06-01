import type { GameModel } from "../_models/game.model"
import { Link } from "react-router";

const GameCard = (props: {
  val: GameModel
}

) => {
  console.log(props);

  return (
    <Link to={`/detail/${props?.val?.id}`}>
      <div className="bg-gray-800 rounded-2xl overflow-hidden cursor-pointer transition duration-500 hover:scale-105">
        <div className="h-[201px]">
          <img className=" w-full h-full object-cover" src={props?.val?.thumbnail} alt={props?.val?.title} />
        </div>
        <div className="p-5">
          <p className="text-sm text-gray mb-1">{props?.val?.genre}</p>
          <p className="text-xl font-bold  mb-3">{props?.val?.title}</p>
          <p className="text-base text-gray truncate">{props?.val?.short_description}</p>
        </div>


      </div>
    </Link>
  )
}

export default GameCard

// Link to={`/detail/props.val.id`}