const rundownAPI = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'aea580c444msh910d73231e1ff19p15df90jsn8ae27be4ec2d',
        'X-RapidAPI-Host': 'therundown-therundown-v1.p.rapidapi.com'
    }
};

export default function Options () {
    const fetchData = () => {
        fetch('https://therundown-therundown-v1.p.rapidapi.com/affiliates', rundownAPI)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }

    return(
        <div>
            <button onClick={fetchData}>Stats</button>
        </div>
    )
}