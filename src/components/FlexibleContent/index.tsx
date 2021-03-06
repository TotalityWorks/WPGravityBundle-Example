import React from "react"

import Form, { FormProps } from "./Form"
import Hero, { HeroProps } from "./Hero"
import TextBlock, { TextBlockProps } from "./TextBlock"
import TextImage, { TextImageProps } from "./TextImage"
// import LatestArticles, { LatestArticlesProps } from "./LatestArticles"

interface Components {
  Form: React.FC<FormProps>
  Hero: React.FC<HeroProps>
  TextBlock: React.FC<TextBlockProps>
  TextImage: React.FC<TextImageProps>
//   LatestArticles: React.FC<LatestArticlesProps>
}

interface Props {
  modules?: any
  data?: {
    title?: string
    uri?: string
    slug?: string
  }
}

const components: Components = {
  Form,
  Hero,
  TextBlock,
  TextImage,
//   LatestArticles,
}

const FlexibleContent: React.FC<Props> = props => {
  const { modules, data } = props

  if (!!modules) {
    return modules
      .filter((module: any) => !!module)
      .map((module: any, index: any) => {
        const { fieldGroupName } = module
        if (!fieldGroupName) {
          return null
        }

        const type: keyof Components = fieldGroupName.split("_").slice(-1)[0]

        const Component = components[type]

        return (
          Component && (
            <div key={index}>
              <Component {...module} {...data} />
            </div>
          )
        )
      })
  }
}

export default FlexibleContent