export interface Kanji {
    kanji: string
    grade: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    meanings: string[]
    heisig_en: string | null
    kun_readings: string[]
    on_readings: string[]
    name_readings: string[]
}

export type ListOfKanjis = Kanji[]