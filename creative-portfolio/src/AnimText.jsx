import { useEffect } from 'react';
import './Animation.css';

/*
props: 
    time of start
    transtion time i.e how long is the transition
    og text
    new text

*/
function AnimText({ itemKey, ogText, position='middle', duration=5000, timelineStart=0, fadeOut=false, delayed=false }) {

    const parsePosition = (position) => {
        if(position === "middle") {
            return 'center';
        } else if (position === "left") {
            return 'flex-start';
        } else {
            return 'flex-end';
        }
    }

    const generateStyles = (jc) => ({
        display: `flex`,
        justifyContent: `${jc}`,
        animationName: delayed ? `` : `fadein`,
        animationDuration: `1s`,
        animationDelay: `${timelineStart}`,
        display: delayed ? 'none': 'flex',
    })

    setTimeout(function () {
        if (fadeOut) {
            const item = document.getElementById(itemKey);
            item.style.animationName = 'fadeout';
            item.style.animationDuration = '1s';
            item.style.animationFillMode = 'forwards';
            item.style.display = 'none'
        }
        
        if (delayed) {
            const item = document.getElementById(itemKey);
            item.style.animationName = 'fadein';
            item.style.animationDelay = `${timelineStart}`
            item.style.animationDuration = '1s';
            item.style.animationFillMode = 'forwards';
            item.style.display = 'flex'
        }
    }, duration)

    return (
        <div id={itemKey} className="subtext" style={generateStyles(parsePosition(position))}>{ogText}</div>
    )
}

export default AnimText