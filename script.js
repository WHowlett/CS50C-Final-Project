'use strict';

function ProjectList(props) {
  return <div className="holder">
    <ol>
      {
        props.list.map (
          (item, index) => (
            <li key={index}>
              <h2 class="text-center">{item.title}</h2>
              <hr></hr>
              <p class="text-center">{item.description}</p>
              <hr></hr>
              <p class="text-center">{item.date}</p>
              <hr></hr>
                <img src={item.image} alt={item.title}></img>
              <br></br>
              <hr></hr>
              <div class="text-center">
                  <a class="btn btn-outline-success" href={item.link} type="button">Click here to view</a>
              </div>
              <br></br>
            </li>
          )
        )
      }
    </ol>
    </div>;
};
jQuery.getJSON(
 
  'https://cs50c-week17-server-side-23-wmhowlett.srjcethanwilde.repl.co/project',
  function(jsonFromJquery) {

    ReactDOM.render(
      <ProjectList list={jsonFromJquery} />,
      document.getElementById('myApp')
    );


const mc = new Hammer( document.getElementById('myApp') );
    mc.get("swipe").set( { direction: Hammer.DIRECTION_HORIZONTAL } );
    mc.on(
      "swipe",
      function(ev) {
        console.log(ev.direction);
        if (ev.direction == 2) {
          jQuery('.holder ol').css('left','+=300px');
        } else if (ev.direction == 4) {
          jQuery('.holder ol').css('left','-=300px');
        }
      }

    );

  }

);
    