import React from 'react';
import Loading from '../assets/loading.json';
import Lottie from 'lottie-react';

const LoadingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#fff',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
        }}
      >
        <Lottie
          animationData={Loading}
          style={{
            maxWidth: '100%',
            maxHeight: '200px'
          }}
        />
      </div>
      <h1 className='text-black font-bold text-center'>
        Finding learning path recommendations for you based on your responses
      </h1>
    </div>
  );
};

export default LoadingPage;
