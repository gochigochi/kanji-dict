import { useEffect } from 'react'

const useClick = (
    handler: (event: React.MouseEvent<HTMLDivElement> & { target: HTMLButtonElement }) => any
) => {

    useEffect(() => {

        setTimeout(() => {
            document.addEventListener("click", handler)
        }, 200)

        return () => document.removeEventListener("click", handler)

    }, [])
}

export default useClick