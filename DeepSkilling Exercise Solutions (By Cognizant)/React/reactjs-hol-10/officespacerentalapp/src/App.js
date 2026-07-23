import React from 'react';

function App() {
  // Create an element to display the heading of the page
  const element = "Office Space"; 
  
  // Provide a valid image URL or local path for the 'sr' variable 
  const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300"; 
  
  // Attribute to display the image of the office space[cite: 5]
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space"/>; 

  // Create a list of Object to loop through the office space items[cite: 5]
  const officeSpaces = [
    { Name: "DBS", Rent: 50000, Address: 'Chennai' }, //[cite: 5]
    { Name: "Tech Park", Rent: 75000, Address: 'Bangalore' } 
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Display the page heading[cite: 5] */}
      <h1>{element} , at Affordable Range </h1>
      
      {/* Display the image attribute[cite: 5] */}
      {jsxatt}

      {/* Loop through the office space items to display more data[cite: 5] */}
      {officeSpaces.map((ItemName, index) => {
        
        // Apply CSS to display Rent in Red if below 60000 and Green if above[cite: 5]
        const rentStyle = {
          color: ItemName.Rent <= 60000 ? 'red' : 'green' 
        };

        return (
          <div key={index} style={{ marginTop: '20px' }}>
            {/* Display details using the specific heading tags from the hint[cite: 5] */}
            <h1>Name: {ItemName.Name}</h1>
            <h3 style={rentStyle}>Rent: Rs. {ItemName.Rent}</h3>
            <h3>Address: {ItemName.Address}</h3>
          </div>
        );
      })}
      
    </div>
  );
}

export default App;
