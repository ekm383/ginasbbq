import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
import Intro from "../components/Intro"
import imgIndex from "../images/bg/ginas-bbq-restaurant.jpg"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home | Gina's BBQ"
      description="Gina's BBQ is located in Market City Shopping Center. We're a family-owned restaurant serving traditional & Hawaiian-style Korean meats, soups & noodles.`,
      author: `@restaurantmarketinghawaii"
      keywords={[
        `Korean Restaurant`,
        `Hawaii Restaurant`,
        `Hawaii Korean Food`,
        `Korean BBQ Takeout`,
        `Korean BBQ Honolulu`,
      ]}
    />
    <HeaderIndex img={imgIndex} style={{ padding: "4rem 0rem" }}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <Banner
          title="Gina's BBQ"
          subtitle="Gina's BBQ is located in Market City Shopping Center. We're a family-owned restaurant serving traditional & Hawaiian-style Korean meats, soups & noodles."
        >
          <AniLink fade to="#menu">
            <Button>ORDER TAKEOUT</Button>
          </AniLink>
        </Banner>
      </Section>
    </HeaderIndex>
    <Section id="menu" style={{ marginTop: "2rem" }}>
      <Intro heading="our menu" />
    </Section>
    <Section id="information" style={{ marginTop: "2rem" }}>
      <Intro heading="how can we help you?" />
      <ContactForm />
    </Section>
  </Layout>
)

export default IndexPage
