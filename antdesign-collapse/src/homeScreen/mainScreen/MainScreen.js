import React from "react";
import { Row, Col } from "antd";

import './style.css';
import 'antd/dist/antd.css'

import CollapseCom from "../../Components/collapse/CollapseCom";
import { timeData,priceData } from "../../utilities/mockData";

const MainScreen = () => {

  return (
    <div className="text-center">
      <Row>
        <Col lg={24} md={24}><h1 className="main-heading">Software development lifecycle</h1></Col>
      </Row>
      <Row>
        <Col lg={24} md={24}><p className="para">Trying to avoid the unified development process, we adhere to custom flows which</p> </Col>
      </Row>
      <Row className="para">
        <Col lg={24} md={24}><p>response the requirements of every specific project</p> </Col>
      </Row>

      <Row>
        <Col lg={2} md={2}></Col>

        <Col lg={9} md={9}>
          <CollapseCom
            heading= {'Time & Material'}
            data={timeData} 
            />

        </Col>

        <Col lg={2} md={2}></Col>

        <Col lg={9} md={9}>
          <CollapseCom 
          heading={'Fixed Price'}
          data={priceData} 
          />
          
        </Col>

        <Col lg={2} md={2}></Col>

      </Row>
    </div>
  )
}
export default MainScreen