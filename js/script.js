// Function to set background image
function setBackgroundImage() {
    const element = document.getElementById("backgroundDiv");
    element.style.backgroundImage = "url(././images/Traeger-smash-burger.png)";
    element.style.backgroundSize = "cover"; // Optional: to cover the entire element
    element.style.backgroundPosition = "center"; // Optional: to center the image
  }
  // Call the function to set the background image
  setBackgroundImage();
  beefS = [
    {
      cheeseBurger:{
        title:"بيف برجر",
        name: "برجر جبنة",
        single: 40.00,
        double: 65.00,
      },
      barbqBurger:{
        title:"بيف برجر",
        name: "برجر باربكيو",
        single: 40.00,
        double: 65.00,
      },
      chileeHotBurger:{
        title:"بيف برجر",
        name: "برجر شيلي حار",
        single: 45.00,
        double: 70.00,
      },
      BurgerTasty:{
        title:"بيف برجر",
        name: "برجر تيستي",
        single: 45.00,
        double: 70.00,
      },
      BurgerTastyCheese:{
        title:"بيف برجر",
        name: "برجر تيستي جبنة",
        single: 50.00,
        double: 75.00,
      },
      BurgerMashromtastyCheese:{
        title:"بيف برجر",
        name: "برجر مشروم تيستي جبنة",
        single: 55.00,
        double: 80.00,
      }, 
        
    }
    

  ]

  D=[{
    BurgerSmokeDouble:{
      title:"دبل بيف برجر" ,
      name: "برجر سموك روزبيف مدخن",
      double: 80.00,
    },
    BurgerRanshRomySmoke:{
      title:"دبل بيف برجر" ,
      name: "برجر رانش رومي مدخن",
      double: 80.00,
    },
    BurgerCheeseBarbqRosbeef:{
      title:"دبل بيف برجر" ,
      name: "برجر جبنة باربكيو روزبيف مدخن",
      double: 80.00,
    },
    BurgerChilyRosbeefHalopeno:{
      title:"دبل بيف برجر" ,
      name: "برجر شيلي هالوبينو روزبيف مدخن",
      double: 80.00,
    },
  }]

  CM=[
    {
      migaTastyCheese:{
        title:"ميجا فراخ" ,
        name: "ميجا تستي جبنة",
        double: 75.00,
      },
      migaSousinElandCheese:{
        title:"ميجا فراخ" ,
        name: "ميجا سوزان ايلاند جبنة",
        double: 75.00,
      },
      migaRanchCheese:{
        title:"ميجا فراخ" ,
        name: "ميجا رانش جبنة",
        double: 75.00,
      },
      migabarbqCheese:{
        title:"ميجا فراخ" ,
        name: "ميجا بتربكيو جبنة",
        double: 75.00,
      },
      migaCheleyHalopino:{
        title:"ميجا فراخ" ,
        name: "ميجا تشلي هالوبينو",
        double: 75.00,
      },
      
    }
  ]

  CG=[
    {
      grandtestychees:{
        title:"جراند فراخ" ,
        name: "جراند تستي جبنة",
        double: 65.00,
      },
      grandSousinEland:{
        title:"جراند فراخ" ,
        name: "جراند سوزن ايلاند",
        double: 65.00,
      },
      grandBarbqCheese:{
        title:"جراند فراخ" ,
        name: "جراند باربكيو جبنة",
        double: 65.00,
      },
      migaRanch:{
        title:"جراند فراخ" ,
        name: "جراند رانش ",
        double: 65.00,
      },
      grandSwiteChely:{
        title:"جراند فراخ"  ,
        name: "جراند سويت شيلي",
        double: 65.00,
      },
      grandCornPol:{
        title:"جراند فراخ"  ,
        name: "جراند كورن بلو",
        double: 70.00,

      },
      grandCheleyHalopino:{
        title:"جراند فراخ"  ,
        name: "جراند شيلي هالبينو",
        double: 65.00,
      },
      
    }
  ]

  shrimp=[
    {
      shrimpMuniz:{
        title:"جمبري" ,
        name: "جمبري مايونيز",
        double: 80.00,
      },
      shrimpChely:{
        title:"جمبري" ,
        name: "جمبري شيلي",
        double: 80.00,
      },
      shrimpRansh:{
        title:"جمبري" ,
        name: "جمبري رانش",
        double: 80.00,
      },
      shrimpCheese:{
        title:"جمبري" ,
        name: "جمبري جبنة",
        double: 80.00,
      },
      shrimpSwiteChely:{
        title:"جمبري" ,
        name: "جمبري سويت شلي",
        double: 80.00,
      },
    }
  ]

  fries=[
    {
      friesClassic:{
        title:"بطاطس" ,
        name: "طبق بطاطس",
        double: 25.00,
      },
      friesCheese:{
        title:"بطاطس" ,
        name: "طبق بطاطس جبنة",
        double: 40.00,
      },
      friesTestyCheese:{
        title:"بطاطس" ,
        name: "طبق بطاطس تستي جبنة",
        double: 45.00,
      },
      friesCheeseHalapeno:{
        title:"بطاطس" ,
        name: "طبق بطاطس جبنة هالوبينو",
        double: 45.00,
      },
    }
  ]
  
  function Sty(){
  const sty = document.getElementById("table");
  sty.style.display = ""; // إزالة خاصية display
  }

