"use client"
import useTheme from "@/components/useTheme";
import Link from "next/link";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme)
  return (
    <>
      {theme == "light" ? (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 bg-purple-200`}>
          <h1 className="font-bold text-3xl max-[450px]:text-xl max-[450px]:mb-2">Hello Welcome To Next js Project</h1>
          <p className="w-9/12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellat mollitia possimus, nisi et reiciendis, veritatis tempora, tenetur dolorem nostrum laboriosam odit pariatur! Rerum minus illum odit mollitia consequatur nesciunt optio ut maxime totam.</p>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:text-blue-600 bg-pink-300">Toggle Theme</button>
          <p className="font-bold text-xl">Using - {theme === 'light' ? 'Light' : 'Dark'} Theme</p>
          <Link href="/card">Way To Card Page</Link>
        </main>
      ) : (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 bg-gray-800 text-white`}>
          <h1 className="font-bold text-3xl">Hello Welcome To Next js Project</h1>
          <p className="w-9/12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellat mollitia possimus, nisi et reiciendis, veritatis tempora, tenetur dolorem nostrum laboriosam odit pariatur! Rerum minus illum odit mollitia consequatur nesciunt optio ut maxime totam.</p>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:text-blue-600 bg-pink-300">Toggle Theme</button>
          <p className="font-bold text-xl">Using - {theme === 'light' ? 'Light' : 'Dark'} Theme</p>
          <Link href="/card">Way To Card Page</Link>
        </main>
      )
      }
    </>
  )

}
