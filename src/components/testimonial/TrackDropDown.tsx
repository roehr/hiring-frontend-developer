import * as React from "react";
import {EnhancedTrack} from "../../tracks.model";
import "./TrackDropDown.css"
import {iconMap} from "../../utils";
interface TrackDropDownProps{
    enhancedData: EnhancedTrack[]
    updateData: (slug:string) => void
}

const TrackDropDown = (props: TrackDropDownProps) => {
    const [active, setActive] = React.useState(false)
    const renderElement = (track:EnhancedTrack) => {
       return <div className="option" key={`track-${track.slug}`}>
           <input type="radio" data-testid={`track-option-${track.slug}`} id={track.slug} name="trackoption" onChange={()=>props.updateData(track.slug)
           }/>
           <img className="track-icon" src={track.icon_url} />
           <label htmlFor={track.slug}>{track.title}</label>
           <span className="trackcount">{track.count}</span>
       </div>
    }

    const onButtonClicked = () =>  {
        setActive(!active)
    }

    return <div className="trackdropdown">
        <button data-testid="track-options-button" className="trackbutton" aria-haspopup="true" onClick={onButtonClicked}>
            <img className="track-icon" src={iconMap.get("alltracks")}/>
            <img className="chevron" src={iconMap.get("chevron")}/>
        </button>
        {active&&<div className="trackoptions">
        <fieldset>
            <form>
            {active && props.enhancedData.map((track) => {
                return renderElement(track)
            })}
            </form>
        </fieldset>
        </div>}
</div>
}
export {TrackDropDown}