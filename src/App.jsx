import { useState } from "react"
import one from "./assets/one.png"
import two from "./assets/two.png"
import three from "./assets/three.png"

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? "dark" : ""}>
      <div className="w-screen h-screen flex bg-pink-200 dark:bg-rose-950 transition-colors duration-300">

        {/* SIDEBAR */}
        <aside className="w-64 p-6 shadow-lg 
                          bg-pink-300 dark:bg-rose-900 transition-colors">
          <h1 className="font-bold text-4xl font-baloo 
                         text-pink-700 dark:text-pink-300 mb-8">
            Dashboard
          </h1>

          <ul className="space-y-3 text-2xl font-baloo
                         text-pink-50 dark:text-pink-200">
            <li className="hover:text-pink-900 dark:hover:text-white cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-pink-900 dark:hover:text-white cursor-pointer transition">
              Gallery
            </li>
            <li className="hover:text-pink-900 dark:hover:text-white cursor-pointer transition">
              Favorites
            </li>
            <li className="hover:text-pink-900 dark:hover:text-white cursor-pointer transition">
              Preference
            </li>
          </ul>
        </aside>

        {/* MAIN */}
        <div className="flex-1 flex flex-col">

          {/* NAVBAR */}
          <nav className="h-24 flex items-center justify-between px-10 shadow-md
                          bg-pink-500 dark:bg-rose-800 transition-colors">
            <h1 className="text-4xl font-baloo font-semibold
                           text-pink-950 dark:text-pink-200">
            Welcome ✨
            </h1>

            <button
              onClick={() => setDark(!dark)}
              className="
                bg-pink-300 dark:bg-pink-500
                text-pink-900 dark:text-rose-950
                font-baloo text-2xl
                rounded-3xl px-6 py-2
                hover:bg-pink-900 hover:text-white
                dark:hover:bg-pink-400
                transition-all duration-200
                shadow active:scale-95
              "
            >
              {dark ? "Light Mode 💗" : "Dark Mode🌙"}
            </button>
          </nav>

          {/* CONTENT */}
          <main className="grid grid-cols-3 gap-10 p-10 place-items-center">

            {/* CARD 1 */}
            <div className="bg-pink-400 dark:bg-rose-800
                            p-4 rounded-2xl shadow-lg
                            hover:shadow-2xl hover:shadow-pink-400/40
                            transition">
              <img src={one} alt="pink aesthetic"
                   className="w-60 rounded-xl hover:scale-105 transition duration-200" />
            </div>

            {/* CARD 2 */}
            <div className="bg-pink-400 dark:bg-rose-800
                            p-4 rounded-2xl shadow-lg
                            hover:shadow-2xl hover:shadow-pink-400/40
                            transition">
              <img src={two} alt="cute teddy"
                   className="w-60 rounded-xl hover:scale-105 transition duration-200" />
            </div>

            {/* CARD 3 */}
            <div className="bg-pink-400 dark:bg-rose-800
                            p-4 rounded-2xl shadow-lg
                            hover:shadow-2xl hover:shadow-pink-400/40
                            transition">
              <img src={three} alt="pink drink"
                   className="w-60 rounded-xl hover:scale-105 transition duration-200" />
            </div>

          </main>
        </div>
      </div>
    </div>
  )
}

export default App
