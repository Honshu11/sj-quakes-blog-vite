import fixtures from '../fixturesData'; //imports fixtureData array from js file.

function Schedule() {
  return (
    <div className="container">
        <hr className='text-light'/>
        <h2 className='text-center text-light fw-bold'>Quakes Schedule 2023</h2>
        <table className="match-table table table-hover table-dark text-center text-light">
            <thead className='text-uppercase fs-5'>
                <tr>
                    <th>Home Team</th>
                    <th>Away Team</th>
                    <th>Time</th>
                    <th>Venue</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {/*Use .map() array method to loop through the fixtures array and display information.*/}
                {fixtures.map((fixture, index) => (
                    <tr key={index}>
                        <td>{fixture.home}</td>
                        <td>{fixture.away}</td>
                        <td>{fixture.venue}</td>
                        <td>{fixture.date}</td>
                        <td>{fixture.time}</td>
                    </tr>
                ))}   
            </tbody>
        </table>
    </div>
  )
}

export default Schedule;