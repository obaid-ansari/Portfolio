import React from "react";

const Skills = () => {
  return (
    <>
      <h3 className="pt-5 display-5 fw-bold text-center">
        My <span className="gradient">Skills</span>
      </h3>
      <div class="mt-4 container-fluid text-center">
        <div class="row px-5">
          <div class="box html col-sm-12 col-md-5 col-lg-3  rounded-4  m-3 p-3">
            <i class="display-1 pt-3 fa-brands fa-html5"></i>
            <p className="fs-3 fw-bold">HTML</p>
          </div>
          <div class="box css col-sm-12 col-md-5 col-lg-3 rounded-4  m-3 p-3">
            <i class="display-1 pt-3 fa-brands fa-css"></i>
            <p className="fs-3 fw-bold">CSS</p>
          </div>
          <div class="box js col-sm-12 col-md-5 col-lg-3 rounded-4  m-3 p-3">
            <i class="display-1 pt-3 fa-brands fa-js"></i>
            <p className="fs-3 fw-bold ">Javascript</p>
          </div>
          <div class="box bootstrap col-sm-12 col-md-5 col-lg-3 rounded-4  m-3 p-3">
            <i class="display-1  pt-3 fa-brands fa-bootstrap"></i>
            <p className="fs-3 fw-bold ">Bootstrap</p>
          </div>
          <div class="box git col-sm-12 col-md-5 col-lg-3 rounded-4  m-3 p-3">
            <i class="display-1  pt-3 fa-brands fa-git-alt"></i>
            <p className="fs-3 fw-bold ">Git</p>
          </div>
          <div class="box github col-sm-12 col-md-5 col-lg-3 rounded-4  m-3 p-3">
            <i class="display-1  pt-3 fa-brands fa-github"></i>
            <p className="fs-3 fw-bold ">Github</p>
          </div>
          <div class="box react col-sm-12 col-md-5 col-lg-3 rounded-4  m-3 p-3">
            <i class="display-1  pt-3 fa-brands fa-react"></i>
            <p className="fs-3 fw-bold ">React</p>
          </div>
          <div class="box npm col-sm-12 col-md-5 col-lg-3 rounded-4  m-3 p-3">
            <i class="display-1  pt-3 fa-brands fa-npm"></i>
            <p className="fs-3 fw-bold ">Npm/Yarn</p>
          </div>
          {/* <div class="box node col-sm-12 col-md-5 col-lg-3 rounded-4 m-3 p-3">
            <i class="display-1  pt-3 fa-brands fa-node"></i>
            <p className="fs-3 fw-bold ">Node js</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Skills;
