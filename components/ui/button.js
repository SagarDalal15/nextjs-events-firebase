import React from "react";

import Link from "next/link";
import classes from "./button.module.css";

export default function Button(props) {
  return (
    <div>
      <Link href={props.link}>
        {/* By default link tag create and renders an anchor tag in it. */}
        {/* if we create an anchor tag then it will render our anchor tag */}
        <a className={classes.btn}>{props.children}</a>
      </Link>
    </div>
  );
}
