import React, {useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";




const PreLoader = () => {
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000)
    }, [])



  return (
    <div>ghjhhggf</div>
  )
}

export default PreLoader