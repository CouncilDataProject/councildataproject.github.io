import React from "react";
import ImageSpanComponent from '../SpanComponents/ImageSpan';
import TripleBoxSpan from '../SpanComponents/TripleBoxSpan';
import { Gavel, People, VideoLibrary } from '@material-ui/icons';
import { ColorPalette } from '../Theme/ColorPalette';
import landscape1 from '../Assets/Images/landscape_moss1-yoyo-dy.jpg'
import landscape2 from '../Assets/Images/landscape-blueplant-fabrizio-conti.jpg'
import landscape3 from '../Assets/Images/landscape-moss2-zach-reiner.jpg';

export default function Home() {
  const GavelIcon = () => <Gavel />
  const VideoIcon = () => <VideoLibrary />
  const PeopleIcon = () => <People/>

  return (

    <React.Fragment>
      <ImageSpanComponent
        title="COUNCIL DATA PROJECT"
        subtitle="Transparent, Accessible City Council Information"
        bodyText="We are an open-source project dedicated to providing citizens with the tools they need to stay informed and hold our City Council Members accountable. By combining and simplifying sources of information on City Council meetings and actions, CDP strives to ensure that everyone is empowered to participate in local government."
        hasActionButton={false}
        imageSrc={landscape3}
        backgroundColor={ColorPalette.baseTeal}
      />
      <ImageSpanComponent
        title="3 TYPES OF CITY COUNCIL DATA"
        subtitle="Conveniently Brought Together in One Platform"
        bodyText="We combine multiple, complex sources of City Council data into one simplified platform. Any citizen can search for the legislation, committee meetings, council meetings, and representatives that are relevant to their interests. Learn more about each way to search Council Data Project below."
        hasActionButton={false}
        imageSrc={landscape2}
      />
      <TripleBoxSpan
        iconLeft={VideoIcon}
        titleLeft="Search Meetings"
        subtitleLeft="Meeting Videos and Transcripts"
        bodyTextLeft="Get first-hand information. Watch meeting videos, search keyworded transcripts, and view a list of all actions that took place."
        iconCenter={GavelIcon}
        titleCenter="Search Legislation"
        subtitleCenter="Full Legislation History"
        bodyTextCenter="Research legislation for bills, ordinances, and more. View amendments, past votes, and final rulings on all legislation."
        iconRight={PeopleIcon}
        titleRight="Search Council Members"
        subtitleRight="Committee and Legislative Actions"
        bodyTextRight="Learn about your local representatives. Receive their contact information, view their voting history, and discover their committee affiliations."
      />
      <ImageSpanComponent
        title="FOR EVERY CITY & EVERY CITIZEN"
        bodyText="We empower developers and citizens to contribute to the accessibility of local government information. CDP is an open-source project that maintains resources to support additional installations of the service for multiple cities."
        hasActionButton={false}
        backgroundColor={ColorPalette.mediumGray}
        imageSrc={landscape1}
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