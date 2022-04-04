import {PaginationArea} from "../PaginationArea";
import {render} from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";

describe('Pagination test', () => {
    test('renders Pagination', () => {
        const underTest = render(<PaginationArea pagination={{current_page:2, total_pages:10, total_count:200}} onPageClicked={jest.fn}/>)
        expect(underTest).toMatchSnapshot();
    });
    test('Only one Page', async () => {
        const pagination = {current_page:1, total_pages:1, total_count:20}
        const underTest = render(<PaginationArea pagination={pagination} onPageClicked={jest.fn()}/>)
        expect(underTest.getByTestId("prev-button").className).toContain("disabled")
        expect(underTest.getByTestId("next-button").className).toContain("disabled")
    })
    describe('Clicks', () => {
        const onClick = jest.fn();
        const pagination = {current_page:4, total_pages:10, total_count:200};
        test('Prev Button', async () => {
            const underTest = render(<PaginationArea pagination={pagination} onPageClicked={onClick}/>)
            await userEvent.click(underTest.getByTestId("prev-button"))
            expect(onClick).toHaveBeenCalled()
        });
        test('Next Button', async () => {
            const underTest = render(<PaginationArea pagination={pagination} onPageClicked={onClick}/>)
            await userEvent.click(underTest.getByTestId("next-button"))
            expect(onClick).toHaveBeenCalled()
        });
        test('Click on a Page Button', async () => {
            const underTest = render(<PaginationArea pagination={pagination} onPageClicked={onClick}/>)
            await userEvent.click(underTest.getByTestId("pagination-button1"))
            expect(onClick).toHaveBeenCalled()
        })
    });
})

