import { IconType } from 'react-icons';

interface IconProps{
    icon: IconType;
}

const Icon = ({ icon: Icon }: IconProps) => {
  return (
    <Icon size={20} />
  )
}

export default Icon