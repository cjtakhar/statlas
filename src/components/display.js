export default function Display (props) {
    const {data} = props;
    return(
        <div>
            <h1> {data.name} </h1>
        </div>
    )
}