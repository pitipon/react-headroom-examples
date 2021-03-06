import React from "react"
import styled from 'styled-components'
import Headroom from "react-headroom"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HeadroomWrapper = styled.div`
.headroom {
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  .headroom--unfixed {
    position: relative;
  }
  .headroom--scrolled {
    transition: transform 200ms ease-in-out;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(127%);
  }
  @media (min-width: 768px) {
      .headroom--unfixed {
          position: relative;
          transform: translateY(-64px);
      }
      .headroom--unpinned {
          position: fixed;
          transform: translateY(-50%);
      }
      .headroom--pinned {
          transform: translateY(11%);
      }
      .headroom--scrolled {
          transform: translateY(200px);
      }
  }
`

const SecondPage = () => (
  <Layout>
    <Headroom>
        <Header/>
    </Headroom>
    <HeadroomWrapper>
    <Headroom
        disableInlineStyles
    >
        <ul
            style={{
                backgroundColor: "orange",
                listStyle: "none"
            }}
        >
         <li
            style={{display: "inline-block"}}
         >
            Headroom #2
         </li>
        </ul>
    </Headroom>
    </HeadroomWrapper>
    <SEO title="Page two" />
    <h1>Multiple Components on a Page</h1>
    <p>There are two instances of <code>react-headroom</code> on this page.</p>
  </Layout>
)

export default SecondPage
