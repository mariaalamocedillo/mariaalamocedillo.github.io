import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline'

const SplineScene = ({ url }) => {
  return (
      <Spline scene={`${url}`} />
)
}
export default SplineScene
