import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    // Initialize the component with a list of Post in state using the constructor
    constructor(props) {
        super(props);
        this.state = {
            postsList: [],
            hasError: false
        };
    }

    // Create loadPosts() to use Fetch API and assign data to state
    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const fetchedPosts = data.map(item => new Post(item.id, item.title, item.body));
                this.setState({ postsList: fetchedPosts });
            })
            .catch(error => {
                console.error("Error loading posts:", error);
            });
    }

    // Implement componentDidMount() hook to make calls to loadPosts()
    componentDidMount() {
        this.loadPosts();
    }

    // Define componentDidCatch() to display any errors as alert messages
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        alert("An error occurred while loading the posts: " + error.toString());
    }

    // Implement render() to display title and post using headings and paragraphs
    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong displaying the posts.</h2>;
        }

        return (
            <div>
                {this.state.postsList.map(post => (
                    <div key={post.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
