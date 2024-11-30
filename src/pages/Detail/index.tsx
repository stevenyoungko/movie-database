import MovieDetail from '../../components/MovieDetail';
import { StyledWatchListLink } from '../WatchList/styled';

function DetailPage() {
  return (
    <>
      <StyledWatchListLink to="/watch_list">我的收藏清單</StyledWatchListLink>
      <MovieDetail />
    </>
  );
}

export default DetailPage;
