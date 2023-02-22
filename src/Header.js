import Nav from "./Nav";

function Header() {
    return (
        <header className="Header">
            <h1><a href="/"><img src={process.env.PUBLIC_URL + '/img/toplogo.svg'} alt="" /></a></h1>
            <Nav />
        </header>
    )
}

export default Header;