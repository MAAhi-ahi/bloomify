// eslint-disable-next-line react/prop-types
export function Button({ children, onClick, className }) {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-yellow-400 text-white rounded-lg ${className}`}
      >
        {children}
      </button>
    );
  }
  