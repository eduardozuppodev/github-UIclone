import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/eduardozuppodev'}>
          eduardozuppodev
      </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/eduardozuppodev/github-clone'}>
          github-clone
        </Link>

      </Breadcrumb>

      <p>Clone of the Github profile page</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>starts</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/eduardozuppodev/clone_github'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;