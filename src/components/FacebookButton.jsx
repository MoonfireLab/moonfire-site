import React from 'react';

const FacebookButton = () => {
  return (
    <div class="bg-white w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">
        <button class="group transition-all duration-500 hover:-translate-y-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
        <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="#337FFF"/>
        <path d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z" fill="white"/>
        </svg>
        </button>
    </div>
  )                     
};

export default FacebookButton;