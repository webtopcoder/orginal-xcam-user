import React from 'react';
import './ConversationSearch.less';

export default function ConversationSearch({ onSearch } : any) {
  return (
    <div className="conversation-search">
      <input
        onChange={onSearch}
        type="search"
        className="conversation-search-input"
        placeholder="Search conversation..."
      />
    </div>
  );
}
