import React from "react";
import {iconMap} from "../utils/iconurls";
import {Result, Testimonials} from "../testimonial.model";
import moment from "moment";
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


    const renderMentorInfo = (result:Result) => {
        return (<>
            <div className="mentor-image">
                <img
                    src={result.mentor.avatar_url}
                    alt="" role="presentation" className="icon"/>
            </div>
            <div className="mentor-text-wrap">
                <div className="mentorname">
                    {result.mentor.handle}
                </div>
                <div className="mentorTopic">
                    {`on ${result.exercise.title} in ${result.track.title}`}
                </div>
            </div>
        </>)

    }
    const renderTestimonialRow = (result: Result, index: number)  =>
        (
            <a href={`#${result.id}`} className={`testimonial-row`} key={index}>
                <div className="track-icon">
                    <img
                        src={result.track.icon_url}
                        alt="" role="presentation" className="icon"/>
                </div>
                <div className="mentor-info">
                    {renderMentorInfo(result)}
                </div>
                <div className="testimonial-content">{result.content}</div>
                <div className="time">{moment(result.created_at).fromNow()}</div>
                <div className="arrow"></div>
            </a>
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


    return <div className="m-results-zone">
        {props.loading ? renderLoadingAnimation() : ''}
        {renderTestimonials()}
    </div>
}

export {TestimonialsList}