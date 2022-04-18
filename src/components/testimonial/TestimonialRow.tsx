import {Result} from "../../testimonial.model";
import moment from "moment";
import React from "react";

interface TestimonialRowProps{
    result: Result,
    index:number
}

const TestimonialRow = (props: TestimonialRowProps) => {
    const [hovered, setHovered] = React.useState(false)

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

    return (<a className={`testimonial-row ${hovered? 'testimonial-row--active' : ''}`} href={`#${props.result.id}`}
               key={props.index}
               data-testid={`r-${props.result.id}-${hovered?'hovered':'inactive'}`}
               onMouseEnter={()=>setHovered(true)}
               onMouseLeave={()=>setHovered(false)}
        >
                <div className="track-icon">
                    <img
                        src={props.result.track.icon_url}
                        alt="" role="presentation" className="icon"/>
                </div>
                {renderMentorInfo(props.result)}
                <div className="testimonial-content">{props.result.content}</div>
                <div className="testimonial-time">{moment(props.result.created_at).fromNow()}</div>
                <div className="testimonial-arrow"></div>
        </a>
    );

}

export {TestimonialRow}