import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { type Kanji } from "../../types"
import KanjiModal from "./KanjiModal"

const KanjiModalContainer = () => {

    const [searchParams] = useSearchParams()
    const [kanji, setKanji] = useState<Kanji|null>(null)

    useEffect(() => {

        const kanjiParam = searchParams.get("kanji")

        if (kanjiParam) {

            const fetchData = async () => {

                try {

                    const data = await (await fetch(`https://kanjiapi.dev/v1/kanji/${kanjiParam}`)).json()

                    setKanji({
                        kanji: data.kanji,
                        grade: data.grade,
                        meanings: data.meanings,
                        heisig_en: data.heisig_en,
                        kun_readings: data.kun_readings,
                        on_readings: data.on_readings,
                        name_readings: data.name_readings,
                    })

                } catch (err) {

                    console.log("ERROR fetching: ", err)
                }
            }

            fetchData()
        }

        if (!kanjiParam) setKanji(null)


    }, [searchParams])

    if (kanji) {
        return <KanjiModal kanji={kanji} />
    }
}

export default KanjiModalContainer