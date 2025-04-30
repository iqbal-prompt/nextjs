export default function Button({ text, bgColor = 'bg-blue-500', hoverColor = 'hover:bg-blue-600' }){
    return (
        <button 
            className={`px-6 py-3 ${bgColor} text-white font-bold tracking-wide rounded-lg cursor-pointer ${hoverColor} transition-colors duration-300`}
        >
            {text}
        </button>
    );
}