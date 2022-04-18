import {EnhancedTrack, TrackData} from "../tracks.model";
import {iconMap} from "./iconurls";

export const enhanceMappingForSearch = (testimonialData: Object, trackinfos: TrackData[], totalCount: number): EnhancedTrack[]=> {
    const impData = Object.entries(testimonialData);
    let enhancedData: EnhancedTrack[] = []
    const allTracksEntry: EnhancedTrack ={
        slug: '',
        count: totalCount,
        title: 'All',
        icon_url: iconMap.get("alltracks")!
    }
    enhancedData = [...enhancedData, allTracksEntry]
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
    return enhancedData;
}