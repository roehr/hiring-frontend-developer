import * as service from "../../service/fetchData";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {Wrapper} from "../Wrapper";
import {expect} from "@jest/globals";
import React from "react";
import {TestimonialRow} from "../testimonial/TestimonialRow";
import {TestimonialsList} from "../testimonial/TestimonialsList";
import userEvent from "@testing-library/user-event";

describe('TestimonialList Tests', () => {
    const testData = {
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
        }}
    test('Hovers Testimonial', async () => {
        render(<TestimonialsList loading={false} data={testData}/>)
        await waitFor(() => screen.getByTestId('r-1234-inactive'))
        fireEvent.mouseEnter(screen.getByTestId('r-1234-inactive'))
        expect(await screen.getByTestId('r-1234-hovered')).toBeTruthy()
        fireEvent.mouseLeave(screen.getByTestId('r-1234-hovered'))
        expect(await screen.getByTestId('r-1234-inactive')).toBeTruthy()
    });

})