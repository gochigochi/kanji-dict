import useClick from "../../hooks/useClick"
import { useGradeStore } from "../../store/gradeStore"

type Props = {
    setOpen: (value: boolean) => void
}

const Menu: React.FC<Props> = ({ setOpen }) => {

    const setGrade = useGradeStore(state => state.setGrade)

    useClick((e) => {
        e.target.className !== "select-menu-item" && setOpen(false)
    })

    const handleClick = (grade: number) => {
        setGrade(grade)
        setOpen(false)
    }

    return (
        <ul className="select-menu">
            <li className="select-menu-item" onClick={() => handleClick(1)}>Grade 1</li>
            <li className="select-menu-item" onClick={() => handleClick(2)}>Grade 2</li>
            <li className="select-menu-item" onClick={() => handleClick(3)}>Grade 3</li>
            <li className="select-menu-item" onClick={() => handleClick(4)}>Grade 4</li>
            <li className="select-menu-item" onClick={() => handleClick(5)}>Grade 5</li>
            <li className="select-menu-item" onClick={() => handleClick(6)}>Grade 6</li>
        </ul>
    )
}

export default Menu