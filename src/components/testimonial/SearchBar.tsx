import React from "react";
import {TrackDropDown} from "./TrackDropDown";
import {SearchInput} from "./SearchInput";
import {SortOptions} from "./SortOptions";
import {EnhancedTrack, TrackData} from "../../tracks.model";
import {enhanceMappingForSearch} from "../../utils/enhanceTracks";
import "./Searchbar.css"
interface SearchBarProps{
    counts?: Object;
    trackList: TrackData[];
    totalCount: number;
    updateSlug: (slug:string) => void
    updateSearch: (exercise:string) => void
    updateOrder: (order: string) => void
}
const SearchBar = (props: SearchBarProps) => {
    let searchDropdown:EnhancedTrack[] = []
    if(props.counts){
       searchDropdown = enhanceMappingForSearch(props.counts, props.trackList, props.totalCount)
    }
    return(
        <div className="searchbar">
            <div className="tracksearchselection">
                <TrackDropDown enhancedData={searchDropdown}  updateData={props.updateSlug}/>
                <SearchInput  onQueryInput={props.updateSearch}/>
            </div>
            <div className="sortoption">
                <SortOptions onSelect={props.updateOrder} />
            </div>
        </div>
    )
}
export {SearchBar}