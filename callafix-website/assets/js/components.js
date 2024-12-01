class GenericNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
      <nav id="header">
    
      <div id="logo-icon" class="logo-icon">
          <a href="/callafix-website/index.html" id="Home-icon"><img src="/callafix-website/assets/img/Call-A-Fix-logo.png" alt="Call-A-Fix-Logo" class="callafix-logo"> 
          <!--  <span class="material-symbols-outlined" id="call-icon">call</span> 
          Call A Fi
            <span class="material-symbols-outlined" id="tools-icon">construction</span>-->            
            </a>
      </div>

    <div id="navlist-container" class="navlist-container">   

        <ul id="menuList" class="nav-list"> 

        <li><a href="/callafix-website/index.html" class="active">Home</a></li>

 <!-- <li class="dropdown-container">
              <button class="dropdown-btn">Real Estate</button>
              <div class="dropdown-content">
                <a href="http://127.0.0.1:5500/callafix-website/pages/appointment.html?selected=Rent%20or%20lease%20House">Rent/Lease</a>
                <a href="http://127.0.0.1:5500/callafix-website/pages/appointment.html?selected=Buy%20Or%20Sell%20House">Buy/Sell</a>
                <a href="http://127.0.0.1:5500/callafix-website/pages/appointment.html?selected=New%20Home%20Construction">Building Construction</a>                
              </div>
          </li>    
 -->         
        <li><a href="https://flutterwave.com/store/callafixengservices" target="_blank">Market Place</a></li>         
          
        <li><a href="/callafix-website/pages/services.html">Services</a></li>
        <!-- 
            <li class="dropdown-container">
              <button class="dropdown-btn">TechHub</button>
              <div class="dropdown-content">
                <a href="#">Responsive web-based resume</a>
                <a href="#">CRM solutions</a>
                <a href="#">Progressive web Apps</a>
                <a href="#">Website development</a>
                <a href="#">Mobile App development</a>
             </div>
             </li>   
              
        <li><a href="https://www.google.com/search?sca_esv=beca34c916e0512e&rlz=1C1NDCM_enNG828NG828&sxsrf=ADLYWIKY6Yv2nHkJbIIltfcvfKX4VqbtVg%3A1729085883365&q=Call%20A%20Fix&stick=H4sIAAAAAAAAAONgU1I1qDA0ME6ySDFIMU20NDMzSkuxMqgwtjA2S0k1MTG3NElOTDNJXsTK5ZyYk6PgqOCWWQEAl0epyDYAAAA&mat=CX_7ZI3C7VJB&ved=2ahUKEwiRw_TugpOJAxVfbEEAHQn9KyUQrMcEegQIIRAD" target="_blank">About Us</a></li>
        -->        

        <li><a id="servicepro-btn" href="/callafix-website/pages/signup.html">Are you a Service Provider?</a></li>
            
 <!--  <li class="Login-container">
          <a href="/callafix-website/pages/login.html" id="Login-button">        
          <span class="material-symbols-outlined" id="user-icon">account_circle</span>
          <h3>Sign in</h3>
         <span class="material-symbols-outlined" id="login-icon">arrow_drop_down</span>        
          </a>
      </li>
 -->   
      </ul>
    </div> 
  <div id="menu-icon" class="menu-icon">
  <span class="material-symbols-outlined" onclick="toggleMenu()">menu</span>    
  </div>  
     </nav>   
     
      `;
    }
}
class GenericHomeHero extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
        
    <section id="hero">
      <div class="heroBG">
        <img src="/callafix-website/assets/img/heroBG.png" alt="call-a-fix-handymen">
      </div>
      <div class="hero-section">
     
     <!---     <img src="/callafix-website/assets/img/callafix-logo.png" alt="call A Fix Logo" class="callafix-logo"/>-->
      <h2 id="pageTitle" class="pageTitle">Hire Service Experts across<span class="callafix-text"> Nigeria</span></h2>
     <!-- <p>Welcome to your One-Stop Solution To All Engineering Needs!</p> -->

        
  <!-- SEARCH BAR BEGINS HERE! ------>

  <form autocomplete="off" action="">
    <div class="autocompleteContainer">
    <span class="search-icon material-symbols-outlined">search</span>
    <input type="text" id="myInput" name="services" placeholder="What Service Do You Need? e.g. Cleaning, Plumbing, Car repair, Solar inverter">
  <!-- <ul id="autocomplete-list"></ul>
  
  <input id="js-submit-btn" type="submit"> -->
    </div>   
  </form>
      </div>
  </div>
  <!-- SEARCH BAR ENDS HERE! ------>
  <div id="features-container">

    <div id="carpenter-id" class="features-btn"><a href="http://127.0.0.1:5500/callafix-website/pages/appointment.html?selected=General%20Carpentry">
    <span class="material-symbols-outlined" id="features-icon">carpenter</span></a>
    <p>Carpentry</p>
    </div>
    
    <div id="Plumbing-id" class="features-btn"><a href="http://127.0.0.1:5500/callafix-website/pages/appointment.html?selected=Plumbing">
      <span class="material-symbols-outlined" id="features-icon">plumbing</span></a>
      <p>Plumbing</p>
    </div>

    <div id="washer-id" class="features-btn"><a href="http://127.0.0.1:5500/callafix-website/pages/appointment.html?selected=Washing%20Machine%20Repair">
      <span class="material-symbols-outlined" id="features-icon">local_laundry_service</span></a>
      <p>Washer Repair</p>
    </div>

    <div id="car-id" class="features-btn"><a href="http://127.0.0.1:5500/callafix-website/pages/appointment.html?selected=Car%20Repair">
        <span class="material-symbols-outlined" id="features-icon">car_repair</span></a>
        <p>Car Repair</p>
      </div>

    <div id="Electrical-id" class="features-btn"><a href="http://127.0.0.1:5500/callafix-website/pages/appointment.html?selected=Electrical%20Wiring%20And%20Repair">
          <span class="material-symbols-outlined" id="features-icon">electrical_services</span></a>
          <p>Electrical</p>
        </div>

    <div id="RealEstate-id" class="features-btn"><a href="http://127.0.0.1:5500/callafix-website/pages/appointment.html?selected=Real%20Estate">
          <span class="material-symbols-outlined" id="features-icon">real_estate_agent</span></a>
          <p>Real Estate</p>
        </div>

    <div id="Relocation-id" class="features-btn"><a href="http://127.0.0.1:5500/callafix-website/pages/appointment.html?selected=Apartment%20Relocation%20Services">
          <span class="material-symbols-outlined" id="features-icon">local_shipping</span></a>
          <p>Relocation</p>        
        </div>

      <div id="SolarInverter-id" class="features-btn"><a href="http://127.0.0.1:5500/callafix-website/pages/appointment.html?selected=Solar%20Panel%20Installation">
        <span class="material-symbols-outlined" id="features-icon">solar_power</span></a>
        <p>Solar Inverter</p>        
      </div>

      <div id="Painting-id" class="features-btn"><a href="http://127.0.0.1:5500/callafix-website/pages/appointment.html?selected=House%20Painting">
        <span class="material-symbols-outlined" id="features-icon">imagesearch_roller</span></a>
        <p>Painting</p>        
      </div>

      <div id="cctv-id" class="features-btn"><a href="http://127.0.0.1:5500/callafix-website/pages/appointment.html?selected=CCTV%20Camera%20Installation">
        <span class="material-symbols-outlined" id="features-icon">speed_camera</span></a>
        <p>CCTV</p>        
      </div> 
    </div>
      
  <div id="quote-of-the-day">
    <h1 class="Fixing-text">Fixing Things Has Never Been <span class="Easier-text">Easier!</span></h1> 
  </div>
     </section>

   `;
  }
}
class GenericHero extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `

     <section id="hero">
          <div class="hero-section">
              <div class="mapNCitylist">
                  <div class="map-container">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887388.8280615266!2d6.15827007945345!3d8.154831760657126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1730299731007!5m2!1sen!2sng" width="1000" height="508" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map of Nigeria"></iframe>
                  </div>

          <div id="search-title">
                  <h2 id="pageTitle">Hire Service Experts in Nigeria</h2> 
              </div>  
              <div class="search-bar">                          
                  <form autocomplete="off" action="">
                      <div class="autocompleteContainer">
                          <span class="search-icon material-symbols-outlined">search</span>
                          <input type="text" id="myInput" name="services" placeholder="What Service Do You Need? e.g. Cleaning, Plumbing">
                      </div>   
                  </form>
          </div> 


      <nav id="citylist" class="citylist">                                     
                <h4 id="stateTitle">Where in Nigeria, do you need our Service?</h4> <!-- Updated for state title -->
                
          <ul id="citySelect">

            <li><a href="/callafix-website/pages/services.html?state=Abia">Abia</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Abuja">Abuja</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Adamawa">Adamawa</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Akwa%20Ibom">Akwa Ibom</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Anambra">Anambra</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Bauchi">Bauchi</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Bayelsa">Bayelsa</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Benue">Benue</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Borno">Borno</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Cross%20River">Cross River</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Delta">Delta</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Ebonyi">Ebonyi</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Edo">Edo</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Ekiti">Ekiti</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Enugu">Enugu</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Gombe">Gombe</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Imo">Imo</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Jigawa">Jigawa</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Kaduna">Kaduna</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Kano">Kano</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Katsina">Katsina</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Kebbi">Kebbi</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Kogi">Kogi</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Kwara">Kwara</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Lagos">Lagos</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Nasarawa">Nasarawa</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Niger">Niger</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Ogun">Ogun</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Ondo">Ondo</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Osun">Osun</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Oyo">Oyo</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Plateau">Plateau</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Rivers">Rivers</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Sokoto">Sokoto</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Taraba">Taraba</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Yobe">Yobe</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Zamfara">Zamfara</a></li>
         </ul> <!-- Cities will be populated dynamically -->                                                           
      </nav>      
              </div>           
                               
          </div>   
      </section>

      
             
   `;
  }
}
class GenericFeaturedposts extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
                    <h5>Trending Services: </h5> 
                  <div id="featuredposts" class="featuredposts">
                            
              <div class="post-box">
                    <div class="postImg-Box">
                      <img src="/callafix-website/assets/img/house-painting-services-by-Call-A-Fix.png" alt="house-painting-services-by-Call-A-Fix">
                   </div> 
                   <h5>House Painting</h5> 
                   <a href="/callafix-website/pages/appointment.html?selected=Painting%20Services"><p>Transform your living spaces with expert painting services that bring color and life to your walls.</p></a>                                                      
              </div>

              <div class="post-box">
                     <div class="postImg-Box">
                      <img src="/callafix-website/assets/img/washing-machine-repair-services-by-Call-A-Fix.png" alt="washing-machine-repair-services-by-Call-A-Fix"> 
                   </div> 
                   <h5>Appliance Repair</h5> 
                  <a href="/callafix-website/pages/appointment.html?selected=Appliance%20Repair"> <p>Fix your household appliances quickly and efficiently with the help of skilled technicians.</p></a>                                              
              </div>

              <div class="post-box">                
                  <div class="postImg-Box">
                       <img src="/callafix-website/assets/img/building-construction-services-by-Call-A-Fix.png" alt="building-construction-services-by-Call-A-Fix"> 
                   </div> 
                   <h5>Building Services</h5> 
                   <a href="/callafix-website/pages/appointment.html?selected=Building%20Services"><p>Turn your dream home or commercial space into reality with our experienced builders.</p></a>                                                      
              </div>

              <div class="post-box">
                    <div class="postImg-Box">
                      <img src="/callafix-website/assets/img/Car-repair-services-by-Call-A-Fix.jpg" alt="Car-repair-services-by-Call-A-Fix"> 
                   </div> 
                   <h5>Car Repair Services</h5>
                   <a href="/callafix-website/pages/appointment.html?selected=Car%20Repair"><p>Keep your vehicle running smoothly with comprehensive car repair and maintenance services.</p></a>                                                      
              </div>

              <div class="post-box">
                    <div class="postImg-Box">
                      <img src="/callafix-website/assets/img/relocation-services-by-Call-A-Fix.jpg" alt="relocation-services-by-Call-A-Fix"> 
                   </div> 
                   <h5>Relocation Services</h5> 
                   <a href="/callafix-website/pages/appointment.html?selected=Apartment%20Relocation%20Services"><p>Stress-free moving with professional packers, movers, and logistics services.</p></a>                                                      
              </div>

              <div class="post-box">
                   <div class="postImg-Box">
                      <img src="/callafix-website/assets/img/real-estate-services-by-Call-A-Fix.png" alt="real-estate-services-by-Call-A-Fix">
                   </div> 
                   <h5>Real Estate Services</h5> 
                  <a href="/callafix-website/pages/appointment.html?selected=Real%20Estate"><p>Find, buy, sell, or rent properties through trusted real estate professionals across Nigeria.</p></a>                                                      
              </div>             
         </div>

  `;
  }
}
class GenericList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  
    <section id="featuresContainer" class="featuresContainer">    
  <div id="contentContainer" class="contentContainer">
  
  <h1 id="featuresTitle">Available Services in Nigeria</h1> 
  
      <!-- Building Services -->
      <div class="service-category">
        <h5>Building Services</h5>
        <div class="grid-container">
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Building%20Inspection%20Services">Building Inspection Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Building%20Plan%20Permit/Approval">Building Plan Permit/Approval</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Building%20Services">Building Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Demolition%20Permit/Approval">Demolition Permit/Approval</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Demolition%20Services">Demolition Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Facility%20Management">Facility Management</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Land%20Leveling%20and%20Grading">Land Leveling and Grading</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Land%20Surveying">Land Surveying</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Land%20Title%20Registration">Land Title Registration</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=New%20Home%20Construction">New Home Construction</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Piling%20Services">Piling Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Property%20Management">Property Management</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Quantity%20Survey">Quantity Survey</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Real%20Estate%20Agent%20Services">Real Estate Agent Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Scaffolding">Scaffolding</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Scaffolding%20Equipment">Scaffolding Equipment</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Soil%20Testing">Soil Testing</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Stamped%20Concrete%20Floor">Stamped Concrete Floor</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Statistical%20Data%20Analysis">Statistical Data Analysis</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Structural%20Drawing">Structural Drawing</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Structural%20Engineering%20Services">Structural Engineering Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Town%20Planning">Town Planning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Mechanical%20and%20Electrical%20Drawings%20(M&E/MEP)">Mechanical and Electrical Drawings (M&E/MEP)</a></div>
        </div>
      </div>             
      <!-- Cleaning & Fumigation Services -->
      <div class="service-category">
        <h5>Cleaning & Fumigation Services</h5>
        <div class="grid-container">
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=After%20Party%20Cleaning">After Party Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Apartment%20Cleaning">Apartment Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Bed%20Bug%20Extermination">Bed Bug Extermination</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Carpet%20Cleaning">Carpet Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Commercial%20Cleaning">Commercial Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Deep%20House%20Cleaning">Deep House Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Domestic%20Cleaning">Domestic Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Dry%20Cleaning">Dry Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Fumigation">Fumigation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Furniture%20Cleaning">Furniture Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=General%20Cleaning%20Services">General Cleaning Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Gutter%20Cleaning">Gutter Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Hotel%20Cleaning">Hotel Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=House%20Cleaning%20Services">House Cleaning Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Industrial%20Cleaning">Industrial Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Janitorial%20Cleaning">Janitorial Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Move%20In%20Cleaning">Move In Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Move%20Out%20Cleaning">Move Out Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Office%20Cleaning">Office Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Pest%20Control%20Services">Pest Control Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Post%20Construction%20Cleaning">Post Construction Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Renovation%20Cleaning">Renovation Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Residential%20Cleaning">Residential Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Roof%20Cleaning">Roof Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Rug%20Cleaning">Rug Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Skyscraper%20Window%20Cleaning">Skyscraper Window Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Soakaway%20(Septic%20Tank)%20Cleaning">Soakaway (Septic Tank) Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Swimming%20Pool%20Cleaning">Swimming Pool Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Termite%20Inspection">Termite Inspection</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Upholstery%20Cleaning">Upholstery Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Water%20Damage%20Cleanup%20and%20Restoration">Water Damage Cleanup and Restoration</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Water%20Tank%20Cleaning">Water Tank Cleaning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Window%20Cleaning">Window Cleaning</a></div>
        </div>
      </div>                  
      <!-- Home Improvement -->
      <div class="service-category">
        <h5>Home Improvement</h5>
        <div class="grid-container">
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=3D%20Modeling%20and%20CAD%20Services">3D Modeling and CAD Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Aluminium%20Door%20Installation">Aluminium Door Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Aluminium%20Door%20Sales">Aluminium Door Sales</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Aluminium%20Window%20Installation">Aluminium Window Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Aluminium%20Window%20Sales">Aluminium Window Sales</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Aluminum%20Work%20and%20Repair">Aluminum Work and Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Apartment%20Relocation%20Services">Apartment Relocation Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Aquarium%20Services">Aquarium Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Architectural%20Services">Architectural Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Artificial%20Grass%20Replacement">Artificial Grass Replacement</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Artificial%20Grass%20Sales">Artificial Grass Sales</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Asbestos%20Removal">Asbestos Removal</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Bathroom%20Renovation">Bathroom Renovation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Bill%20Of%20Quantities%20(BOQ)">Bill Of Quantities (BOQ)</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Borehole%20Drilling">Borehole Drilling</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Borehole%20Maintenance">Borehole Maintenance</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Damp%20Proofing">Damp Proofing</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Drywall%20Partition">Drywall Partition</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Epoxy%20/%203D%20Floor%20Interlock">Epoxy / 3D Floor Interlock</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Exterior%20Decoration">Exterior Decoration</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Floor%20Polishing">Floor Polishing</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Floor%20Replacement">Floor Replacement</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Furniture%20Assembly">Furniture Assembly</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=General%20Carpentry">General Carpentry</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Glass%20Partition">Glass Partition</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Home%20Renovation">Home Renovation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=House%20Painting">House Painting</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Interior%20Decoration">Interior Decoration</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Interior%20Design">Interior Design</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Kitchen%20Renovation">Kitchen Renovation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Marble%20Restoration">Marble Restoration</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Office%20Partitioning">Office Partitioning</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Outdoor%20Decoration">Outdoor Decoration</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=POP%20Wall%20Screeding">POP Wall Screeding</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Sound%20Proofing">Sound Proofing</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Swimming%20Pool%20Construction">Swimming Pool Construction</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Swimming%20Pool%20Maintenance">Swimming Pool Maintenance</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Swimming%20Pool%20Renovation">Swimming Pool Renovation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Toilet%20Replacement">Toilet Replacement</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Tree%20Planting">Tree Planting</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Tree%20Removal">Tree Removal</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Wall%20Cladding">Wall Cladding</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Warehousing%20Services">Warehousing Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Waste%20Collection">Waste Collection</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Water%20Tanker%20Supply">Water Tanker Supply</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Water%20Treatment">Water Treatment</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Waterproofing">Waterproofing</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Wall%20Painting%20and%20Screeding">Wall Painting and Screeding</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Mould%20Inspection%20and%20Removal">Mould Inspection and Removal</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Tree%20Trimming%20and%20Maintenance">Tree Trimming and Maintenance</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Outdoor%20Landscaping%20and%20Design">Outdoor Landscaping and Design</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Soakaway%20(Septic%20Tank)%20Construction">Soakaway (Septic Tank) Construction</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Borehole%20Drilling%20Geophysical%20Survey">Borehole Drilling Geophysical Survey</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Disposal%20and%20Waste%20Management%20Services">Disposal and Waste Management Services</a></div>
        </div>
      </div>          
      <!-- Installation Services -->
      <div class="service-category">
        <h5>Installation Services</h5>
        <div class="grid-container">
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Access%20Control%20System%20Installation">Access Control System Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=ACP%20Panel%20Installation">ACP Panel Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Air%20Conditioning%20(AC)%20Installation">Air Conditioning (AC) Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Artificial%20Grass%20Installation">Artificial Grass Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=AstroTurf%20Installation">AstroTurf Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Automatic%20Gate%20Installation">Automatic Gate Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Bathroom%20Sink%20Installation">Bathroom Sink Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Battery%20Charge%20Controllers">Battery Charge Controllers</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Battery%20Specialist">Battery Specialist</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Cabinet%20Installation">Cabinet Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Car%20Spare%20Part%20Sales">Car Spare Part Sales</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=CCTV%20Camera%20Installation">CCTV Camera Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Ceiling%20Installation">Ceiling Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Cladding%20Suppliers">Cladding Suppliers</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Cold%20Room%20Construction">Cold Room Construction</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Curtain%20Installation">Curtain Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Dash%20Camera%20Installation">Dash Camera Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Diesel%20Generator%20Installation">Diesel Generator Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Dish%20Washer%20Installation">Dish Washer Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Door%20Installation">Door Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Doorbell%20Installation">Doorbell Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=DStv%20Installation">DStv Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=DVD%20Mount%20Installation">DVD Mount Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Electric%20Fence%20Installation">Electric Fence Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Fire%20Alarm%20Installation">Fire Alarm Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Floor%20Installation">Floor Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Frameless%20Glass%20Installation">Frameless Glass Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Generator%20Installation">Generator Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Generator%20Rental">Generator Rental</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=GOtv%20Installation">GOtv Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Heating%20System%20Installation">Heating System Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Home%20Appliances%20Installation">Home Appliances Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Home%20Security%20Alarm%20Installation">Home Security Alarm Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Home%20Security%20System%20Installation">Home Security System Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Intercom%20Installation">Intercom Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Interlocking%20Floor%20Installation">Interlocking Floor Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Internet%20Wiring%20Installation">Internet Wiring Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Inverter%20Installation">Inverter Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Inverter%20Sales">Inverter Sales</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Kitchen%20Sink%20Installation">Kitchen Sink Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Led%20Signage%20Installation">Led Signage Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Lock%20Installation">Lock Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Mercedes%20Benz%20Spare%20Part%20Sales">Mercedes Benz Spare Part Sales</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Motion%20Sensor%20Installation">Motion Sensor Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=MultiTV%20(Joy%20TV)">MultiTV (Joy TV)</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=MyTv%20Installation">MyTv Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Nilesat">Nilesat</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Plasterboard%20Ceiling%20Installation">Plasterboard Ceiling Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Plasterboard%20Wall%20Installation">Plasterboard Wall Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Prepaid%20Meter%20Installation">Prepaid Meter Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Pumping%20Machine%20Installation">Pumping Machine Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=PVC%20Ceiling%20Installation">PVC Ceiling Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Refrigerator%20Installation">Refrigerator Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Satellite%20Dish%20Installation">Satellite Dish Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Signage%20Installation">Signage Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Sink%20Installation">Sink Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Solar%20Charge%20Controllers">Solar Charge Controllers</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Solar%20Panel%20Installation">Solar Panel Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Solar%20Panel%20Sales">Solar Panel Sales</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Sound%20System%20Installation">Sound System Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=StarTimes%20Installation">StarTimes Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Sump%20Pump%20Installation">Sump Pump Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Tile%20Installation">Tile Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Toilet%20Installation">Toilet Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=TV%20Mount%20Installation">TV Mount Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=UPS%20System%20Installation">UPS System Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Video%20Doorbell%20Installation">Video Doorbell Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Video%20Surveillance%20(CCTV)">Video Surveillance (CCTV)</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Wallpaper%20Installation">Wallpaper Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Washing%20Machine%20Installation">Washing Machine Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Water%20Fountain%20Installation">Water Fountain Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Welding">Welding</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Window%20Blind%20Installations">Window Blind Installations</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Window%20Installation">Window Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Window%20Tinting">Window Tinting</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Water%20(Overhead)%20Tank%20Installation">Water (Overhead) Tank Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Stainless%20Steel%20Handrail%20Installation">Stainless Steel Handrail Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Scroll%20Panel%20Display%20Sign%20Installation">Scroll Panel Display Sign Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Toilet%20Cubicle%20Sales%20and%20Installation">Toilet Cubicle Sales and Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Mast/Tower%20Fabrication%20and%20Installation">Mast/Tower Fabrication and Installation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Water%20Heater%20Installation%20and%20Replacement">Water Heater Installation and Replacement</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Window%20Screen%20Installation%20and%20Replacement">Window Screen Installation and Replacement</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Sprinkler%20and%20Irrigation%20System%20Installation">Sprinkler and Irrigation System Installation</a></div>
        </div>
      </div>            
      <!-- IT Services -->
      <div class="service-category">
        <h5>IT Services</h5>
        <div class="grid-container">
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Android%20Development">Android Development</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Animation">Animation</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Blog%20Development">Blog Development</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Blog%20Writing">Blog Writing</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Content%20Writing">Content Writing</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Digital%20Marketing">Digital Marketing</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Graphic%20Design">Graphic Design</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=iOS%20Development">iOS Development</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=IT%20Services">IT Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=IT%20Support">IT Support</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=IT%20Training">IT Training</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Logo%20Design">Logo Design</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Marketing">Marketing</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Social%20Media%20Marketing">Social Media Marketing</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Software%20Development">Software Development</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=UI%20Design">UI Design</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Web%20Hosting">Web Hosting</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Website%20Design">Website Design</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Website%20Development">Website Development</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Domain%20Name%20Registration">Domain Name Registration</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=E-commerce%20Web%20Development">E-commerce Web Development</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Web%20Development%20Training">Web Development Training</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=LinkedIn%20Optimization%20Expert">LinkedIn Optimization Expert</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=E-payment%20Integration%20Services">E-payment Integration Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Desktop%20Application%20Development">Desktop Application Development</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=WordPress%20Website%20Development">WordPress Website Development</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Mobile%20Application%20Development">Mobile Application Development</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Web%20Management%20and%20Maintenance">Web Management and Maintenance</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Search%20Engine%20Optimization%20(SEO)">Search Engine Optimization (SEO)</a></div>
        </div>
      </div>                
      <!-- Relocation Services -->
      <div class="service-category">
        <h5>Relocation Services</h5>
        <div class="grid-container">
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Drop-off%20Delivery%20Services">Drop-off Delivery Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=E-commerce%20Logistics%20Services">E-commerce Logistics Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Moving%20Services">Moving Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Packing%20and%20Unpacking%20Services">Packing and Unpacking Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Pickup%20Service">Pickup Service</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Truck%20Hire">Truck Hire</a></div>
        </div>
      </div>          
      <!-- Repair Services -->
      <div class="service-category">
        <h5>Repair Services</h5>
        <div class="grid-container">
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Air%20Conditioning%20(AC)%20Gas%20Refill">Air Conditioning (AC) Gas Refill</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Air%20Conditioning%20(AC)%20Repair">Air Conditioning (AC) Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Artificial%20Grass%20Repair">Artificial Grass Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Automobile%20Mechanic">Automobile Mechanic</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Cabinet%20Repair">Cabinet Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Camera%20Repair">Camera Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Car%20Repair">Car Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Car%20Seat%20Repair">Car Seat Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Car%20Service%20(Maintenance)">Car Service (Maintenance)</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Car%20Stereo%20Repair">Car Stereo Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Coffee%20Machine%20Repair">Coffee Machine Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Computer%20Repair">Computer Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Diesel%20Generator%20Repair">Diesel Generator Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Dish%20Washer%20Repair">Dish Washer Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Door%20Repair">Door Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Drone%20Repair">Drone Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=DStv%20Repair%20and%20Maintenance">DStv Repair and Maintenance</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Electric%20Sewing%20Machine%20Repair">Electric Sewing Machine Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Electrical%20Wiring%20And%20Repair">Electrical Wiring And Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Electronic%20Machine%20Repair">Electronic Machine Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Fan%20Repair">Fan Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Furniture%20Repair">Furniture Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Generator%20Repair">Generator Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Heavy%20Equipment%20Repair">Heavy Equipment Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Inverter%20Repair">Inverter Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Laptop%20Repair">Laptop Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Lock%20Repair">Lock Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Metalwork">Metalwork</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Mobile%20Screen%20Replacement">Mobile Screen Replacement</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Phone%20Repair">Phone Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Projector%20Repair">Projector Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Refrigerator%20(Fridge)%20Gas%20Refill">Refrigerator (Fridge) Gas Refill</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Refrigerator%20Repair%20Services">Refrigerator Repair Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Roof%20Repair%20and%20Maintenance">Roof Repair and Maintenance</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Satellite%20Dish%20Repair">Satellite Dish Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Solar%20Panel%20Repair">Solar Panel Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Sound%20System%20Repair">Sound System Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Sump%20Pump%20Repair%20and%20Maintenance">Sump Pump Repair and Maintenance</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Swimming%20Pool%20Repair">Swimming Pool Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Tablet%20Repair">Tablet Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Tile%20Repair%20and%20Replacement">Tile Repair and Replacement</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Truck%20Repair">Truck Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=TV%20Repair%20Services">TV Repair Services</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Vehicle%20Electrical%20Fault%20Repair">Vehicle Electrical Fault Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Vehicle%20Upholstery">Vehicle Upholstery</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Video%20Camera%20Repair">Video Camera Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Wallpaper%20Repair%20or%20Removal">Wallpaper Repair or Removal</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Washing%20Machine%20Repair">Washing Machine Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Window%20Repair%20and%20Replacement">Window Repair and Replacement</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Borehole%20Repair%20and%20Maintenance">Borehole Repair and Maintenance</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Vehicle/Car%20Air%20Conditioning%20(AC)%20Repair">Vehicle/Car Air Conditioning (AC) Repair</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Car%20Roof%20Lining%20Repair%20and%20Replacement">Car Roof Lining Repair and Replacement</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Pumping%20Machine%20Repair%20and%20Maintenance">Pumping Machine Repair and Maintenance</a></div>
          <div class="grid-item"><a href="/callafix-website/pages/appointment.html?selected=Heating%20System%20Repair%20and%20Maintenance">Heating System Repair and Maintenance</a></div>
        </div>
      </div>         
  </div>
  </section>
  
  
  `;
   }
}
class GenericTagLabelComment extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      

          <section id="tagLabelCommentContainer" class="abtServices">
          <div id="tagLabelCommentContainer" class="abtServiceContainer">
      
              <!-- Tags  Labels and comment Section 
              <div class="tags-section">
                  <h5>Tags & Labels:</h5>
                  <ul id="tags" class="tags">
                      <li><a href="/tags/washing-machines">Washing Machines</a></li>
                      <li><a href="/tags/appliance-repair">Appliance Repair</a></li>
                      <li><a href="/tags/laundry">Laundry</a></li>
                      <li><a href="/tags/maintenance">Maintenance</a></li>
                      <li><a href="/tags/household-appliances">Household Appliances</a></li>
                      <li><a href="/tags/painting-services">Painting Services</a></li>
                      <li><a href="/tags/real-estate">Real Estate Services</a></li>
                      <li><a href="/tags/building-construction">Building Construction</a></li>
                      <li><a href="/tags/building-maintenance">Building Maintenance</a></li>
                      <li><a href="/tags/plumbing">Plumbing Services</a></li>
                      <li><a href="/tags/borehole-services">Borehole Services</a></li>
                      <li><a href="/tags/car-repair">Car Repair</a></li>
                      <li><a href="/tags/generator-repair">Generator Repair Services</a></li>
                      <li><a href="/tags/damp-proofing">Damp Proofing Services</a></li>
                      <li><a href="/tags/solar-inverter">Solar Inverter Services</a></li>
                      <li><a href="/tags/cleaning-fumigation">Cleaning and Fumigation Services</a></li>
                      <li><a href="/tags/electrical-wiring">Electrical Wiring Services</a></li>
                      <li><a href="/tags/web-design-development">Web Design and Development</a></li>
                  </ul>
              </div>
              -->
      
              <!-- Related Links to Similar Pages -->
      <div class="related-links">
          <h5>Related Pages:</h5>
          <ul>
          <!-- Appliance Repair Services -->
          <li><a href="/callafix-website/pages/services/air-conditioners.html">Air Conditioner Repair Services in Nigeria</a></li>
          <li><a href="/callafix-website/pages/services/refrigerators.html">Refrigerator Repair Services in Nigeria</a></li>
          <li><a href="/callafix-website/pages/services/generator-repair.html">Generator Repair Services in Nigeria</a></li>
          <li><a href="/callafix-website/pages/services/tv-repair.html">TV Repairs in Nigeria</a></li>
          <li><a href="/callafix-website/pages/services/washing-machine.html">Washing Machine Repair Services in Nigeria</a></li>
      
          <!-- Home and Building Services -->
          <li><a href="/callafix-website/pages/services/building-construction.html">Building Construction Services in Nigeria</a></li>
          <li><a href="/callafix-website/pages/services/plumbing-services.html">Plumbing Services in Nigeria</a></li>
          <li><a href="/callafix-website/pages/services/cleaning-and-fumigation.html">Cleaning and Fumigation Services in Nigeria</a></li>
          <li><a href="/callafix-website/pages/services/mould-removal.html">Mould Inspection and Removal Services in Nigeria</a></li>
          <li><a href="/callafix-website/pages/services/damp-proofing.html">Damp Proofing Services in Nigeria</a></li>
      
          <!-- Water & Energy Services -->
          <li><a href="/callafix-website/pages/services/borehole.html">Borehole Services in Nigeria</a></li>
          <li><a href="/callafix-website/pages/services/water-treatment.html">Water Treatment Services in Nigeria</a></li>
          <li><a href="/callafix-website/pages/services/solar-inverter.html">Solar Inverter Services in Nigeria</a></li>
      
          <!-- Auto and Real Estate Services -->
          <li><a href="/callafix-website/pages/services/auto-repair.html">Car Repair Services in Nigeria</a></li>
          <li><a href="/callafix-website/pages/services/real-estate-services.html">Real Estate Services in Nigeria</a></li>
      
          <!-- Technology Services -->
          <li><a href="/callafix-website/pages/services/web-design.html">Web Design and Development Services in Nigeria</a></li>
      </ul>
  </div>

