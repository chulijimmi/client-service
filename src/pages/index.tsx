import React from 'react';
import { PageProps, Link } from 'gatsby';
import '../assets/main.css';

export default function IndexRoute(props: PageProps) {
  return (
    <>
      Home page of stream boost <span>{props.path}</span>
      <ul>
        <li>
          <Link to="/discovery">Discovery</Link>
        </li>
        <li>
          <Link to="/live">Live</Link>
        </li>
        <li>
          <Link to="/streamer">Streamer</Link>
        </li>
      </ul>
    </>
  );
}
