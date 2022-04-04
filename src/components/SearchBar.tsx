import React from "react";
import {TrackDropDown} from "./TrackDropDown";
import {SearchInput} from "./SearchInput";
import {SortOptions} from "./SortOptions";
import {AllTracks, EnhancedTrack, TrackData} from "../tracks.model";
import {enhanceMappingForSearch} from "../utils/enhanceTracks";
interface SearchBarProps{
    counts?: Object;
    trackList: TrackData[];
}
const SearchBar = (props: SearchBarProps) => {
    //console.log("tracks: ")
    //console.log(props.tracks)
    //console.log("trackCounts: ")
    //console.log(props.trackCounts)
    //console.log(enhanceTracks(props.tracks, props.trackCounts))
    let searchDropdown:EnhancedTrack[] = []
    if(props.counts){
       searchDropdown = enhanceMappingForSearch(props.counts, props.trackList)
    }
    return(
        <div className="searchbar">
            <TrackDropDown enhancedData={searchDropdown}/>
            <SearchInput />
            <SortOptions />
        </div>
    )

}
export {SearchBar}