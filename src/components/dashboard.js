import {useState, useEffect } from 'react';

export default function Dashboard() {
    
    const [stat, setStat] = useState([]);
    const APIKEY = "38219d4ba54d7b3139ece100b48bd0cc";

    useEffect(() => {
        const fetchStats = () => {
             fetch(`https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&oddsFormat=american&apiKey=${APIKEY}`, {mode: 'no-cors'})
            .then((res) => res.json())
            .then((data) => setStat({data: data}))
          }
          
        fetchStats()
    }, [])
    
    console.log(stat)
    
    return(
        <div>
            <div>
                <h1>statlas</h1>
                <h2>the premiere sports atlas</h2>
            </div>
            <div>
                <form>
                    <input type="text" className="input-container" />
                    <button type="submit" className="btn">STATS</button>
                </form>
            </div>
            <div>
               <ul>
    
               </ul>
            </div>
        </div>
    )
}