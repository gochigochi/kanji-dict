import { useGradeStore } from "../../store/gradeStore"

type Props = {
    setOpen: (value: boolean) => void
}

const Btn: React.FC<Props> = ({ setOpen }) => {

    const grade = useGradeStore(state => state.grade)

    return (
        <button className="select-btn" onClick={() => setOpen(true)}>Grade {grade}</button>
    )
}

export default Btn