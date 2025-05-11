

export function PictureFrame({
    img,
    watermark,
    title,
    description,
}) {
    return (
        <div className="relative h-[500px] w-[500px] rounded-2xl shadow-2xl shadow-yellow-400 bg-[#232326] overflow-hidden text-zinc-100">
            <img 
                src={img} 
                alt="captured frame" 
                className="object-cover w-full h-full rounded-2xl"
            />

            <div className="absolute top-3 left-3 font-bold text-yellow-400">{watermark}</div>

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent text-zinc-100 rounded-b-2xl p-4">
                <div>{title}</div>
                <div className="flex justify-between items-end mt-2">
                    <div className="italic text-yellow-400">"{description}"</div>
                    <div className="flex space-x-2">
                        <button className="bg-yellow-400/20 hover:bg-yellow-400/40 px-3 py-1 rounded-full text-yellow-400">enhance</button>
                        <button className="bg-yellow-400/20 hover:bg-yellow-400/40 px-3 py-1 rounded-full text-yellow-400">story</button>
                    </div>
                </div>
            </div>
        </div>
    )
}