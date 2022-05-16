import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import Parser from "html-react-parser"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface TextImageProps extends FlexibleContentProps {
  textImageTitle?: string
  textImageSubtitle?: string
  textImageText?: string
  textImagePosition?: string
  textImage?: {
    localFile?: IGatsbyImageData
    altText?: string
  }
}

const TextImage: React.FC<TextImageProps> = props => {
  const {
    textImageTitle,
    textImageSubtitle,
    textImageText,
    textImagePosition,
    textImage,
  } = props

  const image = textImage?.localFile && getImage(textImage.localFile)

  return (
    <>
      <Edges size="lg">
        {/* 
            Ternary checks Left of Text first, then Right of Text.
            If neither, then returns default nothing.
        */}
        {textImagePosition === "Left of Text" ? (
          <>
            <div className="bg-white overflow-hidden">
              <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden md:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose md:grid md:grid-cols-2 md:gap-8 md:max-w-none">
                  <div>
                    {textImageTitle && (
                      <h2
                        className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
                        children={textImageTitle}
                      />
                    )}

                    {textImageSubtitle && (
                      <h3
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                        children={textImageSubtitle}
                      />
                    )}
                  </div>
                </div>

                <div className="mt-8 md:grid md:grid-cols-2 md:gap-8">
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
                  <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                    <figure>
                      <div className="aspect-w-12 aspect-h-7 md:aspect-none">
                        {image && (
                          <GatsbyImage
                            image={image}
                            alt={textImage?.altText || ""}
                            className="rounded-lg shadow-lg object-cover object-center"
                          />
                        )}
                      </div>
                    </figure>
                  </div>
                  <div className="relative md:row-start-1 md:col-start-2">
                    <div className="mt-8 md:mt-0">
                      <div>{textImageText && Parser(textImageText)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : textImagePosition === "Right of Text" ? (
          <>
            <div className="bg-white overflow-hidden">
              <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden md:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose md:grid md:grid-cols-2 md:gap-8 md:max-w-none">
                  <div>
                    {textImageTitle && (
                      <h2
                        className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
                        children={textImageTitle}
                      />
                    )}

                    {textImageSubtitle && (
                      <h3
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                        children={textImageSubtitle}
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
                    <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                      <figure>
                        <div className="aspect-w-12 aspect-h-7 md:aspect-none">
                          {image && (
                            <GatsbyImage
                              image={image}
                              alt={textImage?.altText || ""}
                              className="rounded-lg shadow-lg object-cover object-center"
                            />
                          )}
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0">
                    <div>{textImageText && Parser(textImageText)}</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Above Title, Below Title, Below Text options */}
          </>
        )}
      </Edges>
    </>
  )
}

export default TextImage

export const fragment = graphql`
  fragment TextImage on WpDefaultTemplate_Flexiblecontent_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontent_ContentModule_TextImage {
      fieldGroupName
      textImageTitle
      textImageText
      textImagePosition
      textImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, height: 1376)
          }
        }
      }
    }
  }
`