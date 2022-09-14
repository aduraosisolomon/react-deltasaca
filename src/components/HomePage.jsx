import Carousel from "./Carousel"
import logo from '../assets/hiv7.jpg'

const HomePage = () => {
    return (
        <><Carousel /><div className="container mt-4">
            <div className="d-flex justify-content-center mb-3">
                <div className="me-5">
                    <img
                        style={{
                            borderRadius: "100%",
                            border: "1px solid #ccc",
                            padding: "5px",
                        }}
                        src={logo}
                        width="250"
                        height="250"
                        alt="thumbImg" />
                </div>
                <div className="pt-5">
                    <h3><strong>TOGETHER LET US KICK HIV/AIDS OUT OF DELTA STATE !</strong> </h3>
                    <h2>DELSACA</h2>
                    <p>EXECUTIVE SUMMARY <br /> 
<blockquote>The Delta State Agency for the Control of HIV/AIDS (DELSACA), formerly known as State Action Committee on AIDS (SACA) officially came into being following the signing into law of the bill establishing the Agency, by the His Excellency, the Governor, Senator Dr. Arthur Ifeanyi Okowa on 25th July, 2017.
The Committee which transformed into an Agency was established in 2005 as an implementing arm of the World Bank HIV/AIDS Programme Development Project, with the sole responsibility of coordinating HIV/AIDS activities and all related matters thereof in line with the principle of the "three one" – one coordinating body at the National/State level, one National/State Strategic Plan and, one Monitoring and Evaluation System at the National/State level. 
Activities of the Agency are spread in the 25 Local Governments of the State through other outlets such as LACAs, NGOs, FBOs, CSOs etc.
</blockquote>
</p>
                </div>
            </div>

            <div className="row text-center">
                <div className="offset-2 col-8 flex justify-content-center">
                    <h2>About Us</h2>
                    <p>
                    <strong>FUNCTIONS</strong>  <br />
                    The Agency performs the following functions: <br />
                    a.	Plan and coordinate the activities of the various sectors in the State's HIV and AIDS programme; <br />
                    b.	Formulate policies and guidelines on HIV and AIDS in Delta State; <br />
                    c.	Provide and coordinate linkages with global community on HIV and AIDS;

                    </p>
                </div>
            </div>
        </div></>
    )
  }
  
  export default HomePage
  
