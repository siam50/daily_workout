import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='blog'>
            <h1>Blog</h1>
            <h3>Q: How React Works?</h3>
            <p>A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab. </p>
            <p>React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates. So putting all pieces together, Reconciliation = Render + Diffing occurs in between + Commit.</p>
            <h3>Q: what is difference between props and state in react?</h3>
            <p><strong>Difference between State and Props:</strong></p>
            <p><strong>Props:</strong></p>
            <p>
                <li>Props are immutable.</li>
                <li>Props are read-only.</li>
                <li>Props can be accessed by the child component.</li>
                <li>Props make components reusable.</li>
                <li>Stateless component can have Props.</li>
            </p>
            <p><strong>State:</strong></p>
            <p>
                <li>State is mutable.</li>
                <li>State can be read or write both.</li>
                <li>State cannot be accessed by child components.</li>
                <li>State cannot make components reusable.</li>
                <li>Stateless components cannot have State.</li>
            </p>
            <h3>Q: Where is useEffect used without data loading?</h3>
            <p> We know that, the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.</p>
        </div>
    );
};

export default Blog;