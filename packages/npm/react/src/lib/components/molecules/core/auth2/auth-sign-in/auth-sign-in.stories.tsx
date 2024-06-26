import React from 'react'
import { LoginComponent, LoginComponentProps } from '.'
import { objectValuesToControls } from '../../../storybook-utils'
import { AkelloProvider } from '@akello/react-hook'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { AkelloClient } from '@akello/core'
import { MantineProvider } from '@mantine/core'



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof LoginComponent> = {
  title: 'Molecules/Core/AuthSignIn',
  component: LoginComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
}
export default meta



const config = {
  baseUrl: import.meta.env.VITE_API,
  cognitoUserPoolId: import.meta.env.VITE_AWS_COGNITO_USERPOOL_ID,
  cognitoClientId: import.meta.env.VITE_AWS_COGNITO_APP_CLIENT_ID,
          ...(import.meta.env.VITE_AKELLO_COGNITO_URL && {
              cognitoEndpoint: import.meta.env.VITE_AKELLO_COGNITO_URL,
              authenticationFlowType: "USER_PASSWORD_AUTH",
  }),
  onUnauthenticated: () => {
      window.location.href = '/'
  }
}
const akello = new AkelloClient(config)

const Template: StoryFn<typeof LoginComponent> = (args: LoginComponentProps) => {
  return (
      <MantineProvider >
        <AkelloProvider akello={akello}>
          <LoginComponent {...args} />
        </AkelloProvider>
      </MantineProvider>
  )
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    signIn: () => {},
    signOut: () => {},
    logo: (<></>),
    signed_in: true,
    menu_items: [],
    theme_swapper: (<></>)
}
