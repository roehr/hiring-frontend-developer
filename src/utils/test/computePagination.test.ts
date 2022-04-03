import {computePaginationList} from "../computePagination";

describe('Pagination computations', () => {
    test('TotalPages = 2', () => {
        const expected = ["1", "2"];
        expect(computePaginationList(1,2)).toStrictEqual(expected)

    });

    test('TotalPages = 6, selected: 5', () => {
        const expected = ["1", "2","3","4","5","6"];
        expect(computePaginationList(5,6)).toStrictEqual(expected)
    });

    test('TotalPages = 15, selected: 10', () => {
        const expected = ["1", "2","3","...","9","10","11","...", "13","14","15"];
        expect(computePaginationList(10,15)).toStrictEqual(expected)
    });

    test('TotalPages = 15, selected: 15', () => {
        const expected = ["1", "2","3","...","13","14","15"];
        expect(computePaginationList(15,15)).toStrictEqual(expected)
    });
})