import { PictureFrame } from "./Components/PictureFrame";
import { NavBar } from "./Components/NavBar";

function App() {
    return(
        <>
            <Collector/>
        </>
    )
}

function Logo() {
    return (
        <div 
            className="
            z-20
            fixed top-2 left-2 
            w-[100px] h-[100px] 
            rounded-full
            bg-gray-500
            bg-[url(silent stories (6).gif)]
            object-cover
            "
        >
        </div>
    )
}


function Collector() {
    return(
        <div className="bg-[#18181b]">
            <Logo/>
            <NavBar />
            <div className="grid grid-cols-3 justify-between">
                <div className="pl-[100px] flex items-center min-h-screen">
                    <PictureFrame 
                        img={"night.jpg"}
                        watermark={"@ Echo of Frames"} 
                        title={"silents moments of streets"} 
                        description={"From the street of the jaipur"}
                    />
                </div>
                <div className="pl-[100px] flex items-center min-h-screen">
                    <PictureFrame 
                        img={"night.jpg"}
                        watermark={"@ Echo of Frames"} 
                        title={"silents moments of streets"} 
                        description={"From the street of the jaipur"}
                    />
                </div>
                <div className="pl-[100px] flex items-center min-h-screen">
                    <PictureFrame 
                        img={"night.jpg"}
                        watermark={"@ Echo of Frames"} 
                        title={"silents moments of streets"} 
                        description={"From the street of the jaipur"}
                    />
                </div>
                <div className="pl-[100px] flex items-center min-h-screen">
                    <PictureFrame 
                        img={"night.jpg"}
                        watermark={"@ Echo of Frames"} 
                        title={"silents moments of streets"} 
                        description={"From the street of the jaipur"}
                    />
                </div>
            </div>
        </div>
    )
}

export default App;