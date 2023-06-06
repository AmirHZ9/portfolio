import React from "react";
import { useQuery } from "@apollo/client";
import { Get_Project_info } from "../graphql/queries";
export default function Details({ id, setShow }) {
  const { loading, data } = useQuery(Get_Project_info, {
    variables: {
      id: id,
    },
  });
  console.log({ loading, data });
  return (
    <div>
      {data == undefined || data.project == null ? (
        ""
      ) : (
        <div>
          <img src={data.project.projectCover.url} alt="" />
          <div className=" m-6  border-b  pb-5">
            <p className="bold text-3xl text-[#444]">{data.project.name}</p>
            <span className="text-highlight">{data.project.tech}</span>
          </div>
          <div className="m-6 h-32 overflow-y-auto">
            <p>{data.project.description}</p>
          </div>
          <div className="flex justify-between items-center m-6">
            <a
              href={data.project.url}
              target="_blank"
              className="text-white bg-highlight py-2 px-8 text-sm font-semibold hover:text-highlight hover:bg-white duration-300"
            >
              VIEW SITE
            </a>
            <button
              onClick={() => setShow(false)}
              className="font-bold text-[rgba(0,0,0,0.4)] text-3xl"
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
