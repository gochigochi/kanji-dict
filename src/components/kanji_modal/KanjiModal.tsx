import { useSearchParams } from "react-router-dom"
import useClick from "../../hooks/useClick"
import { Kanji } from "../../types"

interface Props {
  kanji: Kanji
}

const KanjiModal: React.FC<Props> = ({ kanji }) => {

  const [_, setSearchParams] = useSearchParams()

  useClick((event) => {
    if (event.target.className === "modal-container") setSearchParams("")
  })

  return (
    <div className="modal-container">
      <article className="modal">
        <div className="modal-top">
          <h2>{kanji.kanji}</h2>
        </div>
        <div className="modal-bottom">
          <p className="small-title">Kunyomi</p>
          {kanji.kun_readings.map(read => <p>{read}</p>)}
          <p className="small-title">Onyomi</p>
          {kanji.on_readings.map(read => <p>{read}</p>)}
        </div>
      </article>
    </div>
  )
}

export default KanjiModal