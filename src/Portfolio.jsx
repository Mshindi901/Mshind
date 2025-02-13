
function Portfolio() {
    return(
        <>
            <div className="bg-slate-800 w-screen h-screen">
                //Navbar
                <div className="flex justify-evenly py-6">
                    <h1 className="text-7xl text-blue-600">Mshindi</h1>
                    <nav>
                        <ul className="flex justify-evenly gap-3 text-white text-3xl">
                            <li>Home</li>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Contacts</li>
                        </ul>
                    </nav>
                    <button className="w-max h-max px-3 py-2 bg-blue-600 text-white rounded-lg">Hire me</button>
                </div>
            </div>
        </>
    )
}

export default Portfolio();