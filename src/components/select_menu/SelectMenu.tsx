import { useState } from "react"
import Btn from "./Btn"
import Menu from "./Menu"

const SelectMenu = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="select-container">
            <Btn setOpen={setOpen}/>
            { open ? <Menu setOpen={setOpen}/> : null }
        </div>
    )
}

export default SelectMenu