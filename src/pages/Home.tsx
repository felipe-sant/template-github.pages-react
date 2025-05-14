import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            Hello World! <br />
            <Link to="/about">Sobre</Link>
        </>
    )
}

export default Home