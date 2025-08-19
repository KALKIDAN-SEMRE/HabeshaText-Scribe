import React from 'react';
import AmharicConverter from '@/components/AmharicConverter';
import heroBackground from '@/assets/hero-background.jpg';

const Index = () => {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <AmharicConverter />
      </div>
    </div>
  );
};

export default Index;
