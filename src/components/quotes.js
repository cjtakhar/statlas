import { useState, useEffect } from "react"

export default function Quotes() {
   const [quote, setQuote] = useState([])
   const APIKEY = 'eaadfb3eb8a43e9001a146f55234a91b59c2944'
    
   useEffect(() => {
    const fetchData = async () => {
        const data = await fetch(`https://zenquotes.io?api=random&key=${APIKEY}`, {mode: 'no-cors'});
        setQuote(data)
    };
    fetchData()
   }, []);

   console.log(quote)
    return(
        <div>

        </div>
    )
}