import React from "react";

import View from "./View";
import {Icon, Grid} from "clever-components";

import CounterSection from './CounterSection';
import QuoteSection from './QuoteSection';

export default function ExampleView() {
  const {cssClass} = ExampleView;
  const {Col, Row} = Grid;

  return (
    <View className={cssClass.CONTAINER} title="Example App">
      <Grid>
        <Row grow className="margin--bottom--xl">
          <Col span={6} className="flexbox self--center padding--right--xl">
            <div>
              <h2>There are lots of neat things you can do with frontend code</h2>
              <p>Hopefully this boilerplate app gets you up and running quickly! Here're some examples of cool things you can do:</p>
            </div>
          </Col>
          <Col span={3} className="flexbox">
          </Col>
        </Row>
        <Row grow>
          <Col span={3} className="flexbox">
            <CounterSection />
          </Col>
          <Col span={3} className="flexbox">
            <QuoteSection />
          </Col>
        </Row>
      </Grid>
    </View>
  );
}

ExampleView.cssClass = {
  CONTAINER: "ExampleView",
};
