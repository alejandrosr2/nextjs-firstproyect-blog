export default function CustomBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <div className="h-full w-full bg-zinc-800 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-secondary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div
                    className="absolute w-full h-full top-[80px] opacity-15 blur-[100px] saturate-150"
                    style={{
                        backgroundImage: `
                            radial-gradient(at 27% 37%, hsla(215, 98%, 30%, 1) 0px, transparent 50%),
                            radial-gradient(at 10% 29%, hsla(215, 98%, 30%, 1) 0px, transparent 50%),
                            radial-gradient(at 55% 100%, hsla(285, 98%, 30%, 1) 0px, transparent 50%),
                            radial-gradient(at 42% 89%, hsla(285, 98%, 30%, 1) 0px, transparent 50%),
                            radial-gradient(at 97% 21%, hsla(200, 98%, 30%, 1) 0px, transparent 50%),
                            radial-gradient(at 69% 43%, hsla(200, 98%, 30%, 1)  0px, transparent 50%)
                        `
                    }}
                ></div>
            </div>
        </div>
    )
}
