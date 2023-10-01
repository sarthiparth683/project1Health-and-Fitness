import styles from "./nav.css";

const Nav = () => {


  
  return (
    <>
      <div className="nav">
        <img src="\src\images\sarthi.jpeg" alt="sarthi" />
        <h1>
          <u>Health and Fitness</u>
        </h1>
      </div>

      <div className="nutrition">
        <h3>
          <u>Balance Diet</u>
        </h3>

        <ol className="list_item">
          <li> Carbohydrates,</li>
          <li>protein</li>
          <li>fat,</li>
          <li>vitamins,</li>
          <li>minerals,</li>
          <li>water.</li>
        </ol> <br />
        These are the basic of any balance diet which is requiere in our diet.
        
       
        
        <img src="src\images\pexels-vanessa-loring-5966434.jpg" alt="" />

        <img src="src/images/pexels-mikhail-nilov-6740528.jpg" alt="" />
        
      </div>

      <div className="Exercise">
      <h3>
          <u>Exercise</u>
        </h3>
        <ol>
          <li>Cardio</li>
          <li>Bodyweight</li>
          <li>Free Weight</li>
          <li>Yoga</li>
          <li>Meditation</li>
          <li>Pranayam</li>
          <li>etc..</li>
          
        </ol>

        <img src="\src\images\pexels-anush-gorak-1229356.jpg" alt="" />
        <img src="src\images\pexels-william-choquette-1954524.jpg" alt="" />

      </div>
    </>
  );
};

export default Nav;
