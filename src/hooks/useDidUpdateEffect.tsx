import { useEffect, useRef } from 'react'

export const useDidUpdateEffect = (callback: () => void, deps: number[]) => {

    const isFirstRender = useRef(true)

    useEffect(() => {

        if (!isFirstRender.current) {
            callback()
        }
        
        isFirstRender.current = false

    }, deps)
}