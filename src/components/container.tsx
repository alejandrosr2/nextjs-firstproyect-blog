

export default function Container({children}: {
    children: React.ReactNode
}) {
    return (
        <div className="max-w-[80%] md:max-w-[60%] mx-auto bg-white bg-opacity-85 min-h-[85vh] max-h-[85vh] flex flex-col rounded-xl">
            {children}
        </div>
    )
}
