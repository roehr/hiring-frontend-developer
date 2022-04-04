    export interface Track {
        slug: string;
        title: string;
        icon_url: string;
    }

    export interface Exercise {
        slug: string;
        title: string;
        icon_url: string;
    }

    export interface Mentor {
        handle: string;
        avatar_url: string;
    }

    export interface Result {
        id: number;
        track: Track;
        exercise: Exercise;
        mentor: Mentor;
        content: string;
        created_at: Date;
    }

    export interface Pagination {
        current_page: number;
        total_count: number;
        total_pages: number;
    }

    export interface Testimonials {
        results: Result[];
        pagination: Pagination;
        tracks: string[];
        track_counts: Object;
    }

    export interface TestimonialsRoot {
        testimonials: Testimonials;
    }

    export interface convertedTrackCount {
        slug: string;
        count: number;
    }