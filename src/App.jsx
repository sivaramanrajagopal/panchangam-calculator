import React from 'react';
import PanchangamCalculator from './components/PanchangamCalculator';

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-amber-50 p-4 overflow-hidden">
      <div className="w-full max-w-lg mx-auto">  {/* Increased max width slightly */}
        <PanchangamCalculator />
      </div>
    </div>
  );
}


export default App;
