import React from "react";
import { TheTeam } from '../Assets/Static/TheTeam';
import CircleImageWithText from '../SpanComponents/CircleImageWithText';

export default function MeetTheTeam() {

  return (
    <div style={{ display: "flex", flexDirection: 'row' }}>
      {TheTeam.teamList.map((teamMember, index) => {
        return (
          <div style={{ width: "33%", minHeight: "150" }}>
            <CircleImageWithText
              imageSource={teamMember.avatarImagePath}
              altText={"Team Member Picture"}
              title={teamMember.name}
              secondaryText={teamMember.introText}
            />
          </div>
        )
      })}
    </div>
  )
}