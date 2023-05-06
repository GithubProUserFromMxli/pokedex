import React from 'react'

export const Pagination = ({goToNextPage, goToPrevPage}) => {
  return (
    <div>
        {goToPrevPage && <button onClick={goToPrevPage}>Previous page</button>}
        {goToNextPage && <button onClick={goToNextPage}>Next page</button>}
    </div>
  )
}
