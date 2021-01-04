import React from "react"

export default function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  )
}
