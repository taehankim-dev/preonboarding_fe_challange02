
type Props = {
  children? : React.ReactNode,
}

const PostTitle = ({children} : Props) => {
  return (
    <h1 className="text-5xl font-bold">
      {children}
    </h1>
  )
}

export default PostTitle;