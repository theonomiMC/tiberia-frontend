import { useState } from "react";

export default function usePagination(data, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPage = Math.ceil(data.length / itemsPerPage)

    function currentData() {
        let start = (currentPage - 1) * itemsPerPage
        let end = start + itemsPerPage
        return data.slice(start, end)
    }
    function nextPage() {
        setCurrentPage(currentPage => Math.min(currentPage + 1, totalPage))
    }
    function prevPage() {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1))
    }
    function customPage(page) {
        let pageNumber = Math.max(page, 1)
        setCurrentPage(currentPage=>Math.min(pageNumber, totalPage))
    }
    return { nextPage, prevPage, customPage, currentPage, totalPage, currentData }
}