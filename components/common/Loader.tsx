// @ts-expect-error The package does not provide proper TypeScript declarations
import { SpinnerCircularFixed } from 'spinners-react';

const Loader = () => {
  return (
    <div className='w-[100vw] h-[100vh]
    flex justify-center items-center'>
        <SpinnerCircularFixed size={70} thickness={180} speed={69} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
    </div>
  )
}

export default Loader