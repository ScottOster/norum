import React, { Component } from 'react';
import { Link } from '@reach/router';
import { fetchTopics } from '../API';
import '../App.css';

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
        <Link className='NavLink' key='allTopicsLink' to='/'>
          all
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
