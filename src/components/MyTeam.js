

function MyTeam (props) {

  const myTeam = props.myTeam;

  return (
    <div className="my-team">
      <h2>My Team</h2>
      <div className="my-team-list">
          {
            myTeam.map((item) => {

              return (
                <div>
                  My team item <br />
                  {item.name}
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default MyTeam;