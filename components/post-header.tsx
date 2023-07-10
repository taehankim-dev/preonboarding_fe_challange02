import PostTitle from "./post-title";
import DateFormatter from './date-formatter';

type Props = {
  title : string,
  date : string,
}

const PostHeader = ({
  title,
  date,

}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}

export default PostHeader;