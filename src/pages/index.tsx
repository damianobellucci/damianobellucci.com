import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import "../styles/global.css"
import Container from "../components/container/container"
import Avatar from "../components/avatar/avatar"

export default function Home() {
  return (
    <>
      <SEO>
        <title>Damiano Bellucci web page page</title>
        <meta
          name="description"
          content="Damiano Bellucci portfolio webpage."
        />
      </SEO>
      <Container>
        <Layout>
          <h1>
            <em>Let's code!</em>
          </h1>
          {/* <Link to="/about">About</Link> */}
          <Avatar srcAvatar={require("../../static/avatar.jpg")}></Avatar>
        </Layout>
      </Container>
    </>
  )
}
