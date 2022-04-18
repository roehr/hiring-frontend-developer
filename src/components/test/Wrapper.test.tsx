import {fireEvent, screen, render, waitFor, getByTestId} from "@testing-library/react";
import React from "react";
import {Wrapper} from "../Wrapper";
import {AllTracks} from "../../tracks.model";
import {TestimonialsRoot} from "../../testimonial.model";
import * as service from "../../service/fetchData";
import {expect} from "@jest/globals";
import userEvent from "@testing-library/user-event";
describe('Wrapper test', () => {

    test('renders No data', async () => {
        const tracks = {tracks: []} as AllTracks
        const testimonials = {testimonials: {
                results: [],
                pagination: {current_page:0, total_pages:0, total_count:0},
                tracks:[],
                track_counts: {}
            }} as TestimonialsRoot
        jest.spyOn(service, "getAllTracks").mockResolvedValueOnce(tracks)
        jest.spyOn(service, "getTestimonials").mockResolvedValueOnce(testimonials)
        render(<Wrapper />)
        expect(await screen.findByText("You currently have no testimonials")).toBeTruthy()
        expect(screen).toMatchSnapshot();
    });

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
        },
            {
                slug:'cpp',
                title:'CPP',
                course: true,
                icon_url: "cicon",
                has_notifications: true,
                is_joined: true,
                is_new: false,
                last_touched_at: new Date(),
                links: {self: 'cppself', concepts:'Cpp Concepts', exercises: "CPP EXC"},
                num_completed_exercises: 0,
                num_concepts: 2,
                num_exercises: 32,
                num_learnt_concepts: 22,
                num_solutions: 0,
                tags:[],
                web_url: "cppurl"
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
                {
                    id: 1244,
                    track: {
                        slug:"c",
                        icon_url:"urlimg",
                        title: "C"
                    },
                    mentor: {
                        avatar_url:"av_url",
                        handle:"handle"
                    },
                    content: "Some more Content",
                    exercise: {
                        slug:"c",
                        icon_url:"urlimg",
                        title: "some ExerciseTitle",
                    },
                    created_at: new Date("2021-05-08T19:55:15.000Z")
                },
                {
                    id: 1254,
                    track: {
                        slug:"cpp",
                        icon_url:"urlimg",
                        title: "CPP"
                    },
                    mentor: {
                        avatar_url:"av_url",
                        handle:"handle"
                    },
                    content: "Some Other Content",
                    exercise: {
                        slug:"cpp",
                        icon_url:"urlimg",
                        title: "some ExerciseTitle",
                    },
                    created_at: new Date("2021-05-08T19:55:15.000Z")
                }
            ],
            pagination: {
                current_page:2,
                total_pages:2,
                total_count:23},
            tracks:[
                "c",
                "cpp"],
            track_counts: {
                "c": 61,
                "cpp": 9,
            }
        }} as TestimonialsRoot

        test('renders With data', async () => {
            jest.spyOn(service, "getAllTracks").mockResolvedValue(tracks)
            const testimonialSpy = jest.spyOn(service, "getTestimonials")
            testimonialSpy.mockResolvedValue(testimonials)
            render(<Wrapper/>)
            expect(screen.getByTestId('container-loading')).toBeTruthy()
            await waitFor(() => screen.getByTestId('container-loaded'))
            expect(testimonialSpy).toHaveBeenCalledWith(1, expect.anything(), undefined, undefined);
        });

            test('select Track', async () => {
                jest.spyOn(service, "getAllTracks").mockResolvedValue(tracks)
                const testimonialSpy = jest.spyOn(service, "getTestimonials")
                testimonialSpy.mockResolvedValue(testimonials)
                render(<Wrapper/>)
                await waitFor(() => screen.getByTestId('container-loaded'))
                expect(testimonialSpy).toHaveBeenCalledWith(1, expect.anything(), undefined, undefined);
                fireEvent.click(screen.getByTestId("track-options-button"))
                await waitFor(() => screen.getByTestId('track-option-c'))
                userEvent.click(screen.getByTestId('track-option-c'))
                await waitFor(() => {expect(testimonialSpy).toHaveBeenCalledWith(1, expect.anything(), "c", undefined)})
            });

            test('select Sort', async () => {
                jest.spyOn(service, "getAllTracks").mockResolvedValue(tracks)
                const testimonialSpy = jest.spyOn(service, "getTestimonials")
                testimonialSpy.mockResolvedValue(testimonials)
                render(<Wrapper/>)
                await waitFor(() => screen.getByTestId('container-loaded'))
                expect(testimonialSpy).toHaveBeenCalledWith(1, expect.anything(), undefined, undefined);
                fireEvent.change(screen.getByTestId('sort-options'), { target: { value: 0 } })
                await waitFor(() => {expect(testimonialSpy).toHaveBeenCalledWith(1, "newest_first", undefined, undefined)})
            });

    test('select Page', async () => {
        jest.spyOn(service, "getAllTracks").mockResolvedValue(tracks)
        const testimonialSpy = jest.spyOn(service, "getTestimonials")
        testimonialSpy.mockResolvedValue(testimonials)
        render(<Wrapper/>)
        await waitFor(() => screen.getByTestId('prev-button'))
        expect(testimonialSpy).toHaveBeenCalledWith(1, expect.anything(), undefined, undefined);
        fireEvent.click(screen.getByTestId('prev-button'))
        await waitFor(() => {expect(testimonialSpy).toHaveBeenCalledWith(1, "newest_first", undefined, undefined)})
    });

    test('search Exercise', async () => {
        jest.spyOn(service, "getAllTracks").mockResolvedValue(tracks)
        const testimonialSpy = jest.spyOn(service, "getTestimonials")
        testimonialSpy.mockResolvedValue(testimonials)
        render(<Wrapper/>)
        await waitFor(() => screen.getByTestId('prev-button'))
        expect(testimonialSpy).toHaveBeenCalledWith(1, expect.anything(), undefined, undefined);
        fireEvent.change(screen.getByPlaceholderText('Filter by Exercise Title'), {target: {value: test}})
        await waitFor(() => {expect(testimonialSpy).toHaveBeenCalledWith(1, "newest_first", undefined, expect.anything())})
    });

    test('renders With Errors', async () => {
        jest.spyOn(service, "getAllTracks").mockRejectedValue("error")
        const testimonialSpy = jest.spyOn(service, "getTestimonials")
        testimonialSpy.mockRejectedValue("error")
        const underTest = render(<Wrapper/>)
        expect(underTest).toMatchSnapshot()
    });



});