import {SearchBar} from "./SearchBar";
import {TestimonialsList} from "./TestimonialsList";
import React from "react";
import {Headline} from "./Headline";
import {Header} from "./Header";
import {Testimonials, TestimonialsRoot, Track} from "../testimonial.model";
import {getAllTracks, getTestimonials} from "../service/fetchData";
import {PaginationArea} from "./PaginationArea";
import {AllTracks, TrackData} from "../tracks.model";
import {enhanceMappingForSearch} from "../utils/enhanceTracks";

const Wrapper = () => {
    const [loading, isLoading] = React.useState(true);
    const [data, setdata] = React.useState(null as unknown as Testimonials)
    const [trackData, settrackData] = React.useState([] as TrackData[])
    const [order, setOrder] = React.useState("newest_first")
    const [page, setPage] = React.useState(1)
    const [enhancedTrackData, setEnhancedTrackData] = React.useState([])
    React.useEffect(() => {
        getAllTracks().then((data) => {
                settrackData(data.tracks)
            }
        ).catch()
    }, [])
    React.useEffect(() => {
        isLoading(true)
        getTestimonials(page, order).then(
            (data) => {
                setdata(data.testimonials);
                isLoading(false);
            }
        ).catch()
    }, [order, page])

    const onPaginationClicked = (newPage: number) => {
        setPage(newPage)
    }

    return <div id="exercism-testimonial">
        <Header/>
        <div className="mentoring-container">
            <Headline/>
            <SearchBar  counts={data&&data.track_counts? data.track_counts : undefined} trackList={trackData}/>

            {!loading && data.pagination && <PaginationArea pagination={data.pagination} onPageClicked={onPaginationClicked}/>}
        </div>
    </div>
}

export {Wrapper}