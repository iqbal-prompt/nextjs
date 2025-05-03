export function Button({text, onClick, bgColor = 'bg-blue-500', hoverColor = 'hover:bg-blue-600'}) {
    return (
        <button 
        onClick={onClick}
        className={`px-6 py-3 ${bgColor} text-white font-bold tracking-wide rounded-lg cursor-pointer ${hoverColor} transition-color duration-300`}>
        {text}
        </button>
    );
}
export function Input({ placeholder, onChange, type = 'text' }) {
    return (
        <input
        onChange = {onChange}
        type={type}
        placeholder={placeholder}
        className="px-5 py-3 border border-gray-300 rounded-lg w-full text-center"
        />
    );
}
export function FlexBox({ children }) {
    return (
        <div className="w-[85%] flex flex-col sm:flex-row items-center justify-center gap-4  
        max-w-210">
            {children}
        </div>
    )
}