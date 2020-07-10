import React from "react";
import { TheTeam } from '../Assets/Static/TheTeam';
import CircleImageWithText from '../SpanComponents/CircleImageWithText';
import placeholder from '../Assets/Images/placeholder-avatar.jpg'

export default function MeetTheTeam() {

  return (
    <div style={{ display: "flex", flexDirection: 'row' }}>
      {TheTeam.teamList.map((teamMember, index) => {
        let avatar = teamMember.avatarImagePath || placeholder;
        return (
          <div style={{ width: "33%", minHeight: "150" }}>
            <CircleImageWithText
              imageSource={avatar}
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