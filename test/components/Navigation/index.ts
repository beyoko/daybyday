// Do not write code directly here, instead use the `src` folder!
// Then, use this file to export everything you want your user to access.

import Breadcrumbs from './Breadcrumbs.astro'
import Navigation from './Navigation.astro'
import Pagination from './Pagination.astro'
import Schema from './Schema.astro'
export type { WebPage } from './utils'

export default Navigation
export { Breadcrumbs, Pagination, Schema }
