// eslint-disable-next-line react/prop-types
export function Card({ children }) {
    return <div className="bg-white shadow-lg rounded-lg p-4">{children}</div>;
  }
  
  // eslint-disable-next-line react/prop-types
  export function CardContent({ children }) {
    return <div className="p-4">{children}</div>;
  }
  