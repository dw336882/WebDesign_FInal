/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import {Auth0Provider} from "@auth0/auth0-react"

export const wrapRootElement = ({element}) => {
    return (
        <Auth0Provider
            domain="dev--as3n4im.us.auth0.com"
            clientid="ZE9kOksNyyzxSZCA4FnWB5PAfqSM39C4"
            redirectUri="http://localhost:8000/blog"
        >
            {element}
        </Auth0Provider>
    )
}
