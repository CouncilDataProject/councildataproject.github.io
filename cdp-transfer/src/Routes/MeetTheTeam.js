import React from "react";
import { TheTeam } from '../Assets/Static/TheTeam';
import CircleImageWithText from '../SpanComponents/CircleImageWithText';
import placeholder from '../Assets/Images/placeholder-avatar.jpg'

export default function MeetTheTeam() {

  function renderRow(teamMember1, teamMember2, teamMember3) {
    let avatar = teamMember1.avatarImagePath || placeholder;
    return (
      <div style={styles.row}>
        {teamMember1 && <CircleImageWithText
          imageSource={avatar}
          altText={"Team Member Picture"}
          title={teamMember1.name}
          secondaryText={teamMember1.introText}
          style={styles.avatarCard}
        />}
        {teamMember2 && <CircleImageWithText
          imageSource={avatar}
          altText={"Team Member Picture"}
          title={teamMember2.name}
          secondaryText={teamMember2.introText}
          style={styles.avatarCard}
        />}
        {teamMember3 && <CircleImageWithText
          imageSource={avatar}
          altText={"Team Member Picture"}
          title={teamMember3.name}
          secondaryText={teamMember3.introText}
          style={styles.avatarCard}
        />}
      </div>
    )
  }

  return (
    <div style={{ display: "flex", flexDirection: 'column', width: "100%", margin: 8 }}>
      {TheTeam.teamList.map((teamMember, index) => {
        if(index % 3 === 0) { // to increase or decrease the size of the row, change this and the row function
          return renderRow(TheTeam.teamList[index], TheTeam.teamList[index + 1], TheTeam.teamList[index +2])
        }
      })}
    </div>
  )
}

const styles = {
  avatarCard: {
    margin: 12,
    display: "flex",
    flex: 1,
    width: "100%"
  },
  row: {
    height: "150",
    display: "flex",
    flexDirection: 'row',
    margin: 4,
    justifyContent: "space-evenly"
  }
}