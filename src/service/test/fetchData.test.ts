import {AllTracks} from "../../tracks.model";
import {TestimonialsRoot} from "../../testimonial.model";
import * as service from "../fetchData"

describe('Test services', ()=> {
    const tracks = {tracks: [{
            slug:'c',
            title:'C',
            course: true,
            icon_url: "cicon",
            has_notifications: true,
            is_joined: true,
            is_new: false,
            last_touched_at: new Date(),
            links: {self: 'cself', concepts:'C Concepts', exercises: "C EXC"},
            num_completed_exercises: 0,
            num_concepts: 2,
            num_exercises: 32,
            num_learnt_concepts: 22,
            num_solutions: 0,
            tags:[],
            web_url: "curl"
        }]} as AllTracks

    const testimonials = {testimonials: {
            results: [
                {
                    id: 1234,
                    track: {
                        slug:"cpp",
                        icon_url:"urlimg",
                        title: "CPP"
                    },
                    mentor: {
                        avatar_url:"av_url",
                        handle:"handle"
                    },
                    content: "Some Content",
                    exercise: {
                        slug:"c",
                        icon_url:"urlimg",
                        title: "some ExerciseTitle",
                    },
                    created_at: new Date("2021-05-08T19:55:15.000Z")
                },
            ],
            pagination: {
                current_page:1,
                total_pages:1,
                total_count:1},
            tracks:[
                "c"],
            track_counts: {
                "c": 1
            }
        }} as TestimonialsRoot
    test('test AllTrackData', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(tracks),
            }),
        ) as jest.Mock;

        expect(await service.getAllTracks()).toBe(tracks)
    })

    test('test Testimonials', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(testimonials),
            }),
        ) as jest.Mock;

        expect(await service.getTestimonials(1,"newest_first", undefined, undefined)).toBe(testimonials)
    })
})