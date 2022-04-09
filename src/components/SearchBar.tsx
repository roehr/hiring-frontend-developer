import React from "react";
import {TrackDropDown} from "./TrackDropDown";
import {SearchInput} from "./SearchInput";
import {SortOptions} from "./SortOptions";
import {EnhancedTrack, TrackData} from "../tracks.model";
import {enhanceMappingForSearch} from "../utils/enhanceTracks";
interface SearchBarProps{
    counts?: Object;
    trackList: TrackData[];
}
const SearchBar = (props: SearchBarProps) => {
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