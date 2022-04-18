import React from "react";

interface SortOptionsProps{
    onSelect: (order: string) => void
}
const SortOptions = (props: SortOptionsProps) => {
    return <div className="searchOptions">
        <select name="order" id="order" onChange={(event)=>props.onSelect(event.target.value)}>
            <option value="newest_first">Sort by Most Recent</option>
            <option value="oldest_first">Sort by Oldest First</option>
        </select>
    </div>
}

export {SortOptions}