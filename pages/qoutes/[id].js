import { useRouter } from "next/router";
import Document from "next/document";
import { useEffect, useState } from "react";

export default function Qoute(props) {
  const router = useRouter();

  let [id, setId] = useState(router.query.id);

   
  useEffect(() => {
    setId( id + document.location);
  }, []);

  return <p>ID is {id}</p>;
}
export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: true,
  };
}
