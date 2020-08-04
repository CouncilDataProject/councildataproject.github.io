import React from "react";
import { TheTeam } from '../Assets/Static/TheTeam';
import CircleImageWithText from '../SpanComponents/CircleImageWithText';
import placeholder from '../Assets/Images/placeholder-avatar.jpg'

export default function MeetTheTeam() {

  function renderRow(teamMember1, teamMember2, teamMember3) {
    return (
      <div style={styles.row} key={`row_${teamMember1.name}`}>
        {teamMember1 && <CircleImageWithText
          imageSource={teamMember1.avatarImagePath || placeholder}
          altText={"Team Member Picture"}
          title={teamMember1.name}
          secondaryText={teamMember1.introText}
          style={styles.avatarCard}
          linkedIn={teamMember1.linkedIn}
          gitHub={teamMember1.gitHub}
        />}
        {teamMember2 && <CircleImageWithText
          imageSource={teamMember2.avatarImagePath || placeholder}
          altText={"Team Member Picture"}
          title={teamMember2.name}
          secondaryText={teamMember2.introText}
          style={styles.avatarCard}
          linkedIn={teamMember2.linkedIn}
          gitHub={teamMember2.gitHub}
        />}
        {teamMember3 && <CircleImageWithText
          imageSource={teamMember3.avatarImagePath || placeholder}
          altText={"Team Member Picture"}
          title={teamMember3.name}
          secondaryText={teamMember3.introText}
          style={styles.avatarCard}
          linkedIn={teamMember3.linkedIn}
          gitHub={teamMember3.gitHub}
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
        return null
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
    height: "120",
    display: "flex",
    flexDirection: 'row',
    margin: 4,
    justifyContent: "space-evenly"
  }
}