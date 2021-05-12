import React from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const videoWidthState = atom({
    key: 'videoWidthState',
    default: 400,
})

const videoHeightState = atom({
    key: 'videoHeightState',
    default: 200,
})

const videoSizeState = selector({
    key: 'videoSizeState',
    get: ({get}) => {
        const videoWidth = get(videoWidthState)
        const videoHeight = get(videoHeightState);
        const unit = 'px';

        return { 
            width: videoWidth + unit,
            height: videoHeight + unit,
        };
    }
});

function VideoWrapper() {
    const [videoWidth, setVideoWidth] = useRecoilState(videoWidthState);
    const [videoHeight, setVideoHeight] = useRecoilState(videoHeightState);
    const videoSize = useRecoilValue(videoSizeState);

    const increaseSize = () => {
        setVideoWidth(videoWidth + 1);
        setVideoHeight(videoHeight + 1);
    }

    return (
        <>
            <div>Video Wrapper Tutorial</div>
            <div style={{width: videoSize.width, height: videoSize.height, border: `1px solid red`}} />

            <button onClick={increaseSize} >크기 키우기</button>
        </>
    )
}

export default VideoWrapper;

