import { Suspense } from "react"
import CardsGrid from "./components/cards_grid/CardsGrid"
import Nav from "./components/layout/Nav"
import KanjiModalContainer from "./components/kanji_modal/KanjiModalContainer"

function App() {
  return (
    <main>
      <Nav />
      <Suspense fallback={<p style={{ width: "100%" }}>Loading....</p>}>
        <CardsGrid />
      </Suspense>
      <KanjiModalContainer />
    </main>
  )
}

export default App
