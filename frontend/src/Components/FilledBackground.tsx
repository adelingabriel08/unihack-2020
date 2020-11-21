import React from "react";
import './ComponentsCSS/Typography.css';


export const FilledBackground = (props: any) => {
    const background: React.CSSProperties = {
        backgroundColor: "#f5f186",
        backgroundImage: "linear-gradient(315deg, #f5f186 0%, #9dfbc8 74%)"
    }
    return <div className="container-fluid d-flex align-items-center p-5" style={background}>
        <div data-aos="fade-up" data-aos-duration="1000" className="container ">
            <div className="row">
                {props.children}
            </div>
        </div>
      </div>
    </div>
  );
};
