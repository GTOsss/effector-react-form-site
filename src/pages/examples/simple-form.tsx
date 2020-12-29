import React, { memo } from "react"
import Layout from "@components/v1/layout"
import { FormattedMessage } from "gatsby-plugin-intl"

type Props = {}

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <Layout menuKey="Examples">
      <h1>
        <FormattedMessage id="examples.initialValues.title" />
      </h1>
      {/*<Form />*/}
      {/*<TemplateExamplePage formName="initialValues" />*/}
    </Layout>
  )
}

export default memo(SimpleForm)
