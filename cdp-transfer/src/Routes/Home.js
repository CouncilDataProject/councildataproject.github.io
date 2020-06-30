import React from "react";
import ImageSpanComponent from '../SpanComponents/ImageSpan';
import TripleBoxSpan from '../SpanComponents/TripleBoxSpan';
import Comp1 from '../Assets/Images/comp1.png'
import Comp2 from '../Assets/Images/comp2.png'
import Comp3 from '../Assets/Images/comp3.png'

export default function Home() {
  return (
    <React.Fragment>
      <ImageSpanComponent
        title="COUNCIL DATA PROJECT"
        subtitle="Transparent, Accessible City Council Information"
        bodyText="Council Data Project is an open-source project dedicated to providing citizens with the tools they need to stay informed and hold their City Council Members accountable. By combining and simplifying sources of information on City Council meetings and actions, CDP strives to ensure that everyone is empowered to participate in local government."
        hasActionButton={false}
        imageSrc={Comp1}
      />
      <ImageSpanComponent
        title="3 TYPES OF CITY COUNCIL DATA"
        subtitle="Conveniently Brought Together in One Platform"
        bodyText="Council Data Project combines multiple, complex sources of City Council data into one simplified platform. This makes it easier for any citizen to search for the legislation, committee meetings, council meetings, and representatives that are relevant to their interests. Learn more about each way to search Council Data Project below."
        hasActionButton={false}
        imageSrc={Comp2}
      />
      <TripleBoxSpan
        titleLeft="Search Meetings"
        subtitleLeft="Meeting Videos and Transcripts"
        bodyTextLeft="Search City Council meetings for specific keywords related to your interests. Watch meeting videos, read the transcripts, and view a list of all actions that took place."
        titleCenter="Search Legislation"
        subtitleCenter="Full Legislation History"
        bodyTextCenter="Search City Council legislation by your interests for related bills, ordinances, and more. View amendments, past votes, and final rulings on all legislation."
        titleRight="Search Council Members"
        subtitleRight="Committee and Legislative Actions"
        bodyTextRight="Search City Council Members to learn about your local representatives. Receive their contact information, view their voting history, and discover their committee affiliations."
      />
      <ImageSpanComponent
        title="FOR EVERY CITY & EVERY CITIZEN"
        bodyText="Council Data Project is committed to empowering developers and citizens to contribute to the accessibility of local government information. CDP is an open-source project that maintains resources to support additional installations of the service for multiple cities."
        hasActionButton={false}
        imageSrc={Comp3}
      />
    </React.Fragment>
  )
}

/*
box3 - 3 side by side
  A)
  SEARCH MEETINGS
  Meeting Videos and Transcripts

  Search City Council meetings for specific keywords related to your interests. Watch meeting videos, read the transcripts, and view a list of all actions that took place.
  B)
  SEARCH LEGISLATION
  Full Legislation History

  Search City Council legislation by your interests for related bills, ordinances, and more. View amendments, past votes, and final rulings on all legislation.
  C)
  SEARCH COUNCIL MEMBERS
  Committee and Legislative Actions

  Search City Council Members to learn about your local representatives. Receive their contact information, view their voting history, and discover their committee affiliations.

box4
  FOR EVERY CITY & EVERY CITIZEN
  Council Data Project is committed to empowering developers and citizens to contribute to the accessibility of local government information. CDP is an open-source project that maintains resources to support additional installations of the service for multiple cities.

  Bring CDP to My City

box5
  CONTACT COUNCIL DATA PROJECT
  Name
  Email
  Subject
  Type your message here...

  Submit
*/