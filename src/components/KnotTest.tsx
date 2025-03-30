import React from 'react';
import { initializeKnotAPI } from '../utils/knot';
import './GameUI.css';

interface KnotEvent {
  product: string;
  event: string;
  merchant: string;
  payload: any;
  taskId: string;
}

interface KnotSuccess {
  product: string;
  details: any;
}

interface KnotError {
  product: string;
  errorCode: string;
  message: string;
}

interface KnotTestProps {
  onExit?: () => void;
}

const KnotTest: React.FC<KnotTestProps> = ({ onExit }) => {
  const handleKnotTest = () => {
    const knotapi = initializeKnotAPI({
      onSuccess: (product: string, details: any) => {
        console.log('Knot API Success:', product, details);
      },
      onError: (product: string, errorCode: string, message: string) => {
        console.log('Knot API Error:', product, errorCode, message);
      },
      onEvent: (product: string, event: string, merchant: string, payload: any, taskId: string) => {
        console.log('Knot API Event:', product, event, merchant, payload, taskId);
      },
      onExit: (product: string) => {
        console.log('Knot API Exit:', product);
        console.log("about to do the below")
        onExit?.();
        console.log("finished exiting")
      }
    });
  };

  return (
    <button 
      onClick={handleKnotTest}
      className="connect-button"
    >
      Connect with Knot
    </button>
  );
};

export default KnotTest; 