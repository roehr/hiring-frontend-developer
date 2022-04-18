import React from "react";

interface SearchInputProps{
    onQueryInput: (query:string) => void
}

const SearchInput = (props: SearchInputProps) => {
    const [query, setQuery] = React.useState("")

    React.useEffect(()=>{
        const timeOutId = setTimeout(() => props.onQueryInput(query), 500);
        return () => clearTimeout(timeOutId);
    }, [query])

    return <div className="searchFilter">
        <input type="text" placeholder="Filter by Exercise Title" id="exercisefilter" onChange={event => setQuery(event.target.value)}/>
    </div>
}

export {SearchInput}