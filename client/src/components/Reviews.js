// import React from 'react'
// import { Card } from 'semantic-ui-react'

// const items = [
//   {
//     header: 'Cha Ji-Hun',
//     description: 'A visual guide could be
//     // a wireframe, creaNve composiNon, or informaNon architecture. A device that enables collaboraNon will lessen the chance of work having to be completely redone.',
//     meta: 'ROI: 30%',
//   },
//   {
//     header: 'Project Report - May',
//     description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
//     meta: 'ROI: 34%',
//   },
//   {
//     header: 'Project Report - June',
//     description:
//       'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
//     meta: 'ROI: 27%',
//   },
// ]

// const CardExampleGroupProps = () => <Card.Group items={items} />

// export default CardExampleGroupProps






import React from 'react';

const Reviews = () => (
  <div>


      <h2>What Students are Saying</h2>
      <div class="ui three stackable cards">
  <div class="content">

    <div class="left aligned description">
      <p>A visual guide could be
a wireframe, creaNve composiNon, or informaNon architecture. A device that enables collaboraNon will lessen the chance of work having to be completely redone.</p>
    </div>
  </div>
  <div class="extra content">
    <div class="left aligned author">
      <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg" text='Cha Ji-Hun'/> 
    <div class="left aligned company">
      <span>Co-Founder of Forpeople</span>
    </div>
  </div>
</div>
 

<div class="content">
    <div class="left aligned description">
      <p>The visual guide will provide a view to the customer of what their website or project will end up looking like. It ensures that they are kept up to date on any developments.</p>
    </div>
  </div>
  <div class="extra content">
    <div class="left aligned author">
      <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg" text="Henry Itondo" />
   
    <div class="left aligned company">
      <span>Founder of Forma DS</span>
    </div>
  </div>
</div>

<div class="content">
<div class="left aligned description">
  <p>InformaNon design is the presentaNon—placement and prioriNzaNon of informaNon in a way that facilitates understanding. InformaNon design is an area of user experience design.</p>
</div>
</div>
<div class="extra content">
<div class="left aligned author">
<p>Fua Lamba</p>
  <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg" /> 
<div class="left aligned company">
  <span>Co-Founder of Forma DS</span>
</div>
</div>
</div>
</div>
  </div>
   );

export default Reviews;