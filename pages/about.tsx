import Loading from "../components/common/Loading/Loading";

export default function About(){

    return (
        <div>
            <Loading/>
            <h1>About</h1>
            <p>Data provided by <a href='http://ergast.com/mrd/'>Ergast Developer API</a>.</p>
            <p>Graphs built using <a href='https://uber.github.io/react-vis/'>React-Vis</a>.</p>
        </div>

    )
}