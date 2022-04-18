import {TestimonialsRoot} from "../testimonial.model";
import {AllTracks} from "../tracks.model";

export const getAllTracks = async () => {
    const response = await fetch('https://exercism.org/api/v2/tracks')
    return await response.json() as AllTracks
}
export const getTestimonials = async (page: number, order: string, track?: string, exercise?: string ) : Promise<any>=>{
    const url =  `https://exercism.org/api/v2/hiring/testimonials?page=${page}${track?'&track='+track:''}${exercise?'&exercise='+exercise:''}&order=${order}`
    const response = await fetch(url);
    return await response.json() as TestimonialsRoot

}

