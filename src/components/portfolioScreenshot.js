import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import screenshotStyles from "./portfolioScreenshot.module.css";

// Add each new image to query AND image selector
class PortfolioScreenshot extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            gatsbyIcon: file(relativePath: { eq: "gatsby-icon.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            retargetingBoolean: file(
              relativePath: { eq: "retargetingBoolean.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            retargetingLists: file(
              relativePath: { eq: "retargetingLists.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            retargetingFilters: file(
              relativePath: { eq: "retargetingFilters.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quoraA2A: file(relativePath: { eq: "quoraA2A.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quoraDigest: file(relativePath: { eq: "quoraDigest.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quoraSearch: file(relativePath: { eq: "quoraSearch.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quoraModeration: file(relativePath: { eq: "quoraModeration.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            quoraQuestionHighlights: file(
              relativePath: { eq: "quoraQuestionHighlights.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quoraTopicFAQs: file(relativePath: { eq: "quoraTopicFAQs.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quoraMostViewedWriters: file(
              relativePath: { eq: "quoraMostViewedWriters.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quoraReadingList: file(
              relativePath: { eq: "quoraReadingList.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quoraAnswerPages: file(
              relativePath: { eq: "quoraAnswerPages.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quoraZenMode: file(relativePath: { eq: "quoraZenMode.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quoraContentModeration: file(
              relativePath: { eq: "quoraContentModeration.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quoraQuestionDownvoting: file(
              relativePath: { eq: "quoraQuestionDownvoting.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quoraCredentials: file(
              relativePath: { eq: "quoraCredentials.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quoraTakingQuestions: file(
              relativePath: { eq: "quoraTakingQuestions.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            hustleRedesign: file(relativePath: { eq: "hustleRedesign.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            hustleVoices: file(relativePath: { eq: "hustleVoices.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            hustleMLA: file(relativePath: { eq: "hustleMLA.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            hustleActivityPage: file(
              relativePath: { eq: "hustleActivityPage.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            hustleUseCases: file(relativePath: { eq: "hustleUseCases.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <div className={screenshotStyles.screenshot}>
            {this.props.caption && (
              <div className={screenshotStyles.caption}>
                {this.props.caption}
              </div>
            )}

            {this.props.queryKey === "astronaut" && (
              <Img fluid={data.astronaut.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "gatsbyIcon" && (
              <Img fluid={data.gatsbyIcon.childImageSharp.fluid} />
            )}

            {this.props.queryKey === "retargetingBoolean" && (
              <Img fluid={data.retargetingBoolean.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "retargetingLists" && (
              <Img fluid={data.retargetingLists.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "retargetingFilters" && (
              <Img fluid={data.retargetingFilters.childImageSharp.fluid} />
            )}

            {this.props.queryKey === "quoraA2A" && (
              <Img fluid={data.quoraA2A.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "quoraDigest" && (
              <Img fluid={data.quoraDigest.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "quoraSearch" && (
              <Img fluid={data.quoraSearch.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "quoraModeration" && (
              <Img fluid={data.quoraModeration.childImageSharp.fluid} />
            )}

            {this.props.queryKey === "quoraQuestionHighlights" && (
              <Img fluid={data.quoraQuestionHighlights.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "quoraTopicFAQs" && (
              <Img fluid={data.quoraTopicFAQs.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "quoraMostViewedWriters" && (
              <Img fluid={data.quoraMostViewedWriters.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "quoraReadingList" && (
              <Img fluid={data.quoraReadingList.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "quoraAnswerPages" && (
              <Img fluid={data.quoraAnswerPages.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "quoraZenMode" && (
              <Img fluid={data.quoraZenMode.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "quoraContentModeration" && (
              <Img fluid={data.quoraContentModeration.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "quoraQuestionDownvoting" && (
              <Img fluid={data.quoraQuestionDownvoting.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "quoraCredentials" && (
              <Img fluid={data.quoraCredentials.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "quoraTakingQuestions" && (
              <Img fluid={data.quoraTakingQuestions.childImageSharp.fluid} />
            )}

            {this.props.queryKey === "hustleRedesign" && (
              <Img fluid={data.hustleRedesign.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "hustleVoices" && (
              <Img fluid={data.hustleVoices.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "hustleMLA" && (
              <Img fluid={data.hustleMLA.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "hustleActivityPage" && (
              <Img fluid={data.hustleActivityPage.childImageSharp.fluid} />
            )}
            {this.props.queryKey === "hustleUseCases" && (
              <Img fluid={data.hustleUseCases.childImageSharp.fluid} />
            )}
          </div>
        )}
      />
    );
  }
}

export default PortfolioScreenshot;
