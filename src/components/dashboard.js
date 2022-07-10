import {useState} from 'react';
import Display from './display';

export default function Dashboard() {
    const [stat, setStat] = useState([]);
    const APIKEY = "38219d4ba54d7b3139ece100b48bd0cc";

    async function oddsData(e) {
        e.preventDefault();
        const data = await fetch(
            `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&oddsFormat=american&apiKey=${APIKEY}`
        )
        .then((res) => res.json())
        .then((data) => data);

        setStat({ data: data })

        console.log(stat.data[0].bookmakers[0].markets[0].outcomes)
    }
    
    return(
        <div>
            <div>
                <h1>statlas</h1>
                <h2>the premiere sports atlas</h2>
            </div>
            <div>
                <form>
                    <input type="text" className="input-container" />
                    <button type="submit" onClick={(e) => oddsData(e)} className="btn">STATS</button>
                </form>
            </div>
            <div>
               
            </div>
        </div>
    )
}