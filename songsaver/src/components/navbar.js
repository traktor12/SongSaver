export default function Navbar(){
    return <nav className="nav">
        <span className="siteTitle">Song Saver</span>
        <ul>
            <li>
                <a href="/songsaver">Song List</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
}