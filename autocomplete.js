let services = [
    "3D Modeling and CAD Services","Access Control System Installation","ACP Panel Installation","After Party Cleaning","Air Conditioning (AC) Gas Refill","Air Conditioning (AC) Installation","Air Conditioning (AC) Repair","Aluminium Door Sales","Aluminium Door Installation","Aluminium Window Installation","Aluminium Window Sales","Aluminum Work and Repair","Android Development","Animation","Apartment Cleaning","Apartment Relocation Services","Aquarium Services","Architectural Drawing","Architectural Services","Artificial Grass Installation","Artificial Grass Repair","Artificial Grass Replacement","Artificial Grass Sales","AstroTurf Installation","Asbestos Removal","Automatic Gate Installation","Automobile Mechanic","Bathroom Renovation","Bathroom Sink Installation","Battery Charge Controllers","Battery Specialist","Bed Bug Extermination","Bill Of Quantities (BOQ)","Blog Development","Blog Writing","Borehole Drilling","Borehole Drilling Geophysical Survey","Borehole Maintenance","Borehole Repair and Maintenance","Building Plan Permit/Approval","Building Inspection Services","Building Services","Business Development","Cabinet Installation","Cabinet Repair","Camera Repair","Car Repair","Car Roof Lining Repair and Replacement","Car Seat Repair","Car Service (Maintenance)","Car Spare Part Sales","Car Stereo Repair","Car Wash","Carpet Cleaning","CCTV Camera Installation","Cladding Suppliers","Ceiling Installation","Coffee Machine Repair","Cold Room Construction","Commercial Cleaning","Computer Repair","Construction Services","Content Writing","Curtain Installation","Damp Proofing","Dash Camera Installation","Deep House Cleaning","Demolition Permit\/Approval","Demolition Services","Desktop Application Development","Diesel Generator Installation","Digital Marketing","Diesel Generator Repair","Dish Washer Installation","Dish Washer Repair","Disposal and Waste Management Services","Domain Name Registration","Domestic Cleaning","Door Installation","Door Repair","Doorbell Installation","Drone Inspection Services","Drone Repair","Drop-off Delivery Services","Dry Cleaning","Drywall Partition","DStv Installation","DVD Mount Installation","DStv Repair and Maintenance","E-commerce Logistics Services","E-commerce Web Development","Electric Fence Installation","Electric Sewing Machine Repair","Electrical Wiring And Repair","Electronic Machine Repair","E-payment Integration Services","Epoxy / 3D Floor Interlock","Equipment Rental Services","Exterior Decoration","Facility Management","Fan Repair","Fire Alarm Installation","Floor Installation","Floor Replacement","Floor Polishing","Forklift Hire","Frameless Glass Installation","Fumigation","Furniture Assembly","Furniture Cleaning","Furniture Repair","General Carpentry","General Cleaning Services","General Security Services","Generator Installation","Generator Rental","Generator Repair","Glass Partition","GOtv Installation","Gutter Cleaning","Graphic Design","Gym Equipment Supply","Handyman","Heating System Installation","Heating System Repair and Maintenance","Heavy Equipment Repair","Home Appliances Installation","Home Renovation","Home Security Alarm Installation","Home Security System Installation","Hotel Cleaning","House Cleaning Services","House Painting","Ice Block Making Machine Construction","Industrial Cleaning","Intercom Installation","Interior Decoration","Interior Design","Interlocking Floor Installation","Internet Wiring Installation","Inverter Installation","Inverter Repair","Inverter Sales","iOS Development","IT Services","IT Support","IT Training","Kitchen Renovation","Janitorial Cleaning","Kitchen Sink Installation","Land Leveling and Grading","Land Surveying","Land Title Registration","Laptop Repair","Laundry Services","LED Screen Rental","Led Signage Installation","LinkedIn Optimization Expert","Lock Installation","Lock Repair","Logo Design","Marble Restoration","Marketing","Mast/Tower Fabrication and Installation","Mechanical and Electrical Drawings (M&E\/MEP)","Mental Health Counselling","Mercedes Benz Spare Part Sales","Metal Painting","Metalwork","Mobile Application Development","Mobile Screen Replacement","Motion Sensor Installation","Mould Inspection and Removal","Move In Cleaning","Move Out Cleaning","MultiTV (Joy TV)","Moving Services","MyTv Installation","New Home Construction","Nilesat","Office Cleaning","Office Partitioning","Outdoor Decoration","Outdoor Landscaping and Design","Packing and Unpacking Services","Pest Control Services","Phone Repair","Pickup Service","Piling Services","Plasterboard Ceiling Installation","Plasterboard Wall Installation","Plumbing","POP Wall Screeding","Post Construction Cleaning","Prepaid Meter Installation","Projector Repair","Property Management","Pumping Machine Installation","Pumping Machine Repair and Maintenance","PVC Ceiling Installation","Quantity Survey","Real Estate","Real Estate Agent Services","Refrigerator Installation","Refrigerator (Fridge) Gas Refill","Refrigerator Repair Services","Renovation Cleaning","Residential Cleaning","Roof Cleaning","Roof Repair and Maintenance","Rug Cleaning","Satellite Dish Installation","Satellite Dish Repair","Scaffolding","Scaffolding Equipment","Scroll Pannel Display Sign Installation","Search Engine Optimization (SEO)","Signage Installation","Sink Installation","Skyscraper Window Cleaning","Soakaway (Septic Tank) Cleaning","Soakaway (Septic Tank) Construction","Social Media Marketing","Software Development","Soil Testing","Solar Charge Controllers","Solar Panel Installation","Solar Panel Repair","Solar Panel Sales","Sound Proofing","Sound System Installation","Sprinkler and Irrigation System Installation","Sound System Repair","Stainless Steel Handrail Installation","Stamped Concrete Floor","StarTimes Installation","Statistical Data Analysis","Structural Drawing","Structural Engineering Services","Sump Pump Installation","Sump Pump Repair and Maintenance","Swimming Pool Cleaning","Swimming Pool Construction","Swimming Pool Maintenance","Swimming Pool Renovation","Swimming Pool Repair","Tablet Repair","Termite Inspection","Tile Installation","Tile Repair and Replacement","Toilet Cubicle Sales and Installation","Toilet Installation","Toilet Replacement","Towing Truck Rental","Town Planning","Tree Planting","Tree Removal","Tree Trimming and Maintenance","Truck Hire","TV Mount Installation","Truck Repair","TV Repair Services","UI Design","Upholstery Cleaning","UPS System Installation","Vehicle Electrical Fault Repair","Vehicle Upholstery","Vehicle/Car Air Conditioning (AC) Repair","Video Camera Repair","Video Doorbell Installation","Video Surveillance (CCTV)","Wall Cladding","Wall Painting and Screeding","Wallpaper Installation","Wallpaper Repair or Removal","Warehousing Services","Washing Machine Installation","Washing Machine Repair","Waste Collection","Water (Overhead) Tank Installation","Water (Overhead) Tank Installation","Water Damage Cleanup and Restoration","Water Fountain Installation","Water Heater Installation and Replacement","Water Tank Cleaning","Water Tanker Supply","Water Treatment","Web Development Training","Waterproofing","Web Hosting","Web Management and Maintenance","Website Design","Website Development","Welding","Window Blind Installations","Window Cleaning","Window Installation","Window Repair and Replacement","Window Screen Installation and Replacement","Window Tinting","WordPress Website Development"
    
];


autocomplete (document.getElementById("myInput"), services);

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    let currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        let a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }

    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      let x = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
 })
 
}





