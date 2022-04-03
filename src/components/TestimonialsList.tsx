import React from "react";
import {iconMap} from "../utils/iconurls";
import {Result, Testimonials} from "../model";
interface TestimonialsListProps {
    data?: Testimonials
    loading: boolean
}
const TestimonialsList = (props: TestimonialsListProps) => {

    const renderLoadingAnimation = () => {
        return <div className="--fetching-overlay flex items-center"><img
            src={iconMap.get("loading")}
            alt="Loading data" className="icon c-icon--spin"/></div>
    }

    const renderNoTestimonials = () => {

        return <div className="no-testimonials">
            <img
            src={iconMap.get("emote")}
            alt="" role="presentation" className="icon"/>
            <h2>You currently have no testimonials</h2>
            <p>Testimonials are left by students on ending successful mentoring discussions.</p></div>
    }

    const renderTestimonialRow = (result: Result, index: number)  =>
        (
            <div className={`testimonial-row`} key={index}>
                <div className="track-icon">
                    <img
                        src={iconMap.get(result.track.icon_url)}
                        alt="" role="presentation" className="icon"/>
                </div>
                <div className="mentor-info">{result.mentor.handle}</div>
                <div className="testimonial-content">{result.content}</div>
                <div className="navigation"></div>
            </div>
        );

    const renderTestimonials = () =>
        (
            <div className="testimonials">
                {props.data ?
                    props.data.results.map((result, index) => {
                        return renderTestimonialRow(result, index)
                    }) : renderNoTestimonials()
                }
            </div>
        )


    return <div className="c-results-zone">
        {props.loading ? renderLoadingAnimation() : ''}
        {renderTestimonials()}

    </div>
}

export {TestimonialsList}