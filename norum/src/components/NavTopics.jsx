import React, { Component } from 'react';
import { Link } from '@reach/router';
import { fetchTopics } from '../API';

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
        <Link className='NavLink' key='allTopicsLink' to='/'>
          All
        </Link>
        {topics.map((topic) => {
          return (
            <Link className='NavLink' key={topic.slug} to={`/${topic.slug}`}>
              {topic.slug}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavTopics;
