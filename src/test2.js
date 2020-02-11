function findAngle(hour, minute){    
    if(hour < 0 || minute < 0 || hour > 12 || minute > 60)
        return `Wrong Input`;

    if(hour == 12)
        hour = 0;

    if(minute == 60)
        minute = 0;
        
    let hAngle = (0.5 * (hour * 60 + minute));
    let mAngle = (6 * minute);

    let angle = Math.abs(hAngle - mAngle);

    angle = Math.min(360 - angle, angle);

    return `The angle: ${angle}`;
}

module.exports = findAngle;