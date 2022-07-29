const Button = ({label, isDisabled, color, onClick}) => {
return (
        <div>
            <button
                disabled = {isDisabled}
                className={"group relative w-full flex justify-center py-2 px 4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"}
                onClick={onClick}
                >
                {" "}
                {label}
            </button>
        </div>
    );
};

export default Button;