
export const CategoryButton = ({ id, name, setCategory, active = false }) => {
    return (
        <button
            onClick={() => setCategory(id)}
            className={`
            py-3 px-6 font-bold text-sm shadow-md  
            ${active
                    ? 'bg-primary text-white'
                    : 'bg-white text-slate-700'}`}>{name}</button>
    )
}