function Styt(){
  const styt = document.getElementById("tableOnePes");
  styt.style.display = ""; // إزالة خاصية display
}
show = document.getElementById("myTable")
show2 =  document.getElementById("myTableOnePes")
function BS() {
  document.getElementById("btn-beef-s").addEventListener("click", function() {
    if (Sty) {
      Sty();

      // Clear previous content
      show.innerHTML = '';

      for (const catgry of beefS) {
        for (const item in catgry) {
          const burger = catgry[item];

          const content = `
            <tr style="background:white">
              <th scope="row">${burger.title}</th>
              <th scope="row">${burger.name}</th>
              <td>${burger.single ? burger.single : '-'} LE</td>
              <td>${burger.double} LE</td>
            </tr>
          `;

          show.innerHTML += content;
        }
      }
    } else {
      Sty();
      show.innerHTML = '';
    }
  });
}

BS();

  function BD(){

    document.getElementById("btn-beef-d").addEventListener("click", function() {
      if (Sty) {
        Sty();
  
        // Clear previous content
        show.innerHTML = '';
  

      for (const catgr of D) {
        
        for (const item in catgr) {
          const burger = catgr[item];
          const content = `
    
          <tr style="background:white">
              <th scope="row">${burger.title}</th>
              <th scope="row">${burger.name}</th>
              <td>${burger.single ? burger.single : '-'}</td>
              <td>${burger.double} LE</td>
            </tr>
          `;
          show.innerHTML += content;
        }
      }
    } else {
      Sty();
        // Clear previous content
        show.innerHTML = '';
    }
    });


  }
  BD();
  function M(){

    document.getElementById("btn-chicken-m").addEventListener("click", function() {
      if(Styt){
        Styt()
        show2.innerHTML = '';
      for (const catgr of CM) {
        for (const item in catgr) {
          const burger = catgr[item];
          const content2 = `
    
          <tr style="background:white">
              <th scope="row">${burger.title}</th>
              <th scope="row">${burger.name}</th>
           
              <td>${burger.double} LE</td>
            </tr>
          `;
          show2.innerHTML += content2;
        }
      }
    } else {
      Styt();
      show2.innerHTML = '';
    }
    });


  }
  M();
  function G(){

    document.getElementById("btn-chicken-g").addEventListener("click", function() {
      if(Styt){
      Styt()
      show2.innerHTML = '';
      for (const catgr of CG) {
        for (const item in catgr) {
          const burger = catgr[item];
          const content2 = `
    
          <tr style="background:white">
              <th scope="row">${burger.title}</th>
              <th scope="row">${burger.name}</th>
       
              <td>${burger.double} LE</td>
            </tr>
          `;
          show2.innerHTML += content2;
        }
      }
    } else {
      Styt();
      show2.innerHTML = '';
    }
    });


  }
  G();
  function Shrimp(){

    document.getElementById("btn-shrimp").addEventListener("click", function() {
    
      if(Styt){
        Styt()
        show2.innerHTML = '';
      for (const catgr of shrimp) {
        for (const item in catgr) {
          const burger = catgr[item];
          const content2 = `
    
          <tr style="background:white">
              <th scope="row">${burger.title}</th>
             <th scope="row">${burger.name}</th>
              <td>${burger.double} LE</td>
            </tr>
          `;
          show2.innerHTML += content2;
        }
      }
    } else {
      Styt();
      show2.innerHTML = '';
    }
    });


  }
  Shrimp();
  function Fries(){

    document.getElementById("btn-fries").addEventListener("click", function() {
    
      if(Styt){
        Styt()
        show2.innerHTML = '';
      for (const catgr of fries) {
        for (const item in catgr) {
          const burger = catgr[item];
          const content2 = `
    
          <tr style="background:white">
              <th scope="row">${burger.title}</th>
              <th scope="row">${burger.name}</th>
            
              <td>${burger.double} LE</td>
            </tr>
          `;
          show2.innerHTML += content2;
        }
      }
    } else {
      Styt();
      show2.innerHTML = '';
    }
    });


  }
  Fries();



