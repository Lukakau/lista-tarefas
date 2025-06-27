function Input(props) {
    return (
        <input 
               className="
                    w-full
                    px-4 py-2
                    text-white
                    rounded-lg
                    bg-[#343438]
                    border-2
                    border-transparent
                    outline-none
                    focus:outline-none
                    focus:ring-2
                    ring-2
                    ring-transparent
                    focus:ring-transparent
                    transition-all duration-200
                    [background:linear-gradient(#343438,#3a3a3a)_padding-box,linear-gradient(90deg,#a855f7,#ec4899)_border-box]
                "
            {...props}
        />
    );
}

export default Input