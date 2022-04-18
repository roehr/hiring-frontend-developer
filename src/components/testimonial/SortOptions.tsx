import React from "react";

interface SortOptionsProps{
    onSelect: (order: string) => void
}
const SortOptions = (props: SortOptionsProps) => {
    return <div className="searchOptions">
        <select data-testid= "sort-options" name="order" id="order" onChange={(event)=>props.onSelect(event.target.value)}>
            <option value="newest_first">Sort by Most Recent</option>
            <option data-testid= "sort-options-oldest" value="oldest_first">Sort by Oldest First</option>
        </select>
    </div>
}

export {SortOptions}