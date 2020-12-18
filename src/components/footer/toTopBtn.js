import React from "react"

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import "./footer.css"

export default function ToTopBtn() {
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  // Load FontAwesome
  library.add(fas, fab)

  return (
    <div className="toTopBtn" onClick={handleClick}>
      <FontAwesomeIcon className="topBtnIcon" icon={["fas", "chevron-up"]} />
    </div>
  )
}
