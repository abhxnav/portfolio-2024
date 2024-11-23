import { IIFrameComponent } from '@/types'

const IframeComponent = ({ src, title }: IIFrameComponent) => {
  return (
    <iframe
      src={src}
      title={title}
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
      }}
    />
  )
}

export default IframeComponent
