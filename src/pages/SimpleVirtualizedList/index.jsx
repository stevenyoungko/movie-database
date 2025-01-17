import { useState, useEffect } from 'react';

const itemCount = 100;
const itemHeight = 40;
const innerHeight = itemCount * itemHeight;
const windowHeight = 400;

const SimpleVirtualizedList = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [items, setItems] = useState([]);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.floor((scrollTop + windowHeight) / itemHeight);

  const onScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  useEffect(() => {
    const itemsList = [];

    for (let i = startIndex; i <= endIndex; i++) {
      itemsList.push(
        <div
          className="item"
          key={i}
          style={{
            position: 'absolute',
            top: `${i * itemHeight}px`,
            width: '100%',
          }}
        >
          <label>{i}</label>
        </div>
      );
    }

    setItems([...itemsList]);
  }, [startIndex, endIndex]);

  return (
    <div
      style={{
        overflowY: 'scroll',
        height: `${windowHeight}px`,
        border: '1px solid red',
      }}
      onScroll={onScroll}
    >
      <div style={{ position: 'relative', height: `${innerHeight}px` }}>
        {items}
      </div>
    </div>
  );
};

export default SimpleVirtualizedList;
