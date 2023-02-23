import Nav from "./Nav";

function Header() {
    return (
        <header className="Header">
            <h1><a href="/"><img src={process.env.PUBLIC_URL + '/img/toplogo.svg'} alt="" /></a></h1>
            <Nav />
            <ul className="snb">
                <li><a href="">LOGIN</a></li>
                <li><a href="">MYPAGE</a></li>
                <li><a href="">SEARCH</a></li>
            </ul>
        </header>
    )
}

export default Header;