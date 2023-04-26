
export const TicketSearch = ({ searchTerms, onSearchTermChange }) => {
    return (
      <>
        <div>
          <div>Search for ticket</div>
          <input type="text" className=""
            value={searchTerms}
            onChange={
              (changeEvent) => {
                onSearchTermChange(changeEvent.target.value)
              }
            }
            placeholder="Enter title of ticket here..." />
  
        </div>
      </>
    )
  }