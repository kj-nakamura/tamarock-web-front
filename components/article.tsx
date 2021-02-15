import Link from "next/link";
import { ARTICLE } from "../types/Types";

const ArticleList: React.FC<ARTICLE> = ({ id, title, createdat }) => {
  return (
    <li className="pl-5 my-8 border-b-2 border-yellow-400 border-dashed" key={id}>
      <Link href="/articles/[id]" as={`/articles/${id}`}>
        <a>
          <p>
            {title}
            <br />
            <span className="text-gray-500">{formatDate(new Date(createdat))}</span>
          </p>
        </a>
      </Link>
    </li>
  );
};

export default ArticleList;

const formatDate = (dt) => {
  var y = dt.getFullYear();
  var m = ("00" + (dt.getMonth() + 1)).slice(-2);
  var d = ("00" + dt.getDate()).slice(-2);
  return y + "-" + m + "-" + d;
};