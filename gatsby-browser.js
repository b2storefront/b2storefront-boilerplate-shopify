import * as gtm from '@b2storefront/b2s_core/dist/utils/google_tag_manager'
import wrapWithProvider from './wrap-with-provider'
import { trackPageView } from '@b2storefront/b2s_core/dist/utils/tracking'
export const wrapRootElement = wrapWithProvider

require(`./themes/${process.env.B2S_THEME_NAME}/Assets/styles/style.scss`)

export const onClientEntry = () => {
  const load = async () => {
    document.removeEventListener('mousemove', load)
    document.removeEventListener('touchstart', load)

    if (process.env.GOOGLE_TAG_MANAGER_ID) {
      await gtm.init(process.env.GOOGLE_TAG_MANAGER_ID)
      await gtm.trackEvent('b2s_init')
    }
  }
  
  document.addEventListener('mousemove', load)
  document.addEventListener('touchstart', load)
}

export const onRouteUpdate = () => {
  trackPageView()
}
