import * as React from "react";
import {Pagination} from "../testimonial.model";
import {computePaginationList} from "../utils";

interface PaginationProps {
    pagination: Pagination
    onPageClicked: (page: number) => void
}
const PaginationArea = (props: PaginationProps) => {

    const onPreviousClicked = () => {
        if(props.pagination.current_page !== 1) {
            props.onPageClicked(props.pagination.current_page-1)
        }
    }

    const onNextClicked = () => {
        if(props.pagination.current_page < props.pagination.total_pages) {
            props.onPageClicked(props.pagination.current_page+1)
        }
    }

    const onPageNumberClicked = (candidate:string) => {
        if(candidate!=="...") {
            props.onPageClicked(Number(candidate))
        }
    }


    const renderPages = () =>
       computePaginationList(props.pagination.current_page, props.pagination.total_pages).map(
           (value, index)=>
               <div key={index} onClick={()=>{onPageNumberClicked(value)}}  data-testid={`pagination-button${Number(value) === props.pagination.current_page ? '-active': index}`}>{value}</div>

       )


    return <div className="pagination">
        <div className={`previous ${props.pagination.current_page !== 1 ? '' : 'disabled'}`} onClick={onPreviousClicked}  data-testid="prev-button">Previous</div>
        <div className="pages">
            {renderPages()}
        </div>
        <div className={`next ${props.pagination.current_page !== 1 ? '' : 'disabled'}`} onClick={onNextClicked}  data-testid="next-button">Next</div>
    </div>
}

export {PaginationArea}