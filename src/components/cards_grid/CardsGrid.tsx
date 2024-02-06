import { useState } from "react"
import { useDidUpdateEffect } from "../../hooks/useDidUpdateEffect"
import { createResource } from "../../utils/createResource"
import { useGradeStore } from "../../store/gradeStore"
import Card from "../card/Card"

const createKanjiResource = (grade: number) =>
    createResource(() => {
        return fetch(`https://kanjiapi.dev/v1/kanji/grade-${grade}`)
            .then(res => res.json())
            .then(res => res)
    })

const initialResource = createKanjiResource(1)

const CardsGrid = () => {

    const grade = useGradeStore(state => state.grade)
    const [kanjiResource, setKanjiResource] = useState(initialResource)

    useDidUpdateEffect(() => {
        setKanjiResource(createKanjiResource(grade))
    }, [grade])

    return (
        <section className="grid">
            {
                kanjiResource.read().map(kanji => {
                    return (
                        <Card key={kanji} kanji={kanji} />
                    )
                })
            }
        </section>
    )
}

export default CardsGrid