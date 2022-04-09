import * as React from "react";
import {EnhancedTrack} from "../tracks.model";
interface TrackDropDownProps{
    enhancedData: EnhancedTrack[]
}
const TrackDropDown = (props: TrackDropDownProps) => {
    const [active, setActive] = React.useState(false)
    const renderElement = (track:EnhancedTrack) =>
        <div className="option">
            <input type="radio" id={track.slug}/> <label htmlFor={track.slug}>{track.title}</label>
            <span>{track.count}</span>
        </div>
    const onButtonClicked = () =>  {
        setActive(!active)
    }

    return <div className="trackdropdown">
        <button aria-haspopup="true" onClick={onButtonClicked}>
            Test
        </button>
        {active && props.enhancedData.map((track) => {
            return renderElement(track)
        })}
</div>
}
export {TrackDropDown}