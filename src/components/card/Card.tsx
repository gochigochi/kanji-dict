import { useSearchParams } from "react-router-dom"
import {KanjiSample } from "../../types"

const Card: React.FC<KanjiSample> = ({ kanji }) => {

  const [ _ , setSearchParams] = useSearchParams()

  const handleClick = () => {
    setSearchParams(`?kanji=${kanji}`)
  }

  return (
    <div className="grid-card" onClick={handleClick}>
        {kanji}
    </div>
  )
}

export default Card