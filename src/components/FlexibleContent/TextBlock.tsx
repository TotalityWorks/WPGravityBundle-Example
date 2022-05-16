import React from "react"
import { graphql } from "gatsby"
import Parser from "html-react-parser"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface TextBlockProps extends FlexibleContentProps {
  textBlockTitle?: string
  textBlockText?: string
}

const TextBlock: React.FC<TextBlockProps> = props => {
  const { textBlockTitle, textBlockText } = props
  return (
    <>
      <Edges size="lg">
        <div className="bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-16">
            <div className="hidden md:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose md:grid md:grid-cols-2 md:gap-8 md:max-w-none">
                    <div>
                    {textBlockTitle && (
                        <h2
                        className="text-base text-indigo-600 font-semibold tracking-wide capitalize"
                        children={textBlockTitle}
                        />
                    )}
                    </div>
                </div>
            <div className="mt-8 md:grid md:grid-cols-2 md:gap-8">
              <div className="relative md:row-start-1 md:col-start-2">
                <svg
                  className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                  />
                </svg>
              </div>
              <div className="mt-8 md:mt-0">
                <div>{textBlockText && Parser(textBlockText)}</div>
              </div>
            </div>
          </div>
        </div>
      </Edges>
    </>
  )
}

export default TextBlock

export const fragment = graphql`
  fragment TextBlock on WpDefaultTemplate_Flexiblecontent_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontent_ContentModule_TextBlock {
      fieldGroupName
      textBlockTitle
      textBlockText
    }
  }
`