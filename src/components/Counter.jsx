import {useState} from 'react';

function Counter() {

    const[count, setCount] = useState(0);
    const[animate, setAnimate] = useState(false);

    const increment = () => {
        setCount(prev => prev + 1);
        triggerAnimation();
    };
    const decrement = () => {
        setCount(prev => Math.max(0, prev - 1));
        triggerAnimation();
    };
    const reset = () => {
        setCount(0);
        triggerAnimation();
    };
 
    const triggerAnimation = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
    };

  return (
    <div className="max-w-xs mx-auto bg-white rounded-2xl shadow-lg p-8 text-center ">
        <h1 className="text-2xl font-bold text-gray-800">Counter</h1>
        <p className={`text-6xl font-bold text-gray-500 transition-transform duration-300 ${animate ? 'scale-110' : 'scale-100'}`}>Count: {count}</p>

        <div className="flex gap-4 justify-center mt-6">
            <button onClick={decrement} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                -
            </button>
            <button onClick={reset} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                Reset
            </button>
            <button onClick={increment} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                +
            </button>
        </div>
    </div>
  )
}

export default Counter