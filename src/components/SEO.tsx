import React from "react"
import { Helmet } from "react-helmet"

const SEO = function ({ children }): JSX.Element {
  return (
    <>
      <Helmet>{children}</Helmet>
    </>
  )
}

export default SEO
