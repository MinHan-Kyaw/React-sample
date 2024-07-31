import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximilian" body="This is body one" />
        <Post author="Manuel" body="This is body two" />
      </ul>
    </>
  );
}
export default PostsList;
