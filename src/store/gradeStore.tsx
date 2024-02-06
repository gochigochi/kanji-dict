import { create } from "zustand"

type State = { grade: number }

type Action = { setGrade: (grade: State["grade"]) => void }

export const useGradeStore = create<State & Action>((set) => ({
    grade: 1,
    setGrade: (val) => set({ grade: val })
}))