import React from 'react'
import Button from './Button'

const PaginationControls = ({page, totalPages, setPage}) => {
  return (
    <>
     <div className="pagination-control flex justify-center items-center gap-4 absolute left-1/2 -translate-x-1/2  w-full max-w-[450px] ">
      <Button
        onClick={() => setPage(prev => Math.max(prev - 1, 1))}
        disabled={page === 1}
        variant="paginationButton"
        label='Prev'
        icon
      />

      <span className="text-white text-sm ">
        Page {page} of {totalPages}
      </span>

      <Button
        onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        variant="paginationButton"
        label='Next'
        icon
      />
    </div>
    </>
  )
}

export default PaginationControls
