
export interface Links {
    self: string;
    exercises: string;
    concepts: string;
}

export interface TrackData {
    slug: string;
    title: string;
    course: boolean;
    num_concepts: number;
    num_exercises: number;
    web_url: string;
    icon_url: string;
    tags: string[];
    last_touched_at?: Date;
    is_new: boolean;
    links: Links;
    is_joined: boolean;
    num_learnt_concepts: number;
    num_completed_exercises: number;
    num_solutions: number;
    has_notifications: boolean;
}

export interface AllTracks {
    tracks: TrackData[];
}

export interface EnhancedTrack {
    slug:string;
    title: string;
    icon_url:string;
    count: number;
}