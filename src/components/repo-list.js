import styled from 'styled-components';
import RepoItem from './repo-item';
import EmptyState from './empty-state';

const RepoListStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function RepoList({ repoList, search, filters }) {
  let list = repoList;

  if (filters !== "" && filters !== 'all') {
    list = list.filter((item) => {
      if (item.language) {
        return item.language.toLowerCase() === filters;
      }
      return false;
    });
  }

  if (search !== '') {
    list = list.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  if (list.length === 0) {
    return <EmptyState/>
  }

  return (
    <RepoListStyled>
      {list.map((item) => {
        return <RepoItem {...item} key={item.id} />;
      })}
    </RepoListStyled>
  );
}

export default RepoList;
