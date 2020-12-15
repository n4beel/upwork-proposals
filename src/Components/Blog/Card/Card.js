import React, { useState, useEffect } from "react";
import readingTime from "reading-time";
import { useHistory } from "react-router-dom";

import {
  CardContainer,
  CardHeader,
  CardCategory,
  CardReadingTime,
  CardTitle,
  CardDescription,
} from './'

import data from '../../../proposals';

export const Card = ({ blog }) => {
  const [labels, setLabels] = useState([]);
  const history = useHistory();

  const openBlog = (title, number) => {
    history.push(`/blog/${title}/${number}`);
  }

  useEffect(() => {
    const labels = blog.labels.nodes.filter((value) => {
      return value.name !== "blog";
    });

    setLabels(labels);
  }, [blog.labels.nodes]);

  console.log(JSON.stringify(data));

  return (

    data && data.map(
      proposal => {
        return (
          <CardContainer>
            {/* <CardHeader>
              <>
                {labels.map((value, i) => {
                  return (
                    <CardCategory value={value} key={i} />
                  );
                })}
              </>
              <CardReadingTime time={readingTime(blog.body).minutes} />
            </CardHeader> */}

            {/* onClick={() => openBlog(blog.title, blog.number)} */}

            <div>
              <CardTitle>{proposal.tag}</CardTitle>
              <CardDescription>
                <h4>Description:</h4>
                {proposal.profile.description},
                {/* &lt;========================&gt; */}
                <br />
                <h4>Cover Letter:</h4>
                {proposal.coverLetter}
              </CardDescription>
            </div>
          </CardContainer>
        )
      }
    )

  );
}
