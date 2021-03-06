import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"
import useGravityData from "../../hooks/useGravityData"
import SingleForm from "../SingleForm"

export interface FormProps extends FlexibleContentProps {
  formId?: string
  formTitle?: string
  formText?: string
}

const Form: React.FC<FormProps> = props => {
  const {
    formId,
    formTitle,
    formText,
  } = props

  const { allWpGravityFormsForm } = useGravityData()

  const form = allWpGravityFormsForm.nodes.find(
    (form: any) => Number(form.formId) === Number(formId)
  )

  const isCallToActionForm = !!form && form.formFields.nodes.length < 2

  return (
    <>
      <Edges size="lg">
        {form && (
          <>
            <FormContainer>
                <div>
                    <h2
                        className="text-lg leading-6 font-medium text-gray-900"
                        children={formTitle}
                    />

                    <p
                        className="mt-1 text-sm text-gray-500"
                        children={formText}
                    />
                </div>
                <SingleForm form={form} />
            </FormContainer>
            </>
        )}
      </Edges>
    </>
  )
}

export default Form

export const fragment = graphql`
  fragment Form on WpDefaultTemplate_Flexiblecontent_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontent_ContentModule_Form {
      fieldGroupName
      formTitle
      formText
      formId
    }
  }
`

const FormContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-color: rgb(107 114 128);

  @media (min-width: 1300px) {
    width: 50%;
  }

  label,
  legend {
    display: none;
  }

  button {
    display: block;
    margin: 1rem 0;
    width: 20%;
    color: #fff;
    border-radius: 0.375rem;
    border-color: transparent;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    background-color: #6366f1;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    :hover {
      color: black;
    }

    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: var(#4f46e5) 0 0 0 calc(2px + var(2px)) var(rgb(255 255 255));
    }

    @media (min-width: 640px) {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }

  input,
  textarea,
  select,
  fieldset > div > input {
    margin: 0.5rem 0;
    display: inline-block;
    border: 1px solid rgb(209 213 219);
    border-radius: 0.375rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgb(17 24 39);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    ::placeholder {
      color: rgb(107 114 128);
    }

    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: var(#4f46e5) 0 0 0 calc(2px + var(2px)) var(rgb(255 255 255));
    }
  }

  form {
    @media (min-width: 640px) {
      margin: 0 auto;
      margin-top: 3rem;
      max-width: 100%;
    }

    & .small {
      width: calc(100% / 3);
      display: inline;

      input,
      textarea {
        width: 31.6%;
        margin: 0.5rem;
        margin-left: 0;
      }
    }

    & .medium {
      width: 50%;
      display: inline;

      input,
      textarea {
        width: 48.2%;
        margin: 0.5rem;
        margin-left: 0;
      }
    }

    & .large {
      width: 100%;

      input,
      textarea {
        width: 100%;
      }
    }
  }
`