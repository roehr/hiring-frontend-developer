export const computePaginationList = (currentPage: number, totalPages: number)  : string[]=> {
    const offset = 3;
    let pagesSet: Set<number> = new Set<number>()
    const beforeCurrent = currentPage - 1;
    const afterCurrent = currentPage + 1

    for(let i = 1; i<=offset; i++){
        pagesSet.add(i)
    }
    pagesSet.add(beforeCurrent);
    pagesSet.add(currentPage);
    pagesSet.add(afterCurrent)

    for(let i = totalPages - offset +1; i<=totalPages; i++){
       pagesSet.add(i)
    }

    const pages= Array.from(pagesSet.values());
    pages.sort((a,b) => a-b)

    let lastVal=0;
    let paginationList:string[] = [];
    pages.forEach(value => {
        if(value > 0 && value<=totalPages){
            (value-lastVal>1) ?
                paginationList=[...paginationList,"...",value.toString()] :
                paginationList=[...paginationList, value.toString()]

        }
        lastVal=value
    })
    return paginationList
}
