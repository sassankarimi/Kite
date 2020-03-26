import React, { useState, useEffect } from "react";

//UI Libraries
import { Container } from "reactstrap";

//routing
import ports from "../ports";
import Link from "next/link";

//redux
import {useSelector , useDispatch} from 'react-redux';
import {loadWeblog} from '../redux/weblogGrid/action'

const WeblogGrid = () => {
  const weblog= useSelector (state => state.weblogGridReducer.weblog );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWeblog());
  }, []);

  return (
    <Container className="right-to-left mt-5 mb-5 weblog-grid">
      <h4>مجله گردشگری و توریسیتی</h4>
      <span>
        با ورق زدن مجله گردشگری کایت ، جاذبه های گردشگری جهان را بشناسید.
      </span>
      {weblog.length > 0 ? (
        <div className="grid-container">
          <Link
            href={{
              pathname: ports.domainBlog,
              query: { name: weblog[0].TitleSR }
            }}
            as={`${ports.domainBlog}${weblog[0].TitleSR}`}
          >
            <a className="grid-item item1">
              <img
                src={`${ports.imgDomainRoutes}${weblog[0].PreviewImageFileName}`}
                alt={weblog[0].TitleSR}
              />
              <span>{weblog[0].TitleSR}</span>
            </a>
          </Link>
          <Link
            href={{
              pathname: ports.domainBlog,
              query: { name: weblog[1].TitleSR }
            }}
            as={`${ports.domainBlog}${weblog[1].TitleSR}`}
          >
            <a className="grid-item item2">
              <img
                src={`${ports.imgDomainRoutes}${weblog[1].PreviewImageFileName}`}
                alt={weblog[1].TitleSR}
              />
              <span>{weblog[1].TitleSR}</span>
            </a>
          </Link>
          <Link
            href={{
              pathname: ports.domainBlog,
              query: { name: weblog[2].TitleSR }
            }}
            as={`${ports.domainBlog}${weblog[2].TitleSR}`}
          >
            <a className="grid-item item3">
              <img
                src={`${ports.imgDomainRoutes}${weblog[2].PreviewImageFileName}`}
                alt={weblog[2].TitleSR}
              />
              <span>{weblog[2].TitleSR}</span>
            </a>
          </Link>
          <Link
            href={{
              pathname: ports.domainBlog,
              query: { name: weblog[3].TitleSR }
            }}
            as={`${ports.domainBlog}${weblog[3].TitleSR}`}
          >
            <a className="grid-item item4">
              <img
                src={`${ports.imgDomainRoutes}${weblog[3].PreviewImageFileName}`}
                alt={weblog[3].TitleSR}
              />
              <span>{weblog[3].TitleSR}</span>
            </a>
          </Link>
          <Link
            href={{
              pathname: ports.domainBlog,
              query: { name: weblog[4].TitleSR }
            }}
            as={`${ports.domainBlog}${weblog[4].TitleSR}`}
          >
            <a className="grid-item item5">
              <img
                src={`${ports.imgDomainRoutes}${weblog[4].PreviewImageFileName}`}
                alt={weblog[4].TitleSR}
              />
              <span>{weblog[4].TitleSR}</span>
            </a>
          </Link>
          <Link
            href={{
              pathname: ports.domainBlog,
              query: { name: weblog[5].TitleSR }
            }}
            as={`${ports.domainBlog}${weblog[5].TitleSR}`}
          >
            <a className="grid-item item6">
              <img
                src={`${ports.imgDomainRoutes}${weblog[5].PreviewImageFileName}`}
                alt={weblog[5].TitleSR}
              />
              <span>{weblog[5].TitleSR}</span>
            </a>
          </Link>
          <Link
            href={{
              pathname: ports.domainBlog,
              query: { name: weblog[6].TitleSR }
            }}
            as={`${ports.domainBlog}${weblog[6].TitleSR}`}
          >
            <a className="grid-item item7">
              <img
                src={`${ports.imgDomainRoutes}${weblog[6].PreviewImageFileName}`}
                alt={weblog[6].TitleSR}
              />
              <span>{weblog[6].TitleSR}</span>
            </a>
          </Link>
        </div>
      ) : (
        <span></span>
      )}
    </Container>
  );
};
export default WeblogGrid;
