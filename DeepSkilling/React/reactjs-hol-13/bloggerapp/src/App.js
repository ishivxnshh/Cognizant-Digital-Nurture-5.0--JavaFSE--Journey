import React from 'react';

// Define the books array as provided in the hint
export const books = [
  {id: 101, bname: 'Master React', price: 670},
  {id: 102, bname: 'Deep Dive into Angular 11 ', price: 800},
  {id: 103, bname: 'Mongo Essentials', price: 450},
];

function App() {
  
  // 1. Book Details Component
  // Uses React Map, map() function, and extracts components with keys[cite: 8]
  const bookdet = (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  // 2. Blog Details Component 
  // Conditional Rendering Method 1: Logical && operator[cite: 8]
  const showBlog = true;
  const content = showBlog && (
    <div>
      <h3>React Learning</h3>
      <p style={{ fontWeight: 'bold' }}>Stephen Biz</p>
      <p>Welcome to learning React!</p>
      
      <h3>Installation</h3>
      <p style={{ fontWeight: 'bold' }}>Schewzdenier</p>
      <p>You can install React from npm.</p>
    </div>
  );

  // 3. Course Details Component
  // Conditional Rendering Method 2: If/Else statements[cite: 8]
  const isCourseAvailable = true;
  let coursedet;
  
  if (isCourseAvailable) {
    coursedet = (
      <div>
        <h3>Angular</h3>
        <h4>4/5/2021</h4>
        <h3>React</h3>
        <h4>6/3/20201</h4>
      </div>
    );
  } else {
    coursedet = <div>No courses available currently.</div>;
  }

  // Return the main layout using the class names provided in the hint[cite: 8]
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '40px', textAlign: 'center' }}>
      
      {/* Course Details Block[cite: 8] */}
      <div className="mystyle1">
        <h1>Course Details</h1>
        {coursedet}
      </div>
      
      {/* Book Details Block with CSS styling to match the green borders in the output[cite: 8] */}
      <div className="st2" style={{ borderLeft: '3px solid green', borderRight: '3px solid green', padding: '0 40px' }}>
        <h1>Book Details</h1>
        {bookdet}
      </div>
      
      {/* Blog Details Block[cite: 8] */}
      <div className="v1">
        <h1>Blog Details</h1>
        {content}
      </div>
      
    </div>
  );
}

export default App;
