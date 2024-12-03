import { StyledSortSelect } from './styled';

interface MovieSortProps {
  value: string;
  onChange: (value: string) => void;
}

const MovieSort = ({ value, onChange }: MovieSortProps) => {
  return (
    <StyledSortSelect
      value={value}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(e.target.value)
      }
    >
      <option value="default">預設排序</option>
      <option value="title">片名 (A-Z)</option>
      <option value="title-desc">片名 (Z-A)</option>
      <option value="year">年份 (舊到新)</option>
      <option value="year-desc">年份 (新到舊)</option>
    </StyledSortSelect>
  );
};

export default MovieSort;
