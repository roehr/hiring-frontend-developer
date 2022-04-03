import {DataModel, Testimonials, Track} from "../model";

export const getAllTracks = async () => {
    const response = await fetch('https://exercism.org/api/v2/tracks')
    return await response.json() as Track[]
}
export const getTestimonials = async (page: number, order: string, track?: string, exercise?: string ) : Promise<DataModel>=>{
    const url =  `https://exercism.org/api/v2/hiring/testimonials?page=${page}${track?'&track='+track:''}${exercise?'&exercise='+exercise:''}order=${order}`

    const response = await fetch(url);
    //const response = await fetch('https://exercism.org/api/v2/hiring/testimonials');
    return await response.json() as DataModel
}

