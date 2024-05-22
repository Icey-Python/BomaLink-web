
'use client';

import React, { useState } from 'react';
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';
import Slide4 from './slide4';
import { AlignHorizontalJustifyCenter, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AppView() {
  const [activeTab, setActiveTab] = useState('Slide 1');

  const handlePreviousSlide = () => {
    if (activeTab === 'Slide 1') {
      setActiveTab('Slide 4');
    } else {
      setActiveTab(prevTab => {
        switch (prevTab) {
          case 'Slide 2':
            return 'Slide 1';
          case 'Slide 3':
            return 'Slide 2';
          case 'Slide 4':
            return 'Slide 3';
          default:
            return prevTab;
        }
      });
    }
  };

  const handleNextSlide = () => {
    if (activeTab === 'Slide 4') {
      setActiveTab('Slide 1');
    } else {
      setActiveTab(prevTab => {
        switch (prevTab) {
          case 'Slide 1':
            return 'Slide 2';
          case 'Slide 2':
            return 'Slide 3';
          case 'Slide 3':
            return 'Slide 4';
          default:
            return prevTab;
        }
      });
    }
  };

  return (
    <div className={' bg-lime-200'}>
      <div className="flex justify-between items-center py-8">
        <button onClick={handlePreviousSlide} className={'ml-4'}>
          <ChevronLeft size = {100}/>
        </button>
        <div className="flex justify-center items-center">
          {activeTab === 'Slide 1' && <Slide1 />}
          {activeTab === 'Slide 2' && <Slide2 />}
          {activeTab === 'Slide 3' && <Slide3 />}
          {activeTab === 'Slide 4' && <Slide4 />}
        </div>
        <button onClick={handleNextSlide} className={'mr-4'}>
          <ChevronRight size = {100} />
        </button>
      </div>
      <div className="flex justify-center items-center py-4">
        <nav className={'AlignHorizontalJustifyCenter'}>
          <button
            className={activeTab === 'Slide 1' ? 'active' : ''}
            onClick={() => setActiveTab('Slide 1')}
          >
            
          </button>
          <button
            className={activeTab === 'Slide 2' ? 'active' : ''}
            onClick={() => setActiveTab('Slide 2')}
          >
            
          </button>
          <button
            className={activeTab === 'Slide 3' ? 'active' : ''}
            onClick={() => setActiveTab('Slide 3')}
          >
            
          </button>
          <button
            className={activeTab === 'Slide 4' ? 'active' : ''}
            onClick={() => setActiveTab('Slide 4')}
          >
            
          </button>
        </nav>
      </div>
    </div>
  );
}