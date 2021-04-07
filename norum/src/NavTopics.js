import React, { Component } from 'react';
import { Link } from '@reach/router';
import { fetchTopics } from './API';

class NavTopics extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    fetchTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  render() {
    const { topics } = this.state;

    return (
      <nav className='NavTopics'>
        {' '}
        Jump to topic
        {topics.map((topic) => {
          return (
            <Link key={topic.slug} to={`/${topic.slug}`}>
              {topic.slug}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavTopics;
