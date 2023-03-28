import { NavLink } from "react-router-dom";
import Footer from "./index/Footer";
import NavBarIndex from "./index/navbar_index";
import NavBar from "./Profile/freelancer/navbar";


let About = () => {

    let haed=()=>{
        if(localStorage.getItem("uid")){
            return <NavBar/>
           
        }else{
            return <NavBarIndex/>
        }
    }
    return (
        <div>
            {haed()}
            <div className="container mt-5 mb-5 text-center">
                <div className="AboutContainer p-4">
                    <h1 className="h1About mt-5 " >
                        Creating a Winning Upwork Profile Page
                        If you're a freelancer looking to find work on Upwork, having a well-crafted profile page is crucial. Your profile page is often the first thing potential clients will see, and it's your chance to make a great first impression.
                        Here are some tips for creating a winning Upwork profile page:
                    </h1>
                    <ul className="mt-5 listInAbout text-start">
                        <li className="p-2">1.	Choose a professional profile photo: Your profile photo is the first thing clients will see when they view your profile. Choose a professional-looking photo that represents you and your work.</li>
                        <li className="p-2">2.	Write a compelling overview: Your overview should be a brief summary of your skills, experience, and what you can offer clients. Keep it concise and engaging, and highlight your unique selling points.</li>
                        <li className="p-2">3.	Showcase your portfolio: Your portfolio is where you can showcase examples of your past work. Choose your best work and make sure it's relevant to the type of work you're looking for on Upwork.</li>
                        <li className="p-2">4.	List your skills: Make sure you list all the relevant skills you possess, as this is how clients will find you when they search for freelancers with specific expertise or qualifications.</li>
                        <li className="p-2">5.	Highlight your work history: Your work history is an important part of your profile, as it shows clients your previous experience and the types of clients you've worked with. Include testimonials or reviews from previous clients to build credibility and trust.</li>
                        <li className="p-2">6.	Include your education and training: List any relevant degrees, certifications, or training you've completed. This can help show clients that you're qualified and knowledgeable in your field.</li>
                        <li className="p-2">7.	Use keywords: Use relevant keywords in your profile page to make sure clients can find you when they search for freelancers with specific skills or qualifications.</li>
                        <li className="p-2">8.	Keep your profile up-to-date: Make sure you update your profile regularly with new skills, experience, and work samples. This shows clients that you're active and engaged on the platform.</li>
                    </ul>
                    <div className=" mt-3 h4">
                        In conclusion, creating a winning Upwork profile page is essential for freelancers looking to find work on the platform. By following these tips, you can create a profile that showcases your skills, experience, and unique selling points, and attracts potential clients to your services.
                    </div>
                </div>
                <div className="mt-5">

                    <NavLink to={'/'}><button className="btn btn-success "><h1>Return</h1></button></NavLink>
                </div>
            </div>
            <Footer />
        </div>
    )

}
export default About;