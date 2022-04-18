import React from "react";
import {iconMap} from "../../utils/iconurls";
import {Result, Testimonials} from "../../testimonial.model";
import "./TestimoinalsList.css"
import {TestimonialRow} from "./TestimonialRow";
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





    const renderTestimonials = () =>
        (
            <div className="testimonials">
                {props.data ?
                    props.data.results.map((result, index) =>
                        <TestimonialRow key={`row-${index}`}result={result} index={index}/>): renderNoTestimonials()
                }
            </div>
        )


    return <div className="testimonial-zone">
        {props.loading ? renderLoadingAnimation() : ''}
        {renderTestimonials()}
    </div>
}

export {TestimonialsList}