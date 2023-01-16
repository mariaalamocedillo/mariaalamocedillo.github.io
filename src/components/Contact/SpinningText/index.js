import React from "react"
import './index.scss'


const SpinningText = ({ text, size, children }) => {

  const lenght = text.length;
  const deg = 360 / lenght;

  return (
    <div className={`spinning-text-wrapper ${size}`}>
      <div className={`spinning-text ${size}-txt`}>
        <h1 className="spinning-title">
          {text.split("").map((letra, i) => (
            <span
              className='spinning-letter'
              key={i}
              style={{
                transform: `rotate(${deg * i}deg)`,
              }}
            >
              {letra}
            </span>
          ))}

        </h1>
      </div>
      {children}
    </div>
  );
}

export default SpinningText;
