import { useState, useEffect } from 'react';

export default function Ye () {
    const [quote, setQuote] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://api.kanye.rest`)
            .then((res) => res.json())
            .then((data) => setQuote(data))
        }
        console.log(quote)
        fetchData()
        
    },[])

    return(
        <div>
            <h1>ye.</h1>
            <button>Click it.</button>
            <div>
                
            </div>
        </div>
    )
} 