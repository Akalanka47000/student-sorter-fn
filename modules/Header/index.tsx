const Header = () => {
    return (
        <header>
            <div className="p-5 flex flex-col items-center bg-gray-100 shadow-xl shadow-gray-200/50" >
                <h2 className="text-4xl text-center font-bold text-slate-900 pb-2">Student Group Sorter</h2>
                <p className="text-lg text-center text-slate-700">Sort student into groups with intelligent algorithm</p>
            </div>
        </header>
    )
}

export default Header;