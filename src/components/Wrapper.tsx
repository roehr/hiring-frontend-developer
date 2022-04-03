import {SearchBar} from "./SearchBar";
import {TestimonialsList} from "./TestimonialsList";
import React from "react";
import {Headline} from "./Headline";
import {Header} from "./Header";
import {Testimonials, Track} from "../model";
import {getAllTracks, getTestimonials} from "../service/fetchData";
import {Pagination} from "./Pagination";

const Wrapper = () => {
    const [loading, isLoading] = React.useState(true);
    const [data, setdata] = React.useState(null as unknown as Testimonials)
    const [trackData, settrackData] = React.useState(null as unknown as Track[])
    const [order, setOrder] = React.useState("newest_first")
    const [page, setPage] = React.useState(1)
    React.useEffect(() => {
        getAllTracks().then((data) => {
                settrackData(data)
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
            <SearchBar />
            <TestimonialsList data={data} loading={loading}/>
            {!loading && data.pagination && <Pagination pagination={data.pagination} onPageClicked={onPaginationClicked}/>}
        </div>
    </div>
}

export {Wrapper}