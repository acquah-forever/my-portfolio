import React, { useState, useEffect } from 'react'

const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0)

    function calculateScrollProgress() {

    }

    useEffect(() => {

        function handleScroll() {
            setScrollProgress(calculateScrollProgress)
        }

    }, [])


    return (
        <div>

        </div>
    )
}

export default useScrollProgress
