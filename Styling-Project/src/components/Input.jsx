export default function Input({ label, invalid, ...props }) {
    return (
        <p>
            <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300">
                {label}
            </label>

            <input
                className={`w-full px-3 py-2 leading-tight border rounded shadow text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                invalid
                    ? 'bg-red-100 border-red-500'
                    : 'bg-stone-300 border-stone-400'
                }`}
                {...props}
            />
        </p>
    );
}