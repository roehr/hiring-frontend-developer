import {EnhancedTrack, TrackData} from "../tracks.model";

export const enhanceMappingForSearch = (testimonialData: Object, trackinfos: TrackData[]): EnhancedTrack[]=> {
    const impData = Object.entries(testimonialData);
    let enhancedData: EnhancedTrack[] = []
    impData.forEach(([key, value]) =>{
        const trackData = trackinfos.find((entry) => entry.slug === key)
        if(trackData){
            const newEntry = {
                slug: key,
                count: value as number,
                title: trackData.title,
                icon_url: trackData.icon_url
            } as EnhancedTrack
            enhancedData = [...enhancedData, newEntry]
        }
    })
    console.log(enhancedData)
    return enhancedData;
}