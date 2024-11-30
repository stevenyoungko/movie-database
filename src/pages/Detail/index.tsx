import MovieDetail from '../../components/MovieDetail';
import { StyledWatchListLink } from '../WatchList/styled';
import { StyledHomeLink } from '../Home/styled';

function DetailPage() {
  return (
    <>
      <StyledHomeLink to="/">回首頁</StyledHomeLink>
      <StyledWatchListLink to="/watch_list">我的收藏清單</StyledWatchListLink>
      <MovieDetail />
    </>
  );
}

export default DetailPage;
