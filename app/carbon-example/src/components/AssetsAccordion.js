import React from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';

export default function AssetsAccordion() {
  return (
    <Accordion>
      <AccordionItem title={<h5>Reference Material A</h5>}>
        <p>Some content A</p>
      </AccordionItem>
      <AccordionItem title={<h5>Reference Material B</h5>}>
        <p>Some content B</p>
      </AccordionItem>
      <AccordionItem title={<h5>Reference Material C</h5>}>
        <p>Some content C</p>
      </AccordionItem>
    </Accordion>
  );
}
