import { ReactNode } from 'react';

interface IIconProps {
  text?: string;
  icon: ReactNode;
}

export default function Icon({ text, icon }: IIconProps) {
  if (text) {
    return (
      <span className='icon-text'>
        <span className='icon'>{icon}</span>
        <span>{text}</span>
      </span>
    );
  }

  return <span className='icon'>{icon}</span>;
}
