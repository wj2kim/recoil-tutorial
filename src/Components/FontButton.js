import React from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const fontSizeState = atom({
    key: 'fontSizeState',
    default: 14,
  });

const fontSizeLabelState = selector({
    key: 'fontSizeLabelState',
    get: ({get}) => {
      const fontSize = get(fontSizeState);
      const unit = 'px';
  
      return `${fontSize}${unit}`;
    },
});

function FontButton() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    const fontSizeLabel = useRecoilValue(fontSizeLabelState);

    return (
        <>
            <div>Current font size: {fontSizeLabel}</div>
    
            <button onClick={() => setFontSize(fontSize + 1)} style={{fontSize}}>
            Click to Enlarge
            </button>
        </>
    )
}

export default FontButton;