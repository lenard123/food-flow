export const ProductCard = ({ image, name, description, price }) => {
    return (
        <div className="bg-white p-2 w-60 shadow">
            <div className="relative">
                <img className="aspect-video object-cover" src={`/storage/${image}`} />
            </div>
            <h4 className="mt-3 font-bold text-slate-700 leading-5">{name}</h4>
            <div className="mt-3 text-sm text-slate-500 font-light">
                {description}
            </div>
            <div className="mt-3 flex items-end">
                <div className="font-bold text-xl text-primary">₱{price}</div>
            </div>
        </div>
    )
}