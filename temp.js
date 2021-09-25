const initializeApp = require('@firebase/app').initializeApp;
const getFirestore = require('@firebase/firestore').getFirestore;
const setDoc = require('@firebase/firestore').setDoc;
const addDoc = require('@firebase/firestore').addDoc;
const doc = require('@firebase/firestore').doc;
const collection = require('@firebase/firestore').collection;
const firebaseConfig = {
    apiKey: "AIzaSyCnfIXpbx0tioO5X0Q8XyCkQYrCWugSCPs",
    authDomain: "proffustask.firebaseapp.com",
    projectId: "proffustask",
    storageBucket: "proffustask.appspot.com",
    messagingSenderId: "825377877884",
    appId: "1:825377877884:web:da7c21572e41db04047ef9",
    measurementId: "G-NY98VMG81S"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
module.exports = db;
const deskPlans = [
    {
        id : 'flexibledesk',
        title:'Flexible Desk',
        price : 3490,
        priceForDuration : 'Month'
    },
    {
        id : 'dedicateddesk',
        title:'Dedicated Desk',
        price : 3990,
        priceForDuration : 'Month'
    },
    
];

const DATA = [
  {
    id: 'desksabcd',
    title: 'DESKS',
    price: 3490,
    priceForDuration : 'Month',
  },
  {
    id: 'privatecabinsabcd',
    title: 'PRIVATE CABINS',
    price: 6490,
    priceForDuration : 'Month',
  },
  {
    id: 'conferenceroomabcd',
    title: 'CONFERENCE ROOMS',
    price: 6490,
    priceForDuration : 'Month',
  },
  {
    id: 'virtualofficeabcd',
    title: 'VIRTUAL OFFICE',
    price: 9990,
    priceForDuration : 'Year',
  },
];

const conferenceroomplans = [
  {
      id : 'perdayconference',
      title:'Conference Room',
      price : 1490,
      priceForDuration : 'Day'
  },
  {
      id : 'perhourconference',
      title:'Conference Room',
      price : 290,
      priceForDuration : 'Hour'
  },
  
];


const privatecabinPlans = [
    {
        id : 'bosscabin',
        title:'Boss Cabin (AC) (1+2)',
        price : 8990,
        priceForDuration : 'Month'
    },
    {
        id : 'bosscabinac',
        title:'Boss Cabin (AC) (1+2)',
        price : 11990,
        priceForDuration : 'Month'
    },
    {
        id : 'teamcabinac',
        title:'Team Cabin (AC) (6)',
        price : 15990,
        priceForDuration : 'Month'
    },
    {
      id : 'teamcabin',
      title:'Team Cabin (6)',
      price : 14990,
      priceForDuration : 'Month'
    },
    {
        id : 'workpod',
        title:'Work Pod (1)',
        price : 5990,
        priceForDuration : 'Month'
    },
    
];

const virtualofficeplans = [
  {
    id : 'mail',
    title:'Mail',
    price : 9990,
    priceForDuration : 'Year'
  },
  {
    id : 'gst',
    title:'GST',
    price : 11990,
    priceForDuration : 'Year'
  },
  {
    id : 'business',
    title:'Business',
    price : 14990,
    priceForDuration : 'Year'
  },
];

// virtualofficeplans.forEach((data) => {
//     setDoc(doc(db, "plans","virtualofficeabcd","allplans", data.id), data).then(()=>{
//         console.log(JSON.stringify(data));
//     });
//   });

for (let i = 0; i < 21; i++) {const ff =async ()=>{
    const docRef = await addDoc(collection(db, "categories"), 
        {
            cname:'cate1',
            cphoto:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
    );
    
    
    console.log("Document written : "+docRef.path);
    for (let i = 0; i < 21; i++) {
    const docRef1 = await addDoc(collection(db,docRef.path+"/catitems" ), 
    {
        itemname:'item1',
        itemphoto:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
        itemprice:'200'
    }
    
    );
    console.log('document written : '+docRef1.path);

    for (let k = 0; k < 21; k++) {
        const docRef2 = await addDoc(collection(db,docRef1.path+"/itemdetails" ), 
    {
        itemname:'item1',
        itemphoto:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
        itemprice:'200',
        details:'afbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiodafbe dijoids idhoi dio iodhoid iodoi oduiofiod'
    }
    
    );
    console.log('document written : '+docRef2.path);

        
    }
    }
    
    
}
    //ff();
}