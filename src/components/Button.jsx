const Button = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className="bg-[#b07cce] text-white px-4 py-2 rounded hover:bg-[#9662b4] transition w-fit self-start justify-self-end absolute bottom-8 left-8 hover:cursor-pointer"
		>
			<p className="text-[#160122]">Nova Citação</p>
		</button>
	);
};

export default Button;
