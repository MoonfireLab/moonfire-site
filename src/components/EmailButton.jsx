import React from 'react';

const EmailButton = () => {
  return (
    <div class="bg-white w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">
        <button class="group transition-all duration-500 hover:-translate-y-2">
            <svg width="48" height="48" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.638672" y="0.5" width="90.5618" height="90.5618" rx="14.5" fill="white" stroke="#C4CFE3"/>
            <path d="M22.0065 66.1236H30.4893V45.5227L18.3711 36.4341V62.4881C18.3711 64.4997 20.001 66.1236 22.0065 66.1236Z" fill="#4285F4"/>
            <path d="M59.5732 66.1236H68.056C70.0676 66.1236 71.6914 64.4937 71.6914 62.4881V36.4341L59.5732 45.5227" fill="#34A853"/>
            <path d="M59.5732 29.7693V45.5229L71.6914 36.4343V31.587C71.6914 27.0912 66.5594 24.5282 62.9663 27.2245" fill="#FBBC04"/>
            <path d="M30.4893 45.5227V29.769L45.0311 40.6754L59.5729 29.769V45.5227L45.0311 56.429" fill="#EA4335"/>
            <path d="M18.3711 31.587V36.4343L30.4893 45.5229V29.7693L27.0962 27.2245C23.4971 24.5282 18.3711 27.0912 18.3711 31.587Z" fill="#C5221F"/>
            </svg>
        </button>
    </div>
  )                     
};

export default EmailButton;