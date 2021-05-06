import React from "react"

const Fruit = (pageContext) => {
 
    return (
        <div>
          <h1>{pageContext.name}</h1>
            <h3>Description</h3>
              {pageContext.desc}
            </div>
    )
}

export default Fruit;