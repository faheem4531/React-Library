import React from 'react';
import { Collapse } from 'antd';
import './style.css';
const Panel = Collapse.Panel;



const CollapseCom = ({ data, heading }) => {
  return (
    <div className='content-container' >
      <Collapse accordion>
        <h1 className='heading'>{heading}</h1>
        {data.map((item, index) => {
          return (
            <Panel  className='lists' header={`${index+1}.  ${item.title}`} key={index}>
              <p>{item.disc}</p>
            </Panel>
          )
        })}

      </Collapse>
    </div>

  )

};

export default CollapseCom;