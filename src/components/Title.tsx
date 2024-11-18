import React from 'react';

interface TitleProps {
  style?: string;
  text: string;
}

const Title: React.FC<TitleProps> = ({ style, text }) => {
  return <h2 className={'pb-1 mx-auto mb-4 tracking-wider border-b-4 border-pink-500 w-fit ' + style}>{text}</h2>;
};

export default Title;