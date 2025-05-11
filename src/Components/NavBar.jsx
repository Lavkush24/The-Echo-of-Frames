export function NavBar() {
    return (
        <div className="fixed z-50 flex flex-col justify-center self-center left-4 h-screen">
            <div 
                className="
                    flex flex-col gap-y-3
                "
            >
                <img src="" alt="" />
                <nav className="flex flex-col gap-y-3 content-center">
                    <IconButton href={""} label="Home">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                        </svg>
                    </IconButton>
                    <IconButton href={""} label={"The Frame Room"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </IconButton>
                    <IconButton href={""} label={"Behind The Frame"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                    </IconButton>
                    <IconButton href={""} label={"Behind The Lens"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                    </IconButton>
                    <IconButton href={""} label={"Let's Connect"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                        </svg>
                    </IconButton>
                </nav>

                <div className="flex flex-col gap-y-3 content-center">
                    <IconButton href={""}> 
                        "i"
                    </IconButton>
                    <IconButton href={""}> 
                        "T"
                    </IconButton>
                </div>
            </div>
        </div>
    )
}


function IconButton({href,children,label}) {
    return(
        <div className="relative flex items-center justify-center group">
            <a
                href={href}
                className="
                    h-[40px] w-[40px] 
                    rounded-full 
                    shadow-2xl 
                    shadow-yellow-400
                    text-zinc-100
                    bg-[#232326] 
                    grid place-content-center 
                    transform
                    transition-transform duration-200
                    hover:bg-yellow-400
                    hover:scale-115
                    hover:text-[#18181b]
                    hover:border-2
                "
            >
                {children}
            </a>
            {label && (
                <span className="
                    absolute left-full ml-2 px-2 py-1 rounded bg-yellow-400 text-[#18181b] text-xs opacity-0 pointer-events-none
                    transition-opacity duration-200
                    group-hover:opacity-100
                    peer-hover:opacity-100
                    z-50
                ">
                    {label}
                </span>
            )}
        </div>
    )
}