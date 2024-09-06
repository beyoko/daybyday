// src/components/LoadableComponent.tsx
import React, { Suspense } from 'react'

const LoadableComponent = React.lazy(() => import('@/lib/DropdownMenu.tsx'))

const Loadable = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LoadableComponent />
  </Suspense>
)

export default Loadable
