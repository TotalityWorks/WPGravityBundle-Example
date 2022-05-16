import { graphql } from "gatsby"

export const defaultFragment = graphql`
  fragment DefaultTemplateFragment on WpDefaultTemplate {
    templateName
    flexibleContent {
      contentModule {
        ...Form
        ...Hero
        ...TextBlock
        ...TextImage
        # ...LatestArticles
      }
    }
  }
`