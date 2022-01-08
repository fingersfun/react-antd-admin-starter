import React from 'react';
import TypingCard from '@/components/TypingCard'
const Doc = () => {
  const cardContent = `
    Develop documents, please poke here <a href="https://fingersfun.github.io/react-antd-admin-starter-doc/" target="_blank"> react-antd-admin-starter development document </a>.
    Currently writing perfect ...
  `
  return (
    <div className="app-container">
      <TypingCard title='Development documentation' source={cardContent} />
    </div>
  );
}

export default Doc;