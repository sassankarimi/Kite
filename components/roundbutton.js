import React, { useEffect } from "react";

//UI Libraries
import Fab from "@material-ui/core/Fab";
import { IoMdSearch } from "react-icons/io";

//routing
import Link from "next/link";

//redux
import { useDispatch } from "react-redux";
import {setSearchParams} from '../redux/searchtour/action'

const RoundButton = props => {
  const { searchParams , name} = props;
  const URL = `/tours?org=${searchParams.org}&des=${searchParams.des}&roomRules=${searchParams.roomRules}&departing=${searchParams.orgDate}&returning=${searchParams.desDate}`;
  const URL2 = `/test?org=${searchParams.org}&des=${searchParams.des}&roomRules=${searchParams.roomRules}&departing=${searchParams.orgDate}&returning=${searchParams.desDate}`;
  const dispatch = useDispatch();
  return (
    <>
    <Fab variant="extended">
      <Link
        href={URL}
          as={URL}
        // as={`/tours?${searchParams.org}&${searchParams.des}&${searchParams.roomRules}&${searchParams.orgDate}&${searchParams.desDate}`}
      >
        <a>
          <IoMdSearch />
          {name}
        </a>
      </Link>
    </Fab>
     <Link href={URL2} as={URL2}>
     <a>
       Test
     </a>
   </Link>
   </>
  );
};
export default RoundButton;