<!-- Comment Section -->
<div class="comments-section">
  <h5>Leave a Comment:</h5>
  <form id="commentForm" class="comment-form">    
      <textarea name="comment" id="comment" rows="5" placeholder="Write your comment here..." required></textarea>
      <input type="text" id="name" name="name" placeholder="Enter Your Name" required>
      <button type="submit" class="submit-comment">Post Comment</button>
  </form>
  <div id="comments-list">
      <h6>Recent Comments:</h6>
      <ul id="commentsList">
          <!-- Comments will be dynamically loaded here -->
      </ul>
  </div>
</div>
          </div>
      </section>


        `;
    }
}
class GenericFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

            <section id="signup" class="section1">
  <div class="container7">

<div class="signup-box">
      
      <div class="h1NpNbutton-box">
          <h1>Are you a Service Provider?</h1>
          <p>Create an account and start getting Jobs instantly!</p>
          <a href="/callafix-website/pages/signup.html" id="Login-button">     
      <button class="make-request-button"><span>Signup</span></button></a>
    </div>
</div>

</div>
</section>

<!---   *********** FOOTER 2 BEGINS   ****************-->

<section id="State-list" class="section1">
    <div class="container8">

  <div class="statelist-box">
        
        <div class="h4Nstatelist-box">

            <h4>Where Do You Need Our <span>Service in Nigeria?</span></h4>

            <div class="state-list">
<div>
        <ul class="state-ul1" id="stateSelect">
            <li><a href="/callafix-website/pages/services.html?state=Abia">Abia</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Abuja">Abuja</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Adamawa">Adamawa</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Akwa%20Ibom">Akwa Ibom</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Anambra">Anambra</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Bauchi">Bauchi</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Bayelsa">Bayelsa</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Benue">Benue</a></li>
            </ul>
    </div>
<div>
          <ul class="state-ul2" id="stateSelect">
            <li><a href="/callafix-website/pages/services.html?state=Borno">Borno</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Cross%20River">Cross River</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Delta">Delta</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Ebonyi">Ebonyi</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Edo">Edo</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Ekiti">Ekiti</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Enugu">Enugu</a></li>
          </ul>
    </div>
    <div>
          <ul class="state-ul3" id="stateSelect">
            <li><a href="/callafix-website/pages/services.html?state=Gombe">Gombe</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Imo">Imo</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Jigawa">Jigawa</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Kaduna">Kaduna</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Kano">Kano</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Katsina">Katsina</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Kebbi">Kebbi</a></li>
          </ul>
    </div>
    <div>
          <ul class="state-ul4" id="stateSelect">
            <li><a href="/callafix-website/pages/services.html?state=Kogi">Kogi</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Kwara">Kwara</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Lagos">Lagos</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Nasarawa">Nasarawa</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Niger">Niger</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Ogun">Ogun</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Ondo">Ondo</a></li>
            </ul>
    </div>
    <div>
            <ul class="state-ul5" id="stateSelect">
            <li><a href="/callafix-website/pages/services.html?state=Osun">Osun</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Oyo">Oyo</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Plateau">Plateau</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Rivers">Rivers</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Sokoto">Sokoto</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Taraba">Taraba</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Yobe">Yobe</a></li>
            <li><a href="/callafix-website/pages/services.html?state=Zamfara">Zamfara</a></li>
             </ul>
    </div>      
        </div>
        </div>
        </div>
    </div>
</section>

<section id="footer" class="section1">
    <div class="container9">

  <div class="footer-box">
        
        <div class="Customer-list">

            <h5>Quicklinks</h5>
            <ul class="footer-ul1">
       <!--       <li><a href="/callafix-website/pages/costestimator.html">Cost Estimator</a></li> -->
              <li><a href="https://www.google.com/search?sca_esv=beca34c916e0512e&rlz=1C1NDCM_enNG828NG828&sxsrf=ADLYWIKY6Yv2nHkJbIIltfcvfKX4VqbtVg%3A1729085883365&q=Call%20A%20Fix&stick=H4sIAAAAAAAAAONgU1I1qDA0ME6ySDFIMU20NDMzSkuxMqgwtjA2S0k1MTG3NElOTDNJXsTK5ZyYk6PgqOCWWQEAl0epyDYAAAA&mat=CX_7ZI3C7VJB&ved=2ahUKEwiRw_TugpOJAxVfbEEAHQn9KyUQrMcEegQIIRAD" target="_blank">About Us</a></li>
              <li><a href="/callafix-website/pages/services.html">Services</a></li>
              <li><a href="/callafix-website/pages/subscribe.html">Pricing</a></li>
              <li><a href="/callafix-website/pages/faq.html">FAQs</a></li>
              </ul>
        </div>


        <div class="FollowUs-list">

          <h5>Follow Us</h5>
          <ul class="footer-ul2">
            <li><a href="https://www.instagram.com/callafix" target="_blank">Instagram</a></li>
            <li><a href="https://web.facebook.com/callafix" target="_blank">Facebook</a></li>
            <li><a href="https://www.tiktok.com/@callafix" target="_blank">Tiktok</a></li>
            <li><a href="https://x.com/callafix" target="_blank">X</a></li>
          </ul>
  </div>

  <div class="Contact-list">

    <h5>Contact Us</h5>
    <ul class="footer-ul3">
      <p> callafix@gmail.com </p>
      <li><a href="https://tawk.to/chat/5d271a027a48df6da2440a40/default">Live Chat Us</a></li>
      <li><a href="https://chat.whatsapp.com/J6UtEVqR8g89ZFhYpLz3Nc" target="_blank">Join Our WhatsApp Community</a></li>
      <p> Our lines are available 24/7! </p>
      
    </ul>
</div>
</div>
</div>
    <div class="Copyright">
     <p> Copyright © 2024 Call A Fix Eng. Services I <a href="/callafix-website/pages/policyandterms.html">Privacy policy and Terms of service</a> </p>


    </div>
    
</section>  

      `;
   }
}
class GenericSubscribe extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
      <div class="container">
                <h1>Choose A Subscription Plan</h1>
                <div class="qckBtn-box">
                    
                    <!-- One Week Plan -->
                    <div class="plan">
                        <h3>Basic Plan</h3>
                        <h3>₦3,000 (1 Week)</h3>
                        <p>Perfect for short-term projects or if you're just getting started. This plan gives you access to all features for a week, so you can quickly build up your profile, connect with clients, and start delivering services.</p>
                        <ul>
                            <li>Access to platform for 7 days</li>
                            <li>Create and update your service profile</li>
                            <li>Connect with potential clients</li>
                            <li>Receive job notifications</li>
                            <li>Customer support during the subscription period</li>
                        </ul>
                        <p>Recurring billing *You can Cancel anytime</p>
                        <a href="https://flutterwave.com/pay/wy86qc4bm9tv">
                          <button class="pay-now">Pay Now</button>
                      </a>
                    </div>

                     <!-- Two Weeks Plan -->
                    <div class="plan">
                        <h3>Professional Plan</h3>
                        <h3>₦5,000 (2 Weeks)</h3>
                        <p>Perfect for new users or those looking for short-term exposure. This plan offers essential features to get you started and boost your presence on the platform.</p>
                        <ul>
                            <li>Access to platform for 14 days</li>
                            <li>Basic profile setup with standard listings</li>
                            <li>Connect with potential clients</li>
                            <li>Receive job notifications</li>
                            <li>Increased visibility in search results</li>
                            <li>Email support</li>
                            <li>Performance analytics (limited access)</li>
                        </ul>
                        <p>Recurring billing *You can Cancel anytime</p>
                        <a href="https://flutterwave.com/pay/u8x0kspkncqb">
                            <button class="pay-now">Pay Now</button>
                        </a>
                    </div>                    
        
                    <!-- One Month Plan -->
                    <div class="plan">
                        <h3>Premium Plan</h3>
                        <h3>₦10,000 (1 Month)</h3>
                        <p>Ideal for providers who are looking to grow their customer base over a longer period. This plan allows you to take full advantage of the platform and build lasting client relationships.</p>
                        <ul>
                            <li>Access to platform for 30 days</li>
                            <li>Full-service profile management (photos, descriptions, portfolio)</li>
                            <li>Unlimited job applications</li>
                            <li>Receive Unlimited job notifications</li>
                            <li>Priority placement in search results</li>
                            <li>Dedicated customer support</li>
                            <li>Performance insights and feedback from clients</li>
                        </ul>
                        <p>Recurring billing *You can Cancel anytime</p>
                        <a href="https://flutterwave.com/pay/qkv8mncpiij2">                       
                        <button class="pay-now">Pay Now</button>
                        </a>
                    </div>
                
                    <!-- Three Month Plan -->
                    <div class="plan">
                        <h3>Enterprise Plan</h3>
                        <h3>₦25,000 (3 Months)</h3>
                        <p>For serious service providers committed to long-term growth. This plan offers the best value and gives you the stability and exposure needed to scale your business.</p>
                        <ul>
                            <li>Access to platform for 90 days</li>
                            <li>Full-service profile management with featured listings</li>
                            <li>Unlimited job applications</li>
                            <li>Receive Unlimited job notifications</li>
                            <li>Top-tier visibility in search results</li>
                            <li>Priority customer support</li>
                            <li>Performance analytics and client reviews</li>
                            <li>Exclusive promotions and discounts</li>
                        </ul>
                        <p>Recurring billing *You can Cancel anytime</p>
                        <a href="https://flutterwave.com/pay/omba8fktklso">
                          <button class="pay-now">Pay Now</button>
                      </a>
                    </div>
        
                </div>
            </div>

     `;
   }
}
// Define the custom elements
customElements.define('generic-nav', GenericNav);
customElements.define('generic-home-hero', GenericHomeHero);
customElements.define('generic-hero', GenericHero);
customElements.define('generic-featuredposts', GenericFeaturedposts);
customElements.define('generic-list', GenericList);
customElements.define('generic-taglabelcomment', GenericTagLabelComment);
customElements.define('generic-footer', GenericFooter);
customElements.define('generic-subscribe', GenericSubscribe);
