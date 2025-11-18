import { ReactNode } from 'react';

interface IIconProps {
  text: string;
  icon: ReactNode;
}

export default function Icon({ text, icon }: IIconProps) {
  return (
    <span className='icon-text'>
      <span className='icon'>{icon}</span>
      <span>{text}</span>
    </span>
  );
}
