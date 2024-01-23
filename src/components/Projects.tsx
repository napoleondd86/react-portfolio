const Projects = () => {
  return (
    <section id="projects" className=" rounded-3xl bg-background p-4 justify-center items-center flex flex-col max-w-7xl mt-16">

      <h2>Projects</h2>
      <div className="projects_container flex flex-row flex-wrap justify-evenly gap-4 " >
        <div className="project">
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptatum, quia, quos, voluptate voluptas quas tempora
            voluptatibus quibusdam doloribus quod consequatur. Quisquam
            voluptate, quibusdam voluptas quas tempora voluptatibus quibusdam
            doloribus quod consequatur.
          </p>
          <a href="#">View Project</a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptatum, quia, quos, voluptate voluptas quas tempora
            voluptatibus quibusdam doloribus quod consequatur. Quisquam
            voluptate, quibusdam voluptas quas tempora voluptatibus quibusdam
            doloribus quod consequatur.
          </p>
          <a href="#">View Project</a>
        </div>
        <div className="project">
          <h3>Project 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptatum, quia, quos, voluptate voluptas quas tempora
            voluptatibus quibusdam doloribus quod consequatur. Quisquam
            voluptate, quibusdam voluptas quas tempora voluptatibus quibusdam
            doloribus quod consequatur.
          </p>
          <a href="#">View Project</a>
        </div>

      </div>
    </section>
  )
}

export default Projects;
