
function Club() {
  return (
    <div>
        <section className="text-white">
            <div className="container py-5">
                <h2 className="display-4 text-center text-decoration-underline fw-bolder">The Earthquakes Club History</h2>
                <p className="lead text-center">Learn a little about the foundation of the Quakes and its ups and downs of the club.</p>
            </div>
        </section>
        <section className="text-white">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="./Images/paypalpark.jpg" alt="PayPal Park" className="img-fluid rounded" />
                    </div>
                    <div className="col-lg-6">
                        <h3 className="text-decoration-underline fw-bold pb-2">Foundation of the San Jose Earthquakes</h3>
                        <p>The San Jose Earthquakes were founded in 1974 as one of the original teams of the North American Soccer League (NASL). The club was established to bring professional soccer to the city of San Jose and the greater Bay Area.</p>
                        <p>During their early years, the Earthquakes quickly gained a loyal fan base and enjoyed success on the field. They won the NASL championship in 1974 and 1975, with a talented roster of players and a passionate community supporting them.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="text-white">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="text-decoration-underline fw-bold pb-2">The Early Years and Relocation</h3>
                        <p>After the NASL disbanded in 1984, the San Jose Earthquakes were inactive for several years. However, the team made a comeback in 1996 as one of the original franchises of Major League Soccer (MLS), the Quakes were originally known as the San Jose Clash, before the rebranding to San Jose EarthQuakes. The club retained its name and continued to represent San Jose. </p>
                        <p>In 2005, the Earthquakes faced a period of uncertainty as the team was relocated to Houston and became the Houston Dynamo. The move left a void in San Jose, but the passionate fan base and local support never wavered.</p>
                    </div>
                    <div className="col-lg-6">
                        <img src="./Images/sanjosefans.png" alt="Earthquakes Fans" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </section>
        <section className="text-white">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="./Images/ownership.jpg" alt="John fisher ownership group" className="img-fluid rounded" />
                    </div>
                    <div className="col-lg-6">
                        <h3 className="text-decoration-underline fw-bold pb-2">The Fisher Era..(2007-Current)</h3>
                        <p>Following the relocation, the absence of the Earthquakes left a void in the San Jose soccer community. Several attempts were made to bring back the team, but it wasn't until 2008 that a new ownership group successfully resurrected the San Jose Earthquakes.</p>
                        <p>Under the new ownership, the club faced many challenges, including poor performance on the field and instability off the field. These tough years were marked by struggles to find stability and establish a winning culture. However, the resilience of the Earthquakes' fan base and their unwavering support kept the spirit of the team alive.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Club;