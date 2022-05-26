import { MessageStyle } from './styled'

type MessageProps = {
  text: string
}

const AlertMessage = ({ text }: MessageProps) => {
  return <MessageStyle>{text}</MessageStyle>
}

export default AlertMessage
