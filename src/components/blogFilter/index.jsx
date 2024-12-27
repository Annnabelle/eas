import React from "react";
import Button from "../button";
import "./styles.sass";

const BlogFilter = (props) => {
  return (
    <div className='blogFilter'>
      <div className='filterTitle'>
        <h3 className='title'>Фильтровать по:</h3>
      </div>
      <div className='filterBtns'>
        {props?.filterData.map((item, index) => (
          <div
            className='btns'
            key={index}
          >
            <Button>{item?.filterText}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogFilter;
