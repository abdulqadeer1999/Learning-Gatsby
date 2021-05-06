import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import ProductOne from "../components/product1"
import ProductTwo from "../components/product2"
import Main from "../components/main"
import { Link } from "gatsby"
const App = () => {
  return (
    <Layout>

        <h1>See Products</h1>
        <div>
        <Link to="/product/page1">Product1</Link>   <br />
        <Link to="/product/page2">Product2</Link>
        </div>
      <Router basepath="/product">
        <ProductOne path="/page1" />
        <ProductTwo path="/page2" />
        <Main path="/" />
      </Router>
    </Layout>
  )
}

export default App