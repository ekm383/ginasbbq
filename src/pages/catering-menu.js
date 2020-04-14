import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import imgIndex from "../images/bg/ginas-bbq-restaurant.jpg"
import Intro from "../components/Intro"
import styled from "styled-components"

const CateringMenu = () => (
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
        <Banner title="Catering"></Banner>
      </Section>
    </HeaderIndex>
    <Section id="menu" style={{ margin: "4rem auto" }}>
      <MenuWrapper>
        <Intro
          heading="Set Menus"
          subheading="We offer variety of choices to make your mouth and budget happy. Whether you order on per person basis, or order  a la carte (medium pan), we guarantee satisfaction, both in your mouth and in your wallet! To order, please call us at (808) 735-7964 or Fax us at (808) 739-0887. Prices are subject to change without notice."
        />
        <div className="container">
          <div>
            <h4>SET A $8.50/PERSON</h4>
            <ul>
              <li>Kalbi</li>
              <li>BBQ Beef</li>
              <li>BBQ Chicken</li>
              <li>Meat Jun</li>
              <li>Veggie Spring Roll</li>
              <li>Bibim Kooksoo</li>
              <li>Rice</li>
              <li>Assorted Veggies</li>
            </ul>
          </div>
          <div>
            <h4>SET B $9.00/PERSON</h4>
            <ul>
              <li>Kalbi</li>
              <li>BBQ Beef</li>
              <li>BBQ Chicken</li>
              <li>Meat Jun</li>
              <li>Chicken Wings</li>
              <li>Veggie Spring Roll</li>
              <li>Rice</li>
              <li>Assorted Veggies</li>
            </ul>
          </div>
          <div>
            <h4>SET C $9.50/PERSON</h4>
            <ul>
              <li>Kalbi</li>
              <li>BBQ Beef</li>
              <li>BBQ Chicken</li>
              <li>Meat Jun</li>
              <li>Chicken Wings</li>
              <li>Chicken Katsu</li>
              <li>Veggie Spring Roll</li>
              <li>Bibim Kooksoo</li>
              <li>Rice</li>
              <li>Assorted Veggies</li>
            </ul>
          </div>
          <div>
            <h4>SET D $10.00/PERSON</h4>
            <ul>
              <li>Kalbi</li>
              <li>BBQ Beef</li>
              <li>BBQ Chicken</li>
              <li>Meat Jun</li>
              <li>Chicken Wings</li>
              <li>Chicken Katsu</li>
              <li>Long Rice</li>
              <li>Veggie Spring Roll</li>
              <li>Bibim Kooksoo</li>
              <li>Rice</li>
              <li>Assorted Veggies</li>
            </ul>
          </div>
          <div>
            <h4>SET E $11.00/PERSON</h4>
            <ul>
              <li>Kalbi</li>
              <li>BBQ Beef</li>
              <li>BBQ Chicken</li>
              <li>Meat Jun</li>
              <li>Fish Jun</li>
              <li>Chicken Wings</li>
              <li>Chicken Katsu</li>
              <li>Long Rice</li>
              <li>Veggie Spring Roll</li>
              <li>Bibim Kooksoo</li>
              <li>Rice</li>
              <li>Assorted Veggies</li>
            </ul>
          </div>
          <div>
            <h4>SET F $13.50/PERSON</h4>
            <ul>
              <li>Kalbi</li>
              <li>BBQ Chicken</li>
              <li>Meat Jun</li>
              <li>Fish Jun</li>
              <li>Chicken Wings</li>
              <li>Chicken Katsu</li>
              <li>Shrimp Tempura</li>
              <li>Spicy Pork</li>
              <li>Long Rice</li>
              <li>Veggie Spring Roll</li>
              <li>Bibim Kooksoo</li>
              <li>Rice</li>
              <li>Assorted Veggies</li>
            </ul>
          </div>
        </div>
        <br />
        <Intro
          heading="Party Pans"
          subheading="We offer variety of choices to make your mouth and budget happy. Whether you order on per person basis, or order  a la carte (medium pan), we guarantee satisfaction, both in your mouth and in your wallet! To order, please call us at (808) 735-7964 or Fax us at (808) 739-0887. Prices are subject to change without notice."
        />
        <div className="container">
          <div>
            <h4>Meat Jun</h4>
            <ul>
              <li>Small: $27.00</li>
              <li>Medium: $42.00</li>
              <li>Large: $80.00</li>
            </ul>
          </div>
          <div>
            <h4>Long Rice</h4>
            <ul>
              <li>Small: $28.00</li>
              <li>Medium: $40.00</li>
              <li>Large: $75.00</li>
            </ul>
          </div>
          <div>
            <h4>Fish Jun</h4>
            <ul>
              <li>Small: $30.00</li>
              <li>Medium: $45.00</li>
              <li>Large: $90.00</li>
            </ul>
          </div>
          <div>
            <h4>Bibim Kooksoo</h4>
            <ul>
              <li>Small: $27.00</li>
              <li>Medium: $35.00</li>
              <li>Large: $70.00</li>
            </ul>
          </div>
          <div>
            <h4>Chicken Katsu</h4>
            <ul>
              <li>Small: $27.00</li>
              <li>Medium: $42.00</li>
              <li>Large: $80.00</li>
            </ul>
          </div>
          <div>
            <h4>Assorted Veggies</h4>
            <ul>
              <li>Small: $28.00 w/ Daegu</li>
              <li>Medium: $35.00 w/ Daegu</li>
              <li>Large: $70.00 w/ Daegu</li>
            </ul>
          </div>
          <div>
            <h4>Rice</h4>
            <ul>
              <li>Small: $8.00</li>
              <li>Medium: $10.00</li>
              <li>Large: $20.00</li>
            </ul>
          </div>
          <div>
            <h4>Garlic Chicken</h4>
            <ul>
              <li>Small: $28.00</li>
              <li>Medium: $39.00</li>
              <li>Large: $78.00</li>
            </ul>
          </div>
          <div>
            <h4>Hot Fried Chicken Wings</h4>
            <ul>
              <li>Small: $8.00</li>
              <li>Medium: $10.00</li>
              <li>Large: $20.00</li>
            </ul>
          </div>
          <div>
            <h4>Pork Katsu</h4>
            <ul>
              <li>Small: $30.00</li>
              <li>Medium: $45.00</li>
              <li>Large: $90.00</li>
            </ul>
          </div>
          <div>
            <h4>Mandoo</h4>
            <ul>
              <li>Small: $27.00</li>
              <li>Medium: $42.00</li>
              <li>Large: $80.00</li>
            </ul>
          </div>
          <div>
            <h4>Squash Jun</h4>
            <ul>
              <li>Small: $27.00</li>
              <li>Medium: $42.00</li>
              <li>Large: $80.00</li>
            </ul>
          </div>
          <div>
            <h4>Shrimp Tempura</h4>
            <ul>
              <li>Small: $31.50</li>
              <li>Medium: $50.00</li>
              <li>Large: $95.00</li>
            </ul>
          </div>
          <div>
            <h4>Deep Fried Oyster</h4>
            <ul>
              <li>Small: $31.00</li>
              <li>Medium: $50.00</li>
              <li>Large: $95.00</li>
            </ul>
          </div>
          <div>
            <h4>Potato Croquette</h4>
            <ul>
              <li>Small: $31.00</li>
              <li>Medium: $50.00</li>
              <li>Large: $95.00</li>
            </ul>
          </div>
          <div>
            <h4>Spicy Pork</h4>
            <ul>
              <li>Small: $31.50</li>
              <li>Medium: $52.50</li>
              <li>Large: $100.00</li>
            </ul>
          </div>
          <div>
            <h4>BBQ Spicy Ika</h4>
            <ul>
              <li>Small: $33.00</li>
              <li>Medium: $53.00</li>
              <li>Large: $100.00</li>
            </ul>
          </div>
          <div>
            <h4>Fried Rice</h4>
            <ul>
              <li>Small: $27.00 | KimChee FR $28.00</li>
              <li>Medium: $35.00 | KimChee FR $38.00</li>
              <li>Large: $70.00 | KimChee FR $75.00</li>
            </ul>
          </div>
        </div>
        <br />
        <Intro
          heading="Meat Lover's Special BBQ"
          subheading="For your backyard party, tailgate party or for your picnic, we have marinated meats just for these occasions! To order, please call us at (808) 735-7964 or Fax us at (808) 739-0887. Prices are subject to change without notice."
        />
        <div className="container">
          <div>
            <h4>Kalbi (Marinated)</h4>
            <ul>
              <li>Small (3lbs): $35.00</li>
              <li>Medium (5lbs): $52.50</li>
              <li>Large (10lbs): $105.00</li>
            </ul>
          </div>
          <div>
            <h4>BBQ Beef (Marinated)</h4>
            <ul>
              <li>Small (3lbs): $30.00</li>
              <li>Medium (5lbs): $45.00</li>
              <li>Large (10lbs): $90.00</li>
            </ul>
          </div>
          <div>
            <h4>BBQ Chicken (Marinated)</h4>
            <ul>
              <li>Small (3lbs): $28.50 | Spicy $30</li>
              <li>Medium (5lbs): $43.50 | Spicy $45</li>
              <li>Large (10lbs): $85.00 | Spicy $90</li>
            </ul>
          </div>
        </div>
      </MenuWrapper>
    </Section>
  </Layout>
)

const MenuWrapper = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    margin: 0rem auto;
  }
  div {
    flex-basis: 33%;
    text-align: center;
  }
  h4 {
    margin: 1rem 0rem 0rem 0rem;
    letter-spacing: 1px;
  }
  ul {
    list-style-type: none;
    li {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 768px) {
    div {
      flex-basis: 50%;
    }
  }
`

export default CateringMenu
