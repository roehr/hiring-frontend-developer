import * as React from "react";
import {EnhancedTrack} from "../tracks.model";
interface TrackDropDownProps{
    enhancedData: EnhancedTrack[]
}
const TrackDropDown = (props: TrackDropDownProps) => {

    const renderElement = (track:EnhancedTrack) =>
        <div className="option">
            <input type="radio" id={track.slug}/> <label htmlFor={track.slug}>{track.title}</label>
            <span>{track.count}</span>
        </div>

    return <div className="trackdropdown">
    {props.enhancedData.map((track) => {
       return renderElement(track)
    })}
</div>
}
export {TrackDropDown}