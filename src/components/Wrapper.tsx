import {SearchBar} from "./testimonial/SearchBar";
import {TestimonialsList} from "./testimonial/TestimonialsList";
import React from "react";
import {Hero} from "./header/Hero";
import {Header} from "./header/Header";
import {Testimonials} from "../testimonial.model";
import {getAllTracks, getTestimonials} from "../service/fetchData";
import {PaginationArea} from "./testimonial/PaginationArea";
import {TrackData} from "../tracks.model";
import './Wrapper.css';

const Wrapper = () => {
    const [loading, isLoading] = React.useState(true);
    const [data, setdata] = React.useState(null as unknown as Testimonials)
    const [trackData, settrackData] = React.useState([] as TrackData[])
    const [order, setOrder] = React.useState("newest_first")
    const [track, setTrack] = React.useState("")
    const [query, setQuery] = React.useState("")
    const [page, setPage] = React.useState(1)
    React.useEffect(() => {
        getAllTracks().then((data) => {
                settrackData(data.tracks)
            }
        ).catch()
    }, [])
    React.useEffect(() => {
        isLoading(true)
        const trackParam=track===""? undefined: track
        const queryParam=query===""? undefined: query
        getTestimonials(page, order,trackParam,queryParam).then(
            (data) => {
                setdata(data.testimonials);
                isLoading(false);
            }
        ).catch()
    }, [order, page, track, query])

    const onPaginationClicked = (newPage: number) => {
        setPage(newPage)
    }

    const onSearch = (newQuery: string) => {
        setQuery(newQuery)
    }

    const onTrackSelect = (newTrack: string) => {
        setTrack(newTrack)
    }

    const onOrderSelect = (order: string) => {
        setOrder(order)
    }

    return <div id="testimonial">
        <Header/>
        <Hero/>
        <div className="testimonial-container">
            <SearchBar
                counts={data&&data.track_counts? data.track_counts : undefined}
                trackList={trackData}
                totalCount={data&&data.pagination? data.pagination.total_count : 0}
                updateSearch={onSearch}
                updateSlug={onTrackSelect}
                updateOrder={onOrderSelect}
            />
            <TestimonialsList data={data}  loading={loading}/>
            {!loading && data.pagination && <PaginationArea pagination={data.pagination} onPageClicked={onPaginationClicked}/>}
        </div>
    </div>
}

export {Wrapper}