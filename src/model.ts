export interface DataModel {
testimonials: Testimonials;
}

export interface Testimonials{
    results: Result[];
    pagination?: PaginationModel;
    tracks: string[];
    track_counts?: Map<string, number>;
}

export interface Result {
    id: number;
    track: Track;
    exercise: Exercise;
    mentor: Mentor;
    content: String;
    created_at: Date;
}

export interface Track {
    slug: string;
    title: string;
    icon_url: string;
}

export interface Exercise{
    slug: string;
    title: string;
    icon_url: string;
}

export interface Mentor {
    handle: string;
    avatar_url: string;
}

export interface PaginationModel{
    current_page: number;
    total_count: number;
    total_pages: number;
}